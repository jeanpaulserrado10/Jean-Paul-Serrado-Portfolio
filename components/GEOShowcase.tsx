import React from 'react';
import { Icons } from './Icons';

interface CaseMetric {
  before?: string;
  after: string;
  label: string;
  hint: string;
}

const caseMetrics: CaseMetric[] = [
  {
    before: '6',
    after: '29',
    label: 'Visible prompts',
    hint: 'Of 50 tracked',
  },
  {
    before: '#2.9',
    after: '#1.4',
    label: 'Avg. citation position',
    hint: 'Across cited prompts',
  },
  {
    before: '1.4',
    after: '1.7',
    label: 'Citation rate',
    hint: 'Highest of top-8 (ex-Wikipedia)',
  },
  {
    after: '#1',
    label: 'Share of voice',
    hint: 'Among IIoT media brands',
  },
];

const methodology = [
  {
    n: '01',
    title: 'Two-layer baseline audit',
    body: 'Platform-level tracking plus per-article diagnostic testing. Establish the floor before optimising anything.',
  },
  {
    n: '02',
    title: 'Structured listicle content',
    body: 'For technical buyer-intent prompts — single biggest lever for B2B citation gain.',
  },
  {
    n: '03',
    title: 'Proprietary concept ownership',
    body: 'Coining and seeding category-defining terms that AI has to attribute back to the source.',
  },
  {
    n: '04',
    title: 'Citation depth over frequency',
    body: 'Comparison tables, named platforms, specific statistics — the artifacts AI models prefer to cite.',
  },
  {
    n: '05',
    title: 'Off-site authority building',
    body: 'LinkedIn Pulse, Reddit, Wikipedia, third-party industry roundups. 84% of B2B AI citations are off-domain.',
  },
  {
    n: '06',
    title: 'Schema & structured data',
    body: 'FAQ, HowTo, Organization, Article — all in JSON-LD. Makes the page machine-readable at speed.',
  },
  {
    n: '07',
    title: 'Engine-specific tuning',
    body: 'Different optimisation mix for ChatGPT, Claude, Gemini, and Perplexity. No one-size-fits-all stack.',
  },
  {
    n: '08',
    title: 'Monthly re-audit',
    body: 'Model updates change citation behaviour. Track citation rate per prompt cluster as primary KPI.',
  },
];

const services = [
  {
    title: 'GEO Baseline Audit',
    body: 'Multi-platform visibility report across ChatGPT, Claude, Gemini, Perplexity, and Google AI Overview — with competitor citation analysis.',
  },
  {
    title: 'Content Gap Strategy',
    body: 'Identify zero-visibility prompts, rank by opportunity size, and produce prioritised content briefs.',
  },
  {
    title: 'Listicle & Pillar Content',
    body: 'Structured, AI-cite-ready articles with named platforms, comparison tables, and FAQ schema baked in.',
  },
  {
    title: 'Off-Site Authority Strategy',
    body: 'LinkedIn, Reddit, Wikipedia, and third-party roundup placement — where 84% of B2B AI citations live.',
  },
  {
    title: 'Custom Citation Tracking',
    body: 'Per-account audit tooling for ongoing performance measurement. The thing tracking platforms miss.',
  },
  {
    title: 'Monthly Reporting',
    body: 'Strategic reports for leadership, tactical implementation guides for content teams.',
  },
];

const stackTools = [
  'Peec AI',
  'Claude Cowork',
  'ChatGPT',
  'Claude',
  'Gemini',
  'Perplexity',
  'Google AI Overview',
  'JSON-LD',
  'FAQ Schema',
  'Ahrefs',
  'SEMrush',
  'Excel',
  'Google Sheets',
];

export const GEOShowcase: React.FC = () => {
  return (
    <section className="bg-brand-black text-ink-100 min-h-full px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto">

        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-[11px] font-mono text-ink-500 tabular-nums">[ 04 ]</span>
          <div className="h-px flex-1 bg-white/[0.08] max-w-[80px]" />
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-ink-400">GEO · AEO program</span>
        </div>

        {/* Title block */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-20">
          <div className="lg:col-span-7">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.03em] leading-[0.95] mb-6">
              Generative Engine <br/>
              <span className="font-serif italic font-normal text-brand-lime">Optimization.</span>
            </h2>
            <p className="text-xl md:text-2xl text-ink-200 max-w-2xl leading-snug mb-6 font-light">
              Making B2B brands the path of least resistance for AI search.
            </p>
            <p className="text-ink-400 text-base md:text-lg leading-relaxed max-w-2xl">
              End-to-end GEO and AEO programs for B2B brands — baseline audits, content strategy, structured listicle production, off-site authority building, and custom citation-tracking tooling. The work moves brands from <span className="text-ink-200">invisible in AI search</span> to the <span className="text-brand-lime">cited source AI models default to.</span>
            </p>
          </div>
          <div className="lg:col-span-5 self-end">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-lime/10 border border-brand-lime/30 text-brand-lime text-[10px] font-mono uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-lime animate-pulse" />
              Featured Case Study
            </div>
            <p className="text-ink-500 text-sm font-mono leading-relaxed">
              10-week GEO program · Three reporting cycles · Manufacturing, IIoT, and operational technology vertical.
            </p>
          </div>
        </div>

        {/* ═══════ FEATURED CASE STUDY — IIoT World ═══════ */}
        <article className="border-t border-white/[0.08] pt-12 mb-20">
          <header className="grid lg:grid-cols-12 gap-6 mb-10">
            <div className="lg:col-span-7">
              <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-brand-lime mb-3">Case · IIoT World</p>
              <h3 className="text-3xl md:text-4xl font-extrabold tracking-[-0.02em] leading-[1] mb-3">
                IIoT World — B2B Industrial Media
              </h3>
              <p className="text-ink-400 text-base">300,000+ readers · Manufacturing · IIoT · Operational technology</p>
            </div>
            <dl className="lg:col-span-5 grid grid-cols-2 gap-x-6 gap-y-3 self-end">
              <div>
                <dt className="text-[10px] font-mono uppercase tracking-widest text-ink-500 mb-1">Engagement</dt>
                <dd className="text-ink-200 text-sm">10-week program</dd>
              </div>
              <div>
                <dt className="text-[10px] font-mono uppercase tracking-widest text-ink-500 mb-1">Cycles</dt>
                <dd className="text-ink-200 text-sm font-mono">3 reporting cycles</dd>
              </div>
            </dl>
          </header>

          {/* Big metrics grid — the proof points */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] border-y border-white/[0.06] mb-10">
            {caseMetrics.map((m, idx) => (
              <div key={idx} className="bg-brand-black p-6 md:p-8 group hover:bg-white/[0.02] transition-colors">
                {m.before ? (
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="text-2xl md:text-3xl font-extrabold tabular-nums text-ink-500 line-through decoration-ink-700">
                      {m.before}
                    </span>
                    <span className="text-ink-500 text-lg">→</span>
                    <span className="text-4xl md:text-6xl font-extrabold tabular-nums tracking-[-0.03em] text-brand-lime leading-none">
                      {m.after}
                    </span>
                  </div>
                ) : (
                  <div className="mb-4">
                    <span className="text-5xl md:text-7xl font-extrabold tabular-nums tracking-[-0.03em] text-brand-lime leading-none block">
                      {m.after}
                    </span>
                  </div>
                )}
                <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-ink-200 mb-1.5">
                  {m.label}
                </p>
                <p className="text-[11px] text-ink-500 leading-snug">{m.hint}</p>
              </div>
            ))}
          </div>

          {/* Supporting paragraph + per-engine breakdown */}
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-ink-500 mb-3">Program summary</p>
              <p className="text-ink-300 text-base leading-relaxed">
                Built and ran the GEO program from baseline through three reporting cycles. <span className="text-ink-100">Content gap closed from 88% to 42%</span>. URLs cited grew from ~15 to <span className="text-ink-100">67</span>. Mid-cycle visibility peaked at <span className="text-ink-100">12.8%</span>, up from a 7% baseline. Per-engine breakdown via chat-transcript analysis drove engine-specific optimisation priorities.
              </p>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-ink-500 mb-3">Mention rate · per engine</p>
              <div className="space-y-2">
                {[
                  { name: 'Perplexity', value: '19%' },
                  { name: 'ChatGPT', value: '14%' },
                  { name: 'Google AI Overview', value: '5%' },
                ].map((row, idx) => (
                  <div key={idx} className="flex items-center justify-between gap-4 py-1.5 border-b border-white/[0.06] last:border-0">
                    <span className="text-sm text-ink-300">{row.name}</span>
                    <span className="text-base font-extrabold tabular-nums text-ink-100">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>

        {/* ═══════ CUSTOM TOOLING BLOCK — THE DIFFERENTIATOR ═══════ */}
        <div className="relative mb-20 rounded-2xl border border-brand-lime/30 bg-gradient-to-br from-brand-lime/[0.06] via-brand-lime/[0.02] to-transparent overflow-hidden">
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-px h-12 bg-brand-lime" />
          <div className="absolute top-0 left-0 w-12 h-px bg-brand-lime" />
          <div className="absolute bottom-0 right-0 w-px h-12 bg-brand-lime" />
          <div className="absolute bottom-0 right-0 w-12 h-px bg-brand-lime" />

          <div className="p-8 md:p-12 grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-lime text-brand-black text-[10px] font-mono uppercase tracking-widest font-bold mb-5">
                <Icons.Zap className="w-3 h-3" />
                The Differentiator
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold tracking-[-0.02em] leading-tight mb-4">
                Custom GEO <br/>
                <span className="font-serif italic font-normal text-brand-lime">Audit Tool.</span>
              </h3>
              <p className="text-ink-400 text-sm font-mono uppercase tracking-widest border-l-2 border-brand-lime pl-3">
                Built in Claude Cowork · API-driven citation tests
              </p>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <p className="text-ink-200 text-base md:text-lg leading-relaxed">
                Most GEO specialists rely on tracking platforms alone. I built a complementary in-house audit tool using Claude Cowork that runs <span className="text-brand-lime">API-driven citation tests across Perplexity, Gemini, and ChatGPT</span> — scoring individual articles on broad, mid-specific, and highly-specific prompts. Output is a per-article scorecard with citation ranking positions and a combined performance score.
              </p>
              <p className="text-ink-300 text-sm md:text-base leading-relaxed">
                Runs alongside Peec AI tracking. Peec gives the macro picture across 50 prompts; the custom audit gives <span className="text-ink-100">article-level diagnostic depth</span>. Together they make strategy data-driven instead of guesswork.
              </p>

              {/* Tool stats */}
              <div className="grid grid-cols-3 gap-px bg-white/[0.06] border-y border-white/[0.06] mt-4">
                <div className="bg-brand-black p-4">
                  <p className="text-2xl font-extrabold tabular-nums text-ink-100 mb-1">135</p>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-ink-500">Tests / cycle</p>
                </div>
                <div className="bg-brand-black p-4">
                  <p className="text-2xl font-extrabold tabular-nums text-ink-100 mb-1">15</p>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-ink-500">Articles scored</p>
                </div>
                <div className="bg-brand-black p-4">
                  <p className="text-2xl font-extrabold tabular-nums text-ink-100 mb-1">3</p>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-ink-500">Engines tested</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════ METHODOLOGY ═══════ */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-12 gap-8 mb-10">
            <div className="lg:col-span-5">
              <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-ink-500 mb-3">Methodology</p>
              <h3 className="text-4xl md:text-5xl font-extrabold tracking-[-0.03em] leading-[0.95]">
                How I run <br/>
                <span className="font-serif italic font-normal text-brand-lime">GEO programs.</span>
              </h3>
            </div>
            <div className="lg:col-span-7 self-end">
              <p className="text-ink-400 text-base leading-relaxed border-l-2 border-brand-lime pl-4">
                Eight steps that turn AI search visibility from guesswork into a repeatable program — auditable on every cycle.
              </p>
            </div>
          </div>

          <div className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
            {methodology.map((step) => (
              <article
                key={step.n}
                className="grid lg:grid-cols-12 gap-6 py-6 md:py-7 group hover:bg-white/[0.015] transition-colors"
              >
                <div className="lg:col-span-2 flex items-start gap-3">
                  <span className="text-[11px] font-mono text-ink-500 tabular-nums">/ {step.n}</span>
                </div>
                <div className="lg:col-span-4">
                  <h4 className="text-xl font-extrabold tracking-[-0.01em] text-ink-100 group-hover:text-brand-lime transition-colors">
                    {step.title}
                  </h4>
                </div>
                <div className="lg:col-span-6">
                  <p className="text-ink-300 text-base leading-relaxed">{step.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* ═══════ SERVICES BLOCK ═══════ */}
        <div className="mb-20">
          <div className="flex items-end justify-between mb-10 pb-6 border-b border-white/[0.06]">
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-ink-500 mb-2">What I can build</p>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Service offerings</h3>
            </div>
            <span className="text-[10px] font-mono text-ink-500">{services.length} services</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] border-y border-white/[0.06]">
            {services.map((s, idx) => (
              <div
                key={idx}
                className="bg-brand-black p-7 group hover:bg-white/[0.02] transition-colors"
              >
                <p className="text-[10px] font-mono tabular-nums text-ink-500 mb-3 group-hover:text-brand-lime transition-colors">
                  / {String(idx + 1).padStart(2, '0')}
                </p>
                <h4 className="text-lg font-extrabold tracking-tight text-ink-100 mb-3 leading-tight">
                  {s.title}
                </h4>
                <p className="text-ink-400 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ═══════ STACK ═══════ */}
        <div className="mb-20">
          <div className="flex items-end justify-between mb-8 pb-5 border-b border-white/[0.06]">
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-ink-500 mb-2">Stack · GEO tooling</p>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight">Tools I work with</h3>
            </div>
            <span className="text-[10px] font-mono text-ink-500">{stackTools.length} tools</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {stackTools.map((tool, idx) => (
              <span
                key={idx}
                className="inline-flex items-center px-3 py-1.5 rounded-md border border-white/[0.08] bg-white/[0.02] text-xs text-ink-200 font-medium hover:border-brand-lime/30 hover:bg-brand-lime/5 hover:text-brand-lime transition-colors cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* ═══════ CLOSING CTA ═══════ */}
        <div className="border-t border-white/[0.08] pt-16">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-brand-lime mb-4">Closing</p>
              <h3 className="text-4xl md:text-5xl font-extrabold tracking-[-0.03em] leading-[0.95] mb-6">
                See the <span className="font-serif italic font-normal text-brand-lime">actual reports.</span>
              </h3>
              <p className="text-ink-300 text-lg leading-relaxed max-w-xl">
                Happy to walk through redacted versions of the Peec AI reports, custom audit framework, and per-article scorecards on a call.
              </p>
            </div>
            <div className="lg:col-span-5">
              <a
                href="mailto:jeanpaulserrado@gmail.com?subject=GEO%2FAEO%20strategy%20call"
                className="group flex items-center justify-between px-6 py-5 bg-brand-lime text-brand-black font-bold rounded-lg hover:bg-white transition-colors"
              >
                <span className="text-base">Let's talk</span>
                <Icons.ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-[10px] font-mono uppercase tracking-widest text-ink-600 mt-3 text-center">
                jeanpaulserrado@gmail.com
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
