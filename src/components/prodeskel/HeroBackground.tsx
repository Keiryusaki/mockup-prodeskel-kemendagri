export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-pd-primary-50" />
      <div className="absolute right-0 top-1/2 h-[420px] w-[420px] -translate-y-1/2 translate-x-1/4 rounded-full bg-pd-secondary-200/40 blur-3xl" />
      <svg className="absolute inset-0 h-full w-full opacity-[0.07]" viewBox="0 0 800 420" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,90 C200,150 400,30 600,90 C700,120 750,70 800,90" stroke="rgb(var(--pd-primary-600))" strokeWidth="2" fill="none" />
        <path d="M0,180 C200,240 400,120 600,180 C700,210 750,160 800,180" stroke="rgb(var(--pd-primary-600))" strokeWidth="2" fill="none" />
        <path d="M0,270 C200,330 400,210 600,270 C700,300 750,250 800,270" stroke="rgb(var(--pd-primary-600))" strokeWidth="2" fill="none" />
        <path d="M0,360 C200,410 400,300 600,360 C700,385 750,340 800,360" stroke="rgb(var(--pd-primary-600))" strokeWidth="2" fill="none" />
      </svg>
    </div>
  );
}
