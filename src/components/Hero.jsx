import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Play } from 'lucide-react';

function AnimatedAIBackdrop() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Subtle grid */}
      <svg className="absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="1" />
          </pattern>
          <radialGradient id="vignette" cx="50%" cy="35%" r="70%">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.8)" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <rect width="100%" height="100%" fill="url(#vignette)" />
      </svg>

      {/* Gradient halos */}
      <motion.div
        aria-hidden
        className="absolute -top-24 -right-24 h-[38rem] w-[38rem] rounded-full"
        style={{ background: 'radial-gradient(closest-side, rgba(255,99,99,0.30), transparent 70%)' }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 60, ease: 'linear', repeat: Infinity }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-32 -left-28 h-[34rem] w-[34rem] rounded-full"
        style={{ background: 'radial-gradient(closest-side, rgba(255,180,180,0.30), transparent 70%)' }}
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 80, ease: 'linear', repeat: Infinity }}
      />

      {/* AI node constellation */}
      <div className="absolute inset-0">
        {Array.from({ length: 18 }).map((_, i) => {
          const baseX = (i * 53) % 100; // pseudo spread
          const baseY = (i * 29) % 100;
          const delay = (i % 6) * 0.6;
          const size = 4 + (i % 3);
          return (
            <motion.span
              key={i}
              className="absolute rounded-full bg-red-500/70 shadow-[0_0_12px_rgba(255,80,80,0.6)]"
              style={{
                width: size,
                height: size,
                left: `${baseX}%`,
                top: `${baseY}%`,
              }}
              initial={{ opacity: 0.4 }}
              animate={{
                x: [0, (i % 2 === 0 ? 8 : -8), 0],
                y: [0, (i % 3 === 0 ? -10 : 10), 0],
                opacity: [0.35, 0.7, 0.35],
              }}
              transition={{ duration: 8 + (i % 5), repeat: Infinity, ease: 'easeInOut', delay }}
            />
          );
        })}

        {/* Soft connecting lines (animated opacity) */}
        {[
          [[10, 15], [25, 20], [40, 14], [52, 24]],
          [[60, 70], [68, 62], [78, 66], [86, 58]],
          [[22, 72], [34, 64], [46, 72], [58, 66]],
        ].map((points, idx) => (
          <motion.svg
            key={idx}
            className="absolute inset-0"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            initial={{ opacity: 0.15 }}
            animate={{ opacity: [0.12, 0.3, 0.12] }}
            transition={{ duration: 6 + idx * 2, repeat: Infinity, ease: 'easeInOut' }}
            aria-hidden
          >
            <polyline
              points={points.map(([x, y]) => `${x},${y}`).join(' ')}
              fill="none"
              stroke="rgba(239, 68, 68, 0.5)"
              strokeWidth="0.3"
            />
          </motion.svg>
        ))}
      </div>

      {/* Top white gradient to ensure legibility over animation */}
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
            <div className="h-9 w-9 rounded-md bg-red-500/90 flex items-center justify-center text-white font-bold">L</div>
            <span className="font-semibold tracking-tight">LXP Platform</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#features" className="hover:text-gray-700">Features</a>
            <a href="#integrations" className="hover:text-gray-700">Integrations</a>
            <a href="#pricing" className="hover:text-gray-700">Pricing</a>
            <a href="#demo" className="hover:text-gray-700">Demo</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex rounded-md border border-gray-200 px-4 py-2 text-sm hover:bg-gray-50">Sign in</button>
            <button className="inline-flex items-center gap-2 rounded-md bg-gray-900 text-white px-4 py-2 text-sm hover:bg-gray-800">
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
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 backdrop-blur px-3 py-1 text-xs text-gray-600">
            <span className="inline-block h-2 w-2 rounded-full bg-red-500" />
            AI-native learning experiences
          </div>

          <h1 className="mt-6 text-[2.2rem] leading-[1.15] sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 whitespace-pre-line">
            {`Transforming Talent\nThrough Continuous\nLearning.`}
          </h1>

          <p className="mt-5 max-w-2xl text-gray-600">
            Personalized learning journeys for every role, at every level.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-md bg-red-500 text-white px-5 py-3 text-sm font-medium shadow-sm hover:bg-red-600">
              <Rocket size={18} />
              Launch your LXP
            </button>
            <button className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-5 py-3 text-sm font-medium hover:bg-gray-50">
              <Play size={18} />
              Watch demo
            </button>
          </div>

          <div className="mt-10 flex items-center gap-6 text-xs text-gray-500">
            <div>ISO 27001 ready</div>
            <div className="h-1 w-1 rounded-full bg-gray-300" />
            <div>SCORM & xAPI support</div>
            <div className="h-1 w-1 rounded-full bg-gray-300" />
            <div>SSO with SAML / OAuth</div>
          </div>
        </div>
      </div>
    </section>
  );
}
