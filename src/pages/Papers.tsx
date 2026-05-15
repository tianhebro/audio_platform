import { useMemo, useState } from 'react';
import { CalendarDays, FileText } from 'lucide-react';
import { SearchBar } from '../components/SearchBar';
import { SectionHeader } from '../components/SectionHeader';
import { paperItems } from '../data/platform';

const paperTasks = ['全部', 'ASR', 'TTS', '降噪', '分类', '声音克隆', '多模态'] as const;

export function Papers() {
  const [task, setTask] = useState<(typeof paperTasks)[number]>('全部');
  const [query, setQuery] = useState('');

  const filtered = useMemo(
    () =>
      paperItems.filter(
        (item) =>
          (task === '全部' || item.task === task) &&
          `${item.title}${item.authors}${item.venue}${item.summary}${item.tags.join('')}`.toLowerCase().includes(query.toLowerCase()),
      ),
    [task, query],
  );

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 md:px-6 lg:px-8">
      <SectionHeader eyebrow="Papers" title="论文库" description="按声音任务分类整理 ASR、TTS、降噪、分类、声音克隆和多模态音频论文。" />

      <div className="mt-8 panel p-4">
        <SearchBar value={query} onChange={setQuery} placeholder="搜索论文标题、作者、会议或标签..." />
        <div className="mt-4 flex flex-wrap gap-2">
          {paperTasks.map((item) => (
            <button
              key={item}
              onClick={() => setTask(item)}
              className={`rounded-md px-3 py-1.5 text-sm font-medium transition ${task === item ? 'bg-blue-600 text-white' : 'border border-blue-100 bg-white text-slate-600 hover:bg-blue-50 hover:text-blue-700'}`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {filtered.map((paper) => (
          <article key={paper.id} className="rounded-md border border-blue-100 bg-white p-5 shadow-[0_10px_28px_rgba(37,99,235,0.05)]">
            <div className="flex flex-wrap gap-2">
              <span className="resource-pill">{paper.task}</span>
              <span className="rounded bg-slate-100 px-2 py-1 text-xs text-slate-600">{paper.venue}</span>
            </div>
            <h2 className="mt-4 text-lg font-semibold leading-6 text-slate-950">{paper.title}</h2>
            <p className="mt-2 text-sm text-slate-500">{paper.authors}</p>
            <p className="mt-3 text-sm leading-6 text-slate-600">{paper.summary}</p>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-500">
              <span className="inline-flex items-center gap-1"><CalendarDays className="h-4 w-4 text-blue-500" />{paper.date}</span>
              <button className="inline-flex items-center gap-1 font-medium text-blue-600"><FileText className="h-4 w-4" />查看解读</button>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {paper.tags.map((tag) => (
                <span key={tag} className="rounded bg-blue-50 px-2 py-1 text-xs text-blue-700">{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
