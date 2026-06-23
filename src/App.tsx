import { useFrameStore } from './store/frameStore';
import { PhotoUploader } from './components/PhotoUploader/PhotoUploader';
import { CropControls } from './components/PhotoUploader/CropControls';
import { TemplateGallery } from './components/TemplateGallery/TemplateGallery';
import { CustomizationPanel } from './components/CustomizationPanel/CustomizationPanel';
import { PreviewCanvas } from './components/PreviewCanvas/PreviewCanvas';
import { ExportPanel } from './components/ExportPanel/ExportPanel';
import bezelLogo from './assets/Bezel.png';
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
          <span className={styles.logoSub}>Be Seen. Be Trusted.</span>
        </div>
        <ExportPanel />
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
