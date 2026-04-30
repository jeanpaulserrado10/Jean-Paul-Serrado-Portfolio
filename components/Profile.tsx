import React from 'react';
import { Icons } from './Icons';

export const Profile: React.FC = () => {
  return (
    <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12">
          
          {/* Left Column: Education & Languages */}
          <div className="md:col-span-4 space-y-12">
            <div>
              <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
                <Icons.Globe className="w-5 h-5 text-brand-green" /> Global Availability
              </h3>
              <div className="space-y-4">
                <div className="bg-brand-card p-4 rounded-lg border border-white/5">
                  <div className="flex justify-between items-end mb-1">
                    <span className="text-gray-200 font-medium">Spanish</span>
                    <span className="text-xs text-brand-green font-mono">NATIVE</span>
                  </div>
                  <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-green w-full"></div>
                  </div>
                </div>
                <div className="bg-brand-card p-4 rounded-lg border border-white/5">
                  <div className="flex justify-between items-end mb-1">
                    <span className="text-gray-200 font-medium">English</span>
                    <span className="text-xs text-brand-blue font-mono">FLUENT (C1)</span>
                  </div>
                  <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-blue w-[95%]"></div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/5">
                   <p className="text-xs text-gray-500 leading-relaxed">
                     <span className="text-white font-bold">Remote-Native Setup:</span> High-speed internet, dedicated office, and aligned with US/EU time zones (UTC-5).
                   </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
                 Education
              </h3>
              <div className="bg-brand-card p-6 rounded-lg border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-brand-purple/5 rounded-bl-full"></div>
                <div className="relative z-10">
                  <h4 className="text-white font-bold mb-1">Universidad Espíritu Santo</h4>
                  <p className="text-sm text-gray-500 mb-4">Bachelor of Marketing (Online)</p>
                  <div className="flex justify-between items-center text-xs text-gray-400 font-mono border-t border-white/5 pt-3">
                    <span>Ecuador</span>
                    <span>2025</span>
                  </div>
                  <div className="mt-4 text-xs text-gray-500">
                    <strong className="text-gray-400">Focus:</strong> Digital Ecosystems, Data Analytics, AI in Business.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Expertise Narrative */}
          <div className="md:col-span-8">
            <h3 className="text-white font-bold text-xl mb-8">My 4-Pillar SEO Strategy</h3>
            
            <div className="space-y-6">
                <p className="text-xl text-gray-300 font-light leading-relaxed">
                  I don't just "do" marketing; I execute <strong className="text-white">proven growth protocols</strong>. My focus is on driving measurable ROI through Full-Stack SEO and High-Volume Content Creation, leveraging AI to speed up execution by 10x.
                </p>
                
                {/* SEO Pillars Grid */}
                <div className="grid sm:grid-cols-2 gap-4 pt-4">
                  {/* On-Page */}
                  <div className="p-6 bg-brand-card rounded-xl border border-white/5 hover:border-brand-green/30 transition-colors group">
                    <h4 className="text-brand-green font-bold text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
                      <Icons.FileText className="w-4 h-4 group-hover:scale-110 transition-transform" /> On-Page SEO
                    </h4>
                    <p className="text-xs text-gray-400 mb-3 italic">Optimizing elements on your actual web pages.</p>
                    <div className="h-px bg-white/5 w-full mb-3"></div>
                    <ul className="text-sm text-gray-300 space-y-2">
                      <li className="flex gap-2 items-start"><span className="text-brand-green mt-1">›</span> Keyword research & high-quality content</li>
                      <li className="flex gap-2 items-start"><span className="text-brand-green mt-1">›</span> Optimized titles, headers, & meta descriptions</li>
                      <li className="flex gap-2 items-start"><span className="text-brand-green mt-1">›</span> Image alt text & mobile-friendly UX</li>
                    </ul>
                  </div>

                  {/* Off-Page */}
                  <div className="p-6 bg-brand-card rounded-xl border border-white/5 hover:border-brand-purple/30 transition-colors group">
                    <h4 className="text-brand-purple font-bold text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
                      <Icons.Globe className="w-4 h-4 group-hover:scale-110 transition-transform" /> Off-Page SEO
                    </h4>
                    <p className="text-xs text-gray-400 mb-3 italic">Activities outside your website that build authority.</p>
                    <div className="h-px bg-white/5 w-full mb-3"></div>
                    <ul className="text-sm text-gray-300 space-y-2">
                      <li className="flex gap-2 items-start"><span className="text-brand-purple mt-1">›</span> Earning high-quality backlinks (votes of confidence)</li>
                      <li className="flex gap-2 items-start"><span className="text-brand-purple mt-1">›</span> Social media signals</li>
                      <li className="flex gap-2 items-start"><span className="text-brand-purple mt-1">›</span> Brand mentions & Digital PR</li>
                    </ul>
                  </div>

                  {/* Technical */}
                  <div className="p-6 bg-brand-card rounded-xl border border-white/5 hover:border-brand-blue/30 transition-colors group">
                    <h4 className="text-brand-blue font-bold text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
                      <Icons.Cpu className="w-4 h-4 group-hover:scale-110 transition-transform" /> Technical SEO
                    </h4>
                    <p className="text-xs text-gray-400 mb-3 italic">Optimizing backend structure for crawlers.</p>
                    <div className="h-px bg-white/5 w-full mb-3"></div>
                    <ul className="text-sm text-gray-300 space-y-2">
                      <li className="flex gap-2 items-start"><span className="text-brand-blue mt-1">›</span> Site speed & mobile-friendliness</li>
                      <li className="flex gap-2 items-start"><span className="text-brand-blue mt-1">›</span> Crawlability (sitemaps, robots.txt)</li>
                      <li className="flex gap-2 items-start"><span className="text-brand-blue mt-1">›</span> Security (HTTPS) & structured data</li>
                    </ul>
                  </div>

                  {/* Local */}
                  <div className="p-6 bg-brand-card rounded-xl border border-white/5 hover:border-yellow-500/30 transition-colors group">
                    <h4 className="text-yellow-500 font-bold text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
                      <Icons.Search className="w-4 h-4 group-hover:scale-110 transition-transform" /> Local SEO
                    </h4>
                    <p className="text-xs text-gray-400 mb-3 italic">Increasing visibility in location-based searches.</p>
                    <div className="h-px bg-white/5 w-full mb-3"></div>
                    <ul className="text-sm text-gray-300 space-y-2">
                      <li className="flex gap-2 items-start"><span className="text-yellow-500 mt-1">›</span> Optimizing Google Business Profile (GBP)</li>
                      <li className="flex gap-2 items-start"><span className="text-yellow-500 mt-1">›</span> Local citations (NAP consistency)</li>
                      <li className="flex gap-2 items-start"><span className="text-yellow-500 mt-1">›</span> Managing reviews & location keywords</li>
                    </ul>
                  </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};