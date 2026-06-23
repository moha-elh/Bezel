import { useEffect, useRef } from 'react';
import { useFrameStore } from '../../store/frameStore';
import { render } from '../../services/canvas/render';
import { useImageCrop } from '../../hooks/useImageCrop';
import styles from './PreviewCanvas.module.css';

const DISPLAY_SIZE = 432; // px on screen

export function PreviewCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Subscribe to all state slices needed for rendering
  const photo = useFrameStore((s) => s.photo);
  const crop = useFrameStore((s) => s.crop);
  const ringColor = useFrameStore((s) => s.ringColor);
  const ringThickness = useFrameStore((s) => s.ringThickness);
  const arcStartAngle = useFrameStore((s) => s.arcStartAngle);
  const arcEndAngle = useFrameStore((s) => s.arcEndAngle);
  const solidZone = useFrameStore((s) => s.solidZone);
  const fadeAngle = useFrameStore((s) => s.fadeAngle);
  const text = useFrameStore((s) => s.text);
  const fontSize = useFrameStore((s) => s.fontSize);
  const letterSpacing = useFrameStore((s) => s.letterSpacing);
  const textColor = useFrameStore((s) => s.textColor);
  const fontFamily = useFrameStore((s) => s.fontFamily);

  const { onPointerDown, onPointerMove, onPointerUp } = useImageCrop(DISPLAY_SIZE);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    render(ctx, 1, {
      photo,
      crop,
      ringColor,
      ringThickness,
      arcStartAngle,
      arcEndAngle,
      solidZone,
      fadeAngle,
      text,
      fontSize,
      letterSpacing,
      textColor,
      fontFamily,
    });
  }, [
    photo, crop, ringColor, ringThickness,
    arcStartAngle, arcEndAngle, solidZone, fadeAngle, text, fontSize,
    letterSpacing, textColor, fontFamily,
  ]);

  return (
    <div className={styles.stage}>
      <div className={styles.board}>
        <canvas
          ref={canvasRef}
          width={500}
          height={500}
          className={styles.canvas}
          style={{
            width: DISPLAY_SIZE,
            height: DISPLAY_SIZE,
            cursor: photo ? 'grab' : 'default',
          }}
          onPointerDown={photo ? onPointerDown : undefined}
          onPointerMove={photo ? onPointerMove : undefined}
          onPointerUp={photo ? onPointerUp : undefined}
          onPointerLeave={photo ? onPointerUp : undefined}
        />
      </div>
    </div>
  );
}
