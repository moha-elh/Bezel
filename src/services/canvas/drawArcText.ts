// All coordinates in 500×500 space.
// Text walks anticlockwise (θ decreases) so it reads L→R along the bottom arc.
// At angle θ, character rotation = θ − π/2
//   → at θ=π/2 (6 o'clock): rotation=0, text is horizontal ✓

const CX = 250;
const CY = 250;
const OUTER_R = 250;

export interface ArcTextOptions {
  fontSize: number;
  letterSpacing: number;
  color: string;
  fontFamily: string;
  arcStartAngle: number;
  arcEndAngle: number;
  ringThickness: number;
}

export function drawArcText(
  ctx: CanvasRenderingContext2D,
  text: string,
  opts: ArcTextOptions
): void {
  if (!text.trim()) return;

  // Place text at the visual midpoint of the ribbon
  const innerR = Math.max(0, OUTER_R - opts.ringThickness);
  const textRadius = (OUTER_R + innerR) / 2;

  // CCW arc span: (start - end + 2π) mod 2π
  const arcSpan = ((opts.arcStartAngle - opts.arcEndAngle) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);
  // Midpoint along CCW path from arcStartAngle
  const arcMidAngle = opts.arcStartAngle - arcSpan / 2;

  ctx.save();
  ctx.font = `700 ${opts.fontSize}px ${opts.fontFamily}`;
  ctx.fillStyle = opts.color;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  const chars = text.split('');
  const charWidths = chars.map((ch) => ctx.measureText(ch).width);
  const spacing = opts.letterSpacing;
  const totalWidth =
    charWidths.reduce((s, w) => s + w, 0) + spacing * Math.max(0, chars.length - 1);

  const totalAngle = totalWidth / textRadius;

  // Start placing from the left-most character (highest θ, walking CCW = decreasing θ)
  let θ = arcMidAngle + totalAngle / 2;

  for (let i = 0; i < chars.length; i++) {
    const halfCharAngle = charWidths[i] / 2 / textRadius;
    θ -= halfCharAngle;

    ctx.save();
    ctx.translate(CX + textRadius * Math.cos(θ), CY + textRadius * Math.sin(θ));
    ctx.rotate(θ - Math.PI / 2);
    ctx.fillText(chars[i], 0, 0);
    ctx.restore();

    θ -= halfCharAngle + spacing / textRadius;
  }

  ctx.restore();
}
