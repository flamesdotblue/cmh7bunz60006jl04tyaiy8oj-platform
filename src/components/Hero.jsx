import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col">
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

      <div className="relative flex-1">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-36 pb-24 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 backdrop-blur px-3 py-1 text-xs text-gray-600">
            <span className="inline-block h-2 w-2 rounded-full bg-red-500" />
            New: Adaptive learning paths with AI
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Build a modern Learning Experience Platform
          </h1>
          <p className="mt-5 max-w-2xl text-gray-600">
            Deliver personalized, skill-based learning at scale. Curate content, track progress, and unlock growth for your teams with a clean, interactive experience.
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
