import { Link } from 'react-router-dom';
import { ContentPage } from './ContentPage';
import { RelatedGuides } from '../components/RelatedGuides';

export function PhotoTipsPage() {
  return (
    <ContentPage
      title="LinkedIn profile photo best practices"
      description="What actually makes a LinkedIn headshot work at thumbnail size — framing, lighting, background, and expression — plus where a custom ring frame helps and where it doesn't."
      path="/linkedin-photo-tips"
    >
      <p className="lead">
        Your LinkedIn photo is usually seen at about the size of a coin: in search results, in the
        feed, next to a comment. A photo that looks great full-screen can turn into an unreadable
        smudge at that size. Here&rsquo;s how to shoot and crop one that still works small, and where
        a frame fits in.
      </p>

      <h2>Fill the frame with your face</h2>
      <p>
        The single most common mistake is standing too far back. At thumbnail size, a full-body shot
        becomes a dot. Your head and the top of your shoulders should fill most of the circle. If
        your existing photo is zoomed out, re-crop it tight before anything else, that one change
        does more than any filter.
      </p>

      <h2>Light your face, not the room</h2>
      <p>
        Soft, even light on your face reads as approachable and professional. A window to the side
        during the day is free and hard to beat. Avoid strong backlight (a bright window behind you
        turns you into a silhouette) and overhead light that throws shadows under your eyes. You
        don&rsquo;t need equipment; you need to face the light.
      </p>

      <h2>Keep the background simple</h2>
      <p>
        A plain or gently blurred background keeps all the attention on you and stops the photo from
        looking busy at small size. A clean wall, some out-of-focus greenery, or a simple interior
        all work. Busy backgrounds compete with your face and make the thumbnail read as clutter.
      </p>

      <h2>Expression: look like someone people want to work with</h2>
      <p>
        A genuine, slightly-smiling expression with eyes toward the camera tests better than a
        stern, formal one for almost everyone who isn&rsquo;t in a very traditional field. You are
        trying to look like a competent human someone would enjoy a meeting with. A real smile,
        even a small one, does that.
      </p>

      <h2>Where a frame helps</h2>
      <p>
        A frame doesn&rsquo;t fix a bad photo, but on a good one it adds something the photo
        can&rsquo;t: a message. A colored ring is the one element that reads instantly at thumbnail
        size, before anyone processes your face, so it&rsquo;s the right place to put a status,
        &ldquo;open to work,&rdquo; &ldquo;we&rsquo;re hiring,&rdquo; &ldquo;speaking at&nbsp;…&rdquo;.
        It also breaks the sea-of-identical-circles pattern and makes your entry in a list catch the
        eye a beat longer.
      </p>
      <p>
        A frame works against you if it&rsquo;s loud for no reason, covers your face, or contradicts
        your field&rsquo;s norms. Use it when you have something to say; drop it when you don&rsquo;t.
      </p>

      <h2>A quick checklist</h2>
      <ul>
        <li>Face fills most of the circle</li>
        <li>Soft light on your face, no harsh backlight</li>
        <li>Simple, uncluttered background</li>
        <li>Warm, natural expression, eyes to camera</li>
        <li>Readable at thumbnail size, check it small</li>
        <li>A frame only when it adds a real message</li>
      </ul>

      <p style={{ marginTop: '32px' }}>
        Got a good headshot? <Link to="/app">Add a ring in the editor</Link>, or read the{' '}
        <Link to="/guide">full frame guide</Link> first.
      </p>

      <RelatedGuides current="/linkedin-photo-tips" />
    </ContentPage>
  );
}
