import { useState, useEffect, useRef } from 'react';
import Footer from './Footer';
import Hero from './HomePageComponents/Hero';
import Challenges from './HomePageComponents/Challenges';
import Structure from './HomePageComponents/Structure';
import System from './HomePageComponents/System';
import Roles from './HomePageComponents/Roles';
import Walkthrough from './HomePageComponents/Walkthrough';
import FAQ from './HomePageComponents/FAQ';
import Connect from './HomePageComponents/Connect';

export default function Homepage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const deckRef = useRef(null);

  const slideLabels = [
    '01 Hero',
    '02 Challenges',
    '03 Structure',
    '04 System',
    '05 Roles',
    '06 Walkthrough',
    '07 FAQ',
    '08 Connect',
    'Footer'
  ];

  const handleScroll = () => {
    const deck = deckRef.current;
    if (!deck) return;

    const scrollTop = deck.scrollTop;
    const clientHeight = deck.clientHeight;
    const scrollHeight = deck.scrollHeight;

    const isAtBottom = scrollTop + clientHeight >= scrollHeight - 15;
    const activeIdx = isAtBottom ? slideLabels.length - 1 : Math.round(scrollTop / clientHeight);

    if (activeIdx >= 0 && activeIdx < slideLabels.length) {
      setActiveSlide(activeIdx);

      // Set body classes for background wash movement
      document.body.className = '';
      if (activeIdx > 0) {
        document.body.classList.add(`s${activeIdx + 1}`);
      }
    }
  };

  useEffect(() => {
    return () => {
      document.body.className = '';
    };
  }, []);

  const scrollToSlide = (idx) => {
    const deck = deckRef.current;
    if (deck && deck.children[idx]) {
      deck.children[idx].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div>
      {/* Dynamic Slide Dots */}
      <div className="dots" role="tablist" aria-label="Slide navigation">
        {slideLabels.map((label, idx) => (
          <button
            key={idx}
            className={activeSlide === idx ? 'active' : ''}
            onClick={() => scrollToSlide(idx)}
            aria-label={`Slide ${idx + 1} - ${label}`}
            title={label}
          />
        ))}
      </div>

      {/* Main Snap Scrolling Deck */}
      <div className="deck" id="deck" ref={deckRef} onScroll={handleScroll}>
        <Hero scrollToSlide={scrollToSlide} />
        <Challenges />
        <Structure scrollToSlide={scrollToSlide} />
        <System />
        <Roles />
        <Walkthrough />
        <FAQ />
        <Connect />
        <Footer />
      </div>
    </div>
  );
}
