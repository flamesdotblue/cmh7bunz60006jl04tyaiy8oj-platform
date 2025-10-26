import React from 'react';
import { Plug, Layers, Rocket } from 'lucide-react';

const logos = [
  { name: 'Slack', bg: 'bg-slate-900', text: 'text-white' },
  { name: 'Google', bg: 'bg-slate-100', text: 'text-slate-900' },
  { name: 'Microsoft', bg: 'bg-slate-900', text: 'text-white' },
  { name: 'Okta', bg: 'bg-slate-100', text: 'text-slate-900' },
  { name: 'Workday', bg: 'bg-slate-900', text: 'text-white' },
  { name: 'Salesforce', bg: 'bg-slate-100', text: 'text-slate-900' },
];

export default function Integrations() {
  return (
    <section id="integrations" className="relative border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600">
              <Plug className="h-3.5 w-3.5 text-cyan-700" />
              Integrations
            </div>
            <h3 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">Connect your tools and content sources</h3>
            <p className="mt-3 text-slate-600">Plug into your HRIS, SSO, and content providers. Import learning objects, sync users, and push completion data back to your systems.</p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {logos.map((l) => (
                <div key={l.name} className={`flex items-center justify-center rounded-md border border-slate-200 ${l.bg} ${l.text} h-14 text-sm font-medium`}>
                  {l.name}
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-3 text-sm text-slate-600">
              <Layers className="h-4 w-4 text-cyan-600" />
              SCORM 1.2/2004, xAPI, and LTI supported
            </div>
            <div className="mt-2 flex items-center gap-3 text-sm text-slate-600">
              <Rocket className="h-4 w-4 text-cyan-600" />
              REST & Webhooks for custom workflows
            </div>
          </div>
          <div className="relative rounded-2xl border border-slate-200 p-6 bg-gradient-to-br from-white to-cyan-50">
            <div className="grid grid-cols-6 gap-2">
              {Array.from({ length: 30 }).map((_, i) => (
                <div key={i} className="aspect-square rounded-md bg-white border border-cyan-100" />
              ))}
            </div>
            <div className="mt-6">
              <h4 className="font-semibold text-slate-900">Composable by design</h4>
              <p className="mt-2 text-sm text-slate-600">Mix and match providers, bring your own LRS, and keep ownership of your data.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
