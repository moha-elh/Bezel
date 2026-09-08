import { useEffect } from 'react';

const SITE = 'https://trybezel.xyz';

// Upsert a single <head> element matching `selector`, creating it under <head>
// if missing, then apply `attrs`. Returns the element.
function upsert(selector: string, tag: string, attrs: Record<string, string>) {
  let el = document.head.querySelector<HTMLElement>(selector);
  if (!el) {
    el = document.createElement(tag);
    document.head.appendChild(el);
  }
  for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
  return el;
}

export interface HeadOptions {
  title: string;
  description: string;
  /** Route path, e.g. "/guide". Canonical becomes SITE + path. */
  path: string;
}

// Sets a unique document title, meta description, and canonical link per route.
// SPA routes otherwise inherit index.html's homepage meta, which reads to
// crawlers as duplicate content. Runs on mount and whenever the values change.
export function useHead({ title, description, path }: HeadOptions) {
  useEffect(() => {
    document.title = title;
    upsert('meta[name="description"]', 'meta', { name: 'description', content: description });
    upsert('link[rel="canonical"]', 'link', { rel: 'canonical', href: SITE + path });
  }, [title, description, path]);
}
