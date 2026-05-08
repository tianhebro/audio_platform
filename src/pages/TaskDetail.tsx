import { Link, Navigate, useParams } from 'react-router-dom';
import { DemoCard } from '../components/DemoCard';
import { SectionHeader } from '../components/SectionHeader';
import { demos } from '../data/demos';
import { getTask } from '../data/tasks';
export function TaskDetail() {
  const { slug = '' } = useParams();
  const task = getTask(slug);
  if (!task || !['asr', 'tts', 'audio-enhancement'].includes(slug)) return <Navigate to="/tasks" replace />;
  const Icon = task.icon;
  return <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8">
    <Link to="/tasks" className="text-sm font-semibold text-blue-600">← 返回任务总览</Link>
    <div className="mt-6 rounded-[2rem] bg-aurora p-8 text-white md:p-12"><div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15"><Icon className="h-7 w-7" /></div><h1 className="mt-6 text-4xl font-black md:text-5xl">{task.name}</h1><p className="mt-4 max-w-3xl text-lg leading-8 text-blue-100">{task.summary}</p></div>
    <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_360px]"><div className="space-y-6">
      {[
        ['应用场景', task.scenarios], ['入门路径', task.starterPath], ['常用数据集', task.datasets], ['常用模型/项目', task.models], ['Benchmark/指标', task.metrics], ['最新研究 / 趋势', [task.trend]],
      ].map(([title, items]) => <div key={title as string} className="rounded-3xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold text-slate-950">{title as string}</h2><div className="mt-4 grid gap-3">{(items as string[]).map((item) => <div key={item} className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">{item}</div>)}</div></div>)}
    </div><aside className="space-y-6"><div className="rounded-3xl border border-blue-100 bg-blue-50 p-6"><SectionHeader eyebrow="Next" title="推荐 Demo" description="用前端模拟体验理解任务输入、处理与结果展示。" /></div>{demos.filter((demo) => task.demos.some((name) => demo.title.includes(name.replace(' Demo', '')))).map((demo) => <DemoCard key={demo.slug} demo={demo} />)}</aside></div>
  </section>;
}
