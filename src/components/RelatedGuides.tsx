import { Link } from 'react-router-dom';
import { ARTICLES } from '../data/articles';

// Cross-links every other guide so no article is an orphan. Pass the current
// page's path to exclude it from its own list.
export function RelatedGuides({ current }: { current: string }) {
  const others = ARTICLES.filter((a) => a.path !== current);
  return (
    <>
      <h2>Related guides</h2>
      <ul>
        {others.map((a) => (
          <li key={a.path}>
            <Link to={a.path}>{a.title}</Link> — {a.blurb}
          </li>
        ))}
      </ul>
    </>
  );
}
