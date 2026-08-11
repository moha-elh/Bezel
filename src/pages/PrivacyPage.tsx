import { Link } from 'react-router-dom';
import { ContentPage } from './ContentPage';

export function PrivacyPage() {
  return (
    <ContentPage title="Privacy Policy">
      <p className="meta">Last updated: 11 August 2026</p>

      <p className="lead">
        Bezel is designed to be private by default. This policy explains what we do, and mostly do
        not, collect when you use the site.
      </p>

      <h2>Your photos never leave your device</h2>
      <p>
        Bezel runs entirely in your browser. When you add a photo, it is read locally and drawn onto
        a canvas on your screen. Your image is <strong>never uploaded to a server, never stored, and
        never logged</strong>. When you export a frame, the file is generated on your device and
        downloaded directly to it. Closing the tab removes everything.
      </p>

      <h2>Information we collect</h2>
      <p>We do not ask you to create an account, and we do not collect names, emails, or your photos. We use limited, standard analytics to understand how the site is used:</p>
      <ul>
        <li><strong>Vercel Analytics and Speed Insights</strong>: aggregate, privacy-friendly measurements of page views and performance. They do not identify you personally.</li>
        <li><strong>Google AdSense</strong>: we display ads on some pages (never on the editor tool itself). See below.</li>
      </ul>

      <h2>Advertising and cookies</h2>
      <p>
        We use Google AdSense to show ads on content pages. Third-party vendors, including Google,
        use cookies to serve ads based on your prior visits to this and other websites. Google&rsquo;s
        use of advertising cookies enables it and its partners to serve ads to you based on your
        visits to this site and/or other sites on the Internet.
      </p>
      <ul>
        <li>You may opt out of personalized advertising by visiting{' '}
          <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>.</li>
        <li>You can opt out of some third-party vendors&rsquo; use of cookies at{' '}
          <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">aboutads.info/choices</a>.</li>
        <li>More detail is in Google&rsquo;s{' '}
          <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">privacy &amp; terms</a>.</li>
      </ul>

      <h2>Your rights</h2>
      <p>
        Because we do not store personal data or your photos, there is nothing about you for us to
        access, change, or delete. You can control advertising cookies through the links above or in
        your browser settings.
      </p>

      <h2>Changes</h2>
      <p>We may update this policy from time to time; the date at the top reflects the latest revision.</p>

      <h2>Contact</h2>
      <p>
        Questions about privacy? Email{' '}
        <a href="mailto:mouhssineelhaouary@gmail.com">mouhssineelhaouary@gmail.com</a>. See also our{' '}
        <Link to="/terms">Terms of Use</Link>.
      </p>
    </ContentPage>
  );
}
