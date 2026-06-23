import { useRef } from 'react';
import styles from './CustomizationPanel.module.css';

const RING_COLORS = [
  '#457032',
  '#1f6f8c',
  '#3a63b5',
  '#8344CC',
  '#c2531f',
  '#b5283b',
  '#d39b1e',
  '#2b2a28',
];

const TEXT_COLORS = ['#ffffff', '#1c1b19', '#f7e7a6'];

const ACTIVE_SHADOW = `0 0 0 2px var(--color-surface), 0 0 0 3px var(--color-text-primary)`;
const INACTIVE_SHADOW = `0 0 0 1px rgba(28,27,25,0.18)`;

interface SwatchesWithPickerProps {
  colors: string[];
  active: string;
  onSelect: (color: string) => void;
  size?: number;
}

function SwatchesWithPicker({ colors, active, onSelect, size = 24 }: SwatchesWithPickerProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const isCustom = !colors.includes(active);

  return (
    <div className={styles.swatches}>
      {colors.map((color) => (
        <button
          key={color}
          className={styles.swatch}
          style={{
            background: color,
            width: size,
            height: size,
            boxShadow: active === color ? ACTIVE_SHADOW : INACTIVE_SHADOW,
          }}
          onClick={() => onSelect(color)}
          aria-label={color}
        />
      ))}

      {/* Wrapper positions the hidden input to the right of the swatch button
          so the browser opens the color picker beside it */}
      <span style={{ position: 'relative', display: 'inline-flex' }}>
        <input
          ref={inputRef}
          type="color"
          value={isCustom ? active : '#000000'}
          onChange={(e) => onSelect(e.target.value)}
          style={{
            position: 'absolute',
            left: '100%',
            top: 0,
            width: 0,
            height: 0,
            opacity: 0,
            pointerEvents: 'none',
            border: 'none',
            padding: 0,
          }}
        />
        <button
          className={styles.swatch}
          style={{
            background: isCustom
              ? active
              : 'conic-gradient(red, yellow, lime, cyan, blue, magenta, red)',
            width: size,
            height: size,
            boxShadow: isCustom ? ACTIVE_SHADOW : INACTIVE_SHADOW,
          }}
          onClick={() => inputRef.current?.click()}
          aria-label="Custom color"
          title="Pick a custom color"
        />
      </span>
    </div>
  );
}

interface ColorPickerProps {
  activeRingColor: string;
  activeTextColor: string;
  onRingColor: (hex: string) => void;
  onTextColor: (hex: string) => void;
}

export function ColorPicker({
  activeRingColor,
  activeTextColor,
  onRingColor,
  onTextColor,
}: ColorPickerProps) {
  return (
    <div className={styles.colorBlock}>
      <div className={styles.fieldLabel}>Ring color</div>
      <SwatchesWithPicker
        colors={RING_COLORS}
        active={activeRingColor}
        onSelect={onRingColor}
        size={26}
      />
      <div className={styles.fieldLabel} style={{ marginTop: 14 }}>
        Text color
      </div>
      <SwatchesWithPicker
        colors={TEXT_COLORS}
        active={activeTextColor}
        onSelect={onTextColor}
        size={24}
      />
    </div>
  );
}
