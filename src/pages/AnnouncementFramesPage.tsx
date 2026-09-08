import { Link } from 'react-router-dom';
import { ContentPage } from './ContentPage';
import { RelatedGuides } from '../components/RelatedGuides';

export function AnnouncementFramesPage() {
  return (
    <ContentPage
      title="Frames for launches and hiring: founder and recruiter announcements"
      description="How founders and recruiters use a profile-photo ring to announce a launch, a raise, or an open role — a passive, always-on signal that doesn't rely on the feed algorithm."
      path="/announcement-frames"
    >
      <p className="lead">
        A LinkedIn post announcing news lives for a day or two, then the algorithm buries it. A
        profile-photo ring is the opposite: it&rsquo;s a small, permanent announcement that shows up
        every time your name does, in every comment, DM, search result, and connection request. For
        founders and recruiters, that&rsquo;s a free, always-on channel most people ignore.
      </p>

      <h2>Why a ring beats a post for status news</h2>
      <p>
        Posts are for moments; rings are for states. If something is true for the next few weeks,
        &ldquo;we&rsquo;re hiring,&rdquo; &ldquo;we just launched,&rdquo; &ldquo;we&rsquo;re raising,&rdquo;
        a ring keeps saying it without you posting again, and reaches everyone who encounters your
        profile rather than only the fraction of followers the feed happens to serve. Pair it with a
        one-time post and the ring keeps working long after the post is gone.
      </p>

      <h2>For founders</h2>
      <ul>
        <li>
          <strong>Launch.</strong> &ldquo;We&rsquo;re live&rdquo; or &ldquo;Now in beta&rdquo; on a
          bright ring turns every interaction into a soft pitch. Use an attention color, red or
          orange, while the launch is fresh.
        </li>
        <li>
          <strong>Fundraising or milestones.</strong> &ldquo;Series A&rdquo; or &ldquo;10k
          users&rdquo; signals momentum to investors and candidates who look you up.
        </li>
        <li>
          <strong>Recruiting for your own company.</strong> &ldquo;We&rsquo;re hiring&rdquo; on the
          founder&rsquo;s photo is more credible than the same words on a company page.
        </li>
      </ul>

      <h2>For recruiters</h2>
      <ul>
        <li>
          <strong>Open roles.</strong> &ldquo;Hiring: Engineers&rdquo; puts the pitch on the face
          candidates already see when you reach out to them.
        </li>
        <li>
          <strong>Warm outreach.</strong> When you message a candidate, your framed photo answers
          &ldquo;who is this and what do they want&rdquo; before they read the message.
        </li>
        <li>
          <strong>Events and hiring days.</strong> A dated ring, &ldquo;Hiring day, Fri,&rdquo;
          creates a small sense of timing.
        </li>
      </ul>

      <h2>Keep it credible</h2>
      <p>
        The failure mode for announcement rings is looking like an ad. Keep the text to one clear
        idea, match the <Link to="/ring-colors">color to the message</Link>, and take it down the
        moment it stops being true. An expired &ldquo;we&rsquo;re hiring&rdquo; ring on a closed role
        does more harm than no ring at all. Treat it like a status you maintain, not a decoration you
        forget.
      </p>

      <h2>Make one in a minute</h2>
      <p>
        Because it&rsquo;s cheap to remake, you can update the ring as your news changes. Head to{' '}
        <Link to="/app">the editor</Link>, type your announcement, pick a color, and export a
        high-resolution PNG. New to it? The <Link to="/guide">full guide</Link> walks through every
        step.
      </p>

      <RelatedGuides current="/announcement-frames" />
    </ContentPage>
  );
}
