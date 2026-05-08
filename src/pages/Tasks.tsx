import { SectionHeader } from '../components/SectionHeader';
import { TaskCard } from '../components/TaskCard';
import { tasks } from '../data/tasks';
export function Tasks() { return <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8"><SectionHeader eyebrow="Tasks" title="声音 AI 任务总览" description="从九类典型任务进入，快速理解应用场景、常用资源和入门路径。" /><div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{tasks.map((task) => <TaskCard key={task.slug} task={task} />)}</div></section>; }
