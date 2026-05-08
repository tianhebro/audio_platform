import { useMemo, useState } from 'react';
import { SearchBar } from '../components/SearchBar';
import { SectionHeader } from '../components/SectionHeader';
import { TagFilter } from '../components/TagFilter';
import { TutorialCard } from '../components/TutorialCard';
import { tutorials, tutorialStages, tutorialTasks } from '../data/tutorials';
export function Tutorials() {
  const [stage, setStage] = useState<(typeof tutorialStages)[number]>('全部');
  const [task, setTask] = useState<(typeof tutorialTasks)[number]>('全部');
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => tutorials.filter((item) => (stage === '全部' || item.stage === stage) && (task === '全部' || item.task === task) && `${item.title}${item.summary}${item.tags.join('')}`.toLowerCase().includes(query.toLowerCase())), [stage, task, query]);
  return <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8"><SectionHeader eyebrow="Tutorials" title="教程路径" description="按学习阶段和任务筛选，从零基础概念到可运行实战 Demo。" /><div className="mt-8 rounded-3xl border border-slate-200 bg-white p-5"><SearchBar value={query} onChange={setQuery} /><div className="mt-5 space-y-4"><TagFilter options={tutorialStages} active={stage} onChange={setStage} /><TagFilter options={tutorialTasks} active={task} onChange={setTask} /></div></div><div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{filtered.map((item) => <TutorialCard key={item.title} tutorial={item} />)}</div></section>;
}
