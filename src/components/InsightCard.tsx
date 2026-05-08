import type { Insight } from '../data/insights';
export function InsightCard({ insight }: { insight: Insight }) {
  return <article className="card-hover rounded-3xl border border-slate-200 bg-white p-6">
    <div className="flex items-center justify-between"><span className="badge">{insight.type}</span><span className="text-xs text-slate-400">{insight.date}</span></div>
    <h3 className="mt-4 text-lg font-bold text-slate-950">{insight.title}</h3>
    <p className="mt-3 text-sm leading-6 text-slate-600">{insight.summary}</p>
    <div className="mt-5 flex flex-wrap gap-2">{insight.tags.map((tag) => <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">{tag}</span>)}</div>
  </article>;
}
