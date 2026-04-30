import React from 'react';
import { Icons } from './Icons';

interface CampaignVideo {
  src: string;
  label: string;
  caption: string;
}

interface PortfolioItem {
  category: string;
  title: string;
  client: string;
  year: string;
  videos: CampaignVideo[];
  challenge: string;
  action: string;
  outcome: string;
  metrics: { label: string; value: string }[];
}

const portfolioItems: PortfolioItem[] = [
  {
    category: 'Generative Campaign',
    title: 'Pomelli — Creative Generative Series',
    client: 'Pomelli',
    year: '2025',
    videos: [
      {
        src: '/clips/pomelli-1.mp4',
        label: 'Hero Vertical · 9:16',
        caption: 'Brand-led concept reveal',
      },
      {
        src: '/clips/pomelli-2.mp4',
        label: 'Story Cut · 9:16',
        caption: 'Narrative-driven product moment',
      },
      {
        src: '/clips/pomelli-3.mp4',
        label: 'Loop Asset · 9:16',
        caption: 'Loopable social-ready cut',
      },
    ],
    challenge: 'Pomelli needed a series of generative short-form videos that felt visually consistent, brand-aligned, and ready to push to social — without the timeline and budget of a traditional shoot.',
    action: 'Built a generative creative pipeline using AI video models, storyboarded each cut to a single visual through-line, and produced three complete 9:16 assets in days, not weeks. Each clip was edited for autoplay-friendly pacing and zero-context comprehension.',
    outcome: 'A coherent campaign series of three on-brand videos delivered at AI speed — looped, social-ready, and visually unified across all three.',
    metrics: [
      { label: 'Videos Shipped', value: '3' },
      { label: 'Aspect', value: '9:16' },
      { label: 'Turnaround', value: 'Days' },
    ],
  },
];

export const CreativePortfolio: React.FC = () => {
  return (
    <section className="bg-brand-black text-ink-100 min-h-full px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto">

        <div className="flex items-center gap-4 mb-16">
          <span className="text-[11px] font-mono text-ink-500 tabular-nums">[ 06 ]</span>
          <div className="h-px flex-1 bg-white/[0.08] max-w-[80px]" />
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-ink-400">Featured campaign</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-5">
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-[-0.03em] leading-[0.95] mb-6">
              Real work for <br/>
              <span className="font-serif italic font-normal text-brand-lime">real brands.</span>
            </h2>
            <p className="text-ink-400 text-lg leading-relaxed max-w-md">
              How a generative video workflow translates a brand into shippable, on-brand creative — three vertical cuts, one cohesive series.
            </p>
          </div>
        </div>

        {portfolioItems.map((item, idx) => (
          <article key={idx} className="border-t border-white/[0.06] pt-12">

            {/* Header */}
            <header className="grid lg:grid-cols-12 gap-6 mb-12">
              <div className="lg:col-span-7">
                <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-brand-lime mb-3">{item.category}</p>
                <h3 className="text-4xl md:text-5xl font-extrabold tracking-[-0.03em] leading-[0.95] mb-4">
                  {item.title}
                </h3>
              </div>
              <dl className="lg:col-span-5 grid grid-cols-2 gap-x-6 gap-y-3 self-end">
                <div>
                  <dt className="text-[10px] font-mono uppercase tracking-widest text-ink-500 mb-1">Client</dt>
                  <dd className="text-ink-200 text-sm">{item.client}</dd>
                </div>
                <div>
                  <dt className="text-[10px] font-mono uppercase tracking-widest text-ink-500 mb-1">Year</dt>
                  <dd className="text-ink-200 text-sm font-mono">{item.year}</dd>
                </div>
              </dl>
            </header>

            {/* Vertical video gallery — 3 autoplay-loop clips */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-12">
              {item.videos.map((video, vi) => (
                <figure
                  key={vi}
                  className="group relative aspect-[9/16] rounded-xl overflow-hidden border border-white/[0.08] bg-ink-800"
                >
                  <video
                    src={video.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />

                  {/* Top label */}
                  <div className="absolute top-3 left-3 right-3 flex items-start justify-between pointer-events-none">
                    <span className="bg-brand-black/70 backdrop-blur border border-white/10 text-ink-200 text-[9px] font-mono uppercase tracking-widest px-2 py-1 rounded">
                      {video.label}
                    </span>
                    <span className="bg-brand-lime text-brand-black text-[9px] font-mono font-bold uppercase tracking-widest px-2 py-1 rounded flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-brand-black animate-pulse" />
                      LIVE
                    </span>
                  </div>

                  {/* Bottom caption */}
                  <figcaption className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-brand-black via-brand-black/70 to-transparent">
                    <p className="text-[10px] font-mono uppercase tracking-widest text-ink-400 mb-1">/ {String(vi + 1).padStart(2, '0')}</p>
                    <p className="text-sm text-ink-100 font-medium leading-snug">{video.caption}</p>
                  </figcaption>
                </figure>
              ))}
            </div>

            {/* Tool credit */}
            <div className="flex items-center gap-2 mb-12 px-4 py-2.5 bg-brand-card/50 border border-white/[0.06] rounded-full w-fit mx-auto">
              <Icons.Sparkles className="w-3.5 h-3.5 text-brand-lime" />
              <span className="text-xs font-mono text-ink-400">Generative video pipeline</span>
            </div>

            {/* Case study grid */}
            <div className="grid lg:grid-cols-3 gap-px bg-white/[0.06] border-y border-white/[0.06] mb-8">
              {[
                { label: 'Challenge', body: item.challenge, color: 'text-red-400' },
                { label: 'Action', body: item.action, color: 'text-brand-lime' },
                { label: 'Outcome', body: item.outcome, color: 'text-ink-100' },
              ].map((block, bi) => (
                <div key={bi} className="bg-brand-black p-8">
                  <p className={`text-[10px] font-mono uppercase tracking-[0.25em] mb-4 ${block.color}`}>
                    {block.label}
                  </p>
                  <p className="text-ink-300 text-sm leading-relaxed">{block.body}</p>
                </div>
              ))}
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-px bg-white/[0.06] border-y border-white/[0.06]">
              {item.metrics.map((m, mi) => (
                <div key={mi} className="bg-brand-black p-6 text-center">
                  <p className="text-3xl md:text-4xl font-extrabold tracking-tight text-ink-100 tabular-nums mb-1">{m.value}</p>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-ink-500">{m.label}</p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
