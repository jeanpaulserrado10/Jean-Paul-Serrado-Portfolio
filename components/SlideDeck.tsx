import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Icons } from './Icons';

interface SlideDeckProps {
  slides: { id: string; name: string; component: React.ReactNode }[];
}

export const SlideDeck: React.FC<SlideDeckProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [showIndex, setShowIndex] = useState(false);
  const [showShortcuts, setShowShortcuts] = useState(false);

  const nextSlide = useCallback(() => {
    if (currentIndex < slides.length - 1) {
      setDirection(1);
      setCurrentIndex(prev => prev + 1);
    }
  }, [currentIndex, slides.length]);

  const prevSlide = useCallback(() => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex(prev => prev - 1);
    }
  }, [currentIndex]);

  const goToSlide = useCallback((index: number) => {
    if (index === currentIndex) return;
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) return;
      if (e.key === 'Escape') {
        setShowIndex(false);
        setShowShortcuts(false);
        return;
      }
      if (showIndex || showShortcuts) return;
      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
        case 'j':
          e.preventDefault();
          nextSlide(); break;
        case 'ArrowLeft':
        case 'ArrowUp':
        case 'k':
          prevSlide(); break;
        case '?':
        case '/':
          setShowShortcuts(true); break;
        case 'i':
        case 'm':
          setShowIndex(true); break;
        case 'Home':
          goToSlide(0); break;
        case 'End':
          goToSlide(slides.length - 1); break;
        default: {
          const num = parseInt(e.key);
          if (!isNaN(num) && num >= 1 && num <= slides.length) {
            goToSlide(num - 1);
          }
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, goToSlide, slides.length, showIndex, showShortcuts]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? '4%' : '-4%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir < 0 ? '4%' : '-4%', opacity: 0 }),
  };

  const progress = (currentIndex / (slides.length - 1)) * 100;
  const current = slides[currentIndex];
  const next = slides[currentIndex + 1];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-brand-black flex flex-col">

      {/* ════════ TOP NAV ════════ */}
      <header className="shrink-0 z-40 border-b border-white/[0.06] bg-brand-black/80 backdrop-blur-xl">
        <div className="px-6 md:px-10 h-16 flex items-center justify-between gap-6">

          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-md bg-brand-lime flex items-center justify-center">
              <span className="text-black font-bold text-sm leading-none">J</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-ink-100 font-semibold text-[13px] leading-none tracking-tight">Jean-Paul Serrado</p>
              <p className="text-ink-500 text-[10px] font-mono leading-none mt-1.5 tracking-wider uppercase">Creative Producer</p>
            </div>
          </div>

          {/* Section indicator */}
          <button
            onClick={() => setShowIndex(true)}
            className="group flex items-center gap-3 px-4 py-1.5 rounded-full hover:bg-white/[0.04] transition-colors"
          >
            <span className="text-ink-500 text-[10px] font-mono tracking-widest">
              {String(currentIndex + 1).padStart(2, '0')} <span className="opacity-50">/</span> {String(slides.length).padStart(2, '0')}
            </span>
            <span className="text-ink-100 text-sm font-medium">{current.name}</span>
            <Icons.Grid className="w-3 h-3 text-ink-500 group-hover:text-ink-200 transition-colors" />
          </button>

          {/* Right controls */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setShowShortcuts(true)}
              className="hidden md:flex items-center gap-2 h-8 px-3 rounded-full text-ink-400 hover:text-ink-100 hover:bg-white/[0.04] transition-colors"
              title="Keyboard shortcuts"
            >
              <kbd className="font-mono text-[10px] text-ink-300">?</kbd>
            </button>
            <div className="hidden sm:block w-px h-5 bg-white/[0.08] mx-1" />
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="w-8 h-8 rounded-full flex items-center justify-center text-ink-300 hover:text-ink-100 hover:bg-white/[0.04] disabled:opacity-25 disabled:cursor-not-allowed transition-colors"
              aria-label="Previous"
            >
              <Icons.ArrowLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex === slides.length - 1}
              className="w-8 h-8 rounded-full flex items-center justify-center text-ink-300 hover:text-ink-100 hover:bg-white/[0.04] disabled:opacity-25 disabled:cursor-not-allowed transition-colors"
              aria-label="Next"
            >
              <Icons.ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Progress strip */}
        <div className="h-px w-full bg-white/[0.04]">
          <motion.div
            className="h-full bg-brand-lime origin-left"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
          />
        </div>
      </header>

      {/* ════════ SLIDE CONTENT ════════ */}
      <main className="flex-1 relative overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'tween', duration: 0.45, ease: [0.32, 0.72, 0, 1] },
              opacity: { duration: 0.25, ease: 'easeOut' },
            }}
            className="absolute inset-0 w-full h-full overflow-y-auto overflow-x-hidden"
            style={{ scrollbarWidth: 'thin', scrollbarColor: '#262626 transparent' }}
          >
            <div className="min-h-full w-full">
              {current.component}
            </div>

            {/* Continue nudge */}
            {next && (
              <button
                onClick={nextSlide}
                className="w-full py-12 group flex flex-col items-center gap-2 hover:bg-white/[0.02] transition-colors border-t border-white/[0.04]"
              >
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-ink-500 group-hover:text-ink-200 transition-colors">
                  Continue → {next.name}
                </span>
                <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center group-hover:border-brand-lime/50 group-hover:translate-y-1 transition-all">
                  <Icons.ArrowRight className="w-3 h-3 text-ink-500 group-hover:text-brand-lime rotate-90 transition-colors" />
                </div>
              </button>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Side rail — section ticks */}
        <div className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 flex-col gap-1.5 z-20">
          {slides.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => goToSlide(idx)}
              title={s.name}
              className="group flex items-center gap-2"
            >
              <span className={`text-[9px] font-mono tabular-nums transition-all duration-300 ${
                idx === currentIndex ? 'text-brand-lime opacity-100' : 'text-ink-500 opacity-0 group-hover:opacity-100'
              }`}>
                {String(idx + 1).padStart(2, '0')}
              </span>
              <span className={`block transition-all duration-300 rounded-full ${
                idx === currentIndex
                  ? 'w-6 h-[2px] bg-brand-lime'
                  : 'w-3 h-[2px] bg-white/15 group-hover:bg-white/40 group-hover:w-5'
              }`} />
            </button>
          ))}
        </div>
      </main>

      {/* ════════ INDEX MODAL (i / m) ════════ */}
      <AnimatePresence>
        {showIndex && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[200] bg-brand-black/95 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setShowIndex(false)}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
              onClick={e => e.stopPropagation()}
              className="w-full max-w-2xl"
            >
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-ink-500 mb-2">Index</p>
                  <h2 className="text-3xl font-serif text-ink-100">Jump to a section</h2>
                </div>
                <button
                  onClick={() => setShowIndex(false)}
                  className="w-9 h-9 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-ink-300 hover:text-ink-100 flex items-center justify-center transition-colors text-lg"
                >×</button>
              </div>

              <div className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
                {slides.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => { goToSlide(idx); setShowIndex(false); }}
                    className={`w-full py-4 flex items-center gap-6 text-left group transition-colors ${
                      idx === currentIndex ? 'bg-white/[0.02]' : 'hover:bg-white/[0.02]'
                    }`}
                  >
                    <span className={`text-[10px] font-mono tabular-nums w-6 ${
                      idx === currentIndex ? 'text-brand-lime' : 'text-ink-500 group-hover:text-ink-300'
                    }`}>
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className={`flex-1 text-base transition-colors ${
                      idx === currentIndex ? 'text-ink-100' : 'text-ink-300 group-hover:text-ink-100'
                    }`}>
                      {s.name}
                    </span>
                    {idx === currentIndex && (
                      <span className="text-[10px] font-mono text-brand-lime">CURRENT</span>
                    )}
                    <Icons.ArrowRight className="w-3.5 h-3.5 text-ink-600 group-hover:text-ink-200 transition-colors" />
                  </button>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-between text-[10px] font-mono text-ink-600 uppercase tracking-widest">
                <span>Press a number 1–{slides.length} to jump</span>
                <span>Esc to close</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ════════ SHORTCUTS MODAL (?) ════════ */}
      <AnimatePresence>
        {showShortcuts && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[200] bg-brand-black/95 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setShowShortcuts(false)}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={e => e.stopPropagation()}
              className="w-full max-w-md"
            >
              <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-ink-500 mb-2">Shortcuts</p>
              <h2 className="text-3xl font-serif text-ink-100 mb-8">Move with your keyboard</h2>

              <div className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
                {[
                  { keys: ['→', 'Space', 'J'], desc: 'Next slide' },
                  { keys: ['←', 'K'], desc: 'Previous slide' },
                  { keys: ['1', '–', String(slides.length)], desc: 'Jump to a section' },
                  { keys: ['I', 'M'], desc: 'Open index' },
                  { keys: ['?'], desc: 'Toggle this panel' },
                  { keys: ['Esc'], desc: 'Close any modal' },
                ].map((row, idx) => (
                  <div key={idx} className="py-3.5 flex items-center justify-between gap-4">
                    <span className="text-ink-300 text-sm">{row.desc}</span>
                    <div className="flex items-center gap-1">
                      {row.keys.map((k, i) => (
                        k === '–'
                          ? <span key={i} className="text-ink-600 text-xs px-1">{k}</span>
                          : <kbd key={i} className="px-2 h-6 inline-flex items-center text-[11px] font-mono bg-white/[0.05] border border-white/[0.08] rounded text-ink-200 min-w-[24px] justify-center">{k}</kbd>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-center text-[10px] font-mono text-ink-600 uppercase tracking-widest mt-8">
                Esc to close
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
