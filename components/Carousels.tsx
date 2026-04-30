import React from 'react';
import { Icons } from './Icons';

interface CarouselItem {
  id: string;
  title: string;
  description: string;
  driveId: string;
  platform: 'LinkedIn' | 'Instagram' | 'Both';
}

const carousels: CarouselItem[] = [
  {
    id: '1',
    title: 'Carousel · Example One',
    description: 'Multi-slide PDF designed for LinkedIn engagement. Scrollable in-browser, built to deliver value slide by slide.',
    driveId: '1sNdxVbB-djgGaDpAWe-e4SPhCiMFg3-N',
    platform: 'LinkedIn',
  },
  {
    id: '2',
    title: 'Carousel · Example Two',
    description: 'Story-driven format optimised for retention with a clear narrative arc and a punchy CTA finish.',
    driveId: '1bu-RzQxE4Y4XUzpjaVlEnQTHq53rdxi9',
    platform: 'LinkedIn',
  },
  {
    id: '3',
    title: 'Carousel · Example Three',
    description: 'Visual-heavy education carousel — typography and imagery doing equal work on every slide.',
    driveId: '1kuDVa176F-HUcbPbGMNU79A2aD9MZ2sO',
    platform: 'Both',
  },
];

export const Carousels: React.FC = () => {
  return (
    <section className="bg-brand-black text-ink-100 min-h-full px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto">

        <div className="flex items-center gap-4 mb-16">
          <span className="text-[11px] font-mono text-ink-500 tabular-nums">[ 08 ]</span>
          <div className="h-px flex-1 bg-white/[0.08] max-w-[80px]" />
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-ink-400">PDF carousels</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-5">
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-[-0.03em] leading-[0.95] mb-6">
              Slide by slide, <br/>
              <span className="font-serif italic font-normal text-brand-lime">on the page.</span>
            </h2>
            <p className="text-ink-400 text-lg leading-relaxed max-w-md">
              Live PDF carousels you can scroll right here. Designed for LinkedIn and Instagram to maximise engagement and deliver value, slide by slide.
            </p>
          </div>
          <div className="lg:col-span-7 self-end">
            <p className="text-ink-500 text-sm font-mono uppercase tracking-widest border-l-2 border-brand-lime pl-4">
              {carousels.length} examples · interactive
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/[0.06] border-y border-white/[0.06]">
          {carousels.map((carousel, idx) => (
            <article key={carousel.id} className="bg-brand-black flex flex-col">
              {/* Header strip */}
              <header className="px-6 py-5 border-b border-white/[0.06] flex items-center justify-between">
                <p className="text-[10px] font-mono tabular-nums text-ink-500">/ {String(idx + 1).padStart(2, '0')}</p>
                <span className="text-[9px] font-mono uppercase tracking-widest text-ink-400 border border-white/[0.08] px-2 py-0.5 rounded">
                  {carousel.platform}
                </span>
              </header>

              {/* Live PDF */}
              <div className="relative w-full aspect-square bg-ink-800">
                <iframe
                  src={`https://drive.google.com/file/d/${carousel.driveId}/preview`}
                  className="absolute inset-0 w-full h-full border-0"
                  title={carousel.title}
                  allow="autoplay"
                />
              </div>

              {/* Footer */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-ink-100 mb-2 tracking-tight">{carousel.title}</h3>
                <p className="text-sm text-ink-400 leading-relaxed mb-4 flex-1">{carousel.description}</p>
                <a
                  href={`https://drive.google.com/file/d/${carousel.driveId}/view`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-brand-lime hover:text-ink-100 font-bold transition-colors"
                >
                  Open in Drive <Icons.ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
