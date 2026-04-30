import React from 'react';
import { Icons } from './Icons';

interface Capability {
  number: string;
  category: string;
  title: string;
  description: string;
  deliverables: string[];
}

const capabilities: Capability[] = [
  {
    number: '01',
    category: 'Video & Content Production',
    title: 'Video Production',
    description: 'Short-form social cuts, promotional and brand videos, event coverage, and learning content — across vertical and landscape formats. From raw footage to polished edit with hooks, subtitles, and motion design.',
    deliverables: [
      'Short-form social edits (Shorts, Reels, TikTok)',
      'Promotional & brand videos',
      'Event coverage & sponsor features',
      'Learning & educational videos',
    ],
  },
  {
    number: '02',
    category: 'Deck & Visual Design',
    title: 'Presentation Decks',
    description: 'Investor decks, sales presentations, and brand storytelling slides designed to look sharp and communicate clearly — built in the right tool for the job, every time.',
    deliverables: [
      'Pitch decks for founders',
      'Sales & client decks',
      'Course & keynote slides',
    ],
  },
  {
    number: '03',
    category: 'Content Strategy & SEO',
    title: 'Content Systems',
    description: 'SEO-optimized content systems that scale output without breaking quality. From keyword research to AI-augmented production pipelines that ship 18 articles + 30 videos per quarter.',
    deliverables: [
      'SEO content strategy & keyword research',
      'AI content pipelines (300% output scale)',
      'Editorial workflows & content calendars',
      'On-brand metadata & copywriting',
    ],
  },
  {
    number: '04',
    category: 'AEO & GEO',
    title: 'AI Search Visibility',
    description: 'The new search layer. Optimize content for both answer engines (featured snippets, voice search) and generative engines (ChatGPT, Perplexity, Gemini) — so your brand shows up wherever people ask questions in your category, not just where they search.',
    deliverables: [
      'AI citation audits across ChatGPT, Perplexity, Gemini',
      'Schema markup & structured answer optimization',
      'Featured snippet & answer box targeting',
      'Brand mention strategy for generative engines',
    ],
  },
  {
    number: '05',
    category: 'Reporting & Analytics',
    title: 'Performance Reporting',
    description: 'Custom dashboards and client-facing reports that turn raw platform data into clear performance stories — built in GA4, Looker Studio, and custom tools when off-the-shelf isn\'t enough.',
    deliverables: [
      'GA4 & Looker Studio dashboards',
      'Custom client reports',
      'Campaign ROI tracking',
      'Social analytics',
      'GEO & AEO reports',
    ],
  },
];

const addOns = [
  {
    title: 'Custom Visual Assets',
    desc: 'Bespoke imagery built specifically for decks, videos, and social posts. No stock photos.',
    icon: Icons.Image,
  },
  {
    title: 'Thumbnails & Covers',
    desc: 'YouTube thumbnails, podcast covers, and course covers designed to get the click.',
    icon: Icons.PlaySquare,
  },
  {
    title: 'Social Media Graphics',
    desc: 'Carousels, quote cards, and announcement graphics for LinkedIn and Instagram.',
    icon: Icons.Grid,
  },
];

export const ThreeServices: React.FC = () => {
  return (
    <section className="bg-brand-black text-ink-100 min-h-full px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto">

        <div className="flex items-center gap-4 mb-16">
          <span className="text-[11px] font-mono text-ink-500 tabular-nums">[ 02 ]</span>
          <div className="h-px flex-1 bg-white/[0.08] max-w-[80px]" />
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-ink-400">What I do</span>
        </div>

        {/* Main framing + capability list */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-24">

          {/* Framing column — sticky on desktop so it stays as you scroll the cards */}
          <div className="lg:col-span-5 lg:sticky lg:top-8 self-start">
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-[-0.03em] leading-[0.95] mb-6">
              What I build. <br/>
              <span className="font-serif italic font-normal text-brand-lime">End-to-end.</span>
            </h2>
            <p className="text-ink-400 text-lg leading-relaxed max-w-md mb-6">
              Content operations that ship — strategy, production, and reporting in one loop. AI-accelerated where it speeds the work up. Hand-crafted where craft matters.
            </p>
            <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-ink-500 border-l-2 border-brand-lime pl-4">
              {capabilities.length} capabilities · 1 producer
            </p>
          </div>

          {/* Capability cards */}
          <div className="lg:col-span-7 space-y-px">
            {capabilities.map((cap) => (
              <div
                key={cap.number}
                className="group border border-white/[0.06] hover:border-brand-lime/30 bg-brand-card/30 hover:bg-brand-card/60 transition-all duration-300 p-7 md:p-9"
              >
                {/* Card header — number + category tag */}
                <div className="flex items-center justify-between gap-4 mb-5">
                  <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-ink-500 group-hover:text-brand-lime transition-colors">
                    {cap.number} — {cap.category}
                  </p>
                  <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-ink-700 group-hover:bg-brand-lime transition-colors" />
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-extrabold tracking-[-0.02em] text-ink-100 leading-tight mb-4">
                  {cap.title}
                </h3>

                {/* Description */}
                <p className="text-ink-300 text-base leading-relaxed mb-6 max-w-2xl">
                  {cap.description}
                </p>

                {/* Deliverables */}
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                  {cap.deliverables.map((d, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2.5 text-sm text-ink-400">
                      <span className="text-brand-lime mt-1.5 shrink-0">→</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Add-ons */}
        <div>
          <div className="flex items-end justify-between mb-10 pb-6 border-b border-white/[0.06]">
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-ink-500 mb-2">Also available</p>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Brand visuals that ship alongside the work</h3>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-white/[0.06]">
            {addOns.map((addon, idx) => {
              const Icon = addon.icon;
              return (
                <div key={idx} className="bg-brand-black p-8 group hover:bg-white/[0.02] transition-colors">
                  <Icon className="w-6 h-6 text-ink-500 group-hover:text-brand-lime transition-colors mb-6" />
                  <h4 className="text-ink-100 font-bold text-lg mb-2 tracking-tight">{addon.title}</h4>
                  <p className="text-sm text-ink-400 leading-relaxed">{addon.desc}</p>
                </div>
              );
            })}
          </div>

          <p className="text-center text-ink-500 italic font-serif text-lg mt-16 max-w-2xl mx-auto leading-snug">
            Plus: when a client needs a simple internal tool to make their workflow faster, I can build it using AI-assisted development. Ask me.
          </p>
        </div>
      </div>
    </section>
  );
};
