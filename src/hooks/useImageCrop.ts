import { useRef, useCallback } from 'react';
import { useFrameStore } from '../store/frameStore';

interface DragOrigin {
  clientX: number;
  clientY: number;
  cropX: number;
  cropY: number;
}

// Manages pointer-drag panning of the photo inside the preview circle.
// Scale factor converts from screen px to 500-space px.
export function useImageCrop(canvasDisplaySize: number) {
  const setCrop = useFrameStore((s) => s.setCrop);
  const drag = useRef<DragOrigin | null>(null);
  const scale = 500 / canvasDisplaySize;

  const onPointerDown = useCallback(
    (e: React.PointerEvent<HTMLCanvasElement>) => {
      const crop = useFrameStore.getState().crop;
      drag.current = {
        clientX: e.clientX,
        clientY: e.clientY,
        cropX: crop.x,
        cropY: crop.y,
      };
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    },
    []
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLCanvasElement>) => {
      if (!drag.current) return;
      const dx = (e.clientX - drag.current.clientX) * scale;
      const dy = (e.clientY - drag.current.clientY) * scale;
      setCrop({ x: drag.current.cropX + dx, y: drag.current.cropY + dy });
    },
    [scale, setCrop]
  );

  const onPointerUp = useCallback(() => {
    drag.current = null;
  }, []);

  return { onPointerDown, onPointerMove, onPointerUp };
}
