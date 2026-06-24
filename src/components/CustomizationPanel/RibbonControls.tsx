import { useFrameStore } from '../../store/frameStore';
import { Slider } from '../ui/Slider';
import { Field } from '../ui/Field';
import styles from './CustomizationPanel.module.css';

export function RibbonControls() {
  const ringThickness = useFrameStore((s) => s.ringThickness);
  const fadeSizeA     = useFrameStore((s) => s.fadeSizeA);
  const fadeSizeB     = useFrameStore((s) => s.fadeSizeB);

  const setRingThickness = useFrameStore((s) => s.setRingThickness);
  const setFadeSizeA     = useFrameStore((s) => s.setFadeSizeA);
  const setFadeSizeB     = useFrameStore((s) => s.setFadeSizeB);

  const fadeDisplay = Math.round((fadeSizeA + fadeSizeB) / 2 * 100);

  return (
    <div className={styles.block}>
      <Field label="Thickness">
        <div className={styles.sliderRow}>
          <Slider min={10} max={150} step={1} value={ringThickness} onChange={setRingThickness} />
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
          max={50}
          step={1}
          value={fadeDisplay}
          onChange={(v) => { setFadeSizeA(v / 100); setFadeSizeB(v / 100); }}
          valueLabel={`${fadeDisplay}%`}
        />
      </Field>
    </div>
  );
}
