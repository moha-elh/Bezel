// All coordinates in 500×500 space. scale is applied by the caller via ctx.scale().

const CX = 250;
const CY = 250;
const OUTER_R = 250;

// Reused offscreen canvas — allocated once, cleared before each drawCrescent call
const scratch = new OffscreenCanvas(500, 500);
const scratchCtx = scratch.getContext('2d')!;

export function isFullRing(arcStartAngle: number, arcEndAngle: number): boolean {
  return Math.abs(arcEndAngle - arcStartAngle) >= Math.PI * 1.99;
}

// Clips offCtx to the half-plane containing (myX, myY) relative to the
// perpendicular bisector of the segment (myX,myY)–(otherX,otherY).
function clipToHalfPlane(
  offCtx: OffscreenCanvasRenderingContext2D,
  myX: number, myY: number,
  otherX: number, otherY: number
): void {
  const midX = (myX + otherX) / 2;
  const midY = (myY + otherY) / 2;
  const toX  = myX - midX; // vector from bisector midpoint toward myTip
  const toY  = myY - midY;
  const perpX = -toY;      // perpendicular (along the bisector line)
  const perpY =  toX;
  const L = 1000;
  offCtx.beginPath();
  offCtx.moveTo(midX + perpX * L + toX * L, midY + perpY * L + toY * L);
  offCtx.lineTo(midX - perpX * L + toX * L, midY - perpY * L + toY * L);
  offCtx.lineTo(midX - perpX * L,            midY - perpY * L);
  offCtx.lineTo(midX + perpX * L,            midY + perpY * L);
  offCtx.closePath();
  offCtx.clip();
}

// Applies a linear gradient alpha mask at one tip of the crescent.
// The gradient goes from transparent (at the tip reference point) to solid
// along direction fadeAngleDeg, over (fadeStart + fadeSize) * scale pixels.
// Clipped to the tip's half-plane so it cannot bleed into the other tip.
function applyTipMask(
  offCtx: OffscreenCanvasRenderingContext2D,
  tipX: number, tipY: number,
  otherTipX: number, otherTipY: number,
  fadeStart: number,
  fadeSize: number,
  fadeAngleDeg: number,
  scale: number
): void {
  const totalDist = (fadeStart + fadeSize) * scale;
  if (totalDist <= 0) return;

  const angleRad = (fadeAngleDeg * Math.PI) / 180;
  const dx = Math.cos(angleRad);
  const dy = Math.sin(angleRad);

  const grad = offCtx.createLinearGradient(
    tipX, tipY,
    tipX + dx * totalDist,
    tipY + dy * totalDist
  );

  if (fadeSize <= 0.001) {
    // Sharp hard cut at fadeStart distance (no gradient transition)
    grad.addColorStop(0,      'rgba(0,0,0,0)');
    grad.addColorStop(0.9999, 'rgba(0,0,0,0)');
    grad.addColorStop(1,      'rgba(0,0,0,1)');
  } else if (fadeStart <= 0.001) {
    // Fade starts right at the tip edge (no gap)
    grad.addColorStop(0, 'rgba(0,0,0,0)');
    grad.addColorStop(1, 'rgba(0,0,0,1)');
  } else {
    // Gap of pure transparency before the fade zone
    const gapFrac = fadeStart / (fadeStart + fadeSize);
    grad.addColorStop(0,        'rgba(0,0,0,0)');
    grad.addColorStop(gapFrac,  'rgba(0,0,0,0)');
    grad.addColorStop(1,        'rgba(0,0,0,1)');
  }

  offCtx.save();
  clipToHalfPlane(offCtx, tipX, tipY, otherTipX, otherTipY);
  offCtx.globalCompositeOperation = 'destination-in';
  offCtx.fillStyle = grad;
  offCtx.fillRect(0, 0, 500, 500);
  offCtx.restore(); // pops clip AND resets globalCompositeOperation
}

export function drawCrescent(
  ctx: CanvasRenderingContext2D,
  ringColor: string,
  ringThickness: number,
  arcStartAngle: number,
  arcEndAngle: number,
  fadeStartA: number,   // 0–1: fraction of arc length before fade zone begins at tip A
  fadeSizeA: number,    // 0–1: width of fade zone at tip A
  fadeAngleA: number,   // degrees: direction of gradient at tip A (0=right, 90=down in canvas)
  fadeStartB: number,
  fadeSizeB: number,
  fadeAngleB: number
): void {
  if (ringThickness <= 0) return;

  const innerR = Math.max(0, OUTER_R - ringThickness);

  ctx.save();

  if (isFullRing(arcStartAngle, arcEndAngle)) {
    ctx.fillStyle = ringColor;
    ctx.beginPath();
    ctx.arc(CX, CY, OUTER_R, 0, Math.PI * 2, false);
    ctx.arc(CX, CY, innerR, 0, Math.PI * 2, true);
    ctx.fill('evenodd');
  } else {
    // Draw solid crescent to offscreen canvas, then apply per-tip linear gradient masks.
    // Using linear (not conic) gradients gives STRAIGHT-LINE boundaries at each tip.
    // The angle parameter rotates the boundary line independently for each tip.

    scratchCtx.clearRect(0, 0, 500, 500);

    // 1. Solid crescent fill
    scratchCtx.fillStyle = ringColor;
    scratchCtx.beginPath();
    scratchCtx.arc(CX, CY, OUTER_R, arcStartAngle, arcEndAngle, true);
    scratchCtx.arc(CX, CY, innerR, arcEndAngle, arcStartAngle, false);
    scratchCtx.closePath();
    scratchCtx.fill();

    // 2. Compute tip reference points and gradient scale
    const arcSpan = ((arcStartAngle - arcEndAngle) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);
    const midR  = OUTER_R - ringThickness / 2;
    const scale = midR * arcSpan; // arc length at mid-radius (same coverage as old conic at same fraction)

    const tipAx = CX + midR * Math.cos(arcEndAngle);
    const tipAy = CY + midR * Math.sin(arcEndAngle);
    const tipBx = CX + midR * Math.cos(arcStartAngle);
    const tipBy = CY + midR * Math.sin(arcStartAngle);

    // 3. Apply fade masks (each clipped to its own half-plane)
    applyTipMask(scratchCtx, tipAx, tipAy, tipBx, tipBy, fadeStartA, fadeSizeA, fadeAngleA, scale);
    applyTipMask(scratchCtx, tipBx, tipBy, tipAx, tipAy, fadeStartB, fadeSizeB, fadeAngleB, scale);

    // 4. Composite result onto main ctx (ctx.scale already applied by render.ts)
    ctx.drawImage(scratch, 0, 0);
  }

  ctx.restore();
}
