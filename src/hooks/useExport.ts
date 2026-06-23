import { useState, useCallback } from 'react';
import { useFrameStore } from '../store/frameStore';
import { exportPng } from '../services/export/exportPng';
import type { ExportSize } from '../services/export/exportPng';

export function useExport() {
  const [loading, setLoading] = useState(false);

  const trigger = useCallback(async (sizeKey: ExportSize) => {
    setLoading(true);
    try {
      const state = useFrameStore.getState();
      await exportPng(state, sizeKey);
    } finally {
      setLoading(false);
    }
  }, []);

  return { trigger, loading };
}
