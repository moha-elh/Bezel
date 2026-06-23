// All coordinates in 500×500 space. scale is applied by the caller via ctx.scale().

const CX = 250;
const CY = 250;
const OUTER_R = 250;

export function isFullRing(arcStartAngle: number, arcEndAngle: number): boolean {
  return Math.abs(arcEndAngle - arcStartAngle) >= Math.PI * 1.99;
}

function hexToRgba(hex: string, alpha: number): string {
  let h = hex.replace('#', '');
  if (h.length === 3) h = h[0]+h[0]+h[1]+h[1]+h[2]+h[2];
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

export function drawCrescent(
  ctx: CanvasRenderingContext2D,
  ringColor: string,
  ringThickness: number,
  arcStartAngle: number,
  arcEndAngle: number,
  solidZone: number,
  fadeAngle: number   // degrees 0–360: angle on the circle where the solid peak sits (115 = bottom-arc midpoint)
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
    // solidZone (0–1): fraction of the arc that is fully opaque.
    // fadeAngle (degrees): absolute angle on the circle where the opaque peak sits.
    //   e.g. 115 = bottom-arc midpoint (symmetric), 30 = push toward right tip.
    //
    // Conic gradient sweeps CW from arcEndAngle:
    //   [0 … solidStart]          fade transparent → solid
    //   [solidStart … solidEnd]   solid
    //   [solidEnd … arcEnd]       fade solid → transparent
    //   [arcEnd … 1]              transparent

    const arcSpan = ((arcStartAngle - arcEndAngle) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);
    const full = 2 * Math.PI;

    const sz = Math.max(0, Math.min(1, solidZone));
    const fadeWidth = arcSpan * (1 - sz) / 2;

    const fadeAngleRad = (fadeAngle * Math.PI) / 180;
    const peakCW = ((fadeAngleRad - arcEndAngle) % full + full) % full;
    const shift = peakCW - arcSpan / 2;

    const solidStart = Math.max(0, Math.min(arcSpan, fadeWidth + shift)) / full;
    const solidEnd   = Math.max(0, Math.min(arcSpan, arcSpan - fadeWidth + shift)) / full;
    const arcEnd     = arcSpan / full;

    const solid = hexToRgba(ringColor, 1);
    const trans  = hexToRgba(ringColor, 0);

    const grad = ctx.createConicGradient(arcEndAngle, CX, CY);
    grad.addColorStop(0,                                   trans);
    grad.addColorStop(Math.min(solidStart, arcEnd),        solid);
    grad.addColorStop(Math.max(solidEnd,   solidStart),    solid);
    grad.addColorStop(arcEnd,                              trans);
    grad.addColorStop(1,                                   trans);

    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(CX, CY, OUTER_R, arcStartAngle, arcEndAngle, true);
    ctx.arc(CX, CY, innerR, arcEndAngle, arcStartAngle, false);
    ctx.closePath();
    ctx.fill();
  }

  ctx.restore();
}
