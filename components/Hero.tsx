import React from 'react';
import { Icons } from './Icons';

const tickerItems = [
  'Video Production',
  'Presentation Decks',
  'Social Media Graphics',
  'Custom Visual Assets',
  'AI-Accelerated Workflows',
  'Bilingual EN / ES',
];

interface ShortcutTarget {
  index: number;        // zero-based slide index
  display: string;      // visible position label (e.g. "02")
  label: string;
  icon: React.FC<{ className?: string }>;
}

const shortcuts: ShortcutTarget[] = [
  { index: 1,  display: '02', label: 'Impact',           icon: Icons.BarChart },
  { index: 2,  display: '03', label: 'Services',         icon: Icons.Zap },
  { index: 3,  display: '04', label: 'Live Decks',       icon: Icons.PlaySquare },
  { index: 4,  display: '05', label: 'Video Production', icon: Icons.Video },
  { index: 5,  display: '06', label: 'Short-Form Clips', icon: Icons.Film },
  { index: 6,  display: '07', label: 'PDF Carousels',    icon: Icons.FileText },
  { index: 7,  display: '08', label: 'Campaigns',        icon: Icons.Sparkles },
  { index: 8,  display: '09', label: 'Experience',       icon: Icons.TrendingUp },
  { index: 9,  display: '10', label: 'Tech Stack',       icon: Icons.Cpu },
  { index: 10, display: '11', label: 'Contact',          icon: Icons.Mail },
];

const jumpToSlide = (index: number) => {
  window.dispatchEvent(new CustomEvent('slide:jump', { detail: { index } }));
};

export const Hero: React.FC = () => {
  return (
    <section className="min-h-full flex flex-col bg-brand-black text-ink-100 relative">

      {/* Top meta bar */}
      <div className="border-b border-white/[0.06]">
        <div className="px-6 md:px-12 py-3 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.25em] text-ink-500">
          <div className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-lime opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-lime" />
            </span>
            Available · Q2 2026
          </div>
          <div className="hidden md:flex items-center gap-6">
            <span>Quito, Ecuador</span>
            <span className="text-ink-700">|</span>
            <span>EN · C1 / ES · Native</span>
          </div>
          <div>v.2026</div>
        </div>
      </div>

      {/* Main hero content */}
      <div className="flex-1 flex flex-col justify-center px-6 md:px-12 py-16 md:py-24 max-w-[1400px] mx-auto w-full">

        {/* Section number + label */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-[11px] font-mono text-ink-500 tabular-nums">[ 00 ]</span>
          <div className="h-px flex-1 bg-white/[0.08] max-w-[80px]" />
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-ink-400">Introduction</span>
        </div>

        {/* Headline */}
        <h1 className="font-extrabold tracking-[-0.04em] leading-[0.92] mb-10">
          <span className="block text-[14vw] md:text-[10vw] lg:text-[8.5vw] xl:text-[140px] text-ink-100">
            Creative
          </span>
          <span className="block text-[14vw] md:text-[10vw] lg:text-[8.5vw] xl:text-[140px] -mt-2">
            <span className="text-ink-100">production,</span>{' '}
            <span className="font-serif italic font-normal text-brand-lime tracking-tight">delivered</span>
          </span>
          <span className="block text-[14vw] md:text-[10vw] lg:text-[8.5vw] xl:text-[140px] -mt-2 text-ink-100">
            at AI speed.
          </span>
        </h1>

        {/* Sub headline + CTA */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-end mb-16">
          <div className="md:col-span-7">
            <p className="text-lg md:text-xl text-ink-300 max-w-2xl leading-relaxed">
              Hi, I'm <span className="text-ink-100">Jean-Paul</span>. I'm a bilingual creative producer who builds <span className="text-ink-100">video, decks, and social-ready visual assets</span> for founders, agencies, and remote teams — using AI-accelerated workflows that ship fast without cutting corners.
            </p>
          </div>
          <div className="md:col-span-5 flex flex-col sm:flex-row md:flex-col gap-3">
            <a
              href="mailto:jeanpaulserrado@gmail.com"
              className="group flex items-center justify-between px-5 py-4 bg-brand-lime text-brand-black font-bold rounded-lg hover:bg-white transition-colors"
            >
              <span className="text-sm">Start a project</span>
              <Icons.ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://linkedin.com/in/jeanpaulserrado"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between px-5 py-4 border border-white/15 text-ink-100 font-medium rounded-lg hover:bg-white/[0.05] hover:border-white/25 transition-all"
            >
              <span className="text-sm">View LinkedIn</span>
              <Icons.ExternalLink className="w-3.5 h-3.5 text-ink-400 group-hover:text-ink-100 transition-colors" />
            </a>
          </div>
        </div>

        {/* ════════ Slide shortcuts — direct jump to any section ════════ */}
        <div className="border-t border-white/[0.06] pt-10 mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-ink-500">Jump to a section</span>
            <div className="h-px flex-1 bg-white/[0.06]" />
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-ink-600 hidden sm:block">
              Click any tile
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
            {shortcuts.map((s) => {
              const Icon = s.icon;
              return (
                <button
                  key={s.label}
                  onClick={() => jumpToSlide(s.index)}
                  className="group relative flex items-center gap-3 px-4 py-3.5 rounded-lg border border-white/[0.08] bg-white/[0.02] hover:bg-brand-lime hover:border-brand-lime hover:text-brand-black text-ink-200 transition-all duration-200"
                  aria-label={`Jump to ${s.label}`}
                >
                  <Icon className="w-4 h-4 text-ink-400 group-hover:text-brand-black shrink-0 transition-colors" />
                  <span className="text-sm font-medium flex-1 text-left truncate">{s.label}</span>
                  <span className="font-mono text-[10px] tabular-nums text-ink-500 group-hover:text-brand-black/60 shrink-0 transition-colors">
                    {s.display}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick legend */}
          <div className="mt-5 flex items-center gap-4 text-[10px] font-mono uppercase tracking-widest text-ink-600">
            <span className="hidden sm:inline-flex items-center gap-1.5">
              <kbd className="bg-white/[0.04] border border-white/[0.08] px-1.5 py-0.5 rounded">←</kbd>
              <kbd className="bg-white/[0.04] border border-white/[0.08] px-1.5 py-0.5 rounded">→</kbd>
              navigate
            </span>
            <span className="inline-flex items-center gap-1.5">
              <kbd className="bg-white/[0.04] border border-white/[0.08] px-1.5 py-0.5 rounded">?</kbd>
              all shortcuts
            </span>
            <span className="inline-flex items-center gap-1.5">
              <kbd className="bg-white/[0.04] border border-white/[0.08] px-1.5 py-0.5 rounded">i</kbd>
              full index
            </span>
          </div>
        </div>

        {/* Quick facts grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.06] border-y border-white/[0.06]">
          {[
            { label: 'Years in B2B Media', value: '3+' },
            { label: 'Content Output Scale', value: '300%' },
            { label: 'Languages', value: 'EN / ES' },
            { label: 'Remote', value: 'Worldwide' },
          ].map((fact, idx) => (
            <div key={idx} className="bg-brand-black px-6 py-6">
              <p className="text-2xl md:text-3xl font-extrabold text-ink-100 tabular-nums tracking-tight mb-1">
                {fact.value}
              </p>
              <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-ink-500">
                {fact.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee ticker */}
      <div className="border-t border-white/[0.06] py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
            <span key={idx} className="mx-8 text-sm font-serif italic text-ink-500 inline-flex items-center gap-8">
              {item}
              <span className="w-1 h-1 rounded-full bg-brand-lime" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
