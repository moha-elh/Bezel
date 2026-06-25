import { useEffect, useRef } from 'react';
import { useFrameStore } from '../../store/frameStore';
import { render } from '../../services/canvas/render';
import { useImageCrop } from '../../hooks/useImageCrop';
import styles from './PreviewCanvas.module.css';

export function PreviewCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const photo = useFrameStore((s) => s.photo);
  const crop = useFrameStore((s) => s.crop);
  const ringColor = useFrameStore((s) => s.ringColor);
  const ringThickness = useFrameStore((s) => s.ringThickness);
  const arcStartAngle = useFrameStore((s) => s.arcStartAngle);
  const arcEndAngle = useFrameStore((s) => s.arcEndAngle);
  const fadeStartA = useFrameStore((s) => s.fadeStartA);
  const fadeSizeA  = useFrameStore((s) => s.fadeSizeA);
  const fadeAngleA = useFrameStore((s) => s.fadeAngleA);
  const fadeStartB = useFrameStore((s) => s.fadeStartB);
  const fadeSizeB  = useFrameStore((s) => s.fadeSizeB);
  const fadeAngleB = useFrameStore((s) => s.fadeAngleB);
  const text = useFrameStore((s) => s.text);
  const fontSize = useFrameStore((s) => s.fontSize);
  const letterSpacing = useFrameStore((s) => s.letterSpacing);
  const textColor = useFrameStore((s) => s.textColor);
  const fontFamily = useFrameStore((s) => s.fontFamily);

  const { onPointerDown, onPointerMove, onPointerUp } = useImageCrop();

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
      fadeStartA,
      fadeSizeA,
      fadeAngleA,
      fadeStartB,
      fadeSizeB,
      fadeAngleB,
      text,
      fontSize,
      letterSpacing,
      textColor,
      fontFamily,
    });
  }, [
    photo, crop, ringColor, ringThickness,
    arcStartAngle, arcEndAngle, fadeStartA, fadeSizeA, fadeAngleA, fadeStartB, fadeSizeB, fadeAngleB, text, fontSize,
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
          style={{ cursor: photo ? 'grab' : 'default' }}
          onPointerDown={photo ? onPointerDown : undefined}
          onPointerMove={photo ? onPointerMove : undefined}
          onPointerUp={photo ? onPointerUp : undefined}
          onPointerLeave={photo ? onPointerUp : undefined}
        />
      </div>
    </div>
  );
}
