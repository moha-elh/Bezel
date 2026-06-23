import { render } from '../canvas/render';

const SIZES: Record<string, number> = {
  standard: 400,
  hd: 800,
  max: 1200,
};

export type ExportSize = keyof typeof SIZES;

export async function exportPng(
  state: Parameters<typeof render>[2],
  sizeKey: ExportSize = 'hd'
): Promise<void> {
  const px = SIZES[sizeKey];
  const scale = px / 500;

  const canvas = document.createElement('canvas');
  canvas.width = px;
  canvas.height = px;

  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Could not get 2D context for export canvas');

  render(ctx, scale, state);

  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) { reject(new Error('toBlob returned null')); return; }
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `linkedin-frame-${px}.png`;
        a.click();
        URL.revokeObjectURL(url);
        resolve();
      },
      'image/png'
    );
  });
}

export const EXPORT_OPTIONS: { key: ExportSize; label: string; dim: string }[] = [
  { key: 'standard', label: 'Standard', dim: '400 px' },
  { key: 'hd', label: 'HD', dim: '800 px' },
  { key: 'max', label: 'Max', dim: '1200 px' },
];
