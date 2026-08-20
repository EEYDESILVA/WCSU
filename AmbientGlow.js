export default function AmbientGlow() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[5] overflow-hidden"
      aria-hidden="true"
    >
      <div
        id="glow-events"
        className="absolute -top-32 -left-32 h-[560px] w-[560px] rounded-full bg-cambridge-blue/20 opacity-0 blur-[120px] transition-opacity duration-1000"
      />
      <div
        id="glow-projects"
        className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full bg-cambridge-blue/15 opacity-0 blur-[140px] transition-opacity duration-1000"
      />
      <div
        id="glow-about"
        className="absolute bottom-1/4 left-1/4 h-[680px] w-[680px] rounded-full bg-white/5 opacity-0 blur-[150px] transition-opacity duration-1000"
      />
      <div
        id="glow-contact"
        className="absolute -bottom-40 left-1/3 h-[560px] w-[560px] rounded-full bg-oxford-blue/70 opacity-0 blur-[110px] transition-opacity duration-1000"
      />
    </div>
  );
}
