import { useFrameStore } from '../../store/frameStore';
import { ColorPicker } from './ColorPicker';
import { TextControls } from './TextControls';
import { RibbonControls } from './RibbonControls';
import styles from './CustomizationPanel.module.css';

export function CustomizationPanel() {
  const ringColor = useFrameStore((s) => s.ringColor);
  const textColor = useFrameStore((s) => s.textColor);
  const setRingColor = useFrameStore((s) => s.setRingColor);
  const setTextStyle = useFrameStore((s) => s.setTextStyle);
  const fontSize = useFrameStore((s) => s.fontSize);
  const letterSpacing = useFrameStore((s) => s.letterSpacing);

  return (
    <div className={styles.panel}>
      <section className={styles.section}>
        <div className={styles.sectionLabel}>Ring</div>
        <ColorPicker
          activeRingColor={ringColor}
          activeTextColor={textColor}
          onRingColor={setRingColor}
          onTextColor={(c) => setTextStyle(fontSize, letterSpacing, c)}
        />
        <RibbonControls />
      </section>

      <section className={styles.section}>
        <div className={styles.sectionLabel}>Text</div>
        <TextControls />
      </section>
    </div>
  );
}
