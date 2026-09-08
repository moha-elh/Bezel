import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import bezelLogo from '../assets/Bezel full browser.png';
import { ARTICLES } from '../data/articles';
import styles from './NotFoundPage.module.css';

// Standalone 404. Deliberately does NOT set a canonical (a soft-404 should not
// claim to be a real page) — it only sets the title.
export function NotFoundPage() {
  useEffect(() => {
    document.title = 'Page not found · Bezel';
  }, []);

  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <Link to="/">
          <img src={bezelLogo} alt="Bezel" className={styles.markImg} />
          <span className={styles.markName}>Bezel</span>
        </Link>
      </nav>

      <main className={styles.main}>
        <p className={styles.code}>404</p>
        <h1 className={styles.title}>This page went missing</h1>
        <p className={styles.sub}>
          The link may be broken or the page may have moved. Let&rsquo;s get you back to making
          frames.
        </p>

        <div className={styles.btns}>
          <Link to="/app" className={styles.btnSolid}>Open the tool ↗</Link>
          <Link to="/" className={styles.btnGhost}>Back to home</Link>
        </div>

        <div className={styles.guidesWrap}>
          <p className={styles.guidesLabel}>Or jump into a guide</p>
          <div className={styles.guidesGrid}>
            {ARTICLES.slice(0, 6).map((a) => (
              <Link key={a.path} to={a.path} className={styles.guideCard}>
                <span className={styles.guideTitle}>{a.title}</span>
                <span className={styles.guideBlurb}>{a.blurb}</span>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
