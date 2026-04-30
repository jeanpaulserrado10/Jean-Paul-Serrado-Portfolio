import React from 'react';
import { Icons } from './Icons';

const channels = [
  {
    label: 'Email',
    value: 'jeanpaulserrado@gmail.com',
    href: 'mailto:jeanpaulserrado@gmail.com',
    icon: Icons.Mail,
    primary: true,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/jeanpaulserrado',
    href: 'https://linkedin.com/in/jeanpaulserrado',
    icon: Icons.LinkedIn,
  },
];

const facts = [
  { k: 'Location', v: 'Quito, Ecuador' },
  { k: 'Time Zone', v: 'UTC-5' },
  { k: 'Languages', v: 'EN · C1 / ES · Native' },
  { k: 'Availability', v: 'Q2 2026 — Open' },
];

export const Contact: React.FC = () => {
  return (
    <section className="bg-brand-black text-ink-100 min-h-full px-6 md:px-12 py-16 md:py-24 relative overflow-hidden">

      {/* Soft accent glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-lime/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">

        <div className="flex items-center gap-4 mb-16">
          <span className="text-[11px] font-mono text-ink-500 tabular-nums">[ 09 ]</span>
          <div className="h-px flex-1 bg-white/[0.08] max-w-[80px]" />
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-ink-400">Contact</span>
        </div>

        {/* Big closer */}
        <div className="mb-20">
          <h2 className="text-6xl md:text-8xl lg:text-[140px] font-extrabold tracking-[-0.04em] leading-[0.92] mb-12">
            <span className="block">Let's make</span>
            <span className="block">
              <span className="font-serif italic font-normal text-brand-lime">something</span>
            </span>
            <span className="block">that ships.</span>
          </h2>

          <p className="text-ink-300 text-xl md:text-2xl max-w-2xl leading-relaxed font-light">
            Available for remote creative production work worldwide.<br/>
            Video, decks, visuals — fast, bilingual, agency-grade.
          </p>
        </div>

        {/* Channels */}
        <div className="grid md:grid-cols-2 gap-px bg-white/[0.06] border-y border-white/[0.06] mb-20">
          {channels.map((c, idx) => {
            const Icon = c.icon;
            return (
              <a
                key={idx}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className={`group relative bg-brand-black p-8 md:p-10 flex items-center gap-6 transition-colors ${
                  c.primary ? 'hover:bg-brand-lime hover:text-brand-black' : 'hover:bg-white/[0.03]'
                }`}
              >
                <div className={`shrink-0 w-12 h-12 rounded-full border flex items-center justify-center transition-colors ${
                  c.primary
                    ? 'border-brand-lime/30 bg-brand-lime/5 text-brand-lime group-hover:bg-brand-black/10 group-hover:border-brand-black/20 group-hover:text-brand-black'
                    : 'border-white/[0.1] bg-white/[0.02] text-ink-300 group-hover:text-ink-100'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-[10px] font-mono uppercase tracking-[0.25em] mb-2 transition-colors ${
                    c.primary ? 'text-ink-500 group-hover:text-brand-black/70' : 'text-ink-500'
                  }`}>
                    {c.label}
                  </p>
                  <p className={`text-lg md:text-xl font-bold tracking-tight truncate transition-colors ${
                    c.primary ? 'group-hover:text-brand-black' : 'group-hover:text-brand-lime'
                  }`}>
                    {c.value}
                  </p>
                </div>
                <span className={`text-2xl shrink-0 transition-all ${
                  c.primary ? 'text-ink-500 group-hover:text-brand-black group-hover:translate-x-1' : 'text-ink-500 group-hover:text-ink-100 group-hover:translate-x-1'
                }`}>
                  →
                </span>
              </a>
            );
          })}
        </div>

        {/* Facts grid */}
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.06] border-y border-white/[0.06] mb-20">
          {facts.map((f, idx) => (
            <div key={idx} className="bg-brand-black px-6 py-6">
              <dt className="text-[10px] font-mono uppercase tracking-[0.18em] text-ink-500 mb-2">{f.k}</dt>
              <dd className="text-ink-100 font-bold tracking-tight">{f.v}</dd>
            </div>
          ))}
        </dl>

        {/* Footer */}
        <footer className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.06] text-[10px] font-mono uppercase tracking-widest text-ink-500">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-md bg-brand-lime flex items-center justify-center">
              <span className="text-brand-black font-bold text-[10px] leading-none">J</span>
            </div>
            <span>Jean-Paul Serrado · Creative Producer</span>
          </div>
          <div className="flex items-center gap-4">
            <span>© 2026</span>
            <span className="text-ink-700">·</span>
            <span>Built with care</span>
          </div>
        </footer>
      </div>
    </section>
  );
};
