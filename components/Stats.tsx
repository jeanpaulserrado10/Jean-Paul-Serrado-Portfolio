import React from 'react';

const headlineStats = [
  {
    value: '300',
    suffix: '%',
    label: 'Content Velocity',
    note: 'Output increase via AI-augmented production pipeline at Spruces (Australia).',
  },
  {
    value: '30',
    suffix: '+',
    label: 'Videos / Quarter',
    note: 'Short-form social cuts produced consistently for B2B channels.',
  },
  {
    value: '10',
    suffix: '+',
    label: 'Page-1 Keywords',
    note: 'SEO rankings achieved through AI-assisted content workflows.',
  },
];

const supportingFacts = [
  { k: 'Reach', v: '300K+ professionals', meta: 'Combined audience across IIoT World channels' },
  { k: 'Vertical Range', v: 'Industrial · B2B · Service', meta: 'From construction cleaning to industrial AI' },
  { k: 'Ownership', v: 'End-to-end pipelines', meta: 'Solo producer, agency-grade output' },
  { k: 'Tooling', v: '20+ specialised tools', meta: 'Adobe Suite, generative AI, dev tooling' },
];

export const Stats: React.FC = () => {
  return (
    <section className="bg-brand-black text-ink-100 min-h-full px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto">

        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-[11px] font-mono text-ink-500 tabular-nums">[ 01 ]</span>
          <div className="h-px flex-1 bg-white/[0.08] max-w-[80px]" />
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-ink-400">By the numbers</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-24">
          {/* Section title */}
          <div className="lg:col-span-5">
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-[-0.03em] leading-[0.95] mb-6">
              Output that <span className="font-serif italic font-normal text-brand-lime">compounds.</span>
            </h2>
            <p className="text-ink-400 text-lg leading-relaxed max-w-md">
              Three years of refined creative pipelines — measured in shipped work, not screenshots of dashboards.
            </p>
          </div>

          {/* Supporting facts */}
          <div className="lg:col-span-7 self-end">
            <dl className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
              {supportingFacts.map((f, idx) => (
                <div key={idx} className="grid grid-cols-12 gap-4 py-4 group">
                  <dt className="col-span-3 text-[10px] font-mono uppercase tracking-[0.2em] text-ink-500 pt-1">
                    {f.k}
                  </dt>
                  <dd className="col-span-9">
                    <p className="text-ink-100 font-medium text-base mb-0.5">{f.v}</p>
                    <p className="text-ink-500 text-xs">{f.meta}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Big stat row */}
        <div className="grid md:grid-cols-3 gap-px bg-white/[0.06] border-y border-white/[0.06]">
          {headlineStats.map((s, idx) => (
            <div key={idx} className="bg-brand-black p-8 md:p-10 group hover:bg-white/[0.02] transition-colors">
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-7xl md:text-8xl font-extrabold tracking-[-0.04em] tabular-nums text-ink-100 group-hover:text-brand-lime transition-colors leading-none">
                  {s.value}
                </span>
                <span className="text-3xl md:text-4xl font-extrabold tracking-tight text-ink-400 group-hover:text-brand-lime transition-colors">
                  {s.suffix}
                </span>
              </div>
              <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-ink-400 mb-3">
                {s.label}
              </p>
              <p className="text-sm text-ink-500 leading-relaxed">
                {s.note}
              </p>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <p className="text-center text-ink-500 italic font-serif text-2xl md:text-3xl mt-24 max-w-3xl mx-auto leading-snug">
          "One producer. The pipeline of a small team. Output that ships every week."
        </p>
      </div>
    </section>
  );
};
