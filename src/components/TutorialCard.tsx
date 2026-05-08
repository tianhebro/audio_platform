import { Clock3 } from 'lucide-react';
import type { Tutorial } from '../data/tutorials';
export function TutorialCard({ tutorial }: { tutorial: Tutorial }) {
  return <article className="card-hover rounded-3xl border border-slate-200 bg-white p-6">
    <div className="flex flex-wrap items-center gap-2"><span className="badge">{tutorial.stage}</span><span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-medium text-violet-700">{tutorial.task}</span></div>
    <h3 className="mt-4 text-lg font-bold text-slate-950">{tutorial.title}</h3>
    <p className="mt-3 text-sm leading-6 text-slate-600">{tutorial.summary}</p>
    <div className="mt-5 flex items-center gap-4 text-xs text-slate-500"><span>{tutorial.difficulty}</span><span className="inline-flex items-center gap-1"><Clock3 className="h-3.5 w-3.5" />{tutorial.minutes} 分钟</span></div>
    <div className="mt-4 flex flex-wrap gap-2">{tutorial.tags.map((tag) => <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">{tag}</span>)}</div>
  </article>;
}
