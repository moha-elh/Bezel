import { useFrameStore } from '../../store/frameStore';
import { Slider } from '../ui/Slider';
import styles from './PhotoUploader.module.css';

export function CropControls() {
  const zoom = useFrameStore((s) => s.crop.zoom);
  const setCrop = useFrameStore((s) => s.setCrop);

  return (
    <div className={styles.cropRow}>
      <Slider
        min={1}
        max={3}
        step={0.01}
        value={zoom}
        onChange={(v) => setCrop({ zoom: v })}
        label="Zoom"
      />
      <span className={styles.cropHint}>drag to reposition</span>
    </div>
  );
}
