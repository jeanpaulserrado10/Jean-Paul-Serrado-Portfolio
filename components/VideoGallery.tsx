import React, { useState } from 'react';
import { Icons } from './Icons';
import { Video } from '../types';

const brandVideos: Video[] = [
  { id: "61NHOa9gluo", title: "Spruces: Premium Handover Cleaning", category: "Brand & Learning", tool: "Synthesia" },
  { id: "9j3IvcVQzPc", title: "Construction Cleaning Excellence", category: "Brand & Learning", tool: "Synthesia" },
  { id: "OJVPnvv7SCY", title: "The Spruces Transformation", category: "Brand & Learning", tool: "Synthesia" }
];

const promoVideos: Video[] = [
  { id: "1Hx-VZTYClkyPyLfq66NZdzCUK5GxDl-P", title: "ARC Forum 2026: Power of AI", isDrive: true, thumbnailUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop", category: "Promo Video" },
  { id: "1VxvTlAhOQ_Cet7VbT3uo-1b6siJ4JrW2", title: "Software-Defined Automation", isDrive: true, thumbnailUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop", category: "Promo Video" }
];

const shorts: Video[] = [
  { id: "rFIApF_MsKE", title: "Automated Cleaning Hack 1", tool: "HeyGen" },
  { id: "NtrPbATpzx8", title: "Automated Cleaning Hack 2", tool: "HeyGen" },
  { id: "mI-6oFlJ21s", title: "Viral Content Strategy", tool: "HeyGen" },
  { id: "lLktEPLRHxs", title: "Efficiency Boost", tool: "HeyGen" },
  { id: "ByOi1Q68ack", title: "Process Optimization", tool: "HeyGen" },
  { id: "Mojb30SocsE", title: "Tech in Cleaning", tool: "HeyGen" },
  { id: "OLTJDTTPC2E", title: "Workflow Automation", tool: "HeyGen" },
  { id: "JJnS5wNILUw", title: "Scalable Operations", tool: "HeyGen" }
];

export const VideoGallery: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const closePlayer = () => setActiveVideo(null);
  const activeVideoObj = activeVideo ? [...brandVideos, ...promoVideos, ...shorts].find(v => v.id === activeVideo) : null;

  return (
    <section className="bg-brand-black text-ink-100 min-h-full px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto">

        <div className="flex items-center gap-4 mb-16">
          <span className="text-[11px] font-mono text-ink-500 tabular-nums">[ 05 ]</span>
          <div className="h-px flex-1 bg-white/[0.08] max-w-[80px]" />
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-ink-400">Reel</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-5">
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-[-0.03em] leading-[0.95] mb-6">
              Video, <span className="font-serif italic font-normal text-brand-lime">in motion.</span>
            </h2>
            <p className="text-ink-400 text-lg leading-relaxed max-w-md mb-6">
              Across formats and use cases — short-form social cuts, promotional brand videos, event coverage, learning. Engineered for retention, built for speed.
            </p>
            <a
              href="https://www.youtube.com/@spruces_co"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-ink-200 hover:text-brand-lime transition-colors group"
            >
              <Icons.Youtube className="w-4 h-4 text-red-500" />
              <span>Visit the YouTube channel</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
          <div className="lg:col-span-7 self-end">
            <p className="text-ink-500 text-sm font-mono uppercase tracking-widest border-l-2 border-brand-lime pl-4">
              {brandVideos.length + promoVideos.length + shorts.length} videos · 3 categories
            </p>
          </div>
        </div>

        {/* Brand & Learning */}
        <div className="mb-20">
          <header className="flex items-end justify-between mb-8 pb-5 border-b border-white/[0.06]">
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-ink-500 mb-1">Featured productions</p>
              <div className="flex items-center gap-3 flex-wrap">
                <h3 className="text-2xl font-bold tracking-tight">Brand & Learning Videos</h3>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-brand-purple/30 bg-brand-purple/5 text-[10px] font-mono uppercase tracking-widest text-brand-purple">
                  <Icons.Bot className="w-3 h-3" />
                  Made with Synthesia
                </span>
              </div>
            </div>
            <span className="text-[10px] font-mono text-ink-500">{brandVideos.length} videos</span>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06]">
            {brandVideos.map((video) => (
              <button
                key={video.id}
                onClick={() => setActiveVideo(video.id)}
                className="group relative bg-brand-black overflow-hidden text-left"
              >
                <div className="aspect-video relative overflow-hidden bg-ink-800">
                  <img
                    src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/20 to-transparent" />

                  {/* Play CTA */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-brand-black/80 backdrop-blur border border-white/10 flex items-center justify-center group-hover:bg-brand-lime group-hover:border-brand-lime transition-colors">
                      <Icons.Play className="w-5 h-5 text-ink-100 group-hover:text-brand-black fill-current translate-x-0.5 transition-colors" />
                    </div>
                  </div>

                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    {video.category && (
                      <span className="text-[9px] font-mono uppercase tracking-widest bg-brand-lime text-brand-black px-2 py-0.5 rounded-sm">
                        {video.category}
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-ink-100 group-hover:text-brand-lime transition-colors text-base leading-tight mb-2">
                    {video.title}
                  </h4>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-ink-500">
                    Made with {video.tool}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Promo */}
        <div className="mb-20">
          <header className="flex items-end justify-between mb-8 pb-5 border-b border-white/[0.06]">
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-ink-500 mb-1">Long-form</p>
              <h3 className="text-2xl font-bold tracking-tight">Promotional Videos</h3>
            </div>
            <span className="text-[10px] font-mono text-ink-500">{promoVideos.length} videos</span>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06]">
            {promoVideos.map((video) => (
              <button
                key={video.id}
                onClick={() => setActiveVideo(video.id)}
                className="group relative bg-brand-black overflow-hidden text-left"
              >
                <div className="aspect-video relative overflow-hidden bg-ink-800">
                  <img
                    src={video.thumbnailUrl}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/30 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-brand-black/80 backdrop-blur border border-white/10 flex items-center justify-center group-hover:bg-brand-lime group-hover:border-brand-lime transition-colors">
                      <Icons.Play className="w-6 h-6 text-ink-100 group-hover:text-brand-black fill-current translate-x-0.5 transition-colors" />
                    </div>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="text-[9px] font-mono uppercase tracking-widest bg-brand-lime text-brand-black px-2 py-0.5 rounded-sm">
                      {video.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-ink-100 group-hover:text-brand-lime transition-colors text-lg leading-tight">
                    {video.title}
                  </h4>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Shorts grid */}
        <div>
          <header className="flex items-end justify-between mb-8 pb-5 border-b border-white/[0.06]">
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-ink-500 mb-1">Avatar-generated</p>
              <div className="flex items-center gap-3 flex-wrap">
                <h3 className="text-2xl font-bold tracking-tight">Short-Form Shorts</h3>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-blue-400/30 bg-blue-400/5 text-[10px] font-mono uppercase tracking-widest text-blue-400">
                  <Icons.Bot className="w-3 h-3" />
                  Made with HeyGen
                </span>
              </div>
            </div>
            <span className="text-[10px] font-mono text-ink-500">{shorts.length} shorts</span>
          </header>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.06]">
            {shorts.map((video) => (
              <button
                key={video.id}
                onClick={() => setActiveVideo(video.id)}
                className="group relative aspect-[9/16] bg-brand-black overflow-hidden text-left"
              >
                <img
                  src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/30 to-transparent" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-brand-black/80 backdrop-blur border border-white/10 flex items-center justify-center group-hover:bg-brand-lime transition-colors">
                    <Icons.Play className="w-4 h-4 text-ink-100 group-hover:text-brand-black fill-current translate-x-0.5 transition-colors" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-xs font-bold text-ink-100 leading-snug group-hover:text-brand-lime transition-colors">
                    {video.title}
                  </p>
                  {video.tool && (
                    <p className="text-[9px] font-mono uppercase tracking-widest text-ink-500 mt-1">
                      {video.tool}
                    </p>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Cinema modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-black/95 backdrop-blur-2xl p-4 md:p-10"
          onClick={closePlayer}
        >
          <button
            className="absolute top-6 right-6 w-10 h-10 bg-white/[0.05] border border-white/15 rounded-full flex items-center justify-center text-ink-100 hover:bg-red-500/20 hover:border-red-500/50 transition-all text-xl"
            onClick={closePlayer}
          >×</button>

          <div
            className="relative w-full max-w-6xl aspect-video rounded-xl overflow-hidden border border-white/[0.08] bg-black shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            {activeVideoObj?.isDrive ? (
              <iframe
                className="w-full h-full"
                src={`https://drive.google.com/file/d/${activeVideo}/preview`}
                title="Drive video player"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            ) : (
              <iframe
                className="w-full h-full"
                src={`https://www.youtube-nocookie.com/embed/${activeVideo}?autoplay=1&rel=0`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
};
