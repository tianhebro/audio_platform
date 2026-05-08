import type { Resource } from '../data/resources';
export function ResourceCard({ resource }: { resource: Resource }) {
  return <article className="card-hover rounded-3xl border border-slate-200 bg-white p-6">
    <div className="flex items-center justify-between gap-3"><span className="badge">{resource.kind}</span><span className="text-xs font-semibold text-slate-400">{resource.task}</span></div>
    <h3 className="mt-4 text-lg font-bold text-slate-950">{resource.name}</h3>
    <p className="mt-3 text-sm leading-6 text-slate-600">{resource.summary}</p>
    <div className="mt-5 flex flex-wrap gap-2">{resource.tags.map((tag) => <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">#{tag}</span>)}</div>
    <a className="mt-6 inline-flex text-sm font-semibold text-blue-600" href={resource.url}>查看外链 ↗</a>
  </article>;
}
