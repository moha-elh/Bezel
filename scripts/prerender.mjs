// Post-build: give every route its own static HTML file with the correct
// <title>, description, and canonical baked into <head>, so a crawler that does
// not execute JS sees unique meta per URL instead of the homepage's (which read
// as duplicate content). The body still hydrates via the same SPA bundle.
// Vercel serves these static files directly; the /(.*) rewrite stays the
// fallback for unknown paths (→ SPA 404 page). Root "/" already has correct
// head from the build, so it is not regenerated here.
//
// Keep TITLES/DESCRIPTIONS in sync with each page's useHead()/ContentPage props.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const DIST = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist');
const SITE = 'https://trybezel.xyz';

// path -> [title, description]. Titles match what the client renders.
const ROUTES = {
  '/app': [
    'Bezel editor — make your LinkedIn frame',
    'The Bezel editor: upload a photo, add a custom ring and message, and export a high-resolution LinkedIn profile frame. Runs entirely in your browser.',
  ],
  '/guide': [
    'How to add a custom frame to your LinkedIn profile photo · Bezel',
    'Step-by-step guide to making a custom ring frame for your LinkedIn photo in Bezel — upload, crop, pick colors and text, and export a high-res PNG. Free, no account.',
  ],
  '/open-to-work': [
    'How to make an #OpenToWork frame recruiters actually notice · Bezel',
    'A practical guide to building an #OpenToWork profile ring that stands out — what color to use, what to write, and the mistakes that make recruiters scroll past.',
  ],
  '/linkedin-photo-tips': [
    'LinkedIn profile photo best practices · Bezel',
    "What actually makes a LinkedIn headshot work at thumbnail size — framing, lighting, background, and expression — plus where a custom ring frame helps and where it doesn't.",
  ],
  '/ring-colors': [
    'What ring colors signal on LinkedIn: a color guide · Bezel',
    'Every ring color sends a message before anyone reads your text. A practical guide to what green, blue, red, orange, black, and white signal on a LinkedIn profile frame.',
  ],
  '/announcement-frames': [
    'Frames for launches and hiring: founder and recruiter announcements · Bezel',
    "How founders and recruiters use a profile-photo ring to announce a launch, a raise, or an open role — a passive, always-on signal that doesn't rely on the feed algorithm.",
  ],
  '/speaker-frame': [
    "Speaking at an event? Make a 'Speaking at…' frame · Bezel",
    "Turn your LinkedIn profile photo into a mini event promo with a 'Speaking at…' ring. What to put on it, when to add and remove it, and how to make it read clearly.",
  ],
  '/frame-ideas': [
    'LinkedIn frame message ideas that actually work · Bezel',
    'A big, sorted list of short LinkedIn profile-ring messages — for job seekers, founders, recruiters, speakers, and personal brand — plus the rules that make a ring message land.',
  ],
  '/job-seeker-frames': [
    'Profile frames for job seekers and new grads · Bezel',
    'How job seekers and new graduates can use a LinkedIn profile ring to get noticed by recruiters — what to write, what to avoid, and how to look confident rather than desperate.',
  ],
  '/linkedin-photo-crop': [
    'How LinkedIn crops your profile photo · Bezel',
    "LinkedIn shows your profile photo as a circle and resizes it everywhere. Here's exactly how the crop works and how to frame your photo so nothing important gets cut off.",
  ],
  '/about': [
    'About Bezel · Bezel',
    'Bezel is a free, private, browser-based tool for adding a custom ring and message to your LinkedIn profile photo — no account, no upload, no catch.',
  ],
  '/privacy': [
    'Privacy Policy · Bezel',
    'How Bezel handles your data: photos never leave your device, no accounts, limited privacy-friendly analytics, and how advertising cookies are used.',
  ],
  '/terms': [
    'Terms of Use · Bezel',
    'The short, plain terms for using Bezel, the free browser-based LinkedIn profile frame generator.',
  ],
};

const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Swap one attribute-carrying meta/link tag's `attr` value, matched by `marker`.
function setAttr(html, marker, attr, value) {
  const re = new RegExp(`(${marker}[^>]*?${attr}=")[^"]*(")`);
  return html.replace(re, `$1${esc(value)}$2`);
}

const base = readFileSync(join(DIST, 'index.html'), 'utf8');
let count = 0;

for (const [path, [title, description]] of Object.entries(ROUTES)) {
  const canonical = SITE + path;
  let html = base;
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`);
  html = setAttr(html, 'name="description"', 'content', description);
  html = setAttr(html, 'rel="canonical"', 'href', canonical);
  html = setAttr(html, 'property="og:url"', 'content', canonical);
  html = setAttr(html, 'property="og:title"', 'content', title);
  html = setAttr(html, 'property="og:description"', 'content', description);
  html = setAttr(html, 'name="twitter:title"', 'content', title);
  html = setAttr(html, 'name="twitter:description"', 'content', description);

  const outDir = join(DIST, path);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'index.html'), html);
  count++;
}

console.log(`prerender: wrote head-tagged HTML for ${count} routes`);
