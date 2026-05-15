import { FormEvent, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Bot, Boxes, Clock3, Database, FileText, Loader2, Search, Sparkles } from 'lucide-react';
import { datasetResources, faqQuestions, newsItems, paperItems, resourceStats, taskCategories, tutorialItems } from '../data/platform';

type ChatStatus = 'idle' | 'loading' | 'ready' | 'error';

type ChatResponse = {
  answer: string;
  sources?: { title: string; url?: string }[];
};

const promptQuestions = [
  '中文语音识别有哪些常用数据集？',
  'TTS 声音克隆需要注意哪些安全边界？',
  '实时降噪模型如何选择评测指标？',
  '音频大模型现在适合做哪些产品？',
];

const dashboardStats = [
  { label: '数据集', value: resourceStats[0]?.value || '128' },
  { label: '模型', value: resourceStats[3]?.value || '86' },
  { label: '代码仓库', value: resourceStats[4]?.value || '73' },
  { label: '论文', value: resourceStats[5]?.value || '312' },
  { label: '教程', value: '42' },
  { label: 'Demo', value: '13' },
  { label: 'NOTEBOOKS', value: '18' },
];

export function Home() {
  const [question, setQuestion] = useState('');
  const [status, setStatus] = useState<ChatStatus>('idle');
  const [answer, setAnswer] = useState('');

  const latestNews = useMemo(() => [...newsItems].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 6), []);
  const latestTutorials = [...tutorialItems, ...tutorialItems].slice(0, 6);
  const latestDatasets = [...datasetResources, ...datasetResources].slice(0, 6);
  const latestPapers = paperItems.slice(0, 4);
  const chips = [...promptQuestions, ...faqQuestions.slice(0, 2)];

  const askKnowledgeBase = async (event: FormEvent) => {
    event.preventDefault();
    if (!question.trim()) return;

    setStatus('loading');
    setAnswer('');

    try {
      const response = await fetch('/api/knowledge-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
      });

      const contentType = response.headers.get('content-type') || '';
      if (!response.ok || !contentType.includes('application/json')) {
        throw new Error('Knowledge chat API is not configured.');
      }

      const data = (await response.json()) as ChatResponse;
      setAnswer(data.answer || '知识库已响应，但暂无可展示答案。');
      setStatus('ready');
    } catch {
      setAnswer('知识库接口尚未配置。当前前端已预留 POST /api/knowledge-chat，接入后即可返回领域答案和来源。');
      setStatus('error');
    }
  };

  return (
    <section className="min-h-[calc(100vh-64px)] px-4 py-8 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-md border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-violet-50 px-5 py-10 md:px-10">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-[linear-gradient(120deg,rgba(37,99,235,0.08)_1px,transparent_1px),linear-gradient(60deg,rgba(124,58,237,0.08)_1px,transparent_1px)] bg-[length:64px_64px]" />

          <div className="relative mx-auto max-w-6xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white text-blue-600 shadow-sm">
                <Bot className="h-5 w-5" />
              </span>
              <h1 className="text-xl font-semibold text-slate-950">
                今天你想问一些什么问题
                <Sparkles className="ml-1 inline h-5 w-5 text-blue-500" />
              </h1>
            </div>

            <form
              onSubmit={askKnowledgeBase}
              className="rounded-[20px] border-2 border-blue-400 bg-white p-4 shadow-[0_20px_70px_rgba(37,99,235,0.12)] md:p-5"
            >
              <label className="block">
                <textarea
                  className="h-28 w-full resize-none border-0 bg-transparent text-sm leading-6 text-slate-800 outline-none placeholder:text-slate-400"
                  value={question}
                  onChange={(event) => setQuestion(event.target.value)}
                  placeholder="请输入声音 AI 问题进行搜索"
                />
              </label>
              <div className="flex items-end justify-between gap-3">
                <div className="min-h-6 flex-1">
                  {answer && (
                    <p className={`text-sm leading-6 ${status === 'error' ? 'text-amber-700' : 'text-slate-600'}`}>
                      {answer}
                    </p>
                  )}
                </div>
                <button
                  className="inline-flex h-9 shrink-0 items-center justify-center gap-2 rounded-full bg-slate-950 px-5 text-sm font-medium text-white transition hover:bg-slate-800"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? <Loader2 className="h-4 w-4 animate-spin" /> : <Search className="h-4 w-4" />}
                  开始搜索
                </button>
              </div>
            </form>

            <div className="mt-5 flex flex-wrap gap-3">
              {chips.slice(0, 6).map((item) => (
                <button
                  key={item}
                  onClick={() => setQuestion(item)}
                  className="rounded-full border border-blue-100 bg-white/70 px-4 py-2 text-sm text-slate-600 shadow-sm transition hover:border-blue-200 hover:bg-white hover:text-blue-700"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-5 xl:grid-cols-[1fr_330px] xl:grid-rows-[174px_520px]">
          <section className="overflow-hidden rounded-md bg-gradient-to-r from-indigo-600 via-blue-500 to-violet-400 text-white shadow-[0_18px_60px_rgba(37,99,235,0.18)]">
            <div className="relative h-full px-5 py-6 md:px-7">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(255,255,255,0.18),transparent_28%),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:42px_42px]" />
              <div className="relative flex h-full flex-col justify-between">
                <h2 className="text-lg font-semibold">个人资源库统计</h2>
                <div className="mt-8 grid grid-cols-2 gap-y-5 sm:grid-cols-4 xl:grid-cols-7">
                  {dashboardStats.map((item, index) => (
                    <div key={item.label} className={`px-4 ${index > 0 ? 'border-l border-white/20' : ''}`}>
                      <p className="text-2xl font-semibold">{item.value}</p>
                      <p className="mt-2 text-sm font-medium text-blue-50">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-md border border-blue-100 bg-white px-5 py-4 shadow-[0_18px_60px_rgba(37,99,235,0.08)]">
            <div className="grid h-full gap-6 md:grid-cols-2">
              <div className="min-w-0">
                <h2 className="text-center text-lg font-semibold text-slate-950">教程</h2>
                <div className="mt-3 grid gap-2.5">
                  {latestTutorials.map((item, index) => (
                    <Link key={`${item.id}-${index}`} to="/tutorials" className="rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm transition hover:border-blue-200 hover:bg-blue-50/40">
                      <div className="flex items-center gap-2">
                        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded border border-blue-300 text-[10px] font-semibold text-blue-600">
                          课
                        </span>
                        <h3 className="min-w-0 truncate text-sm font-semibold text-slate-950">{item.title}</h3>
                      </div>
                      <p className="mt-1 flex items-center gap-1 text-xs text-slate-500">
                        <Clock3 className="h-3.5 w-3.5" />
                        {index < 1 ? '1 天前' : index < 4 ? '3 天前' : '8 天前'}
                      </p>
                    </Link>
                  ))}
                  <Link to="/tutorials" className="mt-2 text-center text-sm font-medium text-red-600 transition hover:text-red-700">
                    查看更多教程
                  </Link>
                </div>
              </div>

              <div className="min-w-0">
                <h2 className="text-center text-lg font-semibold text-slate-950">数据集</h2>
                <div className="mt-3 grid gap-2.5">
                  {latestDatasets.map((item, index) => (
                    <Link key={`${item.id}-${index}`} to="/datasets" className="rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm transition hover:border-blue-200 hover:bg-blue-50/40">
                      <div className="flex items-center gap-2">
                        <Database className="h-4 w-4 shrink-0 text-emerald-500" />
                        <h3 className="min-w-0 truncate text-sm font-semibold text-slate-950">{item.name}</h3>
                      </div>
                      <p className="mt-1 flex items-center gap-1 text-xs text-slate-500">
                        <Clock3 className="h-3.5 w-3.5" />
                        2 小时前
                      </p>
                    </Link>
                  ))}
                  <Link to="/datasets" className="mt-2 text-center text-sm font-medium text-red-600 transition hover:text-red-700">
                    查看更多数据集
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <aside className="rounded-md border border-blue-100 bg-white/90 p-5 shadow-[0_18px_60px_rgba(37,99,235,0.12)] xl:col-start-2 xl:row-span-2 xl:row-start-1">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-950">行业资讯</h2>
              <Link to="/news" className="inline-flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-blue-700">
                查看详情
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-4 grid gap-3">
              {latestNews.map((item) => (
                <Link key={item.id} to="/news" className="rounded-md bg-blue-50/50 p-3 transition hover:bg-blue-50">
                  <p className="text-xs text-blue-500">{item.date} · {item.source}</p>
                  <h3 className="mt-2 line-clamp-1 text-sm font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-1 line-clamp-2 text-xs leading-5 text-slate-500">{item.summary}</p>
                </Link>
              ))}
            </div>
          </aside>
        </div>

        <section className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {taskCategories.slice(0, 8).map((task) => (
            <Link key={task} to="/tasks" className="rounded-md border border-blue-100 bg-white p-4 shadow-[0_10px_28px_rgba(37,99,235,0.05)] transition hover:border-blue-200 hover:bg-blue-50/50">
              <Boxes className="h-5 w-5 text-blue-600" />
              <h2 className="mt-3 font-semibold text-slate-950">{task}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">查看任务介绍、常用资源、指标和入门路径。</p>
            </Link>
          ))}
        </section>

        <section className="mt-8 rounded-md border border-blue-100 bg-white p-5 shadow-[0_18px_60px_rgba(37,99,235,0.08)]">
          <div className="flex items-center justify-between">
            <h2 className="flex items-center gap-2 text-lg font-semibold text-slate-950">
              <FileText className="h-5 w-5 text-blue-600" />
              最新论文
            </h2>
            <Link to="/papers" className="text-sm font-medium text-blue-600">进入论文库</Link>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {latestPapers.map((paper) => (
              <Link key={paper.id} to="/papers" className="rounded-md bg-blue-50/50 p-4 transition hover:bg-blue-50">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-white px-2 py-0.5 text-xs text-blue-700">{paper.task}</span>
                  <span className="rounded-full bg-white px-2 py-0.5 text-xs text-slate-500">{paper.venue}</span>
                </div>
                <h3 className="mt-3 line-clamp-2 text-sm font-semibold leading-5 text-slate-950">{paper.title}</h3>
                <p className="mt-2 text-xs text-slate-500">{paper.date}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
