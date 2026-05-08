import { Link } from 'react-router-dom';
import { CTASection } from '../components/CTASection';
import { DemoCard } from '../components/DemoCard';
import { HeroSection } from '../components/HeroSection';
import { InsightCard } from '../components/InsightCard';
import { ResourceCard } from '../components/ResourceCard';
import { SectionHeader } from '../components/SectionHeader';
import { TaskCard } from '../components/TaskCard';
import { TutorialCard } from '../components/TutorialCard';
import { demos } from '../data/demos';
import { insights } from '../data/insights';
import { resources } from '../data/resources';
import { papers } from '../data/research';
import { featuredTaskSlugs, tasks } from '../data/tasks';
import { tutorials } from '../data/tutorials';
export function Home() {
  const featuredTasks = tasks.filter((task) => featuredTaskSlugs.includes(task.slug));
  return <>
    <HeroSection />
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8"><SectionHeader eyebrow="Task Navigator" title="从任务进入声音 AI 世界" description="用任务图谱串联教程、数据集、模型、Benchmark、Demo 与趋势观察。" /><div className="mt-8 grid gap-5 md:grid-cols-3">{featuredTasks.map((task) => <TaskCard key={task.slug} task={task} />)}</div></section>
    <section className="bg-slate-50"><div className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8"><SectionHeader eyebrow="Getting Started" title="新手上路：先建立声音 AI 的全局地图" description="从概念、任务、工具到可运行 Demo，用渐进式路径降低学习门槛。" /><div className="mt-8 grid gap-5 md:grid-cols-3">{tutorials.slice(0, 3).map((item) => <TutorialCard key={item.title} tutorial={item} />)}</div></div></section>
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8"><div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"><SectionHeader eyebrow="Resources" title="精选资源库" description="先用结构化 mock 数据展示数据集、模型、论文、Benchmark 和工具。" /><Link className="btn-secondary" to="/resources">查看全部资源</Link></div><div className="mt-8 grid gap-5 md:grid-cols-3">{resources.slice(0, 3).map((item) => <ResourceCard key={item.name} resource={item} />)}</div></section>
    <section className="bg-slate-50"><div className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8"><SectionHeader eyebrow="Online Labs" title="在线 Demo 推荐" description="当前为前端模拟交互，预留后续接入真实推理服务、任务队列和结果存储。" /><div className="mt-8 grid gap-5 lg:grid-cols-3">{demos.map((demo) => <DemoCard key={demo.slug} demo={demo} />)}</div></div></section>
    <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 md:grid-cols-[.95fr_1.05fr] md:px-6 lg:px-8"><div><SectionHeader eyebrow="Research" title="研究与资讯速递" description="围绕论文、开源项目、Benchmark 变化建立研究入口。" /><div className="mt-8 space-y-4">{papers.map((paper) => <div key={paper.title} className="rounded-3xl border border-slate-200 bg-white p-5"><span className="badge">{paper.area}</span><h3 className="mt-3 font-bold text-slate-950">{paper.title}</h3><p className="mt-2 text-sm text-slate-600">{paper.note}</p></div>)}</div></div><div><SectionHeader eyebrow="Trends" title="趋势观察" description="用编辑精选和观点型内容帮助从业者跟上方向变化。" /><div className="mt-8 grid gap-5">{insights.map((insight) => <InsightCard key={insight.title} insight={insight} />)}</div></div></section>
    <div className="mx-auto max-w-7xl px-4 pb-16 md:px-6 lg:px-8"><CTASection /></div>
  </>;
}
