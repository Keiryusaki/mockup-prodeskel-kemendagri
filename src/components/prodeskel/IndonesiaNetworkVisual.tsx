const NODES = [
  { x: 40, y: 150 }, { x: 75, y: 110 }, { x: 95, y: 170 }, { x: 130, y: 90 },
  { x: 150, y: 140 }, { x: 175, y: 190 }, { x: 210, y: 100 }, { x: 230, y: 150 },
  { x: 250, y: 190 }, { x: 270, y: 120 }, { x: 300, y: 160 }, { x: 320, y: 100 },
  { x: 350, y: 140 }, { x: 370, y: 180 }, { x: 400, y: 110 }, { x: 420, y: 155 },
  { x: 450, y: 95 }, { x: 470, y: 145 }, { x: 500, y: 175 }, { x: 520, y: 120 },
  { x: 550, y: 155 }, { x: 560, y: 100 },
];

const LINKS: [number, number][] = [
  [0, 1], [1, 3], [1, 2], [3, 4], [4, 5], [4, 6], [6, 7], [7, 8], [7, 9], [9, 10],
  [9, 11], [11, 12], [12, 13], [12, 14], [14, 15], [15, 16], [15, 17], [17, 18],
  [17, 19], [19, 20], [19, 21], [2, 5], [10, 13],
];

const HIGHLIGHTS = new Set([1, 4, 9, 12, 15, 19]);

/**
 * Stylized dot/connection-line network standing in for an Indonesia map —
 * deliberately abstract rather than cartographically precise, matching the
 * hero spec ("titik wilayah, garis koneksi halus") without claiming
 * real province boundaries.
 */
export function IndonesiaNetworkVisual({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 300"
      className={className}
      role="img"
      aria-label="Ilustrasi jaringan titik wilayah Indonesia"
    >
      <defs>
        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgb(var(--pd-secondary-400))" stopOpacity="0.9" />
          <stop offset="100%" stopColor="rgb(var(--pd-secondary-400))" stopOpacity="0" />
        </radialGradient>
      </defs>
      {LINKS.map(([a, b], i) => (
        <line
          key={i}
          x1={NODES[a].x}
          y1={NODES[a].y}
          x2={NODES[b].x}
          y2={NODES[b].y}
          stroke="rgb(var(--pd-primary-200))"
          strokeWidth={1}
          opacity={0.6}
        />
      ))}
      {NODES.map((n, i) => (
        <g key={i}>
          {HIGHLIGHTS.has(i) && <circle cx={n.x} cy={n.y} r={14} fill="url(#nodeGlow)" />}
          <circle
            cx={n.x}
            cy={n.y}
            r={HIGHLIGHTS.has(i) ? 4.5 : 2.5}
            fill={HIGHLIGHTS.has(i) ? 'rgb(var(--pd-secondary-500))' : 'rgb(var(--pd-primary-400))'}
          />
        </g>
      ))}
    </svg>
  );
}
