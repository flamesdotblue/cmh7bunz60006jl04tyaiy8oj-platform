import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Play } from 'lucide-react';
import Typewriter from './Typewriter';

function AnimatedAIBackdrop() {
  const lineSets = [
    [ [10, 18], [24, 24], [39, 17], [52, 26] ],
    [ [62, 72], [70, 63], [79, 69], [88, 60] ],
    [ [18, 68], [30, 60], [44, 70], [57, 63] ]
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Navy grid */}
      <svg className="absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <pattern id="grid-navy" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="rgba(10,22,42,0.08)" strokeWidth="1" />
          </pattern>
          <radialGradient id="vignette-navy" cx="50%" cy="35%" r="70%">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.85)" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-navy)" />
        <rect width="100%" height="100%" fill="url(#vignette-navy)" />
      </svg>

      {/* Turquoise/Navy halos */}
      <motion.div
        aria-hidden
        className="absolute -top-24 -right-24 h-[40rem] w-[40rem] rounded-full"
        style={{ background: 'radial-gradient(closest-side, rgba(13,148,136,0.24), transparent 70%)' }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 70, ease: 'linear', repeat: Infinity }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-32 -left-28 h-[36rem] w-[36rem] rounded-full"
        style={{ background: 'radial-gradient(closest-side, rgba(15,23,42,0.18), transparent 70%)' }}
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 95, ease: 'linear', repeat: Infinity }}
      />

      {/* AI constellation (turquoise nodes) */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => {
          const baseX = (i * 47) % 100;
          const baseY = (i * 31) % 100;
          const delay = (i % 7) * 0.5;
          const size = 4 + (i % 3);
          return (
            <motion.span
              key={i}
              className="absolute rounded-full bg-cyan-400/70 shadow-[0_0_12px_rgba(34,211,238,0.6)]"
              style={{ width: size, height: size, left: `${baseX}%`, top: `${baseY}%` }}
              initial={{ opacity: 0.35 }}
              animate={{ x: [0, (i % 2 === 0 ? 9 : -9), 0], y: [0, (i % 3 === 0 ? -12 : 12), 0], opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 9 + (i % 5), repeat: Infinity, ease: 'easeInOut', delay }}
            />
          );
        })}

        {lineSets.map((points, idx) => (
          <motion.svg
            key={idx}
            className="absolute inset-0"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            initial={{ opacity: 0.14 }}
            animate={{ opacity: [0.12, 0.3, 0.12] }}
            transition={{ duration: 7 + idx * 2, repeat: Infinity, ease: 'easeInOut' }}
            aria-hidden
          >
            <polyline
              points={points.map(([x, y]) => `${x},${y}`).join(' ')}
              fill="none"
              stroke="rgba(13,148,136,0.5)"
              strokeWidth="0.35"
            />
          </motion.svg>
        ))}
      </div>

      {/* Legibility gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white/60 to-white/10" />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-20">
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-md bg-slate-900 flex items-center justify-center text-white font-bold">L</div>
            <span className="font-semibold tracking-tight">LXP Platform</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#features" className="hover:text-slate-700">Features</a>
            <a href="#integrations" className="hover:text-slate-700">Integrations</a>
            <a href="#pricing" className="hover:text-slate-700">Pricing</a>
            <a href="#demo" className="hover:text-slate-700">Demo</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex rounded-md border border-slate-200 px-4 py-2 text-sm hover:bg-slate-50">Sign in</button>
            <button className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-4 py-2 text-sm hover:bg-slate-800">
              <Rocket size={16} />
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Animated background */}
      <div className="relative flex-1">
        <AnimatedAIBackdrop />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-36 pb-24 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 backdrop-blur px-3 py-1 text-xs text-slate-600">
            <span className="inline-block h-2 w-2 rounded-full bg-cyan-400" />
            AI-native learning experiences
          </div>

          <h1 className="mt-6 text-[2.2rem] leading-[1.15] sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 whitespace-pre-line">
            {`Transforming Talent\nThrough Continuous\nLearning.`}
          </h1>

          <div className="mt-5 max-w-2xl text-slate-700 text-lg">
            <Typewriter
              text="Personalized learning journeys for every role, at every level."
              speed={22}
              startDelay={300}
            />
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-slate-900 to-cyan-700 text-white px-5 py-3 text-sm font-medium shadow-sm hover:from-slate-800 hover:to-cyan-600">
              <Rocket size={18} />
              Launch your LXP
            </button>
            <button className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-5 py-3 text-sm font-medium hover:bg-slate-50">
              <Play size={18} />
              Watch demo
            </button>
          </div>

          <div className="mt-10 flex items-center gap-6 text-xs text-slate-500">
            <div>ISO 27001 ready</div>
            <div className="h-1 w-1 rounded-full bg-slate-300" />
            <div>SCORM & xAPI support</div>
            <div className="h-1 w-1 rounded-full bg-slate-300" />
            <div>SSO with SAML / OAuth</div>
          </div>
        </div>
      </div>
    </section>
  );
}
