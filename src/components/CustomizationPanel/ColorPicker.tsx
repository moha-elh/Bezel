import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { HexColorPicker, HexColorInput } from 'react-colorful';
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
  const [open, setOpen] = useState(false);
  const [popoverStyle, setPopoverStyle] = useState<React.CSSProperties>({});
  const wrapRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isCustom = !colors.includes(active);

  // Close popover when clicking outside
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  // Close popover on scroll or resize so fixed position doesn't go stale
  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    window.addEventListener('scroll', close, true);
    window.addEventListener('resize', close);
    return () => {
      window.removeEventListener('scroll', close, true);
      window.removeEventListener('resize', close);
    };
  }, [open]);

  // Calculate viewport-relative position for the portal popover
  useLayoutEffect(() => {
    if (!open || !buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const popoverWidth = 224; // min-width 200px + 24px padding
    const left = Math.min(rect.left, window.innerWidth - popoverWidth - 8);
    setPopoverStyle({
      position: 'fixed',
      top: rect.bottom + 8,
      left: Math.max(8, left),
    });
  }, [open]);

  // Normalize the active color for the picker (ensure valid hex)
  const pickerColor = /^#[0-9a-fA-F]{6}$/.test(active) ? active : '#000000';

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
          onClick={() => { onSelect(color); setOpen(false); }}
          aria-label={color}
        />
      ))}

      {/* Rainbow swatch — always shows rainbow, never adopts the selected color */}
      <div ref={wrapRef} style={{ display: 'inline-flex' }}>
        <button
          ref={buttonRef}
          className={styles.swatch}
          style={{
            background: 'conic-gradient(red, yellow, lime, cyan, blue, magenta, red)',
            width: size,
            height: size,
            boxShadow: isCustom ? ACTIVE_SHADOW : INACTIVE_SHADOW,
          }}
          onClick={() => setOpen((o) => !o)}
          aria-label="Custom color"
          title="Pick a custom color"
        />

        {open && createPortal(
          <div className={styles.colorPickerPopover} style={popoverStyle}>
            <HexColorPicker color={pickerColor} onChange={onSelect} />
            <div className={styles.hexInputRow}>
              <span>#</span>
              <HexColorInput
                color={pickerColor}
                onChange={onSelect}
                className={styles.hexInput}
                prefixed={false}
              />
            </div>
          </div>,
          document.body
        )}
      </div>
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
