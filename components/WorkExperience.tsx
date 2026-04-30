import React, { useState } from 'react';
import { Icons } from './Icons';
import { Experience } from '../types';

const experiences: Experience[] = [
  {
    role: "Creative Content Producer",
    company: "IIoT World · Remote",
    period: "01/2025 — Present",
    description: "Creative production for a leading B2B media outlet covering Industrial AI, IoT, and Cybersecurity — trusted by 300,000+ professionals worldwide. Full ownership of video production, social visual design, presentation decks, and custom internal tooling.",
    caseStudy: {
      challenge: "The platform needed consistent, well-crafted video and visual content across YouTube, LinkedIn, and event campaigns — while also managing hundreds of industry events, speakers, and sponsor relationships that lived scattered across spreadsheets.",
      action: "Built a complete creative workflow covering video production, social graphics, and presentation decks. Also designed and built two internal web apps: a client campaign reporting tool that turns raw social media data into polished, on-brand reports, and an events database web app that centralizes event data — speakers, sponsors, sessions, and performance analytics — into organized dashboards with AI-powered chatbot search, ready to present to potential clients and sponsors.",
      outcome: "Consistent creative output across video and design, plus two custom tools that turned scattered data into structured, client-ready assets."
    },
    detailedMetrics: [
      { label: "Video Output", value: "Consistent", growth: 90, suffix: "", color: "bg-brand-lime" },
      { label: "Visual Assets", value: "Consistent", growth: 85, suffix: "", color: "bg-ink-200" },
      { label: "Internal Tools", value: "2", growth: 100, suffix: " shipped", color: "bg-ink-200" }
    ],
    metrics: []
  },
  {
    role: "Creative Content Producer",
    company: "Spruces Construction Cleaning · Australia",
    period: "08/2024 — 12/2025",
    description: "Full creative production for a construction cleaning service brand entering a competitive market. Built a complete creative pipeline from scratch with no in-house creative team — covering video production, visual design, and SEO-optimized content.",
    link: "https://spruces.co/blog/",
    linkText: "View Live Generated Blogs",
    referral: {
      role: "CEO, Spruces",
      contact: "+61 489 937 600"
    },
    caseStudy: {
      challenge: "The company needed a complete visual and content presence — video, brand imagery, and search visibility — but had no in-house creative team and couldn't afford enterprise agency rates.",
      action: "Built a complete creative pipeline from scratch. Produced short-form social videos (YouTube Shorts, Reels) plus long-form promotional and educational videos covering services, processes, and customer guidance — using Veo, HeyGen, Synthesia, Adobe Premiere Pro and CapCut AI across vertical and landscape formats. Designed custom campaign visuals and scene-specific imagery with Nano Banana Pro, Adobe Illustrator, Photoshop, Midjourney, and Canva, replacing generic stock with on-brand assets tailored to the construction cleaning industry.\n\nBuilt an end-to-end AI content pipeline merging Gemini and generative video models to scale output 300% (18 blog articles + 30 short-form videos per quarter) while cutting manual production time by 50%. SEO-optimized content via AI semantic analysis secured Page 1 rankings for 10+ target keywords and boosted Organic CTR by 25%.",
      outcome: "Established a recognizable visual identity, a consistent creative output across video and design, and measurable search visibility — all delivered by one producer using AI-accelerated workflows."
    },
    detailedMetrics: [
      { label: "Content Velocity", value: "300", growth: 100, suffix: "%", color: "bg-brand-lime" },
      { label: "Video Output", value: "30+", growth: 85, suffix: "/quarter", color: "bg-ink-200" },
      { label: "Visual Assets", value: "High", growth: 90, suffix: " volume", color: "bg-ink-200" },
      { label: "SEO Rankings", value: "Page 1", growth: 95, suffix: " · 10+ keywords", color: "bg-ink-200" },
      { label: "Organic CTR Boost", value: "+25", growth: 80, suffix: "%", color: "bg-ink-200" }
    ],
    metrics: []
  },
  {
    role: "Independent Creative Producer",
    company: "Freelance · Project-based",
    period: "2022 — 2024",
    description: "Two years of independent project work refining the AI-augmented creative production workflow I use today — across video editing, visual design, and content operations for a range of remote clients.",
    caseStudy: {
      challenge: "Small clients needed creative production — video, visuals, content — but couldn't afford traditional agency rates or full-time hires.",
      action: "Built and refined an AI-accelerated creative workflow that allowed one producer to deliver the output of a small team. Experimented with emerging tools across video editing, visual design, and content production to find what actually saves time without compromising quality.",
      outcome: "Laid the foundation for the production workflow I use in professional work today — combining hands-on craft with AI tools to ship quality work fast."
    },
    detailedMetrics: [
      { label: "Project Range", value: "Multi-Client", growth: 90, suffix: "", color: "bg-ink-200" },
      { label: "Workflow Built", value: "End-to-End", growth: 100, suffix: "", color: "bg-brand-lime" },
      { label: "AI Integration", value: "Core", growth: 85, suffix: "", color: "bg-ink-200" }
    ],
    metrics: []
  }
];

export const WorkExperience: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(0);

  return (
    <section className="bg-brand-black text-ink-100 min-h-full px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto">

        <div className="flex items-center gap-4 mb-16">
          <span className="text-[11px] font-mono text-ink-500 tabular-nums">[ 03 ]</span>
          <div className="h-px flex-1 bg-white/[0.08] max-w-[80px]" />
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-ink-400">Experience</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-5">
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-[-0.03em] leading-[0.95] mb-6">
              The track <span className="font-serif italic font-normal text-brand-lime">record.</span>
            </h2>
            <p className="text-ink-400 text-lg leading-relaxed max-w-md">
              Three roles. Three verifiable case studies. Click any year to read the full breakdown.
            </p>
          </div>
          <div className="lg:col-span-7 self-end">
            <p className="text-ink-500 text-sm font-mono uppercase tracking-widest border-l-2 border-brand-lime pl-4">
              {experiences.length} positions · 2022 → present
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-white/[0.08] md:left-[140px]" />

          <div className="space-y-px">
            {experiences.map((exp, idx) => {
              const isExpanded = expandedId === idx;
              return (
                <article
                  key={idx}
                  className={`relative pl-8 md:pl-[180px] pb-px transition-colors ${isExpanded ? 'bg-white/[0.02]' : ''}`}
                >
                  {/* Year tab */}
                  <div className="absolute left-0 top-8 hidden md:block">
                    <p className="text-[10px] font-mono text-ink-500 uppercase tracking-widest mb-1">Period</p>
                    <p className="text-sm text-ink-300 font-mono tabular-nums">{exp.period}</p>
                  </div>

                  {/* Bullet */}
                  <div className={`absolute left-[-5px] md:left-[136px] top-9 w-[10px] h-[10px] rounded-full transition-colors ${
                    isExpanded ? 'bg-brand-lime' : 'bg-ink-700 ring-4 ring-brand-black'
                  }`} />

                  {/* Content */}
                  <div className="border-t border-white/[0.06] py-8">
                    {/* Mobile period */}
                    <p className="md:hidden text-[10px] font-mono text-ink-500 uppercase tracking-widest mb-3">{exp.period}</p>

                    <header className="flex items-start justify-between gap-6 mb-6">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-extrabold tracking-[-0.02em] text-ink-100 mb-1.5">
                          {exp.role}
                        </h3>
                        <p className="text-ink-400 text-sm font-mono flex items-center gap-2">
                          {exp.company}
                          {exp.link && (
                            <a href={exp.link} target="_blank" rel="noreferrer" className="hover:text-brand-lime">
                              <Icons.ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </p>
                      </div>
                      <button
                        onClick={() => setExpandedId(isExpanded ? null : idx)}
                        className={`shrink-0 px-3 h-8 rounded-full text-[10px] font-mono uppercase tracking-widest transition-all flex items-center gap-2 ${
                          isExpanded
                            ? 'bg-brand-lime text-brand-black'
                            : 'bg-white/[0.04] text-ink-300 hover:bg-white/[0.08] hover:text-ink-100'
                        }`}
                      >
                        {isExpanded ? 'Close' : 'Open'}
                        <span className={`transition-transform inline-block ${isExpanded ? 'rotate-45' : ''}`}>+</span>
                      </button>
                    </header>

                    <p className="text-ink-300 text-base leading-relaxed mb-8 max-w-3xl">
                      {exp.description}
                    </p>

                    {/* Referral chip */}
                    {exp.referral && (
                      <div className="inline-flex items-center gap-3 mb-6 px-3 py-1.5 rounded-full bg-brand-lime/10 border border-brand-lime/20 text-xs">
                        <span className="text-brand-lime font-bold">VERIFIED REF</span>
                        <span className="w-px h-3 bg-brand-lime/30" />
                        <span className="text-ink-200">{exp.referral.role}</span>
                        <span className="text-ink-500 font-mono">{exp.referral.contact}</span>
                      </div>
                    )}

                    {/* Metrics row */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-6 mb-8">
                      {exp.detailedMetrics?.map((m, mi) => (
                        <div key={mi}>
                          <p className="text-[10px] font-mono uppercase tracking-widest text-ink-500 mb-2">{m.label}</p>
                          <p className="text-xl font-extrabold tracking-tight text-ink-100 mb-2 tabular-nums">
                            {m.value}<span className="text-ink-500 text-sm font-mono">{m.suffix}</span>
                          </p>
                          <div className="h-[2px] bg-white/[0.06] rounded-full overflow-hidden">
                            <div className={`h-full ${m.color} rounded-full`} style={{ width: `${m.growth}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Case study */}
                    {isExpanded && exp.caseStudy && (
                      <div className="grid lg:grid-cols-3 gap-6 mt-8 pt-8 border-t border-white/[0.06]">
                        {[
                          { label: 'Challenge', body: exp.caseStudy.challenge, accent: 'border-red-500/30 text-red-400' },
                          { label: 'Action', body: exp.caseStudy.action, accent: 'border-brand-lime/30 text-brand-lime' },
                          { label: 'Outcome', body: exp.caseStudy.outcome, accent: 'border-ink-300/30 text-ink-100' },
                        ].map((block, bi) => (
                          <div key={bi} className={`pl-4 border-l ${block.accent.split(' ')[0]}`}>
                            <p className={`text-[10px] font-mono uppercase tracking-[0.25em] mb-3 ${block.accent.split(' ')[1]}`}>
                              {block.label}
                            </p>
                            <p className="text-ink-300 text-sm leading-relaxed whitespace-pre-wrap">
                              {block.body}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
