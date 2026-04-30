import React, { useState } from 'react';
import { Icons } from './Icons';
import { generateMarketingStrategy } from '../services/geminiService';

interface StrategyData {
  pillarTitle?: string;
  clusterTopics?: string;
  videoHook?: string;
  technicalFocus?: string;
}

const QUICK_PILLS = ["🦷 Dental Implants", "🏠 Luxury Real Estate", "☕ Specialty Coffee"];

export const AIStrategyEngine: React.FC = () => {
  const [topic, setTopic] = useState("");
  const [mode, setMode] = useState("Viral Reach");
  const [loading, setLoading] = useState(false);
  const [strategy, setStrategy] = useState<StrategyData | null>(null);
  const [rawOutput, setRawOutput] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async (topicOverride?: string) => {
    const activeTopic = topicOverride || topic;

    if (!activeTopic.trim()) {
      setError("Please enter a topic or niche.");
      return;
    }

    // Update state if using override
    if (topicOverride) setTopic(topicOverride);

    setLoading(true);
    setError(null);
    setStrategy(null);
    setRawOutput(null);

    try {
      const result = await generateMarketingStrategy(activeTopic, mode);
      
      // Attempt to parse JSON
      try {
        const parsedData = JSON.parse(result);
        setStrategy(parsedData);
      } catch (parseError) {
        console.warn("JSON Parse failed, falling back to raw text", parseError);
        setRawOutput(result);
      }
      
    } catch (err) {
      setError("System currently in read-only mode for public demo. (API Key required)");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-lab" className="py-32 bg-brand-black border-b border-white/5 relative overflow-hidden">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }}></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <span className="text-brand-green font-mono text-sm tracking-widest uppercase mb-3 block">Powered by Gemini 2.5</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">The "Content Dominator" Engine</h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Experience my custom SEO workflow. Enter a topic to instantly generate a Pillar Strategy, Cluster Topics, and Video Hooks.
          </p>
        </div>

        {/* Interface Container */}
        <div className="bg-brand-card/80 border border-white/10 rounded-2xl p-8 shadow-2xl backdrop-blur-xl ring-1 ring-white/5">
          <div className="flex flex-col gap-4 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <input 
                type="text" 
                placeholder="Enter Topic (e.g., 'Roofing', 'SaaS CRM', 'Pilates')..." 
                className="flex-1 bg-black/50 border border-white/20 rounded-xl px-6 py-4 text-white placeholder-gray-600 focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green transition-all"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
              />
              
              <div className="flex gap-2">
                <select 
                  value={mode}
                  onChange={(e) => setMode(e.target.value)}
                  className="bg-black/50 border border-white/20 rounded-xl px-4 py-4 text-white text-sm focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green transition-all cursor-pointer appearance-none min-w-[160px]"
                >
                  <option value="Viral Reach">🚀 Viral Reach</option>
                  <option value="Deep Authority">🛡️ Deep Authority</option>
                </select>

                <button 
                  onClick={() => handleGenerate()}
                  disabled={loading}
                  className="bg-brand-green text-brand-black font-bold px-8 py-4 rounded-xl hover:bg-white transition-all hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none whitespace-nowrap"
                >
                  {loading ? (
                    <>Auditing <span className="animate-spin ml-2">⟳</span></>
                  ) : (
                    <>Run Audit <Icons.Zap className="w-4 h-4 fill-current" /></>
                  )}
                </button>
              </div>
            </div>

            {/* Quick-Start Pills */}
            <div className="flex flex-wrap gap-2">
              <span className="text-xs text-gray-500 py-1.5">Quick Try:</span>
              {QUICK_PILLS.map((pill) => (
                <button 
                  key={pill}
                  onClick={() => handleGenerate(pill.replace(/[^a-zA-Z\s]/g, "").trim())}
                  disabled={loading}
                  className="text-xs px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-gray-300 hover:text-brand-green hover:border-brand-green/50 transition-colors disabled:opacity-50"
                >
                  {pill}
                </button>
              ))}
            </div>
          </div>

          {/* Terminal Output */}
          <div className="bg-black rounded-xl border border-white/10 p-8 min-h-[240px] font-mono text-sm relative overflow-hidden shadow-inner flex flex-col justify-center">
            
            <div className="absolute top-0 left-0 right-0 flex gap-2 p-4 border-b border-white/10 bg-black/50 backdrop-blur-sm z-10 items-center">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              <div className="ml-auto text-xs text-gray-700 flex items-center gap-2">
                <span className="uppercase text-[10px] tracking-wider text-brand-blue/80">{mode} MODE</span>
                <span>•</span>
                <span>gemini-2.5-flash</span>
              </div>
            </div>

            <div className="mt-8 custom-scroll overflow-y-auto max-h-[400px]">
              {loading ? (
                <div className="space-y-3">
                  <div className="text-brand-green flex items-center gap-2">
                    <span className="w-2 h-2 bg-brand-green rounded-full animate-ping"></span>
                     Analyzing keyword intent...
                  </div>
                  <div className="text-brand-green/70 pl-4 border-l border-brand-green/30">
                    Clustering sub-topics for "{topic || "input"}"...
                  </div>
                  <div className="text-brand-green/50 pl-4 border-l border-brand-green/20 animate-pulse">
                    Synthesizing video & SEO roadmap...
                  </div>
                </div>
              ) : error ? (
                <div className="text-red-400 border-l-2 border-red-500 pl-4">
                  <p className="font-bold mb-1">Error Encountered</p>
                  <p>{error}</p>
                </div>
              ) : strategy ? (
                <div className="animate-in fade-in duration-500 space-y-6">
                  <div className="text-brand-green border-b border-brand-green/20 pb-2 font-bold mb-4 flex justify-between">
                    <span>{'>'} Roadmap Generated Successfully:</span>
                    <span className="text-xs font-normal text-gray-500 uppercase">{mode}</span>
                  </div>

                  {/* 1. SEO Pillar Block */}
                  <div className="bg-white/5 p-4 rounded-lg border border-white/10 hover:border-brand-blue/50 transition-colors">
                    <div className="flex items-center gap-2 text-brand-blue mb-2 font-bold uppercase text-xs tracking-wider">
                       <Icons.FileText className="w-4 h-4" /> Pillar Content Title
                    </div>
                    <p className="text-white text-lg font-bold leading-tight">"{strategy.pillarTitle}"</p>
                  </div>

                  {/* 2. Cluster Topics Block */}
                  <div className="bg-white/5 p-4 rounded-lg border border-white/10 hover:border-brand-purple/50 transition-colors">
                    <div className="flex items-center gap-2 text-brand-purple mb-2 font-bold uppercase text-xs tracking-wider">
                       <Icons.Globe className="w-4 h-4" /> Cluster Topics (Support)
                    </div>
                    <p className="text-gray-300 leading-relaxed font-mono text-xs">{strategy.clusterTopics}</p>
                  </div>

                  {/* 3. Video Hook Block */}
                  <div className="bg-white/5 p-4 rounded-lg border border-white/10 hover:border-brand-green/50 transition-colors">
                    <div className="flex items-center gap-2 text-brand-green mb-2 font-bold uppercase text-xs tracking-wider">
                       <Icons.Video className="w-4 h-4" /> Viral Video Hook
                    </div>
                    <p className="text-gray-300 leading-relaxed italic">"{strategy.videoHook}"</p>
                  </div>
                  
                  {/* 4. Technical Focus */}
                  <div className="bg-white/5 p-4 rounded-lg border border-white/10 hover:border-yellow-500/50 transition-colors">
                    <div className="flex items-center gap-2 text-yellow-500 mb-2 font-bold uppercase text-xs tracking-wider">
                       <Icons.Cpu className="w-4 h-4" /> Technical Priority
                    </div>
                    <p className="text-gray-300 leading-relaxed">{strategy.technicalFocus}</p>
                  </div>

                  <span className="inline-block w-2.5 h-5 bg-brand-green ml-1 animate-blink mt-2"></span>
                </div>
              ) : rawOutput ? (
                // Fallback for non-JSON output
                <div className="whitespace-pre-wrap leading-relaxed text-gray-300 animate-in fade-in duration-500">
                  <span className="text-brand-green block mb-4 border-b border-brand-green/20 pb-2 font-bold">
                    {'>'} Roadmap Generated (Raw Text):
                  </span>
                  {rawOutput}
                  <span className="inline-block w-2.5 h-5 bg-brand-green ml-1 animate-blink align-middle"></span>
                </div>
              ) : (
                <div className="text-gray-600">
                  <p>{'>'} System Ready.</p>
                  <p>{'>'} Awaiting topic input to generate SEO roadmap...</p>
                  <span className="inline-block w-2.5 h-5 bg-brand-green mt-2 animate-blink"></span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};