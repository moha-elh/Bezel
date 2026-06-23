import { useEffect, useRef, useState } from 'react';
import { useFrameStore } from '../../store/frameStore';
import { Field } from '../ui/Field';
import styles from './CustomizationPanel.module.css';

const FONT_OPTIONS = [
  { value: "'Geist', sans-serif", label: 'Geist Sans' },
  { value: "'Geist Mono', monospace", label: 'Geist Mono' },
  { value: "'Instrument Serif', serif", label: 'Instrument Serif' },
];

function FontDropdown({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const activeLabel = FONT_OPTIONS.find((o) => o.value === value)?.label ?? value;

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

  return (
    <div ref={wrapRef} className={styles.dropdownWrap}>
      <button
        className={styles.select}
        style={{ textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        onClick={() => setOpen((o) => !o)}
        type="button"
      >
        <span>{activeLabel}</span>
        <span style={{ fontSize: 10, opacity: 0.5, marginLeft: 6 }}>{open ? '▴' : '▾'}</span>
      </button>
      {open && (
        <div className={styles.dropdown}>
          {FONT_OPTIONS.map((o) => (
            <button
              key={o.value}
              type="button"
              className={`${styles.dropdownItem} ${value === o.value ? styles.dropdownItemActive : ''}`}
              style={{ fontFamily: o.value }}
              onClick={() => { onChange(o.value); setOpen(false); }}
            >
              {o.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function TextControls() {
  const text = useFrameStore((s) => s.text);
  const fontFamily = useFrameStore((s) => s.fontFamily);
  const fontSize = useFrameStore((s) => s.fontSize);
  const setText = useFrameStore((s) => s.setText);
  const setFontFamily = useFrameStore((s) => s.setFontFamily);
  const setTextStyle = useFrameStore((s) => s.setTextStyle);
  const textColor = useFrameStore((s) => s.textColor);
  const letterSpacing = useFrameStore((s) => s.letterSpacing);

  return (
    <div className={styles.block}>
      <Field label="Ribbon text">
        <input
          type="text"
          className={styles.textInput}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="#OPENTOWORK"
        />
      </Field>

      <div className={styles.row}>
        <Field label="Font">
          <FontDropdown value={fontFamily} onChange={setFontFamily} />
        </Field>

        <Field label="Size">
          <input
            type="number"
            className={styles.numInput}
            min={8}
            max={80}
            value={fontSize}
            onChange={(e) =>
              setTextStyle(Number(e.target.value), letterSpacing, textColor)
            }
          />
        </Field>
      </div>
    </div>
  );
}
