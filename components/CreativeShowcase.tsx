import React, { useState } from 'react';
import { Icons } from './Icons';
import { GoogleGenAI } from "@google/genai";

const CAPABILITIES = [
  { 
    id: 'ad', 
    label: 'High-End Advertising', 
    icon: <Icons.TrendingUp className="w-4 h-4" />, 
    prompt: "A cinematic, award-winning advertisement product shot for a luxury minimalist coffee brand called 'AURA'. Dark matte background, golden steam rising, dramatic rim lighting, 8k resolution, photorealistic.",
    desc: "Generates conversion-focused ad creatives."
  },
  { 
    id: 'logo', 
    label: 'Brand Identity', 
    icon: <Icons.Sparkles className="w-4 h-4" />, 
    prompt: "A modern, minimalist tech logo for an AI startup named 'NEXUS'. Geometric abstract shape using cyan and purple gradients, vector art style, clean white background.",
    desc: "Rapidly prototypes vector-style logo concepts."
  },
  { 
    id: 'social', 
    label: 'Viral Social Content', 
    icon: <Icons.Video className="w-4 h-4" />, 
    prompt: "A vibrant, high-energy Instagram Story layout for a fitness brand. Neon green accents, dynamic typography saying 'PUSH LIMITS', gym background, influencer aesthetic.",
    desc: "Creates engagement-ready social media assets."
  },
  { 
    id: 'render', 
    label: '3D Product Visualization', 
    icon: <Icons.Scan className="w-4 h-4" />, 
    prompt: "A futuristic ergonomic gaming mouse floating in a zero-gravity void. Matte black finish with RGB lighting strips, cyberpunk aesthetic, 3D render, octane render style.",
    desc: "Visualizes physical products in 3D environments."
  }
];

export const CreativeShowcase: React.FC = () => {
  const [activeCapability, setActiveCapability] = useState(CAPABILITIES[0]);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleExecute = async () => {
    if (!process.env.API_KEY) {
      setError("API Key missing. Cannot generate live AI images.");
      return;
    }

    setLoading(true);
    setError(null);
    setGeneratedImage(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      // Call Gemini 2.5 Flash Image (Nano Banana)
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [{ text: activeCapability.prompt }]
        }
      });

      const candidates = response.candidates;
      if (candidates && candidates[0] && candidates[0].content && candidates[0].content.parts) {
         let foundImage = false;
         for (const part of candidates[0].content.parts) {
            if (part.inlineData && part.inlineData.data) {
                const base64Data = part.inlineData.data;
                const mimeType = part.inlineData.mimeType || 'image/png';
                setGeneratedImage(`data:${mimeType};base64,${base64Data}`);
                foundImage = true;
                break;
            }
         }
         if (!foundImage) {
           setError("Model generated text instead of image. Try again.");
         }
      } else {
        setError("No image generated.");
      }

    } catch (err) {
      console.error(err);
      setError("Generation failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-[#050505] border-t border-white/5 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-purple/5 via-transparent to-transparent opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
             <span className="text-brand-purple font-mono text-sm uppercase tracking-widest mb-2 block">Powered by Nano Banana</span>
             <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Creative Capabilities</h2>
             <p className="text-gray-400 max-w-xl">
               See what I can build. Select a capability below to execute my proprietary prompt engineering workflows and generate live assets instantly.
             </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 bg-brand-card/50 border border-white/10 rounded-2xl p-2 md:p-8 backdrop-blur-sm">
           
           {/* Controls - Left Side */}
           <div className="lg:col-span-4 flex flex-col gap-4">
              <label className="text-xs font-mono text-gray-500 uppercase px-1">Select Workflow</label>
              {CAPABILITIES.map((cap) => (
                <button
                  key={cap.id}
                  onClick={() => { setActiveCapability(cap); setGeneratedImage(null); setError(null); }}
                  className={`p-4 rounded-xl border text-left transition-all group relative overflow-hidden ${activeCapability.id === cap.id ? 'bg-brand-purple/10 border-brand-purple text-white shadow-[0_0_20px_rgba(189,0,255,0.1)]' : 'bg-black/40 border-white/5 text-gray-400 hover:bg-white/5 hover:text-gray-200'}`}
                >
                  <div className="flex items-center gap-3 relative z-10">
                    <div className={`p-2 rounded-lg ${activeCapability.id === cap.id ? 'bg-brand-purple text-white' : 'bg-white/5 text-gray-500'}`}>
                      {cap.icon}
                    </div>
                    <div>
                      <div className="font-bold text-sm">{cap.label}</div>
                      <div className="text-xs opacity-70 mt-0.5 font-mono">{cap.desc}</div>
                    </div>
                  </div>
                  {activeCapability.id === cap.id && (
                     <div className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-brand-purple animate-pulse"></div>
                  )}
                </button>
              ))}

              <button
                onClick={handleExecute}
                disabled={loading}
                className="mt-4 w-full py-4 bg-white text-black font-bold rounded-xl transition-all hover:bg-brand-green hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl"
              >
                {loading ? (
                  <>Generating Asset <span className="animate-spin">⟳</span></>
                ) : (
                   <>Execute Workflow <Icons.Zap className="w-4 h-4 fill-black" /></>
                )}
              </button>
              {error && <p className="text-red-500 text-xs text-center">{error}</p>}
           </div>

           {/* Preview Stage - Right Side */}
           <div className="lg:col-span-8 flex flex-col gap-4">
              {/* Prompt Display */}
              <div className="bg-black border border-white/10 rounded-xl p-4 font-mono text-xs text-gray-400 relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-1 h-full bg-brand-purple"></div>
                 <span className="text-brand-purple font-bold mr-2">{'PROMPT >'}</span>
                 {activeCapability.prompt}
              </div>

              {/* Canvas */}
              <div className="flex-1 bg-black rounded-xl border border-white/10 relative overflow-hidden min-h-[400px] flex items-center justify-center group">
                {/* Grid Background */}
                <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
                    backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}></div>

                {generatedImage ? (
                  <div className="relative w-full h-full p-4 animate-in fade-in zoom-in duration-500 flex items-center justify-center">
                     <img src={generatedImage} alt="Generated Asset" className="max-w-full max-h-full object-contain rounded shadow-2xl" />
                     <div className="absolute bottom-6 right-6 flex gap-2">
                        <span className="bg-black/80 backdrop-blur text-[10px] px-3 py-1.5 rounded-full border border-white/20 text-gray-300 uppercase tracking-widest">
                          gemini-2.5-flash-image
                        </span>
                     </div>
                  </div>
                ) : (
                  <div className="text-center p-8 opacity-40">
                     {loading ? (
                       <div className="flex flex-col items-center gap-4">
                          <div className="w-16 h-16 border-4 border-brand-purple border-t-transparent rounded-full animate-spin"></div>
                          <p className="font-mono text-sm animate-pulse text-brand-purple">Processing request...</p>
                       </div>
                     ) : (
                       <div className="flex flex-col items-center gap-4">
                          <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-brand-purple/50 transition-colors">
                             <Icons.Palette className="w-10 h-10 text-gray-600 group-hover:text-brand-purple transition-colors" />
                          </div>
                          <p className="text-sm font-mono text-gray-500">System Ready. Awaiting Execution.</p>
                       </div>
                     )}
                  </div>
                )}
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};