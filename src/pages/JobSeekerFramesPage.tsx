import { Link } from 'react-router-dom';
import { ContentPage } from './ContentPage';
import { RelatedGuides } from '../components/RelatedGuides';

export function JobSeekerFramesPage() {
  return (
    <ContentPage
      title="Profile frames for job seekers and new grads"
      description="How job seekers and new graduates can use a LinkedIn profile ring to get noticed by recruiters — what to write, what to avoid, and how to look confident rather than desperate."
      path="/job-seeker-frames"
    >
      <p className="lead">
        When you&rsquo;re job hunting, LinkedIn is where recruiters find you, and your profile photo
        is the first thing they see in a list of search results. A well-made ring can pull a
        recruiter&rsquo;s eye to your profile and answer their first question, &ldquo;is this person
        available, and for what?&rdquo;, before they read a word. Done badly, it can make you look
        anxious. Here&rsquo;s how to land on the right side of that line.
      </p>

      <h2>Why a ring helps a job search specifically</h2>
      <p>
        Recruiters search and skim. They run a query, get a wall of near-identical circular
        headshots, and scan. Anything that breaks the pattern buys you an extra half-second of
        attention, and a colored ring is the one element that reads at that size. It also does
        something the default LinkedIn banner can&rsquo;t: it lets you name the role you want, so the
        recruiter self-selects before clicking.
      </p>

      <h2>What to put on it</h2>
      <ul>
        <li><strong>The role, if you know it.</strong> &ldquo;Open to: UX&rdquo; or &ldquo;Seeking: Data Analyst&rdquo; is far stronger than a bare &ldquo;#OpenToWork.&rdquo; It filters for the right recruiters.</li>
        <li><strong>Availability, if it&rsquo;s soon.</strong> &ldquo;Available now&rdquo; or &ldquo;Grad — June&rdquo; answers the very next question.</li>
        <li><strong>The plain tag,</strong> if your headline already carries the specifics. Keep the ring clean and let the text below do the work.</li>
      </ul>

      <h2>Advice for new grads</h2>
      <p>
        If you&rsquo;re just out of school, you&rsquo;re competing against people with experience, so
        clarity matters more than modesty. Put the field you trained in on the ring, &ldquo;New grad
        — CS,&rdquo; &ldquo;Marketing grad,&rdquo; so a recruiter who filters for junior talent finds
        you instantly. Pair it with a headline that names one or two concrete skills. A ring that
        says &ldquo;open to work&rdquo; with nothing specific behind it is a missed chance; a ring
        that says what you do turns a scan into a click.
      </p>

      <h2>Looking confident, not desperate</h2>
      <p>
        The difference is specificity and calm. &ldquo;Available now&rdquo; reads as ready.
        &ldquo;PLEASE HIRE&rdquo; reads as panic. Keep the tone matter-of-fact, use a professional
        green or blue rather than an alarm red, and keep the text short. A clean, specific ring
        signals someone who knows what they want, which is exactly the person recruiters want to
        talk to. See the <Link to="/ring-colors">color guide</Link> for which shade sends which
        message.
      </p>

      <h2>Keep it current</h2>
      <p>
        The single most important habit: take the ring down the day you accept an offer. A stale
        &ldquo;open to work&rdquo; ring on someone who clearly just started a job reads as neglect,
        and it&rsquo;s the first thing a future recruiter or manager notices. Because a frame takes a
        minute to remake, updating it costs you nothing.
      </p>

      <h2>Make yours</h2>
      <p>
        Open <Link to="/app">the editor</Link>, upload a clear headshot, pick a green or blue ring,
        and type the role you&rsquo;re after. If it&rsquo;s your first one, the{' '}
        <Link to="/guide">step-by-step guide</Link> walks through every control, and the{' '}
        <Link to="/open-to-work">#OpenToWork guide</Link> goes deeper on the message.
      </p>

      <RelatedGuides current="/job-seeker-frames" />
    </ContentPage>
  );
}
