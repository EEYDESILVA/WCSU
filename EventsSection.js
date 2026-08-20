'use client';

import { Microscope, Telescope, FlaskConical } from 'lucide-react';
import { EVENTS, SPLINE_TRIGGERS } from '@/data/site';

const ICONS = { Microscope, Telescope, FlaskConical };

export default function EventsSection({ splineRef }) {
  const handleActivate = () => {
    splineRef.current?.emitEvent('keyDown', SPLINE_TRIGGERS.events);
  };

  return (
    <section
      id="events"
      className="pointer-events-none relative flex min-h-[100dvh] flex-col justify-center px-6 py-28 md:px-16"
    >
      <div className="pointer-events-auto mx-auto w-full max-w-6xl">
        <span className="font-mono text-xs tracking-[0.4em] text-cambridge-blue uppercase">
          Chapter 01
        </span>
        <h2 className="font-display mt-3 mb-12 text-3xl text-white md:text-5xl">
          Events
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {EVENTS.map((event) => {
            const Icon = ICONS[event.icon];
            return (
              <button
                key={event.id}
                type="button"
                onClick={handleActivate}
                className="glass-card flex flex-col p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-cambridge-blue/50"
              >
                <div className="mb-5 flex items-center justify-between">
                  <Icon className="h-6 w-6 text-cambridge-blue" />
                  <span className="font-mono text-[10px] tracking-widest text-cambridge-blue/50">
                    {event.id}
                  </span>
                </div>
                <h3 className="font-display mb-2 text-lg text-white">
                  {event.title}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-silver/70">
                  {event.description}
                </p>
                <span className="font-mono mt-auto text-[10px] tracking-wider text-cambridge-blue/80">
                  {event.cadence}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
