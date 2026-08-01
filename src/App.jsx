import { useEffect, useMemo, useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Materials from './components/Materials.jsx';
import Partners from './components/Partners.jsx';
import Points from './components/Points.jsx';
import Participate from './components/Participate.jsx';
import Media from './components/Media.jsx';
import Footer from './components/Footer.jsx';
import data from './data.jsx';

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => setScrolled(window.scrollY > 10);

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = navOpen ? 'hidden' : '';
  }, [navOpen]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('.reveal, .reveal-stagger').forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const bodyClass = useMemo(() => (navOpen ? 'nav-open' : ''), [navOpen]);

  return (
    <div className={bodyClass}>
      <div className="trilha" aria-hidden="true">
        <div className="trilha-fill" id="trilhaFill" style={{ height: '0%' }} />
      </div>
      <Header
        navOpen={navOpen}
        onToggleNav={() => setNavOpen((value) => !value)}
        scrolled={scrolled}
        menuItems={data.navLinks}
      />
      <main id="topo">
        <Hero stats={data.heroStats} badges={data.badges} />
        <About cards={data.aboutCards} />
        <Materials materials={data.materials} />
        <Partners partners={data.partners} />
        <Points points={data.points} />
        <Media actions={data.actions} />
        <Participate />
      </main>
      <Footer navLinks={data.navLinks} />
    </div>
  );
}

export default App;
