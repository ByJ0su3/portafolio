import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ControlsBar } from './ControlsBar';
import { ThemeLangProvider } from './ThemeLangProvider';

export default function App() {
  return (
    <ThemeLangProvider>
      <div className="min-h-screen bg-[#030712] text-white font-sans antialiased selection:bg-purple-500/30 selection:text-purple-200">
        <ControlsBar />
        <Hero />
        <AboutMe />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ThemeLangProvider>
  );
}

