import { Link } from 'react-router-dom';
import { ContentPage } from './ContentPage';
import { RelatedGuides } from '../components/RelatedGuides';

export function OpenToWorkPage() {
  return (
    <ContentPage
      title="How to make an #OpenToWork frame recruiters actually notice"
      description="A practical guide to building an #OpenToWork profile ring that stands out — what color to use, what to write, and the mistakes that make recruiters scroll past."
      path="/open-to-work"
    >
      <p className="lead">
        LinkedIn&rsquo;s built-in green &ldquo;Open to work&rdquo; banner works, but everyone uses
        the exact same one. A custom ring lets you say the same thing in a way that actually catches
        a recruiter&rsquo;s eye, and lets you add the one detail the default banner leaves out: what
        you&rsquo;re open <em>to</em>.
      </p>

      <h2>Why the green ring still works</h2>
      <p>
        Recruiters skim. In a list of search results or a feed of applicants, every profile photo is
        a small circle of a face against a plain background. Green is the color the platform has
        trained people to read as &ldquo;available,&rdquo; so a green ring gets understood instantly,
        even at thumbnail size and even before anyone reads a word. The point of making your own
        instead of using the default isn&rsquo;t to reinvent the signal, it&rsquo;s to keep the
        signal and add specifics.
      </p>

      <h2>What to actually write on it</h2>
      <p>
        A ring holds a few words, not a sentence, so pick the single most useful thing a recruiter
        needs to know. In order of usefulness:
      </p>
      <ul>
        <li>
          <strong>The role.</strong> &ldquo;Open to: Product Design&rdquo; or &ldquo;Hiring me:
          Backend&rdquo; tells a recruiter in one glance whether you&rsquo;re relevant. This beats a
          generic &ldquo;#OpenToWork&rdquo; every time.
        </li>
        <li>
          <strong>Availability.</strong> &ldquo;Available now&rdquo; or &ldquo;Starting Jan&rdquo;
          answers the very next question a recruiter has.
        </li>
        <li>
          <strong>The plain tag.</strong> If your headline already says the role, a simple
          &ldquo;#OpenToWork&rdquo; keeps the photo clean and lets the text below do the work.
        </li>
      </ul>
      <p>
        Avoid cramming two ideas onto one ring. If it doesn&rsquo;t read in half a second at small
        size, it&rsquo;s too much.
      </p>

      <h2>Color and contrast</h2>
      <p>
        Green reads as &ldquo;available,&rdquo; but the exact green matters. A slightly deeper,
        less neon green looks more professional and still reads correctly. Whatever you choose, keep
        the text high-contrast against both the ring and your photo, because most people will see it
        at the size of a fingernail. Test it small before you commit.
      </p>

      <h2>Mistakes that make recruiters scroll past</h2>
      <ul>
        <li><strong>Text too long.</strong> If the words wrap tightly around the whole ring, nobody reads them.</li>
        <li><strong>Low contrast.</strong> Pale text on a bright ring disappears at thumbnail size.</li>
        <li><strong>Covering your face.</strong> The ring should frame your head, not crop into it. Keep your face centered and the ring on the outer edge.</li>
        <li><strong>Leaving it up forever.</strong> The moment you&rsquo;re hired, swap it out. A stale &ldquo;open to work&rdquo; ring on someone who clearly has a job reads as neglect.</li>
      </ul>

      <h2>Does an #OpenToWork ring hurt you with recruiters?</h2>
      <p>
        You&rsquo;ll see people argue that any &ldquo;open to work&rdquo; signal looks desperate.
        The evidence doesn&rsquo;t really support that: recruiters actively filter for available
        candidates, and a clear signal makes their job easier, which makes you easier to find. What
        <em>can</em> read badly is a vague, permanent, or panicked signal. A specific ring
        (&ldquo;Open to: Product&rdquo;), in a calm professional color, kept current, does the
        opposite, it looks like someone who knows what they want. If you&rsquo;re in a senior or
        confidential search, you can keep the ring subtle, name the discipline rather than shouting
        &ldquo;hire me,&rdquo; and rely on your headline to carry the detail.
      </p>

      <h2>How long to keep it up</h2>
      <p>
        Treat the ring as a live status, not a decoration. Put it up when you start looking, refresh
        the wording if your target role shifts, and take it down the day you accept an offer. The
        fastest way to undercut a strong profile is to leave a stale &ldquo;open to work&rdquo; ring
        on a photo after you&rsquo;ve clearly started somewhere new, it&rsquo;s the first thing a
        future recruiter or manager notices, and it reads as inattention. Because a frame takes a
        minute to remake, keeping it accurate costs you nothing.
      </p>

      <h2>Make yours</h2>
      <p>
        In <Link to="/app">the Bezel editor</Link> you can pick your green, type the role, and export
        a high-resolution square PNG in about a minute, all in your browser, with nothing uploaded
        anywhere. If you&rsquo;re new to it, the <Link to="/guide">step-by-step guide</Link> covers
        the whole flow, and the <Link to="/ring-colors">ring color guide</Link> explains what other
        colors signal.
      </p>

      <RelatedGuides current="/open-to-work" />
    </ContentPage>
  );
}
