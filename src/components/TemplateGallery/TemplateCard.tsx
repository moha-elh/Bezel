import { useEffect, useRef } from 'react';
import type { Template } from '../../data/templates';
import { render } from '../../services/canvas/render';
import styles from './TemplateGallery.module.css';

interface TemplateCardProps {
  template: Template;
  active: boolean;
  onSelect: () => void;
}

const THUMB_SIZE = 56;

export function TemplateCard({ template, active, onSelect }: TemplateCardProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    render(ctx, THUMB_SIZE / 500, {
      photo: null,
      crop: { x: 0, y: 0, zoom: 1 },
      ringColor: template.ringColor,
      ringThickness: template.ringThickness,
      arcStartAngle: template.arcStartAngle,
      arcEndAngle: template.arcEndAngle,
      fadeStartA: template.fadeStartA,
      fadeSizeA:  template.fadeSizeA,
      fadeAngleA: template.fadeAngleA,
      fadeStartB: template.fadeStartB,
      fadeSizeB:  template.fadeSizeB,
      fadeAngleB: template.fadeAngleB,
      text: template.text,
      fontSize: template.fontSize,
      letterSpacing: template.letterSpacing,
      textColor: template.textColor,
      fontFamily: template.fontFamily,
    });
  }, [template]);

  return (
    <button
      className={`${styles.card} ${active ? styles.cardActive : ''}`}
      onClick={onSelect}
      title={template.name}
    >
      <canvas
        ref={canvasRef}
        width={THUMB_SIZE}
        height={THUMB_SIZE}
        className={styles.thumb}
      />
    </button>
  );
}
