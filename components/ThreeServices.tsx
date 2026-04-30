import React from 'react';
import { Icons } from './Icons';

const mainServices = [
  {
    number: '01',
    title: 'Video Production',
    short: 'Video Editing',
    description: 'Short-form social cuts, promotional videos, event coverage, and learning videos — across vertical and landscape formats. From raw footage to polished edit with hooks, subtitles, and motion design.',
    deliverables: [
      'Short-form social edits (Shorts, Reels, TikTok)',
      'Promotional & brand videos',
      'Event coverage & sponsor features',
      'Learning & educational videos',
    ],
  },
  {
    number: '02',
    title: 'Presentation Decks',
    short: 'Deck Design',
    description: 'Investor decks, sales presentations, and brand storytelling slides designed to look sharp and communicate clearly — built in the right tool for the job, every time.',
    deliverables: [
      'Pitch decks for founders',
      'Sales & client decks',
      'Course & keynote slides',
    ],
  },
];

const addOns = [
  {
    title: 'Custom Visual Assets',
    desc: 'Bespoke imagery built specifically for your decks, videos, and social posts. No stock photos.',
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

        {/* Main services */}
        <div className="grid lg:grid-cols-12 gap-8 mb-24">
          <div className="lg:col-span-5">
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-[-0.03em] leading-[0.95] mb-6">
              Two services. <br/>
              <span className="font-serif italic font-normal text-brand-lime">Done well.</span>
            </h2>
            <p className="text-ink-400 text-lg leading-relaxed max-w-md">
              Tight focus, AI-accelerated workflows, human craft. Each deliverable shipped fast — without cutting corners.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-px">
            {mainServices.map((service, idx) => (
              <div
                key={idx}
                className="group border border-white/[0.06] hover:border-brand-lime/30 bg-brand-card/30 hover:bg-brand-card/60 transition-all duration-300 p-8 md:p-10"
              >
                <div className="flex items-start justify-between gap-6 mb-6">
                  <div>
                    <p className="text-[11px] font-mono text-ink-500 tabular-nums mb-3">{service.number}</p>
                    <h3 className="text-3xl md:text-4xl font-extrabold tracking-[-0.02em] text-ink-100 leading-tight">
                      {service.title}
                    </h3>
                  </div>
                  <span className="shrink-0 text-[10px] font-mono uppercase tracking-widest text-ink-500 border border-white/[0.08] px-2.5 py-1 rounded">
                    {service.short}
                  </span>
                </div>
                <p className="text-ink-300 text-base leading-relaxed mb-8 max-w-xl">
                  {service.description}
                </p>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                  {service.deliverables.map((d, dIdx) => (
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
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Add-ons that ship alongside the work</h3>
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
