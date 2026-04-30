import React, { useState } from 'react';
import { Icons } from './Icons';

interface Deck {
  id: string;
  title: string;
  client: string;
  type: string;
  year: string;
  description: string;
  file: string;
  accent: string;
}

const decks: Deck[] = [
  {
    id: 'apex',
    title: 'Apex Studio',
    client: 'Apex Studio',
    type: 'Credentials Deck',
    year: '2025',
    description: 'Studio credentials & capabilities deck — case studies, services, and the work, structured for new-business meetings.',
    file: '/decks/apex-studio.html',
    accent: 'from-emerald-400/20 to-transparent',
  },
  {
    id: 'axiom',
    title: 'Axiom',
    client: 'Axiom',
    type: 'Product Launch',
    year: '2025',
    description: 'Launch deck for a new product release — narrative arc from problem framing to feature reveal and CTA.',
    file: '/decks/axiom-launch.html',
    accent: 'from-blue-400/20 to-transparent',
  },
  {
    id: 'marrow',
    title: 'Marrow',
    client: 'Marrow',
    type: 'Series A Pitch',
    year: '2025',
    description: 'Investor pitch for Series A round — market, traction, team, ask. Built for short-attention investor reviews.',
    file: '/decks/marrow-pitch.html',
    accent: 'from-amber-400/20 to-transparent',
  },
  {
    id: 'volta',
    title: 'Volta',
    client: 'Volta',
    type: 'Brand Reveal',
    year: '2025',
    description: 'Animated brand reveal deck — motion-led storytelling for an internal brand launch presentation.',
    file: '/decks/volta-brand.html',
    accent: 'from-purple-400/20 to-transparent',
  },
];

export const DeckShowcase: React.FC = () => {
  const [active, setActive] = useState<Deck | null>(null);

  return (
    <section className="bg-brand-black text-ink-100 min-h-full px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto">

        <div className="flex items-center gap-4 mb-16">
          <span className="text-[11px] font-mono text-ink-500 tabular-nums">[ 03 ]</span>
          <div className="h-px flex-1 bg-white/[0.08] max-w-[80px]" />
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-ink-400">Decks · live samples</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-5">
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-[-0.03em] leading-[0.95] mb-6">
              Real decks, <br/>
              <span className="font-serif italic font-normal text-brand-lime">live in browser.</span>
            </h2>
            <p className="text-ink-400 text-lg leading-relaxed max-w-md">
              Click any deck to open it full-screen — every example below is the actual interactive deck, not a screenshot.
            </p>
          </div>
          <div className="lg:col-span-7 self-end">
            <p className="text-ink-500 text-sm font-mono uppercase tracking-widest border-l-2 border-brand-lime pl-4">
              {decks.length} interactive decks · click to expand
            </p>
          </div>
        </div>

        {/* Deck grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06] border-y border-white/[0.06]">
          {decks.map((deck, idx) => (
            <article key={deck.id} className="bg-brand-black flex flex-col group">

              {/* Live preview frame */}
              <button
                onClick={() => setActive(deck)}
                className="relative aspect-[16/10] bg-ink-800 overflow-hidden cursor-pointer text-left"
                title="Open full-screen"
              >
                <iframe
                  src={deck.file}
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  style={{
                    transform: 'scale(0.5)',
                    transformOrigin: 'top left',
                    width: '200%',
                    height: '200%',
                    border: 0,
                  }}
                  title={deck.title}
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-brand-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="px-5 py-2.5 bg-brand-lime text-brand-black text-xs font-bold rounded-full flex items-center gap-2">
                    <Icons.ExternalLink className="w-3.5 h-3.5" />
                    Open Full Deck
                  </div>
                </div>
                {/* Type tag */}
                <div className="absolute top-4 left-4">
                  <span className="text-[9px] font-mono uppercase tracking-widest bg-brand-black/80 backdrop-blur border border-white/10 text-ink-200 px-2 py-1 rounded">
                    {deck.type}
                  </span>
                </div>
                {/* Index */}
                <div className="absolute bottom-4 right-4">
                  <span className="text-[10px] font-mono tabular-nums text-ink-300">
                    / {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>
              </button>

              {/* Meta row */}
              <div className="p-6 md:p-7 flex flex-col gap-3">
                <header className="flex items-baseline justify-between gap-4">
                  <h3 className="text-2xl font-extrabold tracking-[-0.02em] text-ink-100 group-hover:text-brand-lime transition-colors">
                    {deck.title}
                  </h3>
                  <span className="text-[10px] font-mono text-ink-500 shrink-0">{deck.year}</span>
                </header>
                <p className="text-sm text-ink-400 leading-relaxed">{deck.description}</p>
                <div className="flex items-center gap-3 mt-2">
                  <button
                    onClick={() => setActive(deck)}
                    className="text-xs font-bold text-brand-lime hover:text-ink-100 transition-colors flex items-center gap-1.5"
                  >
                    Open in viewer
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                  <span className="w-px h-3 bg-white/10" />
                  <a
                    href={deck.file}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-bold text-ink-400 hover:text-ink-100 transition-colors flex items-center gap-1.5"
                  >
                    New tab <Icons.ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Closer */}
        <p className="text-center text-ink-500 italic font-serif text-lg mt-16 max-w-2xl mx-auto leading-snug">
          Each deck is the actual file, not a screenshot. Built using the right tool for each project — Figma, PowerPoint, Keynote, custom HTML.
        </p>
      </div>

      {/* ════ Full-screen viewer modal ════ */}
      {active && (
        <div
          className="fixed inset-0 z-[100] bg-brand-black/95 backdrop-blur-md flex flex-col"
          onClick={() => setActive(null)}
        >
          {/* Top bar */}
          <header
            className="shrink-0 px-6 h-14 flex items-center justify-between bg-brand-black border-b border-white/[0.06]"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center gap-4 min-w-0">
              <span className="text-[10px] font-mono uppercase tracking-widest text-ink-500">{active.type}</span>
              <span className="w-px h-4 bg-white/10" />
              <span className="text-ink-100 font-bold text-sm truncate">{active.title}</span>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={active.file}
                target="_blank"
                rel="noreferrer"
                className="text-[10px] font-mono uppercase tracking-widest text-ink-400 hover:text-ink-100 transition-colors flex items-center gap-1.5"
              >
                Open new tab <Icons.ExternalLink className="w-3 h-3" />
              </a>
              <button
                onClick={() => setActive(null)}
                className="w-9 h-9 rounded-full bg-white/[0.05] hover:bg-red-500/20 hover:border-red-500/50 border border-white/[0.08] text-ink-300 hover:text-ink-100 transition-colors text-lg flex items-center justify-center"
              >×</button>
            </div>
          </header>

          {/* Iframe */}
          <div className="flex-1 bg-brand-black p-3 md:p-6" onClick={e => e.stopPropagation()}>
            <iframe
              src={active.file}
              className="w-full h-full rounded-lg border border-white/[0.08] bg-white"
              title={active.title}
            />
          </div>

          {/* Bottom hint */}
          <div className="shrink-0 px-6 h-9 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-ink-600 bg-brand-black border-t border-white/[0.06]">
            <span>Click outside or press ✕ to close</span>
            <span>Use deck controls to navigate</span>
          </div>
        </div>
      )}
    </section>
  );
};
