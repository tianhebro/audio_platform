import { Link } from 'react-router-dom';
import { Activity, Database, Download, UploadCloud } from 'lucide-react';
import { ResourceCard } from '../components/ResourceCard';
import { resources } from '../data/resources';

const stats = [
  { label: '做种', value: '128', icon: UploadCloud },
  { label: '正在下载', value: '36', icon: Download },
  { label: '已完成', value: '2.4k', icon: Database },
  { label: '贡献流量', value: '18TB', icon: Activity },
];

export function Home() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8 md:px-6">
      <div className="mb-6 text-sm text-blue-500">AudioSphere / 首页 / 数据集</div>

      <div className="panel p-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="badge">Audio AI Community Demo</span>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">声音 AI 开放资源库</h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">
              我们收集开放音频数据集、模型、论文和工具，并按任务图谱提供统一入口。
            </p>
          </div>
          <Link className="btn-primary" to="/resources">
            浏览全部资源
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="soft-panel p-4">
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span>{item.label}</span>
                  <Icon className="h-4 w-4 text-blue-600" />
                </div>
                <p className="mt-3 text-3xl font-semibold text-slate-950">{item.value}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-[1fr_260px]">
        <div className="panel overflow-hidden">
          <div className="border-b border-blue-100 bg-gradient-to-r from-blue-50 to-violet-50 px-5 py-4">
            <h2 className="font-semibold text-slate-950">最近更新</h2>
            <p className="mt-1 text-sm text-slate-500">保留资源库式高密度列表，同时恢复之前蓝紫色视觉气质。</p>
          </div>
          {resources.slice(0, 6).map((item) => (
            <ResourceCard key={item.name} resource={item} />
          ))}
        </div>

        <aside className="space-y-5">
          <section className="panel p-4">
            <h2 className="text-sm font-semibold text-slate-950">任务/问题</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {['语音识别', '语音合成', '音频增强', '音乐生成', '音频分类', '音频大模型'].map((item) => (
                <span key={item} className="rounded bg-blue-50 px-2 py-1 text-xs text-blue-700">
                  {item}
                </span>
              ))}
            </div>
          </section>
          <section className="panel p-4">
            <h2 className="text-sm font-semibold text-slate-950">共建提示</h2>
            <p className="mt-3 text-sm leading-6 text-slate-500">
              资源条目采用统一字段：名称、类别、任务、规模、更新时间、标签和外链，后续可平滑接入 API。
            </p>
          </section>
        </aside>
      </div>
    </section>
  );
}
