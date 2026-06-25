import { useRef, useCallback } from 'react';
import { useFrameStore } from '../store/frameStore';

interface DragOrigin {
  clientX: number;
  clientY: number;
  cropX: number;
  cropY: number;
  scale: number;
}

// Manages pointer-drag panning of the photo inside the preview circle.
// Scale is computed at drag-start from the canvas's actual rendered size,
// so it works correctly at any CSS display size (desktop or mobile).
export function useImageCrop() {
  const setCrop = useFrameStore((s) => s.setCrop);
  const drag = useRef<DragOrigin | null>(null);

  const onPointerDown = useCallback(
    (e: React.PointerEvent<HTMLCanvasElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const scale = 500 / rect.width;
      const crop = useFrameStore.getState().crop;
      drag.current = {
        clientX: e.clientX,
        clientY: e.clientY,
        cropX: crop.x,
        cropY: crop.y,
        scale,
      };
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    },
    []
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLCanvasElement>) => {
      if (!drag.current) return;
      const dx = (e.clientX - drag.current.clientX) * drag.current.scale;
      const dy = (e.clientY - drag.current.clientY) * drag.current.scale;
      setCrop({ x: drag.current.cropX + dx, y: drag.current.cropY + dy });
    },
    [setCrop]
  );

  const onPointerUp = useCallback(() => {
    drag.current = null;
  }, []);

  return { onPointerDown, onPointerMove, onPointerUp };
}
