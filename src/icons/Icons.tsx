// Generic, hand-drawn line icons (no photos, no trademarked logos, no human imagery).
import type { SVGProps } from "react";

export function LogoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" />
      <path
        d="M24 10v10M24 10l-6 4M24 10l6 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 26c0-5.5 4.5-10 10-10s10 4.5 10 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect
        x="12"
        y="26"
        width="5"
        height="9"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="2"
      />
      <rect
        x="31"
        y="26"
        width="5"
        height="9"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

export function HeadphonesIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M4 15v-3a8 8 0 0 1 16 0v3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <rect
        x="2.5"
        y="14"
        width="4.5"
        height="7"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <rect
        x="17"
        y="14"
        width="4.5"
        height="7"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function PlayIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M7 4.5v15l13-7.5z" />
    </svg>
  );
}

export function PauseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <rect x="6" y="4.5" width="4.5" height="15" rx="1" />
      <rect x="13.5" y="4.5" width="4.5" height="15" rx="1" />
    </svg>
  );
}

export function VolumeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M4 10v4h3.5l4.5 4V6L7.5 10H4z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M16 9a4 4 0 0 1 0 6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M18.5 6.5a8 8 0 0 1 0 11"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SpinnerIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="40 56"
      />
    </svg>
  );
}

export function MusicNoteIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M9 17V5l10-2v12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="6.5"
        cy="17"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle
        cx="16.5"
        cy="15"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function BookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 6c-1.8-1.3-4.2-2-7-2v14c2.8 0 5.2.7 7 2V6z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M12 6c1.8-1.3 4.2-2 7-2v14c-2.8 0-5.2.7-7 2V6z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HandsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M6 20V11c0-2 1-4 3-5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M18 20V11c0-2-1-4-3-5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M9 6c0-1.7 1.3-3 3-3s3 1.3 3 3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MicIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect
        x="9"
        y="3"
        width="6"
        height="11"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M5 11a7 7 0 0 0 14 0"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M12 18v3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DoveIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M3 13c3-4 7-4 9-1 2-3 6-4 9-2-3 1-5 3-6 6-3 2-7 2-9 0-2 1-2 1-3-3z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="9" r="0.8" fill="currentColor" />
    </svg>
  );
}

export function GlobeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M3 12h18M12 3c2.5 2.5 2.5 15.5 0 18M12 3c-2.5 2.5-2.5 15.5 0 18"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function FamilyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="7" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="14" r="2" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M2.5 20c0-3 2-5 4.5-5s4.5 2 4.5 5M12.5 20c0-2.2 1.3-4 3.5-4s3.5 1.8 3.5 4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function QuoteIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M9 7c-2.8 0-5 2.2-5 5v6h6v-6H7c0-1.1.9-2 2-2V7zm9 0c-2.8 0-5 2.2-5 5v6h6v-6h-3c0-1.1.9-2 2-2V7z" />
    </svg>
  );
}

export function ChevronLeftIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M15 5l-7 7 7 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChevronRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M9 5l7 7-7 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function StoreIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M6 3l14 9-14 9V3z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M3.5 6.5l8.5 7 8.5-7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Decorative tuning-dial arc with graduated marks, echoing an analogue radio scale.
export function TuningDialIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 220 140" fill="none" {...props}>
      <path
        d="M14 126a96 96 0 0 1 192 0"
        stroke="currentColor"
        strokeWidth="1.4"
        opacity="0.5"
      />
      {Array.from({ length: 13 }).map((_, i) => {
        const angle = Math.PI - (i / 12) * Math.PI;
        const r1 = 96;
        const r2 = i % 3 === 0 ? 80 : 88;
        const cx = 110;
        const cy = 126;
        const x1 = cx + r1 * Math.cos(angle);
        const y1 = cy - r1 * Math.sin(angle);
        const x2 = cx + r2 * Math.cos(angle);
        const y2 = cy - r2 * Math.sin(angle);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth={i % 3 === 0 ? 2 : 1.2}
            opacity={i % 3 === 0 ? 0.9 : 0.5}
          />
        );
      })}
      <circle cx="110" cy="126" r="4" fill="currentColor" />
      <line
        x1="110"
        y1="126"
        x2="58"
        y2="64"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Equalizer-style streaming bars, echoing the thin waveform beside "RADIO" in the TBR logo.
export function StreamingLinesIcon(props: SVGProps<SVGSVGElement>) {
  const barCount = 90;
  const barWidth = 1.2;
  const gap = 2;
  const maxHeight = 26;
  const heights = Array.from({ length: barCount }, (_, i) => {
    const wave = Math.sin(i * 0.7) * 0.5 + Math.sin(i * 0.33) * 0.5;
    return 6 + Math.abs(wave) * (maxHeight - 6);
  });
  const width = barCount * (barWidth + gap) - gap;

  return (
    <svg
      viewBox={`0 0 ${width} ${maxHeight}`}
      fill="none"
      preserveAspectRatio="none"
      {...props}
    >
      {heights.map((h, i) => (
        <rect
          key={i}
          x={i * (barWidth + gap)}
          y={(maxHeight - h) / 2}
          width={barWidth}
          height={h}
          rx={barWidth / 2}
          fill="currentColor"
        />
      ))}
    </svg>
  );
}
