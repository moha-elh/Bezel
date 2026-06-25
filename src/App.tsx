import { useFrameStore } from './store/frameStore';
import { PhotoUploader } from './components/PhotoUploader/PhotoUploader';
import { CropControls } from './components/PhotoUploader/CropControls';
import { TemplateGallery } from './components/TemplateGallery/TemplateGallery';
import { CustomizationPanel } from './components/CustomizationPanel/CustomizationPanel';
import { PreviewCanvas } from './components/PreviewCanvas/PreviewCanvas';
import { ExportPanel } from './components/ExportPanel/ExportPanel';
import bezelLogo from './assets/Bezel full.png';
import styles from './App.module.css';

export default function App() {
  const hasPhoto = useFrameStore((s) => s.photo !== null);

  return (
    <div className={styles.app}>
      {/* ── Top bar ── */}
      <header className={styles.header}>
        <div className={styles.wordmark}>
          <img src={bezelLogo} alt="Bezel" className={styles.logoImg} />
          <span className={styles.logoName}>Bezel</span>
        </div>
        <div className={styles.headerRight}>
          <a
            href="https://ko-fi.com/D6J4222HPP"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.kofiBtn}
          >
            <img
              src="https://storage.ko-fi.com/cdn/kofi3.png?v=3"
              height="36"
              alt="Support me on Ko-fi"
              style={{ border: 0, display: 'block' }}
            />
          </a>
          <ExportPanel />
        </div>
      </header>

      {/* ── Main ── */}
      <main className={styles.main}>
        {/* Left: preview */}
        <section className={styles.preview}>
          <PreviewCanvas />
          {hasPhoto && <CropControls />}
          <TemplateGallery />
        </section>

        {/* Right: controls */}
        <aside className={styles.controls}>
          <PhotoUploader />
          <CustomizationPanel />
        </aside>
      </main>
    </div>
  );
}
