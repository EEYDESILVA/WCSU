import { ChevronDown } from 'lucide-react';

export default function HeroSection({ isLoaded }) {
  return (
    <section className="relative flex h-[100dvh] flex-col items-center justify-center px-6 text-center">
      {!isLoaded && (
        <p className="font-mono absolute animate-pulse text-[10px] tracking-[0.4em] text-cambridge-blue/70 uppercase">
          Loading experience
        </p>
      )}

      <div
        className={`pointer-events-none transition-opacity duration-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <p className="font-mono mb-6 text-[11px] tracking-[0.5em] text-cambridge-blue uppercase md:text-sm">
          Wesley College
        </p>
        <h1 className="font-display text-5xl leading-[0.95] font-medium text-white md:text-7xl lg:text-8xl">
          Science Union
        </h1>
        <p className="mx-auto mt-6 max-w-md text-sm text-silver/70 md:text-base">
          Four disciplines. One shared curiosity.
        </p>
      </div>

      <div className="animate-float-y absolute bottom-10 flex flex-col items-center gap-2">
        <span className="font-mono text-[10px] tracking-[0.3em] text-cambridge-blue/70 uppercase">
          Scroll
        </span>
        <ChevronDown className="h-4 w-4 text-cambridge-blue drop-shadow-[0_0_8px_rgba(163,193,173,0.8)]" />
      </div>
    </section>
  );
}
