import React from 'react';
import { Icons } from './Icons';

interface ToolItem {
  category: string;
  title: string;
  challenge: string;
  action: string;
  outcome: string;
  accent: string;
  mockup: React.ReactNode;
}

const toolsItems: ToolItem[] = [
  {
    category: "INTERNAL TOOL · WEB APP",
    title: "Social Campaign Reporting Engine",
    challenge: "Producing client campaign reports manually was slow and inconsistent. Each report meant pulling data from multiple platforms, formatting slides, and rebuilding the same structure every time.",
    action: "Designed and built a React-based web app with a guided wizard interface. Brand-styled, multi-step flow that turns raw campaign data into a polished, on-brand client report in minutes instead of hours.",
    outcome: "Reports that used to take a full day now take under an hour. Consistent format, zero manual slide work, fully on-brand every time.",
    accent: "from-blue-500 via-cyan-500 to-teal-500",
    mockup: (
      <div className="w-full h-full bg-[#0a0a0a] rounded-2xl border border-white/10 overflow-hidden flex flex-col shadow-2xl">
        {/* Browser Header */}
        <div className="h-10 bg-[#111] border-b border-white/5 flex items-center px-4 gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <div className="mx-auto bg-black/50 border border-white/5 rounded-md px-24 py-1 text-[10px] text-gray-500 font-mono">
            reporting.internal.app
          </div>
        </div>
        {/* App Body */}
        <div className="flex-1 p-6 flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <div className="text-white font-bold text-lg flex items-center gap-2">
              <Icons.BarChart className="w-5 h-5 text-cyan-400" /> Campaign Builder
            </div>
            <div className="flex gap-2">
              <div className="w-8 h-2 bg-cyan-500 rounded-full"></div>
              <div className="w-8 h-2 bg-white/10 rounded-full"></div>
              <div className="w-8 h-2 bg-white/10 rounded-full"></div>
            </div>
          </div>
          
          <div className="flex-1 bg-white/5 border border-white/5 rounded-xl p-6 flex flex-col gap-4">
            <div className="w-1/3 h-4 bg-white/10 rounded"></div>
            <div className="w-full h-12 bg-black/50 border border-white/10 rounded-lg flex items-center px-4">
              <span className="text-gray-500 text-sm">Select Client...</span>
            </div>
            <div className="w-1/4 h-4 bg-white/10 rounded mt-4"></div>
            <div className="grid grid-cols-2 gap-4">
              <div className="h-24 bg-black/50 border border-white/10 rounded-lg flex items-center justify-center border-dashed">
                <span className="text-gray-500 text-xs flex flex-col items-center gap-2">
                  <Icons.Database className="w-4 h-4" /> Connect Data Source
                </span>
              </div>
              <div className="h-24 bg-black/50 border border-white/10 rounded-lg flex items-center justify-center border-dashed">
                <span className="text-gray-500 text-xs flex flex-col items-center gap-2">
                  <Icons.Palette className="w-4 h-4" /> Select Template
                </span>
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex justify-end">
            <button className="bg-cyan-500 text-black font-bold px-6 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-cyan-400 transition-colors">
              Generate Report <Icons.Zap className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    )
  },
  {
    category: "INTERNAL TOOL · DATABASE",
    title: "Industry Events Database & Reporting App",
    challenge: "Managing hundreds of industry events, speakers, and session data across spreadsheets was unsustainable. Information was scattered, hard to search, and impossible to report on cleanly.",
    action: "Built a Firebase-powered web app that centralizes event data, speaker profiles, and session details into a searchable, structured database with role-based access and clean reporting views.",
    outcome: "A single source of truth for hundreds of events. Fast lookups, structured data, and reports generated on demand instead of assembled by hand.",
    accent: "from-orange-500 via-red-500 to-rose-500",
    mockup: (
      <div className="w-full h-full bg-[#0a0a0a] rounded-2xl border border-white/10 overflow-hidden flex shadow-2xl">
        {/* Sidebar */}
        <div className="w-16 md:w-48 bg-[#111] border-r border-white/5 p-4 flex flex-col gap-4">
          <div className="w-8 h-8 bg-rose-500/20 rounded-lg flex items-center justify-center mb-4">
            <Icons.Database className="w-4 h-4 text-rose-500" />
          </div>
          <div className="h-8 bg-white/10 rounded-md w-full"></div>
          <div className="h-8 bg-white/5 rounded-md w-full"></div>
          <div className="h-8 bg-white/5 rounded-md w-full"></div>
        </div>
        {/* Main Content */}
        <div className="flex-1 p-6 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <div className="h-6 w-32 bg-white/10 rounded"></div>
            <div className="flex gap-2">
              <div className="h-8 w-24 bg-white/5 border border-white/10 rounded-md flex items-center px-2">
                <Icons.Search className="w-3 h-3 text-gray-500 mr-2" />
                <div className="h-2 w-12 bg-white/10 rounded"></div>
              </div>
              <div className="h-8 w-24 bg-rose-500 rounded-md flex items-center justify-center">
                <span className="text-black text-xs font-bold">+ New Event</span>
              </div>
            </div>
          </div>
          
          {/* Table Mockup */}
          <div className="flex-1 bg-[#111] border border-white/5 rounded-xl overflow-hidden flex flex-col">
            <div className="h-10 border-b border-white/5 flex items-center px-4 gap-4 bg-white/5">
              <div className="w-8 h-3 bg-white/10 rounded"></div>
              <div className="flex-1 h-3 bg-white/10 rounded"></div>
              <div className="w-24 h-3 bg-white/10 rounded"></div>
              <div className="w-16 h-3 bg-white/10 rounded"></div>
            </div>
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-14 border-b border-white/5 flex items-center px-4 gap-4 hover:bg-white/5 transition-colors">
                <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center">
                  <span className="text-xs text-gray-500">{i}</span>
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <div className="h-3 w-3/4 bg-white/20 rounded"></div>
                  <div className="h-2 w-1/2 bg-white/10 rounded"></div>
                </div>
                <div className="w-24">
                  <div className="h-5 w-16 bg-rose-500/20 border border-rose-500/30 rounded-full flex items-center justify-center">
                    <span className="text-[8px] text-rose-400 uppercase">Active</span>
                  </div>
                </div>
                <div className="w-16 flex justify-end">
                  <div className="w-6 h-6 rounded-full bg-white/5"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
];

export const CustomTools: React.FC = () => {
  return (
    <section id="custom-tools" className="py-32 bg-[#080808] relative overflow-hidden border-t border-white/5">
      {/* Background Abstract Elements */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-rose-500/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <span className="text-yellow-500 font-mono text-sm uppercase tracking-widest mb-3 block">BUILT FOR PRODUCTION</span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Tools I've Built to Work Faster
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
            I don't just use creative tools — I build them. When the workflow doesn't exist, I design it. Custom web apps, automation pipelines, and AI systems that turn manual work into one-click outputs.
          </p>
        </div>

        <div className="space-y-40">
          {toolsItems.map((item, idx) => (
            <div key={idx} className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center group`}>
              
              {/* Visual Side: Mockup */}
              <div className="flex-1 w-full relative h-[400px] md:h-[500px]">
                 <div className={`absolute -inset-4 bg-gradient-to-r ${item.accent} blur-3xl opacity-10 rounded-full group-hover:opacity-20 transition-opacity duration-700`}></div>
                 
                 <div className="relative w-full h-full transform group-hover:scale-[1.02] transition-transform duration-700">
                    {item.mockup}
                 </div>
                 
                 {/* Floating Label */}
                 <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#1a1a1a] border border-white/10 px-4 py-2 rounded-full shadow-xl flex items-center gap-2 whitespace-nowrap z-20">
                    <Icons.Terminal className="w-3 h-3 text-gray-400" />
                    <span className="text-xs font-mono text-gray-400">Custom Built Application</span>
                 </div>
              </div>

              {/* Content Side */}
              <div className="flex-1 space-y-10">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                     <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${item.accent} text-white text-xs font-bold uppercase tracking-widest bg-opacity-10`}>
                       {item.category}
                     </span>
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-4 leading-tight">{item.title}</h3>
                </div>

                <div className="space-y-8">
                  <div className="relative pl-6 border-l-2 border-white/5 hover:border-red-500/50 transition-colors duration-300">
                    <h4 className="text-xs font-bold uppercase text-red-500 mb-2 tracking-widest">The Challenge</h4>
                    <p className="text-gray-300 leading-relaxed">{item.challenge}</p>
                  </div>

                  <div className="relative pl-6 border-l-2 border-white/5 hover:border-brand-blue/50 transition-colors duration-300">
                    <h4 className="text-xs font-bold uppercase text-brand-blue mb-2 tracking-widest">The Build</h4>
                    <p className="text-gray-300 leading-relaxed">{item.action}</p>
                  </div>

                  <div className="relative pl-6 border-l-2 border-white/5 hover:border-brand-green/50 transition-colors duration-300">
                    <h4 className="text-xs font-bold uppercase text-brand-green mb-2 tracking-widest">The Outcome</h4>
                    <p className="text-white font-medium leading-relaxed">{item.outcome}</p>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
