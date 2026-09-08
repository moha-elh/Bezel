import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { EditorPage } from './pages/EditorPage';
import { GuidePage } from './pages/GuidePage';
import { OpenToWorkPage } from './pages/OpenToWorkPage';
import { PhotoTipsPage } from './pages/PhotoTipsPage';
import { RingColorsPage } from './pages/RingColorsPage';
import { AnnouncementFramesPage } from './pages/AnnouncementFramesPage';
import { SpeakerFramePage } from './pages/SpeakerFramePage';
import { AboutPage } from './pages/AboutPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app" element={<EditorPage />} />
        <Route path="/guide" element={<GuidePage />} />
        <Route path="/open-to-work" element={<OpenToWorkPage />} />
        <Route path="/linkedin-photo-tips" element={<PhotoTipsPage />} />
        <Route path="/ring-colors" element={<RingColorsPage />} />
        <Route path="/announcement-frames" element={<AnnouncementFramesPage />} />
        <Route path="/speaker-frame" element={<SpeakerFramePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
