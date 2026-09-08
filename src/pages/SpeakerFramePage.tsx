import { Link } from 'react-router-dom';
import { ContentPage } from './ContentPage';
import { RelatedGuides } from '../components/RelatedGuides';

export function SpeakerFramePage() {
  return (
    <ContentPage
      title="Speaking at an event? Make a 'Speaking at…' frame"
      description="Turn your LinkedIn profile photo into a mini event promo with a 'Speaking at…' ring. What to put on it, when to add and remove it, and how to make it read clearly."
      path="/speaker-frame"
    >
      <p className="lead">
        If you&rsquo;re giving a talk, running a workshop, or sitting on a panel, your profile photo
        is prime real estate you&rsquo;re probably wasting. A &ldquo;Speaking at&nbsp;…&rdquo; ring
        turns every interaction in the weeks before the event into a small, automatic promo, no
        extra posts required.
      </p>

      <h2>Why it works before an event</h2>
      <p>
        In the run-up to a conference, you naturally interact with more people: organizers, fellow
        speakers, attendees, people you&rsquo;re inviting. Every one of those touchpoints shows your
        photo. A ring that names the event does three things at once: it tells people you&rsquo;ll be
        there, it lends you the event&rsquo;s credibility, and it quietly invites them to come see
        you. It&rsquo;s the cheapest speaker promotion there is.
      </p>

      <h2>What to put on the ring</h2>
      <ul>
        <li>
          <strong>The event name or hashtag.</strong> &ldquo;Speaking at #SaaStr&rdquo; is instantly
          legible to anyone in that world. Use the event&rsquo;s own hashtag if it has one.
        </li>
        <li>
          <strong>Your role, if it fits.</strong> &ldquo;Keynote&rdquo; or &ldquo;Panel&rdquo; adds
          weight, but only if the ring still reads cleanly. One idea beats two cramped ones.
        </li>
        <li>
          <strong>The date, sometimes.</strong> A date adds urgency but eats space. Include it only
          for a near-term event where timing is the point.
        </li>
      </ul>

      <h2>Color and readability</h2>
      <p>
        If the event has a known brand color, matching it makes the ring feel official and helps
        insiders recognize it at a glance. Otherwise a confident blue or a warm accent works. As
        always, the text has to survive thumbnail size, so keep it short and high-contrast. See the{' '}
        <Link to="/ring-colors">color guide</Link> if you&rsquo;re unsure which way to go.
      </p>

      <h2>Timing: add it, then take it down</h2>
      <p>
        Put the ring up a couple of weeks before the event, while you&rsquo;re actively talking to
        people about it, and take it down within a day or two afterward. A &ldquo;Speaking
        at&nbsp;…&rdquo; ring for an event that already happened is the clearest sign of a profile on
        autopilot. Because a frame takes a minute to remake, swapping it in and out costs you almost
        nothing.
      </p>

      <h2>Make yours</h2>
      <p>
        Open <Link to="/app">the editor</Link>, type the event, pick a color, and export a
        high-resolution PNG, all in your browser. If it&rsquo;s your first frame, start with the{' '}
        <Link to="/guide">step-by-step guide</Link>.
      </p>

      <RelatedGuides current="/speaker-frame" />
    </ContentPage>
  );
}
