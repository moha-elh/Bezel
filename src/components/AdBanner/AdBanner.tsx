import { useEffect } from 'react';
import styles from './AdBanner.module.css';

// AdSense IDs are public by design (they ship in client-side HTML) — not secrets.
const AD_CLIENT = 'ca-pub-5044378886853005';
const AD_SLOT = '4994487550';

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

export function AdBanner() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // AdSense not loaded yet (e.g. blocked / not approved) — ignore.
    }
  }, []);

  return (
    <div className={styles.wrap}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={AD_CLIENT}
        data-ad-slot={AD_SLOT}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
