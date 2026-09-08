import { type ReactNode, useEffect } from 'react';
import { Link } from 'react-router-dom';
import bezelLogo from '../assets/Bezel full browser.png';
import { useHead } from '../hooks/useHead';
import styles from './ContentPage.module.css';

// Shared shell for all long-form content pages (privacy, terms, about, guide).
export function ContentPage({
  title,
  description,
  path,
  children,
}: {
  title: string;
  description: string;
  path: string;
  children: ReactNode;
}) {
  useHead({ title: `${title} · Bezel`, description, path });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.mark}>
          <img src={bezelLogo} alt="Bezel" className={styles.markImg} />
          <span className={styles.markName}>Bezel</span>
        </Link>
        <Link to="/app" className={styles.cta}>Open the tool ↗</Link>
      </nav>

      <main className={styles.prose}>
        <h1>{title}</h1>
        {children}
      </main>

      <footer className={styles.footer}>
        <span>© {new Date().getFullYear()} Bezel</span>
        <span className={styles.footerLinks}>
          <Link to="/guide">Guide</Link>
          <Link to="/about">About</Link>
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
        </span>
      </footer>
    </div>
  );
}
