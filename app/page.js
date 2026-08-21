'use client';

import { useRef, useState, useCallback } from 'react';
import SplineCanvas from '@/components/SplineCanvas';
import AmbientGlow from '@/components/AmbientGlow';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import EventsSection from '@/components/EventsSection';
import ProjectsSection from '@/components/ProjectsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import ReturnToHubButton from '@/components/ReturnToHubButton';
import { useScrollExperience } from '@/hooks/useScrollExperience';
import { SPLINE_TRIGGERS } from '@/data/site';

export default function Home() {
  const splineRef = useRef(null);
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);

  const handleSplineLoad = useCallback((app) => {
    splineRef.current = app;
    setIsSplineLoaded(true);
  }, []);

  const { scrollToTop, scrollToSection, showReturnButton } = useScrollExperience(
    splineRef,
    isSplineLoaded
  );

  const returnToHub = useCallback(() => {
    splineRef.current?.emitEvent('keyDown', SPLINE_TRIGGERS.hub);
    scrollToTop();
  }, [scrollToTop]);

  return (
    <main className="relative">
      <SplineCanvas onLoad={handleSplineLoad} />
      <AmbientGlow />
      <Header onNavigate={scrollToSection} />

      <div className="relative z-10">
        <HeroSection isLoaded={isSplineLoaded} />
        <EventsSection splineRef={splineRef} />
        <ProjectsSection splineRef={splineRef} />
        <AboutSection />
        <ContactSection />
      </div>

      <ReturnToHubButton visible={showReturnButton} onClick={returnToHub} />
    </main>
  );
}
