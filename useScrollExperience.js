'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SPLINE_TRIGGERS } from '@/data/site';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Owns the scroll experience for the whole page:
 *  - Lenis inertia scrolling, synced to GSAP's ticker (so ScrollTrigger's
 *    positional math and Lenis's momentum never fall out of step)
 *  - One ScrollTrigger per chapter that fires a Spline camera event and
 *    fades in that chapter's ambient glow as it enters the viewport
 *  - Return-to-hub visibility state, plus imperative scroll helpers
 */
export function useScrollExperience(splineRef, isSplineLoaded) {
  const lenisRef = useRef(null);
  const [showReturnButton, setShowReturnButton] = useState(false);

  // Lenis, wired into GSAP's ticker. Runs once, independent of Spline.
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const lenis = new Lenis({
      duration: prefersReducedMotion ? 0.1 : 1.2,
      easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      smoothWheel: !prefersReducedMotion,
      touchMultiplier: 1.4,
    });
    lenisRef.current = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    const onTick = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(onTick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Chapter-triggered Spline camera moves + ambient glow. Wired once the
  // Spline Application instance actually exists.
  useEffect(() => {
    if (!isSplineLoaded) return undefined;

    const chapters = [
      { id: '#events', key: SPLINE_TRIGGERS.events, glow: '#glow-events' },
      { id: '#projects', key: SPLINE_TRIGGERS.projects, glow: '#glow-projects' },
      { id: '#about', key: SPLINE_TRIGGERS.about, glow: '#glow-about' },
      { id: '#contact', key: SPLINE_TRIGGERS.contact, glow: '#glow-contact' },
    ];

    const chapterTriggers = chapters.map(({ id, key, glow }) =>
      ScrollTrigger.create({
        trigger: id,
        start: 'top center',
        end: 'bottom center',
        toggleClass: { targets: glow, className: 'opacity-100' },
        onEnter: () => splineRef.current?.emitEvent('keyDown', key),
        onEnterBack: () => splineRef.current?.emitEvent('keyDown', key),
      })
    );

    const returnButtonTrigger = ScrollTrigger.create({
      trigger: '#events',
      start: 'top bottom',
      onEnter: () => setShowReturnButton(true),
      onLeaveBack: () => setShowReturnButton(false),
    });

    ScrollTrigger.refresh();

    return () => {
      chapterTriggers.forEach((trigger) => trigger.kill());
      returnButtonTrigger.kill();
    };
  }, [isSplineLoaded, splineRef]);

  const scrollToTop = useCallback(() => {
    lenisRef.current?.scrollTo(0, { duration: 1.5 });
  }, []);

  const scrollToSection = useCallback((id) => {
    lenisRef.current?.scrollTo(id, { duration: 1.5 });
  }, []);

  return { scrollToTop, scrollToSection, showReturnButton };
}
