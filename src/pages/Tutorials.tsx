import { useMemo, useState } from 'react';
import { Bookmark, CheckCircle2, Database, PlayCircle, Route, Timer } from 'lucide-react';
import { SearchBar } from '../components/SearchBar';
import { SectionHeader } from '../components/SectionHeader';
import { learningPaths, taskCategories, tutorialItems } from '../data/platform';

const difficulties = ['全部', '入门', '中级', '高级'] as const;
const formats = ['全部', '文章', '视频', 'Notebook', 'Demo 实操'] as const;
const origins = ['全部', '国产化', '国际化'] as const;

function FilterRow<T extends string>({ label, options, active, onChange }: { label: string; options: readonly T[]; active: T; onChange: (value: T) => void }) {
  return (
    <div>
      <p className="mb-2 text-xs font-semibold text-slate-400">{label}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onChange(option)}
            className={`rounded-md px-3 py-1.5 text-xs font-medium transition ${
              active === option ? 'bg-blue-600 text-white' : 'border border-blue-100 bg-white text-slate-600 hover:bg-blue-50 hover:text-blue-700'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export function Tutorials() {
  const [difficulty, setDifficulty] = useState<(typeof difficulties)[number]>('全部');
  const [task, setTask] = useState<'全部' | (typeof taskCategories)[number] | '通用'>('全部');
  const [format, setFormat] = useState<(typeof formats)[number]>('全部');
  const [origin, setOrigin] = useState<(typeof origins)[number]>('全部');
  const [query, setQuery] = useState('');
  const [saved, setSaved] = useState<string[]>([]);

  const taskOptions = ['全部', '通用', ...taskCategories] as const;

  const filtered = useMemo(
    () =>
      tutorialItems.filter(
        (item) =>
          (difficulty === '全部' || item.difficulty === difficulty) &&
          (task === '全部' || item.task === task) &&
          (format === '全部' || item.format === format) &&
          (origin === '全部' || item.origin === origin) &&
          `${item.title}${item.author}${item.summary}${item.tags.join('')}`.toLowerCase().includes(query.toLowerCase()),
      ),
    [difficulty, task, format, origin, query],
  );

  const toggleSaved = (id: string) => setSaved((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]));

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 md:px-6 lg:px-8">
      <SectionHeader eyebrow="Learning" title="学习中心" description="教程卡片、学习路线图和视频/Notebook/实操内容统一管理，并展示学习进度与延伸入口。" />

      <div className="mt-8 grid gap-6 xl:grid-cols-[280px_1fr]">
        <aside className="space-y-4">
          <div className="panel p-4">
            <SearchBar value={query} onChange={setQuery} placeholder="搜索教程、作者、任务、标签..." />
            <div className="mt-5 space-y-4">
              <FilterRow label="难度等级" options={difficulties} active={difficulty} onChange={setDifficulty} />
              <FilterRow label="任务分类" options={taskOptions} active={task} onChange={setTask} />
              <FilterRow label="教学形式" options={formats} active={format} onChange={setFormat} />
              <FilterRow label="来源标识" options={origins} active={origin} onChange={setOrigin} />
            </div>
          </div>

          <div className="panel p-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-950">
              <Route className="h-4 w-4 text-blue-600" />
              推荐学习路径
            </div>
            <div className="mt-4 grid gap-3">
              {learningPaths.map((path) => (
                <article key={path.title} className="rounded-md border border-blue-100 bg-blue-50/40 p-3">
                  <h3 className="text-sm font-semibold text-slate-950">{path.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-slate-500">{path.steps.join(' → ')}</p>
                  <div className="mt-3 h-2 rounded bg-white">
                    <div className="h-2 rounded bg-blue-600" style={{ width: `${path.progress}%` }} />
                  </div>
                  <button className="mt-3 text-xs font-medium text-blue-600">收藏学习路线</button>
                </article>
              ))}
            </div>
          </div>
        </aside>

        <div className="grid gap-4 md:grid-cols-2">
          {filtered.map((item) => {
            const isSaved = saved.includes(item.id);
            return (
              <article key={item.id} className="card-hover rounded-md border border-blue-100 bg-white p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex flex-wrap gap-2">
                    <span className="badge">{item.difficulty}</span>
                    <span className="rounded bg-violet-50 px-2 py-1 text-xs font-medium text-violet-700">{item.task}</span>
                    <span className="rounded bg-slate-100 px-2 py-1 text-xs text-slate-600">{item.format}</span>
                  </div>
                  <button onClick={() => toggleSaved(item.id)} className={`inline-flex h-8 w-8 items-center justify-center rounded-md border ${isSaved ? 'border-blue-200 bg-blue-50 text-blue-700' : 'border-blue-100 text-slate-500'}`}>
                    <Bookmark className="h-4 w-4" />
                  </button>
                </div>

                <h2 className="mt-4 text-lg font-semibold text-slate-950">{item.title}</h2>
                <p className="mt-2 text-sm text-slate-500">{item.author} · 更新 {item.updated}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.summary}</p>

                <div className="mt-4 grid gap-3 text-sm text-slate-500 sm:grid-cols-3">
                  <span className="inline-flex items-center gap-1">
                    <Timer className="h-4 w-4 text-blue-500" />
                    {item.minutes} 分钟
                  </span>
                  <span>收藏 {item.favorites}</span>
                  <span>{item.origin}</span>
                </div>

                <div className="mt-4">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>学习进度</span>
                    <span>{item.progress}%</span>
                  </div>
                  <div className="mt-2 h-2 rounded bg-slate-100">
                    <div className="h-2 rounded bg-blue-600" style={{ width: `${item.progress}%` }} />
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {item.hasDemo && (
                    <span className="inline-flex items-center gap-1 rounded bg-emerald-50 px-2 py-1 text-xs text-emerald-700">
                      <PlayCircle className="h-3.5 w-3.5" />
                      在线 Demo
                    </span>
                  )}
                  {item.hasDataset && (
                    <span className="inline-flex items-center gap-1 rounded bg-blue-50 px-2 py-1 text-xs text-blue-700">
                      <Database className="h-3.5 w-3.5" />
                      数据集链接
                    </span>
                  )}
                  {item.tags.map((tag) => (
                    <span key={tag} className="rounded bg-slate-100 px-2 py-1 text-xs text-slate-600">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <button className="btn-primary gap-2">
                    <CheckCircle2 className="h-4 w-4" />
                    开始学习
                  </button>
                  <button className="btn-secondary">推荐延伸内容</button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
