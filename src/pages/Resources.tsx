import { useMemo, useState } from 'react';
import { ResourceCard } from '../components/ResourceCard';
import { SearchBar } from '../components/SearchBar';
import { resources, resourceKinds } from '../data/resources';

const taxonomy = [
  {
    title: '任务/问题',
    items: ['语音识别', '语音合成', '音频增强', '音频分类', '音乐生成', '音频大模型'],
  },
  {
    title: '研究领域',
    items: ['深度学习', '生成式 AI', '多模态', '人机交互', '高性能计算'],
  },
  {
    title: '方法/架构',
    items: ['Transformer', 'Codec', '扩散模型', '自监督学习', '检索增强生成'],
  },
];

export function Resources() {
  const [kind, setKind] = useState<(typeof resourceKinds)[number]>('全部');
  const [query, setQuery] = useState('');

  const filtered = useMemo(
    () =>
      resources.filter(
        (item) =>
          (kind === '全部' || item.kind === kind) &&
          `${item.name}${item.task}${item.summary}${item.tags.join('')}`.toLowerCase().includes(query.toLowerCase()),
      ),
    [kind, query],
  );

  return (
    <section className="mx-auto max-w-6xl px-4 py-8 md:px-6">
      <div className="mb-6 text-sm text-blue-500">AudioSphere / 资源 / 数据集</div>
      <div className="mb-8">
        <span className="badge">Resources</span>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">资源库</h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">
          收集开放音频数据集、模型、论文、Benchmark 与工具，按任务和研究方向组织。
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1fr_260px]">
        <div className="panel min-w-0 overflow-hidden">
          <div className="border-b border-blue-100 bg-gradient-to-r from-blue-50 to-white p-4">
            <SearchBar value={query} onChange={setQuery} placeholder="搜索数据集、模型、论文、Benchmark、工具..." />
            <div className="mt-4 flex flex-wrap gap-2">
              {resourceKinds.map((item) => (
                <button
                  key={item}
                  onClick={() => setKind(item)}
                  className={`h-8 rounded-md px-3 text-sm font-medium transition ${
                    kind === item ? 'bg-blue-600 text-white shadow-sm' : 'border border-blue-100 bg-white text-slate-600 hover:bg-blue-50 hover:text-blue-700'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden border-b border-blue-100 bg-blue-50/60 px-5 py-3 text-xs font-semibold text-blue-500 lg:grid lg:grid-cols-[1fr_150px_120px_110px]">
            <span>资源名称</span>
            <span>任务</span>
            <span>规模</span>
            <span>更新</span>
          </div>

          {filtered.map((item) => (
            <ResourceCard key={item.name} resource={item} />
          ))}
        </div>

        <aside className="space-y-5">
          {taxonomy.map((group) => (
            <section key={group.title} className="panel p-4">
              <h2 className="text-sm font-semibold text-slate-950">{group.title}</h2>
              <div className="mt-3 grid gap-2">
                {group.items.map((item) => (
                  <button key={item} className="text-left text-sm text-slate-500 transition hover:text-blue-700">
                    {item}
                  </button>
                ))}
              </div>
            </section>
          ))}
        </aside>
      </div>
    </section>
  );
}
