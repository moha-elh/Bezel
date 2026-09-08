import { Link } from 'react-router-dom';
import { ContentPage } from './ContentPage';
import { RelatedGuides } from '../components/RelatedGuides';

export function NotFoundPage() {
  return (
    <ContentPage
      title="Page not found"
      description="That page doesn't exist. Head back to Bezel to make a custom LinkedIn profile frame, or browse the guides."
      path="/404"
    >
      <p className="lead">
        We couldn&rsquo;t find that page. It may have moved, or the link might be wrong.
      </p>
      <p>
        Try the <Link to="/">home page</Link>, open <Link to="/app">the editor</Link> to make a
        frame, or read the <Link to="/guide">step-by-step guide</Link>.
      </p>

      <RelatedGuides current="/404" />
    </ContentPage>
  );
}
