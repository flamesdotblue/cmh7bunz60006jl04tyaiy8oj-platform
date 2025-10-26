import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-slate-900 text-white font-bold flex items-center justify-center">L</div>
              <span className="font-semibold">LXP Platform</span>
            </div>
            <p className="mt-3 text-slate-600">A modern, interactive learning experience platform for teams that grow fast.</p>
          </div>
          <div>
            <h5 className="font-semibold text-slate-900">Product</h5>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li><a href="#features" className="hover:text-slate-900">Features</a></li>
              <li><a href="#integrations" className="hover:text-slate-900">Integrations</a></li>
              <li><a href="#pricing" className="hover:text-slate-900">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-slate-900">Resources</h5>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li><a href="#demo" className="hover:text-slate-900">Demo</a></li>
              <li><a href="#docs" className="hover:text-slate-900">Docs</a></li>
              <li><a href="#security" className="hover:text-slate-900">Security</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-slate-900">Company</h5>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li><a href="#about" className="hover:text-slate-900">About</a></li>
              <li><a href="#careers" className="hover:text-slate-900">Careers</a></li>
              <li><a href="#contact" className="hover:text-slate-900">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>© {new Date().getFullYear()} LXP Platform. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-slate-700">Privacy</a>
            <a href="#terms" className="hover:text-slate-700">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
