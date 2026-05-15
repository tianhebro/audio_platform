import { useMemo, useState } from 'react';
import { BarChart3, Download, ExternalLink, Play, Share2 } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { localizationSolutions, taskCategories } from '../data/platform';

const kinds = ['全部', '方案', '模型', '数据集'] as const;
const vendors = ['全部', 'ModelScope + 私有化推理', 'CosyVoice', '国产 NPU'] as const;

export function Localization() {
  const [task, setTask] = useState<'全部' | (typeof taskCategories)[number]>('全部');
  const [kind, setKind] = useState<(typeof kinds)[number]>('全部');
  const [vendor, setVendor] = useState<(typeof vendors)[number]>('全部');

  const filtered = useMemo(
    () =>
      localizationSolutions.filter(
        (item) => (task === '全部' || item.task === task) && (kind === '全部' || item.kind === kind) && (vendor === '全部' || item.vendor === vendor),
      ),
    [task, kind, vendor],
  );

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 md:px-6 lg:px-8">
      <SectionHeader eyebrow="Localization" title="国产化适配专区" description="围绕任务、数据集、模型、算法和厂商来源展示国产化方案，并提供效果对比和数据工坊入口。" />

      <div className="mt-8 grid gap-6 xl:grid-cols-[260px_1fr]">
        <aside className="panel p-4">
          <h2 className="text-sm font-semibold text-slate-950">筛选维度</h2>
          <div className="mt-4 space-y-4">
            <label className="block">
              <span className="text-xs font-semibold text-slate-400">任务分类</span>
              <select className="input mt-2" value={task} onChange={(event) => setTask(event.target.value as typeof task)}>
                {['全部', ...taskCategories].map((item) => <option key={item}>{item}</option>)}
              </select>
            </label>
            <label className="block">
              <span className="text-xs font-semibold text-slate-400">数据集 / 模型 / 算法类型</span>
              <select className="input mt-2" value={kind} onChange={(event) => setKind(event.target.value as typeof kind)}>
                {kinds.map((item) => <option key={item}>{item}</option>)}
              </select>
            </label>
            <label className="block">
              <span className="text-xs font-semibold text-slate-400">厂商 / 方案来源</span>
              <select className="input mt-2" value={vendor} onChange={(event) => setVendor(event.target.value as typeof vendor)}>
                {vendors.map((item) => <option key={item}>{item}</option>)}
              </select>
            </label>
          </div>
        </aside>

        <div className="grid gap-4">
          {filtered.map((item) => (
            <article key={item.id} className="rounded-md border border-blue-100 bg-white p-5 shadow-[0_10px_28px_rgba(37,99,235,0.05)]">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="flex flex-wrap gap-2">
                    <span className="resource-pill">{item.kind}</span>
                    <span className="badge">{item.task}</span>
                    {item.certified && <span className="rounded bg-red-50 px-2 py-1 text-xs font-semibold text-red-600">官方认证</span>}
                  </div>
                  <h2 className="mt-4 text-xl font-semibold text-slate-950">{item.name}</h2>
                  <p className="mt-2 text-sm text-slate-500">{item.provider} · {item.vendor} · {item.version} · 更新 {item.updated}</p>
                </div>
                <button className="btn-secondary gap-2">
                  <Share2 className="h-4 w-4" />
                  分享
                </button>
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-600">{item.summary}</p>

              <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_280px]">
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-950">
                    <BarChart3 className="h-4 w-4 text-blue-600" />
                    性能指标
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.metrics.map((metric) => (
                      <span key={metric} className="rounded bg-blue-50 px-3 py-1.5 text-sm text-blue-700">
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="rounded-md border border-blue-100 bg-blue-50/40 p-4">
                  <p className="text-sm font-semibold text-slate-950">{item.comparison.label}</p>
                  <div className="mt-3 space-y-3">
                    <div>
                      <div className="flex justify-between text-xs text-slate-500"><span>国产化方案</span><span>{item.comparison.domestic}</span></div>
                      <div className="mt-1 h-2 rounded bg-white"><div className="h-2 rounded bg-blue-600" style={{ width: `${item.comparison.domestic}%` }} /></div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs text-slate-500"><span>国际方案</span><span>{item.comparison.international}</span></div>
                      <div className="mt-1 h-2 rounded bg-white"><div className="h-2 rounded bg-violet-500" style={{ width: `${item.comparison.international}%` }} /></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <button className="btn-secondary gap-2"><ExternalLink className="h-4 w-4" />查看方案详情</button>
                <a href="/demos" className="btn-primary gap-2"><Play className="h-4 w-4" />在线 Demo</a>
                <a href="/workshop" className="btn-secondary gap-2"><Download className="h-4 w-4" />下载处理数据集</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
