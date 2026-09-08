import { Link } from 'react-router-dom';
import { ContentPage } from './ContentPage';
import { RelatedGuides } from '../components/RelatedGuides';

export function FrameIdeasPage() {
  return (
    <ContentPage
      title="LinkedIn frame message ideas that actually work"
      description="A big, sorted list of short LinkedIn profile-ring messages — for job seekers, founders, recruiters, speakers, and personal brand — plus the rules that make a ring message land."
      path="/frame-ideas"
    >
      <p className="lead">
        The hardest part of a profile ring isn&rsquo;t the design, it&rsquo;s deciding what to
        write. A ring holds only a few words, so every one has to earn its place. Below are message
        ideas sorted by what you&rsquo;re trying to do, plus the short rules that separate a ring
        people read from one they scroll past.
      </p>

      <h2>The rules before the ideas</h2>
      <ul>
        <li><strong>One idea only.</strong> A ring is a headline, not a sentence. If it needs a comma, it&rsquo;s probably two messages fighting for one space.</li>
        <li><strong>Short enough to read at thumbnail size.</strong> Most people see your photo at the size of a coin. Two to four words is the sweet spot; a hashtag counts as one.</li>
        <li><strong>Say something true right now.</strong> A ring is a live status. If it stops being true, it starts working against you.</li>
        <li><strong>Match the color to the mood.</strong> Green reads as available, red as urgent, blue as steady. The <Link to="/ring-colors">color guide</Link> goes deeper.</li>
      </ul>

      <h2>For job seekers</h2>
      <ul>
        <li>#OpenToWork</li>
        <li>Open to: Product Design</li>
        <li>Available now</li>
        <li>Hire me — Backend</li>
        <li>Seeking: Data roles</li>
        <li>Ready to start</li>
      </ul>
      <p>
        Naming the role beats a generic tag every time, because a recruiter learns in one glance
        whether you&rsquo;re relevant. See the full <Link to="/open-to-work">#OpenToWork guide</Link>.
      </p>

      <h2>For founders and builders</h2>
      <ul>
        <li>We&rsquo;re live</li>
        <li>Now in beta</li>
        <li>Just shipped</li>
        <li>We&rsquo;re hiring</li>
        <li>Raising: Seed</li>
        <li>Building in public</li>
      </ul>
      <p>
        These turn every profile view into a soft pitch. The{' '}
        <Link to="/announcement-frames">launch and hiring guide</Link> covers timing and tone.
      </p>

      <h2>For recruiters</h2>
      <ul>
        <li>Hiring: Engineers</li>
        <li>We&rsquo;re growing</li>
        <li>Join my team</li>
        <li>Talent, DM me</li>
        <li>Hiring day Fri</li>
      </ul>

      <h2>For events and speakers</h2>
      <ul>
        <li>Speaking at #SaaStr</li>
        <li>Keynote — Mar 14</li>
        <li>See you at the booth</li>
        <li>Panelist</li>
        <li>Catch my talk</li>
      </ul>
      <p>
        Add these a couple of weeks out and take them down right after. Details in the{' '}
        <Link to="/speaker-frame">&ldquo;Speaking at…&rdquo; guide</Link>.
      </p>

      <h2>For personal brand and fun</h2>
      <ul>
        <li>Certified in AWS</li>
        <li>10 years shipping</li>
        <li>Ask me about React</li>
        <li>Coffee &amp; code</li>
        <li>#BookedAndBusy</li>
      </ul>
      <p>
        A lighter ring signals personality and makes you memorable, which is its own kind of
        advantage in a feed of identical headshots.
      </p>

      <h2>What not to put on a ring</h2>
      <p>
        A few things reliably backfire. Long phrases that wrap tightly around the whole circle are
        unreadable at the size most people see you. Two competing ideas crammed together
        (&ldquo;Open to work &amp; speaking at X&rdquo;) dilute both, pick one. Anything that
        won&rsquo;t age well, a specific date that&rsquo;s about to pass, a status you&rsquo;ll
        forget to remove, becomes a liability the moment it&rsquo;s stale. And avoid all-caps
        pleading like &ldquo;PLEASE HIRE ME&rdquo;; it reads as anxiety, where a calm, specific
        message reads as confidence. When in doubt, cut a word and lower the volume.
      </p>

      <h2>Adapt, don&rsquo;t just copy</h2>
      <p>
        These are starting points, not scripts. The best ring message is the one that&rsquo;s true
        for you right now and specific to your world, your exact role, your event&rsquo;s hashtag,
        your product&rsquo;s name. A borrowed line gets you 80% of the way; swapping in your own
        specifics is what makes someone stop scrolling. Treat the lists above as raw material and
        shape them to fit.
      </p>

      <h2>How to test a message before you commit</h2>
      <p>
        Type it into <Link to="/app">the editor</Link>, then shrink the preview until it&rsquo;s the
        size of a fingernail. If you can still read it and it still makes sense out of context,
        it works. If you squint, cut a word. A ring you can read instantly beats a clever one nobody
        can decode.
      </p>

      <RelatedGuides current="/frame-ideas" />
    </ContentPage>
  );
}
