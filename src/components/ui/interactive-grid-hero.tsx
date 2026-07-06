import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import Eyebrow from '../Eyebrow';

const GRID_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function randomChar() {
  return GRID_CHARS[Math.floor(Math.random() * GRID_CHARS.length)];
}

export interface InteractiveGridHeroProps {
  eyebrow?: string;
  heading: string;
  subheading: string;
  ctaLabel: string;
  ctaHref: string;
}

function InteractiveGridHero({ eyebrow, heading, subheading, ctaLabel, ctaHref }: InteractiveGridHeroProps) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    let tiles: HTMLDivElement[] = [];
    let frame: number | null = null;
    let lastEvent: MouseEvent | null = null;

    const handleTileClick = (tile: HTMLDivElement) => {
      tile.textContent = randomChar();
      tile.classList.add('glitch');
      setTimeout(() => tile.classList.remove('glitch'), 200);
    };

    const buildGrid = () => {
      grid.innerHTML = '';
      const size = 56;
      const columns = Math.max(1, Math.floor(grid.clientWidth / size));
      const rows = Math.max(1, Math.floor(grid.clientHeight / size));
      grid.style.setProperty('--columns', String(columns));
      grid.style.setProperty('--rows', String(rows));

      tiles = Array.from({ length: columns * rows }, () => {
        const tile = document.createElement('div');
        tile.className = 'matrix-grid-tile';
        tile.textContent = randomChar();
        tile.addEventListener('click', () => handleTileClick(tile));
        grid.appendChild(tile);
        return tile;
      });
    };

    const applyIntensity = () => {
      frame = null;
      if (!lastEvent) return;
      const radius = window.innerWidth / 4;
      for (const tile of tiles) {
        const rect = tile.getBoundingClientRect();
        const dx = lastEvent.clientX - (rect.left + rect.width / 2);
        const dy = lastEvent.clientY - (rect.top + rect.height / 2);
        const distance = Math.sqrt(dx * dx + dy * dy);
        const intensity = Math.max(0, 1 - distance / radius);
        tile.style.setProperty('--intensity', String(intensity));
      }
    };

    const handleMouseMove = (event: MouseEvent) => {
      lastEvent = event;
      if (frame === null) {
        frame = requestAnimationFrame(applyIntensity);
      }
    };

    buildGrid();
    window.addEventListener('resize', buildGrid);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', buildGrid);
      window.removeEventListener('mousemove', handleMouseMove);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-ink">
      <div ref={gridRef} className="matrix-grid matrix-grid--dark" aria-hidden="true" />

      <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">
        {eyebrow && (
          <div className="animate-fade-up" style={{ animationDelay: '0ms' }}>
            <Eyebrow>{eyebrow}</Eyebrow>
          </div>
        )}

        <div className="animate-fade-up flex flex-col items-center gap-4" style={{ animationDelay: '150ms' }}>
          <h1 className="font-serif text-5xl font-semibold text-linen sm:text-7xl">{heading}</h1>
          <span className="h-px w-16 bg-brass" />
        </div>

        <p className="animate-fade-up max-w-xl text-lg text-sand" style={{ animationDelay: '300ms' }}>
          {subheading}
        </p>

        <Link
          to={ctaHref}
          style={{ animationDelay: '450ms' }}
          className={cn(
            'animate-fade-up inline-flex items-center gap-2 border border-brass bg-brass px-8 py-3 text-sm font-medium text-ink transition-colors hover:bg-transparent hover:text-brass',
          )}
        >
          {ctaLabel}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

export default InteractiveGridHero;
