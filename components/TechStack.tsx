import React from 'react';

interface ToolGroup {
  category: string;
  pitch: string;
  insight: string;
  tools: string[];
}

const stack: ToolGroup[] = [
  {
    category: 'Video Production',
    pitch: 'Edit / Motion / AI Avatar',
    insight: 'I edit across formats — vertical social cuts, landscape promotional videos, event features. AI handles the repetitive work so I can focus on pacing, hooks, and story.',
    tools: ['Adobe Premiere Pro', 'CapCut AI', 'HeyGen', 'Veo', 'Synthesia', 'Runway', 'Descript', 'OpusClip'],
  },
  {
    category: 'Presentation Design',
    pitch: 'Decks / Pitches / Slides',
    insight: 'From rough notes to polished decks in hours. I work across the full range of deck tools, matching the right platform to each project.',
    tools: ['PowerPoint', 'Keynote', 'Google Slides', 'Canva', 'Figma', 'Gamma', 'Beautiful.ai', 'Pitch', 'Tome'],
  },
  {
    category: 'Visual Design',
    pitch: 'Brand / Generative / Print',
    insight: 'Custom visuals tailored to the brand, the campaign, and the moment — no stock, no shortcuts.',
    tools: ['Figma', 'Canva', 'Adobe Illustrator', 'Adobe Photoshop', 'Midjourney', 'Nano Banana Pro', 'Adobe Firefly'],
  },
  {
    category: 'Workflow & AI Orchestration',
    pitch: 'Ops / Pipelines',
    insight: 'The infrastructure that makes fast, high-quality output possible — project management, scripting, and AI orchestration.',
    tools: ['Claude', 'Google AI Studio', 'Notion', 'Airtable', 'Frame.io', 'ClickUp', 'Slack'],
  },
];

export const TechStack: React.FC = () => {
  return (
    <section className="bg-brand-black text-ink-100 min-h-full px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto">

        <div className="flex items-center gap-4 mb-16">
          <span className="text-[11px] font-mono text-ink-500 tabular-nums">[ 04 ]</span>
          <div className="h-px flex-1 bg-white/[0.08] max-w-[80px]" />
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-ink-400">The stack</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-5">
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-[-0.03em] leading-[0.95] mb-6">
              Standard tools, <br/>
              <span className="font-serif italic font-normal text-brand-lime">supercharged.</span>
            </h2>
            <p className="text-ink-400 text-lg leading-relaxed max-w-md">
              The tooling stack that makes solo, agency-grade output realistic — paired with AI for the repetitive work.
            </p>
          </div>
          <div className="lg:col-span-7 self-end">
            <p className="text-ink-500 text-sm font-mono uppercase tracking-widest border-l-2 border-brand-lime pl-4">
              {stack.reduce((acc, s) => acc + s.tools.length, 0)} tools · 4 disciplines
            </p>
          </div>
        </div>

        {/* Discipline breakdown */}
        <div className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
          {stack.map((group, idx) => (
            <article
              key={idx}
              className="grid lg:grid-cols-12 gap-8 py-8 md:py-10 group hover:bg-white/[0.015] transition-colors"
            >
              {/* Index + category */}
              <div className="lg:col-span-3">
                <p className="text-[11px] font-mono text-ink-500 tabular-nums mb-2">
                  / {String(idx + 1).padStart(2, '0')}
                </p>
                <h3 className="text-2xl md:text-3xl font-extrabold tracking-[-0.02em] mb-2 group-hover:text-brand-lime transition-colors">
                  {group.category}
                </h3>
                <p className="text-[10px] font-mono uppercase tracking-widest text-ink-500">
                  {group.pitch}
                </p>
              </div>

              {/* Insight */}
              <div className="lg:col-span-4">
                <p className="text-ink-300 text-base leading-relaxed font-serif italic">
                  "{group.insight}"
                </p>
              </div>

              {/* Tool chips */}
              <div className="lg:col-span-5">
                <div className="flex flex-wrap gap-1.5">
                  {group.tools.map((tool, ti) => (
                    <span
                      key={ti}
                      className="inline-flex items-center px-3 py-1.5 rounded-md border border-white/[0.08] bg-white/[0.02] text-xs text-ink-200 font-medium hover:border-brand-lime/30 hover:bg-brand-lime/5 hover:text-brand-lime transition-colors cursor-default"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-ink-500 italic font-serif text-lg mt-16 max-w-2xl mx-auto leading-snug">
          The right tool for the job, every time. The infrastructure stays invisible — the work speaks.
        </p>
      </div>
    </section>
  );
};
