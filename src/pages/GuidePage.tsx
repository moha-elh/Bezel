import { Link } from 'react-router-dom';
import { ContentPage } from './ContentPage';
import { RelatedGuides } from '../components/RelatedGuides';

export function GuidePage() {
  return (
    <ContentPage
      title="How to add a custom frame to your LinkedIn profile photo"
      description="Step-by-step guide to making a custom ring frame for your LinkedIn photo in Bezel — upload, crop, pick colors and text, and export a high-res PNG. Free, no account."
      path="/guide"
    >
      <p className="lead">
        A profile-photo frame is the fastest way to make your LinkedIn stand out in a feed of
        near-identical headshots. This guide walks through making one in Bezel from start to
        finish, with no design skills, no account, and nothing ever leaving your browser.
      </p>

      <h2>Why put a frame around your LinkedIn photo?</h2>
      <p>
        LinkedIn photos are small and they all look the same: a circle crop of a person against a
        neutral background. A colored ring with a short message breaks that pattern. Recruiters use
        them to signal <strong>#OpenToWork</strong>, founders use them to announce a launch, and
        plenty of people use them just to add a bit of personality. Because the ring sits on the
        very edge of the circle, it reads instantly even at thumbnail size, which is exactly the
        moment you are competing for attention.
      </p>

      <h2>Step by step</h2>
      <ol>
        <li>
          <strong>Open the tool.</strong> Head to <Link to="/app">the Bezel editor</Link>. It loads
          instantly. There is no sign-up, no email, and no paywall.
        </li>
        <li>
          <strong>Upload your photo.</strong> Drag in a square-ish headshot, or click to browse.
          Your image is read locally by your browser and rendered on a canvas; it is never uploaded
          to a server. A clear, well-lit face shot that fills most of the frame works best.
        </li>
        <li>
          <strong>Position the crop.</strong> LinkedIn shows profile photos as a circle, so keep
          your face centered. Use the crop controls to zoom and nudge until your head sits neatly
          inside the ring.
        </li>
        <li>
          <strong>Pick a template or ring color.</strong> Start from one of the presets, then adjust
          the ring color to match your message. The color does a lot of the emotional work, so read
          the tips below before you settle on one.
        </li>
        <li>
          <strong>Add your text.</strong> Type a short message that wraps around the ring. Keep it
          punchy: <em>#OpenToWork</em>, <em>Speaking at&nbsp;…</em>, <em>We&rsquo;re hiring</em>.
          You can change the font, size, letter spacing, and text color.
        </li>
        <li>
          <strong>Fine-tune the ring.</strong> Adjust thickness and the arc so the text fits cleanly
          and the ring frames your face rather than covering it.
        </li>
        <li>
          <strong>Export.</strong> Click Export and pick a resolution. Bezel downloads a
          high-resolution square PNG. The ring, text, and arc are drawn as vectors, so they stay
          crisp at any size.
        </li>
        <li>
          <strong>Set it on LinkedIn.</strong> Go to your LinkedIn profile, click your photo,
          choose <em>Edit</em> or upload a new photo, and select the PNG you just downloaded.
          LinkedIn will crop it to a circle, which is exactly what your frame was built for.
        </li>
      </ol>

      <h2>Choosing a message that works</h2>
      <ul>
        <li><strong>Say one thing.</strong> A ring has room for a few words, not a sentence. Pick the single idea you want people to notice.</li>
        <li><strong>Match the color to the intent.</strong> Green and blue read as calm and professional; red and orange grab attention and signal urgency (a launch, a hiring push); black and white stay understated.</li>
        <li><strong>Keep contrast high.</strong> The text should be readable against both the ring color and your photo. Test it at small size, because that is how most people will see it.</li>
        <li><strong>Refresh it.</strong> Frames are cheap to remake. Update yours when your status changes: job found, event over, launch shipped.</li>
      </ul>

      <h2>Common questions</h2>
      <h3>Does the frame work on mobile?</h3>
      <p>Yes. Bezel runs in any modern browser on a phone, tablet, or computer, and LinkedIn shows your framed photo the same everywhere.</p>
      <h3>Will LinkedIn crop my frame off?</h3>
      <p>No. Because the ring is drawn on the outer edge of a square image that LinkedIn crops to a circle, the full ring stays visible. Just keep your face away from the very corners.</p>
      <h3>Is it really free?</h3>
      <p>Yes, completely. No watermark, no trial, no premium tier. Make as many frames as you like.</p>

      <p style={{ marginTop: '40px' }}>
        Ready? <Link to="/app">Open the tool</Link> and make your first frame in about a minute.
      </p>

      <RelatedGuides current="/guide" />
    </ContentPage>
  );
}
