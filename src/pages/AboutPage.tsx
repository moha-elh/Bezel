import { Link } from 'react-router-dom';
import { ContentPage } from './ContentPage';

export function AboutPage() {
  return (
    <ContentPage
      title="About Bezel"
      description="Bezel is a free, private, browser-based tool for adding a custom ring and message to your LinkedIn profile photo — no account, no upload, no catch."
      path="/about"
    >
      <p className="lead">
        Bezel is a free tool for wrapping your LinkedIn profile photo in a custom ring with your own
        message. It runs entirely in your browser, with no account, no upload, and no catch.
      </p>

      <h2>Why it exists</h2>
      <p>
        Profile photos on LinkedIn all blur together: a small circle of a face on a plain
        background. A colored ring with a few words instantly sets yours apart and lets you say
        something: that you are open to work, launching a company, speaking at an event, or just
        having fun with it. The paid tools that do this ask you to sign up, upload your photo to
        their servers, and sometimes pay. Bezel was built to do the same thing in a few seconds,
        for free, without any of that.
      </p>

      <h2>How it works</h2>
      <p>
        Everything happens on your device. When you add a photo, your browser reads it locally and
        draws it onto a canvas together with the ring and text. The image is <strong>never uploaded
        to a server, never stored, and never logged</strong>. Close the tab and it is gone. When
        you export, the finished frame is generated in your browser and downloaded straight to your
        device. See our <Link to="/privacy">Privacy Policy</Link> for the full detail.
      </p>

      <h2>What you can make</h2>
      <ul>
        <li>Any ring color and thickness</li>
        <li>Your own message wrapped around the ring, in your choice of font, size, and color</li>
        <li>Ready-made templates as a starting point</li>
        <li>A high-resolution square PNG, sized for a LinkedIn profile photo</li>
      </ul>
      <p>New here? The <Link to="/guide">step-by-step guide</Link> walks you through your first frame.</p>

      <h2>What makes it different</h2>
      <p>
        Most profile-frame tools ask for a sign-up, upload your photo to their servers, watermark
        the result, or hide the good options behind a payment. Bezel does none of that. There is no
        account, nothing you add ever leaves your device, there is no watermark, and every feature is
        free. It is a single tool that does one thing well: put a clean, readable ring and message
        around a photo and hand you back a high-resolution PNG.
      </p>

      <h2>Learn how to use it</h2>
      <p>
        If you want more than the basics, these guides go deeper: making an{' '}
        <Link to="/open-to-work">#OpenToWork frame</Link>, choosing{' '}
        <Link to="/ring-colors">ring colors</Link> for the right message,{' '}
        <Link to="/linkedin-photo-tips">profile photo best practices</Link>, using frames for{' '}
        <Link to="/announcement-frames">launches and hiring</Link>, and making a{' '}
        <Link to="/speaker-frame">&ldquo;Speaking at…&rdquo; frame</Link> for an event.
      </p>

      <h2>Contact</h2>
      <p>
        Questions, feedback, or a bug to report? Email{' '}
        <a href="mailto:mouhssineelhaouary@gmail.com">mouhssineelhaouary@gmail.com</a>. If you find
        Bezel useful, you can support it on{' '}
        <a href="https://ko-fi.com/D6J4222HPP" target="_blank" rel="noopener noreferrer">Ko-fi</a>.
      </p>
    </ContentPage>
  );
}
