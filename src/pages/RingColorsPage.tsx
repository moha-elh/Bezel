import { Link } from 'react-router-dom';
import { ContentPage } from './ContentPage';
import { RelatedGuides } from '../components/RelatedGuides';

export function RingColorsPage() {
  return (
    <ContentPage
      title="What ring colors signal on LinkedIn: a color guide"
      description="Every ring color sends a message before anyone reads your text. A practical guide to what green, blue, red, orange, black, and white signal on a LinkedIn profile frame."
      path="/ring-colors"
    >
      <p className="lead">
        A ring color does emotional work before anyone reads a single word. At thumbnail size, color
        is the first thing the eye processes, so choosing the right one is half of making a frame
        that lands. Here&rsquo;s what each common color tends to signal and when to reach for it.
      </p>

      <h2>Green — available, growth, go</h2>
      <p>
        Green is LinkedIn&rsquo;s established &ldquo;open to work&rdquo; color, so people read it as
        availability almost automatically. Beyond job-seeking it reads as growth and a green light.
        Use it for <Link to="/open-to-work">open-to-work rings</Link>, &ldquo;available for
        freelance,&rdquo; or launch-of-something-positive messages. A slightly deeper green looks
        more professional than a neon one.
      </p>

      <h2>Blue — trust, calm, professional</h2>
      <p>
        Blue is the safe, credible default. It reads as steady and professional and sits naturally
        against LinkedIn&rsquo;s own blue palette. Reach for it when you want to stand out from the
        plain circle without shouting: a subtle personal-brand ring, a conference attendee tag, or a
        &ldquo;certified in&nbsp;…&rdquo; message. It rarely feels out of place in any industry.
      </p>

      <h2>Red — urgency, attention, now</h2>
      <p>
        Red demands attention and signals urgency, which makes it powerful and easy to overuse. It
        works for a genuine now-or-never message, a launch this week, a limited hiring push, an event
        happening today. Because it&rsquo;s loud, keep the text short and make sure the urgency is
        real; a red ring on a routine message reads as trying too hard.
      </p>

      <h2>Orange — energy, friendliness, creativity</h2>
      <p>
        Orange splits the difference between red&rsquo;s urgency and something warmer and more
        approachable. It reads as energetic and creative without the alarm of red. Good for creators,
        marketers, community builders, and anyone whose brand is more playful than corporate.
      </p>

      <h2>Black and white — understated, premium, confident</h2>
      <p>
        A thin black or white ring says the opposite of a bright color: it&rsquo;s restrained and
        confident, letting the shape do the work rather than the hue. It suits people in traditional
        or luxury fields, or anyone who wants the &ldquo;this person clearly means it&rdquo; look of
        an understated design. White reads best over a darker photo; black over a lighter one.
      </p>

      <h2>The rule that beats all of these</h2>
      <p>
        Whatever color you pick, contrast wins. The ring has to separate from your photo, and the
        text has to separate from the ring, at the size of a fingernail. A &ldquo;correct&rdquo;
        color that blends into your background helps no one. Pick the color for the message, then
        adjust brightness until it reads clearly small. See the{' '}
        <Link to="/linkedin-photo-tips">photo tips</Link> for how thumbnail size changes everything.
      </p>

      <p style={{ marginTop: '32px' }}>
        Ready to try a few? <Link to="/app">Open the editor</Link>, the ring color is a single
        control, so it&rsquo;s quick to compare options.
      </p>

      <RelatedGuides current="/ring-colors" />
    </ContentPage>
  );
}
