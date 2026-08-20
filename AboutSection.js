import { Cpu, FlaskConical, Dna, Atom } from 'lucide-react';
import { DISCIPLINES } from '@/data/site';

const ICONS = { Cpu, FlaskConical, Dna, Atom };

export default function AboutSection() {
  return (
    <section
      id="about"
      className="pointer-events-none relative flex min-h-[100dvh] flex-col justify-center px-6 py-28 md:px-16"
    >
      <div className="pointer-events-auto mx-auto w-full max-w-5xl">
        <span className="font-mono text-xs tracking-[0.4em] text-cambridge-blue uppercase">
          Chapter 03
        </span>
        <h2 className="font-display mt-3 mb-6 text-3xl text-white md:text-5xl">
          About the Union
        </h2>
        <p className="mb-12 max-w-2xl leading-relaxed text-silver/70">
          Curiosity works better out loud. The Science Union brings together
          four disciplines — and the students who&apos;d rather build the
          thing than just read about it.
        </p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {DISCIPLINES.map((discipline) => {
            const Icon = ICONS[discipline.icon];
            return (
              <div
                key={discipline.id}
                className="glass-card p-6 transition-colors duration-300 hover:border-cambridge-blue/50"
              >
                <div className="mb-5 flex items-center justify-between">
                  <Icon className="h-6 w-6 text-cambridge-blue" />
                  <span className="font-mono text-[10px] tracking-widest text-cambridge-blue/50">
                    {discipline.id}
                  </span>
                </div>
                <h3 className="font-display mb-2 text-white">
                  {discipline.title}
                </h3>
                <p className="text-sm leading-relaxed text-silver/60">
                  {discipline.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
