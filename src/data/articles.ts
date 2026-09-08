// Single source of truth for the long-form guide articles: used by the router,
// the footer/nav links, the "Related guides" block, and the sitemap check.
export interface Article {
  path: string;
  title: string;
  blurb: string;
}

export const ARTICLES: Article[] = [
  {
    path: '/guide',
    title: 'How to add a custom frame to your LinkedIn photo',
    blurb: 'The full walkthrough, from uploading your photo to exporting a print-crisp PNG.',
  },
  {
    path: '/open-to-work',
    title: 'Make an #OpenToWork frame recruiters actually notice',
    blurb: 'Why the green ring works, what to write on it, and how to stand out in a search.',
  },
  {
    path: '/linkedin-photo-tips',
    title: 'LinkedIn profile photo best practices',
    blurb: 'What makes a headshot work at thumbnail size — and where a frame helps.',
  },
  {
    path: '/ring-colors',
    title: 'What ring colors signal on LinkedIn',
    blurb: 'A practical color guide for matching your ring to the message you want to send.',
  },
  {
    path: '/announcement-frames',
    title: 'Frames for launches and hiring',
    blurb: 'How founders and recruiters use a profile ring to announce news without a post.',
  },
  {
    path: '/speaker-frame',
    title: "Make a 'Speaking at…' frame for an event",
    blurb: 'Turn your profile photo into a mini event promo in the run-up to a talk.',
  },
  {
    path: '/frame-ideas',
    title: 'LinkedIn frame message ideas that actually work',
    blurb: 'A big list of short, punchy ring messages sorted by goal — steal one or adapt it.',
  },
  {
    path: '/job-seeker-frames',
    title: 'Profile frames for job seekers and new grads',
    blurb: 'How to use a ring to get noticed in a crowded market, without looking desperate.',
  },
  {
    path: '/linkedin-photo-crop',
    title: 'How LinkedIn crops your profile photo',
    blurb: 'The circle crop explained — and how to frame your photo so nothing important is cut.',
  },
];
