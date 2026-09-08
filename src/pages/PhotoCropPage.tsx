import { Link } from 'react-router-dom';
import { ContentPage } from './ContentPage';
import { RelatedGuides } from '../components/RelatedGuides';

export function PhotoCropPage() {
  return (
    <ContentPage
      title="How LinkedIn crops your profile photo"
      description="LinkedIn shows your profile photo as a circle and resizes it everywhere. Here's exactly how the crop works and how to frame your photo so nothing important gets cut off."
      path="/linkedin-photo-crop"
    >
      <p className="lead">
        A lot of good photos look wrong on LinkedIn for one reason: people forget it&rsquo;s going to
        be cropped into a circle and shrunk. Understanding exactly how LinkedIn treats your image
        lets you frame it so the crop works for you instead of against you, and it&rsquo;s the key to
        making a ring frame that stays fully visible.
      </p>

      <h2>LinkedIn uses a circle, not a square</h2>
      <p>
        You upload a square image, but LinkedIn displays it inside a circle almost everywhere: your
        profile header, search results, the feed, comments, and messaging. That means the four
        corners of your square are always cut off. Anything you put in a corner, part of your head,
        important text, a logo, simply won&rsquo;t be seen in most places your photo appears.
      </p>

      <h2>It&rsquo;s shown at wildly different sizes</h2>
      <p>
        The same photo renders large on your profile page and tiny, around 32 to 48 pixels, next to
        a comment or in a search list. A photo that reads well large can turn into an unreadable blob
        small. Because most of your visibility happens at the small size, you should design for the
        thumbnail first: fill the circle with your face, keep the background simple, and make sure
        anything that matters survives shrinking.
      </p>

      <h2>Where this matters for a ring frame</h2>
      <p>
        A ring frame is built precisely for the circle crop. The ring is drawn on the outer edge of
        the square image, exactly the band that sits just inside the circle after LinkedIn crops it.
        That&rsquo;s why the full ring stays visible: it lives in the visible ring of the circle, not
        the discarded corners. Two things follow from this:
      </p>
      <ul>
        <li><strong>Keep your face centered and away from the corners.</strong> The center of the square is always visible; the corners never are.</li>
        <li><strong>Let the ring do its job at the edge.</strong> Don&rsquo;t shrink your photo so far that the ring overlaps your face, and don&rsquo;t zoom in so far that the ring gets pushed off the visible circle.</li>
      </ul>

      <h2>How to frame your photo for the crop</h2>
      <ol>
        <li><strong>Start square.</strong> Use a square-ish source image so you control what fills the circle rather than letting LinkedIn choose.</li>
        <li><strong>Center your head.</strong> Put your eyes roughly on the upper-middle third and keep your face within the central circle, not near the corners.</li>
        <li><strong>Leave breathing room.</strong> A sliver of space around your head stops the crop from clipping your hair or chin.</li>
        <li><strong>Add the ring last.</strong> With the face centered, the ring sits cleanly on the edge and frames you instead of covering you.</li>
        <li><strong>Check it small.</strong> Preview at thumbnail size before you export. If your face reads and the ring text is legible, it will work everywhere LinkedIn shows it.</li>
      </ol>

      <h2>What you export</h2>
      <p>
        In <Link to="/app">the editor</Link>, Bezel gives you a high-resolution square PNG with the
        ring already positioned for the circle crop, so you can upload it straight to LinkedIn and
        trust that the whole ring stays visible. For the crop controls step by step, see the{' '}
        <Link to="/guide">full guide</Link>, and for shooting a photo that survives the shrink, the{' '}
        <Link to="/linkedin-photo-tips">photo best-practices guide</Link>.
      </p>

      <RelatedGuides current="/linkedin-photo-crop" />
    </ContentPage>
  );
}
