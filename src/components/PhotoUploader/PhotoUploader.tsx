import { useRef } from 'react';
import { useFrameStore } from '../../store/frameStore';
import { fileToImageBitmap } from '../../services/image/cropImage';
import styles from './PhotoUploader.module.css';

export function PhotoUploader() {
  const photo = useFrameStore((s) => s.photo);
  const setPhoto = useFrameStore((s) => s.setPhoto);
  const clearPhoto = useFrameStore((s) => s.clearPhoto);
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const bitmap = await fileToImageBitmap(file);
    setPhoto(bitmap);
    // reset so same file can be re-selected
    if (inputRef.current) inputRef.current.value = '';
  }

  return (
    <div className={styles.section}>
      <div className={styles.sectionLabel}>Photo</div>
      <label className={styles.dropzone}>
        <span className={styles.arrow}>↑</span>
        <span>{photo ? 'Replace photo' : 'Upload a photo'}</span>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          onChange={handleFile}
          className={styles.hidden}
        />
      </label>
      {photo && (
        <button className={styles.clearBtn} onClick={clearPhoto}>
          Remove photo
        </button>
      )}
    </div>
  );
}
