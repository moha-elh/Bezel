import { useFrameStore } from '../../store/frameStore';
import { Slider } from '../ui/Slider';
import { Field } from '../ui/Field';
import styles from './CustomizationPanel.module.css';

export function RibbonControls() {
  const ringThickness = useFrameStore((s) => s.ringThickness);
  const solidZone     = useFrameStore((s) => s.solidZone);
  const fadeAngle     = useFrameStore((s) => s.fadeAngle);
  const setRingThickness = useFrameStore((s) => s.setRingThickness);
  const setSolidZone     = useFrameStore((s) => s.setSolidZone);
  const setFadeAngle     = useFrameStore((s) => s.setFadeAngle);

  const fadeAmount = Math.round((1 - solidZone) * 100);

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

      <Field label="Fade">
        <Slider
          min={0}
          max={100}
          step={1}
          value={fadeAmount}
          onChange={(v) => setSolidZone(1 - v / 100)}
          valueLabel={`${fadeAmount}%`}
        />
      </Field>

      <Field label="Fade angle">
        <Slider
          min={0}
          max={360}
          step={1}
          value={Math.round(fadeAngle)}
          onChange={(v) => setFadeAngle(v)}
          valueLabel={`${Math.round(fadeAngle)}°`}
        />
      </Field>
    </div>
  );
}
