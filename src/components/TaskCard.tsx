import { Link } from 'react-router-dom';
import type { Task } from '../data/tasks';
export function TaskCard({ task }: { task: Task }) {
  const Icon = task.icon;
  return <article className="card-hover rounded-3xl border border-slate-200 bg-white p-6">
    <div className="mb-5 flex items-center justify-between">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600"><Icon className="h-6 w-6" /></div>
      <span className="badge">{task.level}</span>
    </div>
    <h3 className="text-xl font-bold text-slate-950">{task.name}</h3>
    <p className="mt-3 min-h-16 text-sm leading-6 text-slate-600">{task.summary}</p>
    <div className="mt-5 flex flex-wrap gap-2">{task.scenarios.map((item) => <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600" key={item}>{item}</span>)}</div>
    <Link className="mt-6 inline-flex text-sm font-semibold text-blue-600 hover:text-blue-800" to={`/tasks/${task.slug}`}>进入任务详情 →</Link>
  </article>;
}
