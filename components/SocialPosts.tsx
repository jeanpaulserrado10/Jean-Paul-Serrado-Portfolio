import React, { useState } from 'react';
import { Icons } from './Icons';

interface SocialPost {
  id: string;
  author: string;
  link: string;
  views: string;
  viewsNum: number;
  date: string;
  description: string;
  category?: string;
  driveId: string;
  image: string;
  platform: 'X' | 'LinkedIn';
}

const posts: SocialPost[] = [
  {
    id: "2019055936900362633",
    author: "Lucian Fogoros",
    link: "https://x.com/fogoros/status/2019055936900362633?s=20",
    views: "358.7K", viewsNum: 358759,
    date: "Feb 4, 2026",
    description: 'Jensen Huang on AI automating tasks vs. purpose: "Stop measuring your value by your to-do list" – with video',
    category: "SkyRocket",
    driveId: "1D2J1kGuHkaf5P9lLwSJCMdQYQ6CwNC0l",
    image: "/posts/post-1.png",
    platform: 'X'
  },
  {
    id: "2016205864340701189",
    author: "IIoT World",
    link: "https://x.com/IIoT_World/status/2016205864340701189?s=20",
    views: "58.8K", viewsNum: 58800,
    date: "Jan 28, 2026",
    description: "Jensen Huang: Europe shouldn't catch up on software. It should skip it. AI is software that doesn't write software — you teach it.",
    category: "SkyRocket",
    driveId: "1BTfkgI5ZxOl8gk_VaXRSEDTEp8kzCbe0",
    image: "/posts/post-2.png",
    platform: 'X'
  },
  {
    id: "2024178515529064817",
    author: "Carolina Rudinschi",
    link: "https://x.com/CRudinschi/status/2024178515529064817?s=20",
    views: "6,513", viewsNum: 6513,
    date: "Feb 19, 2026",
    description: "Dassault Systèmes + NVIDIA integrating AI physics into virtual twins for real-time industrial simulation",
    driveId: "1Ce6ZgFuHdvrLT5EvcnODjuBtS7f59Jd8",
    image: "/posts/post-3.png",
    platform: 'X'
  },
  {
    id: "2020198750476722644",
    author: "Lucian Fogoros",
    link: "https://x.com/fogoros/status/2020198750476722644?s=20",
    views: "6,099", viewsNum: 6099,
    date: "Feb 8, 2026",
    description: "AI-driven factories: 2,000 jobs → 1,000 jobs vs. zero if it moves overseas",
    driveId: "1WE5II5yDBiTIz-H6uPnn_soIy50_ef30",
    image: "/posts/post-4.png",
    platform: 'X'
  },
  {
    id: "2019780719162032536",
    author: "Lucian Fogoros",
    link: "https://x.com/fogoros/status/2019780719162032536?s=20",
    views: "5,839", viewsNum: 5839,
    date: "Feb 6, 2026",
    description: "Software-defined automation: run control logic in motor drives, no new machines or PLCs needed",
    driveId: "1Lw6WnsLI0N1tIxeL6x5qTB6D3vwaKAC5",
    image: "/posts/post-5.png",
    platform: 'X'
  },
  {
    id: "2017983852250075163",
    author: "IIoT World",
    link: "https://x.com/IIoT_World/status/2017983852250075163?s=20",
    views: "5,635", viewsNum: 5635,
    date: "Feb 1, 2026",
    description: "Agentic AI isn't coming. It's already here. Jensen Huang explains why 2026 is the year AI moves from chatting to doing.",
    driveId: "12HVlsWIgBdCKPjZrym_KGKVovPq3E7_B",
    image: "/posts/post-6.png",
    platform: 'X'
  },
  {
    id: "2017246491652264143",
    author: "Carolina Rudinschi",
    link: "https://x.com/CRudinschi/status/2017246491652264143?s=20",
    views: "5,593", viewsNum: 5593,
    date: "Jan 30, 2026",
    description: "AI isn't a tool. It's a capability. We fought calculators in the 80s — now it's silly not to use one.",
    driveId: "1rS9cXcqDl6JOF6gtod4xA2LUnwwXzH6i",
    image: "/posts/post-7.png",
    platform: 'X'
  },
  {
    id: "2026371745481928935",
    author: "Lucian Fogoros",
    link: "https://x.com/fogoros/status/2026371745481928935?s=20",
    views: "4,330", viewsNum: 4330,
    date: "Feb 25, 2026",
    description: "Yann LeCun: LLMs compress human knowledge into retrieval systems — they organize existing data, not true intelligence.",
    driveId: "1SeoEMNXc2ZHVE-sAlQUJtlTqWTzC8pwc",
    image: "/posts/post-8.png",
    platform: 'X'
  },
  {
    id: "2020516782491009224",
    author: "IIoT World",
    link: "https://x.com/IIoT_World/status/2020516782491009224?s=20",
    views: "3,726", viewsNum: 3726,
    date: "Feb 8, 2026",
    description: "Gen AI in manufacturing is an iceberg — most see only the LLM tip, but the heavy lifting happens below the surface.",
    driveId: "1WW4lMauW2KXHzEUp0jhhXeuk8fVrvP2R",
    image: "/posts/post-9.png",
    platform: 'X'
  },
  {
    id: "2021680699422498890",
    author: "Carolina Rudinschi",
    link: "https://x.com/CRudinschi/status/2021680699422498890?s=20",
    views: "3,488", viewsNum: 3488,
    date: "Feb 12, 2026",
    description: "Live from #ARCForum: rigid automation is a thing of the past. AI + software-defined automation enables self-optimizing production.",
    driveId: "1likOmK103xYQLDYLtHEI2Pd1YOF2WlJ-",
    image: "/posts/post-10.png",
    platform: 'X'
  },
  {
    id: "2020203483090034923",
    author: "Carolina Rudinschi",
    link: "https://x.com/CRudinschi/status/2020203483090034923?s=20",
    views: "3,425", viewsNum: 3425,
    date: "Feb 8, 2026",
    description: "Stop treating AI like a tool. It's a capability that belongs everywhere — ops, quality, maintenance, planning.",
    driveId: "1rnN9A-fw4Q4oUv4MJOizRsfHryJy5fOB",
    image: "/posts/post-11.png",
    platform: 'X'
  },
  {
    id: "linkedin-1",
    author: "Lucian Fogoros",
    link: "https://www.linkedin.com/in/lucianfogoros/",
    views: "184 Engagements", viewsNum: 184,
    date: "Recent",
    description: "At CES with Del Costy from Siemens: What will a digital twin be able to do by 2028 that the market doesn't yet realise it needs?",
    driveId: "19ComIAF6ukcOAbuGveGCMdP-GxcMgsVh",
    image: "/posts/post-12.png",
    platform: 'LinkedIn'
  },
  {
    id: "linkedin-2",
    author: "Lucian Fogoros",
    link: "https://www.linkedin.com/in/lucianfogoros/",
    views: "110 Engagements", viewsNum: 110,
    date: "Recent",
    description: "What does a Unified Namespace actually look like inside a manufacturer's architecture? John Krajewski, VP at AVEVA, explains.",
    driveId: "1GNWbn9BdrowfQg0lLq1knoK_QtXy5mDF",
    image: "/posts/post-13.png",
    platform: 'LinkedIn'
  },
  {
    id: "linkedin-3",
    author: "Lucian Fogoros",
    link: "https://www.linkedin.com/in/lucianfogoros/",
    views: "74 Engagements", viewsNum: 74,
    date: "Recent",
    description: "Live from #ARCForum: Siemens + LyondellBasell demonstrating how LLMs + advanced process control optimise grade changes in running plants.",
    driveId: "1ZeZpiXU8k4TQO164fO0J-tDsGQJeO3s0",
    image: "/posts/post-14.png",
    platform: 'LinkedIn'
  }
];

type Filter = 'All' | 'X' | 'LinkedIn';

const platformColors: Record<Filter, string> = {
  All: 'text-white border-white/20 bg-white/5',
  X: 'text-white border-white/20 bg-white/5',
  LinkedIn: 'text-[#0A66C2] border-[#0A66C2]/30 bg-[#0A66C2]/5',
};

export const SocialPosts: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [filter, setFilter] = useState<Filter>('All');

  const filtered = filter === 'All' ? posts : posts.filter(p => p.platform === filter);
  const hero = filtered[0];
  const rest = filtered.slice(1);

  const totalViews = posts.reduce((acc, p) => {
    const n = p.viewsNum;
    return acc + n;
  }, 0);

  const formatViews = (n: number) => {
    if (n >= 1000000) return `${(n / 1000000).toFixed(1)}M`;
    if (n >= 1000) return `${(n / 1000).toFixed(0)}K`;
    return n.toString();
  };

  return (
    <section className="bg-brand-black text-ink-100 min-h-full px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto">

        <div className="flex items-center gap-4 mb-16">
          <span className="text-[11px] font-mono text-ink-500 tabular-nums">[ 06 ]</span>
          <div className="h-px flex-1 bg-white/[0.08] max-w-[80px]" />
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-ink-400">Short-form clips · social posts</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-5">
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-[-0.03em] leading-[0.95] mb-6">
              Short-form clips, <br/>
              <span className="font-serif italic font-normal text-brand-lime">that performed.</span>
            </h2>
            <p className="text-ink-400 text-lg leading-relaxed max-w-md mb-4">
              Short-form videos cut from interviews, events, keynotes, and testimonials — repurposed into snackable social posts that drove real views and engagement on X and LinkedIn.
            </p>
            <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-ink-500">
              Long-form source → short-form social
            </p>
          </div>
          <div className="lg:col-span-7 self-end">
            <div className="grid grid-cols-2 gap-px bg-white/[0.06] border-y border-white/[0.06]">
              <div className="bg-brand-black p-5">
                <p className="text-3xl md:text-4xl font-extrabold tabular-nums text-ink-100 mb-1">{formatViews(totalViews)}+</p>
                <p className="text-[10px] font-mono uppercase tracking-widest text-ink-500">Total Views</p>
              </div>
              <div className="bg-brand-black p-5">
                <p className="text-3xl md:text-4xl font-extrabold tabular-nums text-ink-100 mb-1">{posts.length}</p>
                <p className="text-[10px] font-mono uppercase tracking-widest text-ink-500">Posts Shown</p>
              </div>
            </div>
          </div>
        </div>

        {/* Platform filter */}
        <div className="flex items-center gap-1 mb-10 pb-6 border-b border-white/[0.06]">
          {(['All', 'X', 'LinkedIn'] as Filter[]).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 h-8 rounded-full text-xs font-medium transition-all ${
                filter === f
                  ? 'bg-brand-lime text-brand-black'
                  : 'text-ink-400 hover:text-ink-100 hover:bg-white/[0.04]'
              }`}
            >
              {f === 'X' ? 'X (Twitter)' : f === 'LinkedIn' ? 'LinkedIn' : 'All'}
            </button>
          ))}
          <span className="ml-auto text-[10px] font-mono uppercase tracking-widest text-ink-500">{filtered.length} of {posts.length} posts</span>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-600">No posts for this filter.</div>
        )}

        {hero && (
          <>
            {/* ── Hero / Featured Post ── */}
            <div className="mb-8 rounded-3xl border border-white/8 bg-[#0d0d0d] overflow-hidden grid md:grid-cols-2 group hover:border-blue-500/20 transition-all duration-500">

              {/* Screenshot */}
              <div className="relative bg-[#111] overflow-hidden min-h-[320px] flex items-center justify-center">
                <img
                  src={hero.image}
                  alt={`Post by ${hero.author}`}
                  className="w-full h-full object-contain object-center group-hover:scale-[1.02] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0d0d0d]/60 pointer-events-none" />

                {/* Platform badge */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {hero.category && (
                    <span className="px-2.5 py-1 bg-red-500 text-white text-[9px] font-bold uppercase tracking-wider rounded-full">
                      {hero.category}
                    </span>
                  )}
                  <span className="px-2.5 py-1 bg-black/70 backdrop-blur text-white text-[9px] font-bold uppercase tracking-wider rounded-full border border-white/10">
                    {hero.platform}
                  </span>
                </div>

                {/* Play button */}
                <button
                  onClick={() => setActiveVideo(hero.driveId)}
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.5)] hover:bg-blue-400 transition-colors">
                    <Icons.Play className="w-7 h-7 text-white fill-current translate-x-0.5" />
                  </div>
                </button>
              </div>

              {/* Info */}
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 text-[10px] font-mono text-gray-600 uppercase tracking-widest mb-5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    Top Performing Post
                  </div>

                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white font-bold text-sm shrink-0">
                      {hero.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm leading-tight">{hero.author}</p>
                      <p className="text-gray-600 text-[10px] font-mono">{hero.date}</p>
                    </div>
                  </div>

                  <p className="text-gray-200 text-base leading-relaxed mb-6">{hero.description}</p>

                  {/* Views */}
                  <div className="flex items-baseline gap-2 mb-8">
                    <span className="text-4xl font-extrabold font-mono text-white">{hero.views}</span>
                    <span className="text-gray-500 text-sm">
                      {hero.platform === 'LinkedIn' ? 'Engagements' : 'Views'}
                    </span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setActiveVideo(hero.driveId)}
                    className="flex-1 py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
                  >
                    <Icons.Play className="w-3.5 h-3.5 fill-current" /> Watch Video
                  </button>
                  <a
                    href={hero.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-3 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
                  >
                    View on {hero.platform} <Icons.ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* ── Rest of Posts Grid ── */}
            {rest.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {rest.map((post) => (
                  <div
                    key={post.id}
                    className="group flex flex-col bg-[#0d0d0d] rounded-2xl border border-white/5 hover:border-blue-500/20 overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
                  >
                    {/* Screenshot thumbnail */}
                    <div className="relative bg-[#111] overflow-hidden" style={{ aspectRatio: '4/3' }}>
                      <img
                        src={post.image}
                        alt={`Post by ${post.author}`}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                        onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0'; }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent opacity-60" />

                      {/* Platform + category badges */}
                      <div className="absolute top-3 left-3 flex gap-1.5">
                        {post.category && (
                          <span className="px-2 py-0.5 bg-red-500 text-white text-[8px] font-bold uppercase tracking-wider rounded-full">
                            {post.category}
                          </span>
                        )}
                      </div>
                      <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/60 backdrop-blur flex items-center justify-center border border-white/10">
                        {post.platform === 'LinkedIn'
                          ? <Icons.LinkedIn className="w-3.5 h-3.5 text-[#0A66C2]" />
                          : <span className="text-white font-bold text-[10px]">𝕏</span>
                        }
                      </div>

                      {/* Hover play overlay */}
                      <button
                        onClick={() => setActiveVideo(post.driveId)}
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <div className="w-12 h-12 rounded-full bg-blue-500/90 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                          <Icons.Play className="w-5 h-5 text-white fill-current translate-x-0.5" />
                        </div>
                      </button>
                    </div>

                    {/* Card body */}
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white font-bold text-[10px] shrink-0">
                            {post.author.charAt(0)}
                          </div>
                          <div>
                            <p className="text-xs font-bold text-white leading-none">{post.author}</p>
                            <p className="text-[9px] text-gray-600 mt-0.5 font-mono">{post.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-blue-400 bg-blue-400/10 px-2 py-1 rounded-full">
                          {post.platform === 'LinkedIn'
                            ? <Icons.TrendingUp className="w-3 h-3" />
                            : <Icons.Eye className="w-3 h-3" />
                          }
                          <span className="text-[10px] font-bold">{post.views}</span>
                        </div>
                      </div>

                      <p className="text-gray-400 text-xs leading-relaxed flex-1 mb-4">{post.description}</p>

                      <div className="flex gap-2 pt-3 border-t border-white/5">
                        <button
                          onClick={() => setActiveVideo(post.driveId)}
                          className="flex-1 py-2.5 bg-blue-600/80 hover:bg-blue-600 text-white text-[10px] font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5"
                        >
                          <Icons.Play className="w-3 h-3 fill-current" /> Watch
                        </button>
                        <a
                          href={post.link}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 py-2.5 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white text-[10px] font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5"
                        >
                          View Post <Icons.ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {/* ── Cinema Player Modal ── */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 md:p-10"
          onClick={() => setActiveVideo(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 bg-white/5 border border-white/15 rounded-full flex items-center justify-center text-white hover:bg-red-500/20 hover:border-red-500/50 transition-all text-2xl leading-none"
            onClick={() => setActiveVideo(null)}
          >
            ×
          </button>

          <div
            className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <iframe
              className="w-full h-full"
              src={`https://drive.google.com/file/d/${activeVideo}/preview`}
              title="Video player"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 px-6 py-3 bg-black/60 backdrop-blur border border-white/10 rounded-2xl">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[10px] text-gray-400 font-mono tracking-widest">PLAYING · Click outside to close</span>
            <a
              href={`https://drive.google.com/file/d/${activeVideo}/view`}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-1.5 bg-blue-600 text-white text-[10px] font-bold rounded-full hover:bg-blue-500 transition-colors flex items-center gap-1.5"
            >
              Open in Drive <Icons.ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}
    </section>
  );
};
