import { ArrowUpRight, Clock3 } from 'lucide-react';
import type { Resource } from '../data/resources';

export function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <article className="group border-b border-blue-100 bg-white px-5 py-4 transition hover:bg-blue-50/50">
      <div className="grid gap-4 lg:grid-cols-[1fr_150px_120px_110px] lg:items-center">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="resource-pill">{resource.kind}</span>
            <span className="text-sm font-semibold text-slate-900">{resource.name}</span>
          </div>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500">{resource.summary}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {resource.tags.map((tag) => (
              <span key={tag} className="rounded bg-blue-50 px-2 py-1 text-xs text-blue-700">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="text-sm text-slate-500">{resource.task}</div>
        <div className="text-sm text-slate-500">{resource.size}</div>
        <a className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 group-hover:text-blue-700" href={resource.url}>
          <Clock3 className="h-4 w-4 text-blue-400" />
          {resource.updated}
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}
