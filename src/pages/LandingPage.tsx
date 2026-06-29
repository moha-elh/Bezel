import { useEffect, useRef, useState, type ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import bezelLogo from '../assets/Bezel full browser.png';
import f1 from '../assets/frames/frame-1.png';
import f2 from '../assets/frames/frame-2.png';
import f3 from '../assets/frames/frame-3.png';
import f4 from '../assets/frames/frame-4.png';
import f5 from '../assets/frames/frame-5.png';
import f6 from '../assets/frames/frame-6.png';
import styles from './LandingPage.module.css';

// Real exported frames. The first four are featured in the hero.
const FRAMES = [
  { src: f4, caption: '#BOOKEDANDBUSY' },
  { src: f3, caption: '#MARRIED' },
  { src: f5, caption: "#I'MPREGNANT" },
  { src: f6, caption: '#CHINA' },
  { src: f1, caption: '#LOOKINGFORWC' },
  { src: f2, caption: '#DRINKPRIME' },
];

// Smooth-scroll to an in-page section (scoped to the landing, no URL hash).
function scrollToId(id: string) {
  return () => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── Scroll-reveal wrapper ─────────────────────────────────────────────────────
function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`${styles.reveal} ${shown ? styles.inView : ''} ${className}`}>
      {children}
    </div>
  );
}

// ── FAQ ───────────────────────────────────────────────────────────────────────
const FAQ_ITEMS = [
  {
    q: 'Is Bezel really free?',
    a: "Yes. It's 100% free, forever. No watermark, no trial, no premium tier. Make as many frames as you want.",
  },
  {
    q: 'Do you store or upload my photo?',
    a: 'Never. Bezel runs entirely in your browser. Your photo is read locally and rendered on your screen. It is never uploaded to a server, never stored, and never logged.',
  },
  {
    q: 'Do I need an account?',
    a: "No. There's no sign-up, no email, and no login. Open the tool and start making your frame right away.",
  },
  {
    q: 'What do I get when I download?',
    a: 'A high-resolution square PNG, sized for a LinkedIn profile photo. Just upload it like any other picture.',
  },
  {
    q: 'Can I use my own colors and text?',
    a: 'Yes. Pick any ring color, write your own message, and adjust the font, size, and thickness. The presets are just starting points.',
  },
  {
    q: 'Does it work on mobile?',
    a: "Yes. Bezel works in any modern browser on your phone, tablet, or computer. There's no app to install.",
  },
];

function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className={styles.faqList}>
      {FAQ_ITEMS.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ''}`}>
            <button
              className={styles.faqQuestion}
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span>{item.q}</span>
              <span className={styles.faqChevron}>↓</span>
            </button>
            <div className={styles.faqAnswerWrap} data-open={isOpen}>
              <p className={styles.faqAnswer}>{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// Corner node positions for the hero floating frames.
const NODE_POS = [
  { side: 'left', style: { left: '3%', top: '15%' } },
  { side: 'right', style: { right: '3%', top: '17%' } },
  { side: 'left', style: { left: '3%', top: '64%' } },
  { side: 'right', style: { right: '3%', top: '64%' } },
] as const;

// ── Landing page ──────────────────────────────────────────────────────────────
export function LandingPage() {
  const navigate = useNavigate();
  const goToApp = () => navigate('/app');

  return (
    <div className={styles.page}>

      {/* ── Shell (hero + marquee) ── */}
      <div className={styles.shell}>
        <div className={styles.shellDots} aria-hidden="true" />
        <svg
          className={styles.shellLines}
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <g fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" vectorEffect="non-scaling-stroke">
            <path d="M13 31 C 30 40, 41 50, 50 55" vectorEffect="non-scaling-stroke" />
            <path d="M84 33 C 67 41, 59 50, 50 55" vectorEffect="non-scaling-stroke" />
            <path d="M11 61 C 28 62, 41 62, 50 63" vectorEffect="non-scaling-stroke" />
            <path d="M86 61 C 71 62, 59 63, 50 63" vectorEffect="non-scaling-stroke" />
          </g>
          <g stroke="rgba(255,255,255,0.16)" strokeWidth="1" vectorEffect="non-scaling-stroke">
            <line x1="50" y1="58" x2="50" y2="80" vectorEffect="non-scaling-stroke" />
            <line x1="47.5" y1="60" x2="47.5" y2="78" vectorEffect="non-scaling-stroke" />
            <line x1="52.5" y1="60" x2="52.5" y2="78" vectorEffect="non-scaling-stroke" />
          </g>
        </svg>

        {/* ── Nav ── */}
        <nav className={styles.nav}>
          <button onClick={scrollToTop} className={styles.navMark} aria-label="Bezel home">
            <img src={bezelLogo} alt="Bezel" className={styles.navLogoImg} />
            <span className={styles.navLogoName}>Bezel</span>
          </button>
          <div className={styles.navPill}>
            <button onClick={scrollToTop} className={`${styles.navLink} ${styles.navLinkActive}`}>Home</button>
            <button onClick={scrollToId('frames')} className={styles.navLink}>Frames</button>
            <button onClick={scrollToId('faq')} className={styles.navLink}>FAQ</button>
            <span className={styles.navChip}>
              100% free <span className={styles.navChipDot}>✦</span>
            </span>
          </div>
          <button className={styles.navCreate} onClick={goToApp}>
            Open the tool <span>↗</span>
          </button>
        </nav>

        {/* ── Hero ── */}
        <header id="top" className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroH1}>
              Tell LinkedIn <span className={styles.heroAccent}>exactly</span>{' '}
              <span className={styles.heroMuted}>how you feel</span>
            </h1>
            <p className={styles.heroSub}>
              Wrap your profile photo in a custom ring with any message you want. Serious,
              sarcastic, or completely unhinged. No account, and nothing ever leaves your browser.
            </p>

            <div className={styles.heroBtns}>
              <button className={styles.btnSolid} onClick={goToApp}>
                Open the tool <span>↗</span>
              </button>
              <button onClick={scrollToId('frames')} className={styles.btnGhost}>See frames</button>
            </div>
          </div>

          {/* Floating real-frame nodes */}
          <div className={styles.heroNodes}>
            {FRAMES.slice(0, 4).map((frame, i) => {
              const pos = NODE_POS[i];
              return (
                <div
                  key={frame.caption}
                  className={`${styles.node} ${pos.side === 'right' ? styles.nodeRight : ''}`}
                  style={{ ...pos.style, animationDelay: `${-i * 1.6}s` }}
                >
                  <button
                    className={styles.nodeFrame}
                    onClick={goToApp}
                    aria-label={`Make a frame like ${frame.caption}`}
                  >
                    <img src={frame.src} alt={frame.caption} className={styles.frameImg} />
                  </button>
                  <div className={styles.nodeMeta}>
                    <span className={styles.nodeDot} />
                    <span className={styles.nodeCaption}>{frame.caption}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </header>

        {/* ── Scroll cue ── */}
        <div className={styles.scrollCue}>
          <button onClick={scrollToId('frames')} className={styles.scrollCueBtn} aria-label="See frames">↓</button>
          <span className={styles.scrollCueText}>See what people make</span>
        </div>

        {/* ── Marquee wall ── */}
        <div className={styles.marquee}>
          <div className={styles.marqueeTrack}>
            {['Loved by job-seekers', 'founders', 'speakers', 'recruiters', 'creators', 'chaos-bringers',
              'Loved by job-seekers', 'founders', 'speakers', 'recruiters', 'creators', 'chaos-bringers'
            ].map((word, i) => (
              <span key={i} className={styles.marqueeGroup}>
                <span className={styles.marqueeWord}>{word}</span>
                <span className={styles.marqueeStar}>✳</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Privacy band (before the frames) ── */}
      <section className={styles.privacyBand}>
        <Reveal className={styles.privacyBandInner}>
          <p className={styles.eyebrow}>Private by default</p>
          <h2 className={styles.privacyTitle}>Your photos stay 100% under your control</h2>
          <p className={styles.privacyText}>
            Bezel runs entirely in your browser. Nothing you upload is ever sent to a server, saved,
            or stored anywhere. Close the tab and it's gone for good.
          </p>
        </Reveal>
      </section>

      {/* ── Frames showcase ── */}
      <section id="frames" className={styles.frames}>
        <Reveal className={styles.framesHead}>
          <p className={styles.eyebrow}>Examples</p>
          <h2 className={styles.h2}>What people actually make</h2>
          <p className={styles.sectionSub}>Tap any frame to start your own.</p>
        </Reveal>
        <Reveal className={styles.framesGrid}>
          {FRAMES.map((frame) => (
            <button
              key={frame.caption}
              className={styles.frameCard}
              onClick={goToApp}
              title={frame.caption}
            >
              <span className={styles.frameCardImg}>
                <img src={frame.src} alt={frame.caption} className={styles.frameImg} />
              </span>
              <span className={styles.frameCardCaption}>{frame.caption}</span>
            </button>
          ))}
        </Reveal>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className={styles.faq}>
        <Reveal className={styles.faqHead}>
          <p className={styles.eyebrow}>Questions</p>
          <h2 className={styles.h2}>Everything you might ask</h2>
        </Reveal>
        <Reveal>
          <FaqAccordion />
        </Reveal>
      </section>

      {/* ── CTA band ── */}
      <section className={styles.cta}>
        <div className={styles.ctaGlow} aria-hidden="true" />
        <Reveal className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Your profile is boring. Fix it.</h2>
          <p className={styles.ctaSub}>Free, instant, and private. No signup, no watermark.</p>
          <button className={styles.btnSolid} onClick={goToApp}>
            Open the tool <span>↗</span>
          </button>
        </Reveal>
      </section>

      {/* ── Footer ── */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerLogo}>
            <img src={bezelLogo} alt="Bezel" className={styles.footerLogoImg} />
            <span className={styles.footerName}>Bezel</span>
          </div>
          <div className={styles.footerRight}>
            <a
              href="https://ko-fi.com/D6J4222HPP"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerLink}
            >
              Support on Ko-fi ♥
            </a>
            <span className={styles.footerMeta}>100% free and runs entirely in your browser</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
