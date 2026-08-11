import { Link } from 'react-router-dom';
import { ContentPage } from './ContentPage';

export function TermsPage() {
  return (
    <ContentPage title="Terms of Use">
      <p className="meta">Last updated: 11 August 2026</p>

      <p className="lead">
        By using Bezel you agree to these terms. They are intentionally short and plain.
      </p>

      <h2>The service</h2>
      <p>
        Bezel is a free browser-based tool that lets you add a decorative ring and text to a photo
        and download the result. It is provided at no cost, with no account required.
      </p>

      <h2>Your content</h2>
      <p>
        You keep all rights to the photos you use and the frames you create. Because everything runs
        in your browser, we never receive or store your images. You are solely responsible for the
        photos you upload. You must have the right to use them, and you must not create frames that
        are unlawful, hateful, harassing, or that infringe someone else&rsquo;s rights.
      </p>

      <h2>Acceptable use</h2>
      <ul>
        <li>Do not use Bezel for anything illegal or to harm others.</li>
        <li>Do not attempt to disrupt, overload, or reverse-engineer the service.</li>
        <li>Do not misrepresent your affiliation with any person or organization.</li>
      </ul>

      <h2>No warranty</h2>
      <p>
        Bezel is provided &ldquo;as is,&rdquo; without warranties of any kind. We do not guarantee
        that it will always be available, error-free, or suitable for a particular purpose. To the
        maximum extent permitted by law, we are not liable for any damages arising from your use of
        the service.
      </p>

      <h2>Advertising</h2>
      <p>
        Some pages display third-party ads through Google AdSense. Your interaction with those ads
        is governed by the advertisers&rsquo; and Google&rsquo;s terms. See our{' '}
        <Link to="/privacy">Privacy Policy</Link> for how advertising cookies are used.
      </p>

      <h2>Changes</h2>
      <p>We may update these terms; continued use after a change means you accept the revised terms.</p>

      <h2>Contact</h2>
      <p>Questions? Email <a href="mailto:mouhssineelhaouary@gmail.com">mouhssineelhaouary@gmail.com</a>.</p>
    </ContentPage>
  );
}
