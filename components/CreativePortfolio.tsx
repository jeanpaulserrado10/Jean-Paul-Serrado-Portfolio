import React from 'react';
import { Icons } from './Icons';

interface PortfolioImage {
  url: string;
  label: string;
  overlay?: React.ReactNode;
}

interface PortfolioItem {
  category: string;
  title: string;
  client: string;
  year: string;
  images: PortfolioImage[];
  challenge: string;
  action: string;
  outcome: string;
  metrics: { label: string; value: string }[];
}

const portfolioItems: PortfolioItem[] = [
  {
    category: 'Service Launch Campaign',
    title: 'Spruces — Post-Construction',
    client: 'Spruces (Australia)',
    year: '2024 — 2025',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop',
        label: 'Site Handover Visual',
        overlay: (
          <div className="absolute top-5 left-5 bg-[#183630]/95 px-5 py-3 rounded-lg border-l-2 border-[#c7de6b] shadow-xl backdrop-blur-sm">
            <h3 className="text-[#c7de6b] font-bold text-3xl tracking-tight leading-none mb-0.5">spruces.</h3>
            <span className="text-white text-[9px] uppercase tracking-widest font-mono">Post-Construction Ready</span>
          </div>
        ),
      },
      {
        url: 'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=400&auto=format&fit=crop',
        label: 'Campaign Social Asset',
        overlay: (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#183630]/85 p-6 text-center backdrop-blur-[2px]">
            <p className="text-white font-bold text-[10px] uppercase tracking-[0.25em] mb-2">Not Satisfied?</p>
            <h4 className="text-[#c7de6b] font-extrabold text-3xl leading-none drop-shadow-md">Talk Dirty<br/>To Us</h4>
          </div>
        ),
      },
      {
        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=400&auto=format&fit=crop',
        label: 'Service Integration',
        overlay: (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-black via-brand-black/85 to-transparent p-5 pt-10">
            <div className="text-[#c7de6b] text-[10px] font-bold mb-1 tracking-widest font-mono">PROTOCOL 3</div>
            <div className="text-white text-base font-bold leading-tight">Handover certified.</div>
          </div>
        ),
      },
    ],
    challenge: "Spruces needed to dominate the 'Post-Construction' niche. The challenge was applying their vibrant 'Lime & Forest' brand identity to gritty industrial imagery without losing the premium feel.",
    action: 'Ingested the Spruces Brand Guide into Nano Banana. Generated hyper-realistic scenes of branded crews in finished luxury builds. Automated "Talk Dirty To Us" social assets.',
    outcome: 'The campaign increased quote requests by 300% in week 1. Established authority in the construction sector immediately with "Protocol 3" messaging.',
    metrics: [
      { label: 'Quote Req.', value: '+300%' },
      { label: 'Brand Recall', value: 'High' },
      { label: 'Assets Shipped', value: '25+' },
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
              How a generative workflow translates a brand identity into shippable, on-brand creative — not stock photos.
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

            {/* Image gallery */}
            <div className="grid grid-cols-2 grid-rows-2 gap-3 h-[450px] md:h-[600px] mb-12">
              <div className="col-span-1 row-span-2 relative rounded-xl overflow-hidden border border-white/[0.08] bg-ink-800 group">
                <img src={item.images[0].url} alt={item.images[0].label} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700" />
                {item.images[0].overlay}
                <div className="absolute bottom-3 right-3">
                  <span className="bg-brand-black/80 backdrop-blur border border-white/10 text-ink-300 text-[9px] font-mono px-2 py-1 rounded">
                    {item.images[0].label}
                  </span>
                </div>
              </div>
              {[1, 2].map(i => (
                <div key={i} className="col-span-1 row-span-1 relative rounded-xl overflow-hidden border border-white/[0.08] bg-ink-800 group">
                  <img src={item.images[i].url} alt={item.images[i].label} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700" />
                  {item.images[i].overlay}
                  <div className="absolute bottom-3 right-3">
                    <span className="bg-brand-black/80 backdrop-blur border border-white/10 text-ink-300 text-[9px] font-mono px-2 py-1 rounded">
                      {item.images[i].label}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer note */}
            <div className="flex items-center gap-2 mb-12 px-4 py-2.5 bg-brand-card/50 border border-white/[0.06] rounded-full w-fit mx-auto">
              <Icons.Sparkles className="w-3.5 h-3.5 text-brand-lime" />
              <span className="text-xs font-mono text-ink-400">Generated with Nano Banana Pro</span>
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
