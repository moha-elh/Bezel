import { useEffect, useState } from 'react';
import { useFrameStore } from '../../store/frameStore';
import { Slider } from '../ui/Slider';
import { Field } from '../ui/Field';
import styles from './CustomizationPanel.module.css';

export function RibbonControls() {
  const ringThickness = useFrameStore((s) => s.ringThickness);
  const arcStartAngle = useFrameStore((s) => s.arcStartAngle);
  const arcEndAngle   = useFrameStore((s) => s.arcEndAngle);

  const setRingThickness = useFrameStore((s) => s.setRingThickness);
  const setArc           = useFrameStore((s) => s.setArc);

  const [draft, setDraft] = useState(String(ringThickness));

  useEffect(() => { setDraft(String(ringThickness)); }, [ringThickness]);

  function commitDraft() {
    const n = Math.max(10, Math.min(150, Number(draft) || 10));
    setRingThickness(n);
    setDraft(String(n));
  }

  const arcSpanDeg = Math.round((arcStartAngle - arcEndAngle) * (180 / Math.PI));

  function handleLength(spanDeg: number) {
    const halfSpan = (spanDeg / 2) * (Math.PI / 180);
    const mid = (arcStartAngle + arcEndAngle) / 2;
    setArc(mid + halfSpan, mid - halfSpan);
  }

  return (
    <div className={styles.block}>
      <Field label="Thickness">
        <div className={styles.sliderRow}>
          <Slider min={10} max={150} step={1} value={ringThickness} onChange={setRingThickness} />
          <div className={styles.numInputWrap}>
            <input
              type="number"
              className={styles.numInput}
              min={10}
              max={150}
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onBlur={commitDraft}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  commitDraft();
                  (e.target as HTMLInputElement).blur();
                }
              }}
            />
            <span className={styles.numUnit}>px</span>
          </div>
        </div>
      </Field>

      <Field label="Length">
        <Slider
          min={120}
          max={340}
          step={1}
          value={arcSpanDeg}
          onChange={handleLength}
          valueLabel={`${arcSpanDeg}°`}
        />
      </Field>
    </div>
  );
}
