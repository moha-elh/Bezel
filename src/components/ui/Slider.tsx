import styles from './Slider.module.css';

interface SliderProps {
  min: number;
  max: number;
  step?: number;
  value: number;
  onChange: (value: number) => void;
  label?: string;
  valueLabel?: string;
}

export function Slider({ min, max, step = 1, value, onChange, label, valueLabel }: SliderProps) {
  return (
    <div className={styles.wrapper}>
      {label && <span className={styles.label}>{label}</span>}
      <input
        type="range"
        className={styles.input}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
      {valueLabel && <span className={styles.value}>{valueLabel}</span>}
    </div>
  );
}
