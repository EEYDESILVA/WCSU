'use client';

import { Bot, Sun } from 'lucide-react';
import { PROJECTS, SPLINE_TRIGGERS } from '@/data/site';

const ICONS = { Bot, Sun };

export default function ProjectsSection({ splineRef }) {
  const handleActivate = () => {
    splineRef.current?.emitEvent('keyDown', SPLINE_TRIGGERS.projects);
  };

  return (
    <section
      id="projects"
      className="pointer-events-none relative flex min-h-[100dvh] flex-col justify-center px-6 py-28 md:px-16"
    >
      <div className="pointer-events-auto mx-auto w-full max-w-6xl">
        <span className="font-mono text-xs tracking-[0.4em] text-cambridge-blue uppercase">
          Chapter 02
        </span>
        <h2 className="font-display mt-3 mb-12 text-3xl text-white md:text-5xl">
          Projects
        </h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {PROJECTS.map((project) => {
            const Icon = ICONS[project.icon];
            return (
              <button
                key={project.id}
                type="button"
                onClick={handleActivate}
                className="glass-card p-8 text-left transition-all duration-300 hover:-translate-y-1 hover:border-cambridge-blue/50"
              >
                <div className="mb-6 flex items-center justify-between">
                  <Icon className="h-7 w-7 text-cambridge-blue" />
                  <span className="font-mono text-[10px] tracking-widest text-cambridge-blue/50">
                    {project.id}
                  </span>
                </div>
                <span className="font-mono text-[10px] tracking-[0.2em] text-cambridge-blue/70 uppercase">
                  {project.tag}
                </span>
                <h3 className="font-display mt-2 mb-3 text-xl text-white">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-silver/70">
                  {project.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
