// THE single source of truth for the frame's visual output.
// Called identically by live preview and the export pipeline.
// All drawing happens in 500×500 space; scale is applied once via ctx.scale().

import type { FrameState } from '../../store/types';
import { drawCrescent, isFullRing } from './drawCrescent';
import { drawArcText } from './drawArcText';
import { computePhotoDraw } from '../image/cropImage';

const CANVAS_SIZE = 500;
const CX = 250;
const CY = 250;
const OUTER_R = 250;

function drawPhoto(
  ctx: CanvasRenderingContext2D,
  photo: ImageBitmap | null,
  state: Pick<FrameState, 'crop' | 'photo'>
): void {
  // Clip to circle
  ctx.save();
  ctx.beginPath();
  ctx.arc(CX, CY, OUTER_R, 0, Math.PI * 2, false);
  ctx.clip();

  if (photo) {
    const { sx, sy, sw, sh } = computePhotoDraw(photo.width, photo.height, state.crop);
    ctx.drawImage(photo, sx, sy, sw, sh);
  } else {
    // Placeholder: subtle hatch
    ctx.fillStyle = '#eae7df';
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    drawHatch(ctx);
    ctx.fillStyle = '#a8a499';
    ctx.font = `400 15px 'Geist Mono', monospace`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('drop your photo', CX, CY - 8);
  }

  ctx.restore();
}

function drawHatch(ctx: CanvasRenderingContext2D): void {
  const step = 8;
  ctx.save();
  ctx.strokeStyle = 'rgba(28,27,25,0.07)';
  ctx.lineWidth = 1.4;
  for (let i = -CANVAS_SIZE; i < CANVAS_SIZE * 2; i += step) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i + CANVAS_SIZE, CANVAS_SIZE);
    ctx.stroke();
  }
  ctx.restore();
}

export function render(
  ctx: CanvasRenderingContext2D,
  scale: number,
  state: Pick<
    FrameState,
    | 'photo'
    | 'crop'
    | 'ringColor'
    | 'ringThickness'
    | 'arcStartAngle'
    | 'arcEndAngle'
    | 'solidZone'
    | 'fadeAngle'
    | 'text'
    | 'fontSize'
    | 'letterSpacing'
    | 'textColor'
    | 'fontFamily'
  >
): void {
  const outputSize = CANVAS_SIZE * scale;

  ctx.clearRect(0, 0, outputSize, outputSize);
  ctx.save();
  ctx.scale(scale, scale);

  drawPhoto(ctx, state.photo, state);

  drawCrescent(
    ctx,
    state.ringColor,
    state.ringThickness,
    state.arcStartAngle,
    state.arcEndAngle,
    state.solidZone,
    state.fadeAngle
  );

  if (state.text.trim() && !isFullRing(state.arcStartAngle, state.arcEndAngle)) {
    drawArcText(ctx, state.text, {
      fontSize: state.fontSize,
      letterSpacing: state.letterSpacing,
      color: state.textColor,
      fontFamily: state.fontFamily,
      arcStartAngle: state.arcStartAngle,
      arcEndAngle: state.arcEndAngle,
      ringThickness: state.ringThickness,
    });
  }

  ctx.restore();
}
