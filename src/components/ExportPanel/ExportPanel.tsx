import { useState } from 'react';
import { useExport } from '../../hooks/useExport';
import { EXPORT_OPTIONS } from '../../services/export/exportPng';
import type { ExportSize } from '../../services/export/exportPng';
import { Button } from '../ui/Button';
import styles from './ExportPanel.module.css';

export function ExportPanel() {
  const { trigger, loading } = useExport();
  const [open, setOpen] = useState(false);

  async function handleSelect(key: ExportSize) {
    setOpen(false);
    await trigger(key);
  }

  return (
    <div className={styles.wrapper}>
      <Button variant="primary" onClick={() => setOpen((v) => !v)} disabled={loading}>
        {loading ? 'Exporting…' : 'Export'}
        <span className={styles.caret}>▾</span>
      </Button>

      {open && (
        <div className={styles.dropdown}>
          <div className={styles.dropdownLabel}>PNG · transparent bg</div>
          {EXPORT_OPTIONS.map((opt) => (
            <button
              key={opt.key}
              className={styles.option}
              onClick={() => handleSelect(opt.key)}
            >
              <span>{opt.label}</span>
              <span className={styles.dim}>{opt.dim}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
