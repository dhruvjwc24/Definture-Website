import type { ReactNode } from 'react';

interface EyebrowProps {
  children: ReactNode;
  tone?: 'brass' | 'sand';
}

function Eyebrow({ children, tone = 'brass' }: EyebrowProps) {
  return (
    <span
      className={`font-mono text-xs uppercase tracking-[0.2em] ${
        tone === 'brass' ? 'text-brass' : 'text-sand'
      }`}
    >
      {children}
    </span>
  );
}

export default Eyebrow;
