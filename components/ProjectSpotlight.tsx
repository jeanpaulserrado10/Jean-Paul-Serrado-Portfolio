import React, { useState } from 'react';
import { Icons } from './Icons';

const blogs = [
  {
    title: "The #1 Reason for Post-Construction Cleaning Delays",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop", 
    keyphrase: "Post-Construction Cleaning Delays",
    score: 92,
    excerpt: "The Final Hurdle That Trips Up Almost Every Project. When a site looks spotless, the danger that remains...",
    link: "https://spruces.co/uncategorized/the-1-reason-for-post-construction-cleaning-delays/"
  },
  {
    title: "From Scheduling to Sign-Off: Professional Handover Cleaning",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop", 
    keyphrase: "Building Handover Cleaning",
    score: 88,
    excerpt: "Why Scheduling Matters in Building Handover Cleaning. A handover clean is not just another task...",
    link: "https://spruces.co/post-construction-cleaning/building-handover-cleaning-schedule/"
  },
  {
    title: "5 Ways Construction Cleaning Technology is Revolutionizing Final Cleans",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop", 
    keyphrase: "Construction Cleaning Technology",
    score: 96,
    excerpt: "The Shift from Manual Lists to Digital Precision. How AI and Apps are changing the handover game...",
    link: "https://spruces.co/uncategorized/5-ways-construction-cleaning-technology-is-revolutionizing-final-cleans/"
  },
  {
    title: "3 Toughest Messes to Remove from a Construction Site",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop", 
    keyphrase: "Construction Site Messes",
    score: 90,
    excerpt: "When the Build Ends, the Real Cleaning Begins. If you've ever walked through a newly...",
    link: "https://spruces.co/blogs/3-toughest-messes-to-remove-from-a-construction-site-causing-postconstruction-cleaning-challenge/"
  }
];

interface BlogCardProps {
  blog: typeof blogs[0];
  isAiView: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog, isAiView }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="block h-full transform transition-transform duration-300 hover:-translate-y-2 relative group">
      <div className={`bg-brand-card rounded-2xl overflow-hidden border transition-all duration-500 flex flex-col h-full ${isAiView ? 'border-brand-green/40 shadow-xl shadow-brand-green/5' : 'border-white/5 hover:border-brand-green/50 hover:shadow-2xl hover:shadow-brand-green/10'}`}>
        
        {/* Image Section */}
        <div className="relative aspect-video bg-gray-800 overflow-hidden">
          <img 
              src={blog.image} 
              alt={blog.title}
              loading="lazy"
              className={`w-full h-full object-cover transition-all duration-700 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'} ${isAiView ? 'grayscale opacity-40' : 'group-hover:scale-110'}`}
              onLoad={() => setIsLoaded(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-transparent to-transparent opacity-60"></div>
          
          {/* Badge on Image */}
          <div className={`absolute top-3 right-3 backdrop-blur-md px-2 py-1 rounded border text-[10px] font-bold flex items-center gap-1.5 shadow-lg transition-all duration-300 ${isAiView ? 'bg-brand-green/10 border-brand-green text-brand-green' : 'bg-black/60 border-white/10 text-white'}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${isAiView ? 'bg-brand-green animate-pulse' : (blog.score > 90 ? 'bg-brand-green' : 'bg-brand-blue')}`}></span>
              {isAiView ? 'Analyzed' : 'Live'}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 flex flex-col flex-1 relative">
          <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 leading-tight group-hover:text-brand-green transition-colors">{blog.title}</h3>
          <p className={`text-xs text-gray-400 line-clamp-2 leading-relaxed flex-1 transition-all duration-500 ${isAiView ? 'opacity-20 blur-[1px]' : 'opacity-100'}`}>{blog.excerpt}</p>
          
          <a 
            href={blog.link} 
            target="_blank" 
            rel="noreferrer"
            className={`mt-4 text-xs font-bold text-brand-green flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isAiView ? 'hidden' : ''}`}
          >
             Read Article <Icons.ExternalLink className="w-3 h-3" />
          </a>

          {/* SEO Metrics Dashboard (Conditionally Visible based on State) */}
          <div className={`absolute bottom-6 left-6 right-6 transition-all duration-500 transform ${isAiView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'}`}>
              <div className="bg-black/80 backdrop-blur-xl rounded-xl p-4 border border-brand-green/30 space-y-4 relative overflow-hidden shadow-2xl">
                  
                  {/* Header of Metrics */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-brand-green flex items-center gap-1.5">
                          <Icons.Scan className="w-3 h-3" /> SEO X-Ray
                      </span>
                      <span className="text-brand-green font-mono font-bold text-xs">{blog.score}/100</span>
                  </div>

                  {/* Keyphrase */}
                  <div>
                      <span className="text-[10px] text-gray-500 block mb-1.5">Target Keyphrase</span>
                      <div className="text-xs text-gray-200 bg-white/5 px-2.5 py-1.5 rounded border border-white/10 truncate flex items-center gap-2">
                          <Icons.Search className="w-3 h-3 text-brand-blue" />
                          {blog.keyphrase}
                      </div>
                  </div>

                  <div className="flex justify-between items-center pt-2">
                      <div className="flex items-center gap-1.5">
                          <Icons.FileText className="w-3 h-3 text-brand-blue" />
                          <span className="text-[10px] text-gray-400">Readability: <span className="text-white">Good</span></span>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProjectSpotlight: React.FC = () => {
  const [isAiView, setIsAiView] = useState(false);

  return (
    <section id="projects" className="py-32 relative bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">The SEO Blog "X-Ray"</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              I don't just "write" blogs; I engineer them. My custom Gemini 3 agent optimizes for semantic density and keyphrase distribution before a human ever reviews it. 
              <span className="text-brand-green block mt-2 font-mono text-sm uppercase tracking-widest flex items-center gap-2">
                <Icons.Check className="w-4 h-4" /> Live Results from Spruces.co
              </span>
            </p>
          </div>
          
          {/* Interactive Toggle Switch */}
          <div className="flex flex-col items-end">
             <div className="text-xs text-gray-500 mb-3 font-mono">TOGGLE VIEW MODE</div>
             <div className="bg-white/5 p-1 rounded-full border border-white/10 flex relative w-64 cursor-pointer" onClick={() => setIsAiView(!isAiView)}>
                {/* Sliding Background */}
                <div className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-brand-green rounded-full shadow-lg shadow-brand-green/20 transition-all duration-300 ${isAiView ? 'left-[calc(50%)]' : 'left-1'}`}></div>
                
                <button 
                  onClick={(e) => { e.stopPropagation(); setIsAiView(false); }}
                  className={`flex-1 relative z-10 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors duration-300 text-center rounded-full ${!isAiView ? 'text-black' : 'text-gray-400 hover:text-white'}`}
                >
                  Human View
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); setIsAiView(true); }}
                  className={`flex-1 relative z-10 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors duration-300 text-center rounded-full ${isAiView ? 'text-black' : 'text-gray-400 hover:text-white'}`}
                >
                  AI View
                </button>
             </div>
             <p className="text-[10px] text-gray-600 mt-2 text-right w-64">
                {isAiView ? "System Metrics Revealed" : "Standard Visitor Experience"}
             </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.map((blog, idx) => (
            <BlogCard key={idx} blog={blog} isAiView={isAiView} />
          ))}
        </div>

        <div className="mt-20 flex flex-col justify-center items-center gap-6">
            <a 
              href="https://spruces.co/blog/" 
              target="_blank" 
              rel="noreferrer" 
              className="px-10 py-5 bg-brand-green text-black font-bold text-lg rounded-xl hover:bg-white hover:scale-105 transition-all shadow-[0_0_20px_rgba(0,255,157,0.3)] flex items-center gap-3 animate-pulse-slow"
            >
                View Live Generated Blogs <Icons.ExternalLink className="w-5 h-5" />
            </a>
        </div>
      </div>
    </section>
  );
};