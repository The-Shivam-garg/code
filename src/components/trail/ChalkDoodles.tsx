/** Low-contrast hand-drawn line art scattered through the paper margins. */
const s = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const doodles = [
  // compass
  <svg key="c" viewBox="0 0 80 80" {...s}>
    <circle cx="40" cy="40" r="30" />
    <circle cx="40" cy="40" r="3" />
    <path d="M40 14 L46 40 L40 66 L34 40Z" />
    <path d="M40 4v6M40 70v6M4 40h6M70 40h6" />
  </svg>,
  // chai cup
  <svg key="t" viewBox="0 0 80 80" {...s}>
    <path d="M16 34h40v18a16 16 0 0 1-16 16h-8a16 16 0 0 1-16-16Z" />
    <path d="M56 40h6a7 7 0 0 1 0 14h-7" />
    <path d="M28 26c-4-6 4-8 0-14M40 26c-4-6 4-8 0-14" />
    <path d="M10 72h52" />
  </svg>,
  // terminal
  <svg key="m" viewBox="0 0 80 80" {...s}>
    <rect x="8" y="14" width="64" height="46" rx="4" />
    <path d="M8 24h64M18 36l8 6-8 6M32 48h14" />
    <path d="M30 60l-4 10h28l-4-10" />
  </svg>,
  // tent + fire
  <svg key="f" viewBox="0 0 80 80" {...s}>
    <path d="M6 66 L30 22 L54 66Z M30 22 L30 66 M22 66 L30 50 L38 66" />
    <path d="M64 66c-8-6-4-14 0-20 4 6 8 14 0 20Z" />
    <path d="M56 70l16-4M56 66l16 4" />
  </svg>,
  // lanyard badge
  <svg key="b" viewBox="0 0 80 80" {...s}>
    <path d="M26 4 L36 30 M54 4 L44 30" />
    <rect x="22" y="30" width="36" height="44" rx="4" />
    <circle cx="40" cy="46" r="7" />
    <path d="M30 64h20" />
  </svg>,
  // mountain route
  <svg key="h" viewBox="0 0 80 80" {...s}>
    <path d="M4 70 L28 30 L40 46 L54 22 L76 70Z" />
    <path d="M14 66c10-6 18 0 26-10s14-8 20-20" strokeDasharray="3 5" />
    <path d="M54 22v-14l10 4-10 4" />
  </svg>,
];

export function ChalkDoodles() {
  const spots = Array.from({ length: 18 }, (_, i) => ({
    top: `${3 + i * 5.5}%`,
    side:
      i % 2
        ? { right: `${2.6 + ((i * 3) % 4) * 0.4}rem` }
        : { left: `${2.6 + ((i * 5) % 4) * 0.4}rem` },
    rot: ((i * 37) % 30) - 15,
    d: doodles[i % doodles.length],
  }));
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {spots.map((p, i) => (
        <div
          key={i}
          className="chalk h-20 w-20"
          style={{ top: p.top, ...p.side, transform: `rotate(${p.rot}deg)` }}
        >
          {p.d}
        </div>
      ))}
    </div>
  );
}
