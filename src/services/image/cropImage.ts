import type { CropState } from '../../store/types';

// Returns an ImageBitmap from a File (no actual crop — just decodes)
export async function fileToImageBitmap(file: File): Promise<ImageBitmap> {
  return createImageBitmap(file);
}

// Compute the draw parameters to render the photo into a 500×500 canvas,
// respecting crop.zoom and crop.x/y offsets (in 500-space).
export interface PhotoDrawParams {
  sx: number;
  sy: number;
  sw: number;
  sh: number;
}

export function computePhotoDraw(
  imgW: number,
  imgH: number,
  crop: CropState
): PhotoDrawParams {
  const canvasSize = 500;
  const radius = 250;

  // Base scale: fit the shortest side to the circle diameter
  const baseScale = (radius * 2) / Math.min(imgW, imgH);
  const scale = baseScale * crop.zoom;

  // Scaled dimensions
  const scaledW = imgW * scale;
  const scaledH = imgH * scale;

  // Center in 500-space with crop offsets
  const drawX = canvasSize / 2 - scaledW / 2 + crop.x;
  const drawY = canvasSize / 2 - scaledH / 2 + crop.y;

  return { sx: drawX, sy: drawY, sw: scaledW, sh: scaledH };
}
