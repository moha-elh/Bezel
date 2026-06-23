import { useFrameStore } from '../../store/frameStore';
import { Slider } from '../ui/Slider';
import { Field } from '../ui/Field';
import styles from './CustomizationPanel.module.css';

export function RibbonControls() {
  const ringThickness = useFrameStore((s) => s.ringThickness);
  const fadeStartA    = useFrameStore((s) => s.fadeStartA);
  const fadeSizeA     = useFrameStore((s) => s.fadeSizeA);
  const fadeAngleA    = useFrameStore((s) => s.fadeAngleA);
  const fadeStartB    = useFrameStore((s) => s.fadeStartB);
  const fadeSizeB     = useFrameStore((s) => s.fadeSizeB);
  const fadeAngleB    = useFrameStore((s) => s.fadeAngleB);

  const setRingThickness = useFrameStore((s) => s.setRingThickness);
  const setFadeStartA    = useFrameStore((s) => s.setFadeStartA);
  const setFadeSizeA     = useFrameStore((s) => s.setFadeSizeA);
  const setFadeAngleA    = useFrameStore((s) => s.setFadeAngleA);
  const setFadeStartB    = useFrameStore((s) => s.setFadeStartB);
  const setFadeSizeB     = useFrameStore((s) => s.setFadeSizeB);
  const setFadeAngleB    = useFrameStore((s) => s.setFadeAngleB);

  const pct = (v: number) => `${Math.round(v * 100)}%`;

  return (
    <div className={styles.block}>
      <Field label="Thickness">
        <div className={styles.sliderRow}>
          <Slider
            min={10}
            max={150}
            step={1}
            value={ringThickness}
            onChange={setRingThickness}
          />
          <input
            type="number"
            className={styles.numInput}
            style={{ width: 58, flexShrink: 0 }}
            min={10}
            max={150}
            value={ringThickness}
            onChange={(e) => {
              const v = Math.max(10, Math.min(150, Number(e.target.value)));
              setRingThickness(v);
            }}
          />
        </div>
      </Field>

      <Field label="Fade 1 start">
        <Slider
          min={0}
          max={100}
          step={1}
          value={Math.round(fadeStartA * 100)}
          onChange={(v) => setFadeStartA(v / 100)}
          valueLabel={pct(fadeStartA)}
        />
      </Field>

      <Field label="Fade 1 width">
        <Slider
          min={0}
          max={100}
          step={1}
          value={Math.round(fadeSizeA * 100)}
          onChange={(v) => setFadeSizeA(v / 100)}
          valueLabel={pct(fadeSizeA)}
        />
      </Field>

      <Field label="Fade 1 angle">
        <Slider
          min={0}
          max={360}
          step={1}
          value={Math.round(fadeAngleA)}
          onChange={(v) => setFadeAngleA(v)}
          valueLabel={`${Math.round(fadeAngleA)}°`}
        />
      </Field>

      <Field label="Fade 2 start">
        <Slider
          min={0}
          max={100}
          step={1}
          value={Math.round(fadeStartB * 100)}
          onChange={(v) => setFadeStartB(v / 100)}
          valueLabel={pct(fadeStartB)}
        />
      </Field>

      <Field label="Fade 2 width">
        <Slider
          min={0}
          max={100}
          step={1}
          value={Math.round(fadeSizeB * 100)}
          onChange={(v) => setFadeSizeB(v / 100)}
          valueLabel={pct(fadeSizeB)}
        />
      </Field>

      <Field label="Fade 2 angle">
        <Slider
          min={0}
          max={360}
          step={1}
          value={Math.round(fadeAngleB)}
          onChange={(v) => setFadeAngleB(v)}
          valueLabel={`${Math.round(fadeAngleB)}°`}
        />
      </Field>
    </div>
  );
}
