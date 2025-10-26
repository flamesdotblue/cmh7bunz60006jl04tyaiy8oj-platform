import React from 'react';
import { BookOpen, Users, Sparkles, LineChart, Shield } from 'lucide-react';

const features = [
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: 'AI Curation',
    desc: 'Aggregate courses from any source and let AI personalize learning paths by role, skills, and goals.'
  },
  {
    icon: <BookOpen className="h-5 w-5" />,
    title: 'Unified Library',
    desc: 'Bring in SCORM, xAPI, videos, and articles with rich search, tagging, and recommendations.'
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: 'Cohorts & Communities',
    desc: 'Create cohorts, run discussions, and enable peer reviews to build a culture of continuous learning.'
  },
  {
    icon: <LineChart className="h-5 w-5" />,
    title: 'Skills Intelligence',
    desc: 'Map competencies, track mastery, and connect learning outcomes to business performance.'
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: 'Enterprise-grade',
    desc: 'SSO, roles & permissions, audit logs, and granular analytics for global scale and compliance.'
  },
];

export default function Features() {
  return (
    <section id="features" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Everything you need to power learning</h2>
          <p className="mt-3 text-slate-600">Craft engaging experiences, automate delivery, and prove impact—all in one platform.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-50 text-cyan-700">
                {f.icon}
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
              <div className="mt-4 text-xs text-cyan-700">Learn more →</div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 p-6 bg-gradient-to-br from-white to-cyan-50">
            <h4 className="font-semibold text-slate-900">Adaptive Paths</h4>
            <p className="mt-2 text-sm text-slate-600">Auto-generate paths for new hires, managers, and ICs with skill checkpoints and nudges.</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700 list-disc list-inside">
              <li>Role-based templates</li>
              <li>Prerequisites & unlocks</li>
              <li>Smart reminders</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6">
            <h4 className="font-semibold text-slate-900">Assessments</h4>
            <p className="mt-2 text-sm text-slate-600">Measure skills with quizzes, peer reviews, and practical tasks tied to performance.</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700 list-disc list-inside">
              <li>Question banks</li>
              <li>Rubrics & feedback</li>
              <li>Certificates</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6">
            <h4 className="font-semibold text-slate-900">Analytics</h4>
            <p className="mt-2 text-sm text-slate-600">Dashboards for engagement, completion, and skill progression. Export to your data lake.</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700 list-disc list-inside">
              <li>Cohort comparison</li>
              <li>Manager roll-ups</li>
              <li>Custom events</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
