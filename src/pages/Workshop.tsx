import { useMemo, useState } from 'react';
import { Download, Loader2, Play, Settings2 } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { datasetResources, taskCategories, workshopMethods } from '../data/platform';

type JobStatus = 'idle' | 'running' | 'done';

export function Workshop() {
  const [task, setTask] = useState<'全部' | (typeof taskCategories)[number]>('全部');
  const [datasetId, setDatasetId] = useState(datasetResources[0]?.id || '');
  const [thirdPartyUrl, setThirdPartyUrl] = useState('');
  const [methods, setMethods] = useState<string[]>(['resample', 'normalize']);
  const [status, setStatus] = useState<JobStatus>('idle');

  const datasets = useMemo(() => datasetResources.filter((item) => task === '全部' || item.task === task), [task]);
  const selectedDataset = datasetResources.find((item) => item.id === datasetId);

  const toggleMethod = (id: string) => setMethods((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]));

  const runJob = () => {
    setStatus('running');
    window.setTimeout(() => setStatus('done'), 800);
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 md:px-6 lg:px-8">
      <SectionHeader eyebrow="Data Workshop" title="音频数据工坊" description="选择原始数据集、第三方链接和预处理方法，配置参数后模拟执行并下载预处理结果。" />

      <div className="mt-8 grid gap-6 xl:grid-cols-[1fr_340px]">
        <div className="space-y-6">
          <section className="panel p-5">
            <h2 className="text-lg font-semibold text-slate-950">1. 选择原始数据</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <label className="block">
                <span className="text-xs font-semibold text-slate-400">按任务筛选</span>
                <select className="input mt-2" value={task} onChange={(event) => setTask(event.target.value as typeof task)}>
                  {['全部', ...taskCategories].map((item) => <option key={item}>{item}</option>)}
                </select>
              </label>
              <label className="block">
                <span className="text-xs font-semibold text-slate-400">平台已有数据集</span>
                <select className="input mt-2" value={datasetId} onChange={(event) => setDatasetId(event.target.value)}>
                  {datasets.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}
                </select>
              </label>
            </div>
            <label className="mt-4 block">
              <span className="text-xs font-semibold text-slate-400">第三方数据集链接聚合</span>
              <input className="input mt-2" value={thirdPartyUrl} onChange={(event) => setThirdPartyUrl(event.target.value)} placeholder="https://huggingface.co/datasets/..." />
            </label>
          </section>

          <section className="panel p-5">
            <h2 className="text-lg font-semibold text-slate-950">2. 选择处理方法</h2>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {workshopMethods.map((method) => (
                <button
                  key={method.id}
                  onClick={() => toggleMethod(method.id)}
                  className={`rounded-md border p-4 text-left transition ${methods.includes(method.id) ? 'border-blue-300 bg-blue-50' : 'border-blue-100 bg-white hover:bg-blue-50/50'}`}
                >
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-950">
                    <Settings2 className="h-4 w-4 text-blue-600" />
                    {method.name}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{method.description}</p>
                </button>
              ))}
            </div>
          </section>

          <section className="panel p-5">
            <h2 className="text-lg font-semibold text-slate-950">3. 参数配置</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {workshopMethods
                .filter((method) => methods.includes(method.id))
                .map((method) => (
                  <div key={method.id} className="rounded-md border border-blue-100 bg-blue-50/40 p-4">
                    <h3 className="text-sm font-semibold text-slate-950">{method.name}</h3>
                    <div className="mt-3 grid gap-3">
                      {method.parameters.map((parameter) => (
                        <label key={parameter} className="block">
                          <span className="text-xs text-slate-500">{parameter}</span>
                          <input className="input mt-1" placeholder="默认参数" />
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </section>
        </div>

        <aside className="panel h-fit p-5">
          <h2 className="text-lg font-semibold text-slate-950">任务摘要</h2>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            <p>数据集：{selectedDataset?.name || '第三方链接'}</p>
            <p>任务：{selectedDataset?.task || task}</p>
            <p>第三方链接：{thirdPartyUrl || '未填写'}</p>
            <p>处理方法：{methods.length} 项</p>
          </div>
          <button onClick={runJob} className="btn-primary mt-5 w-full gap-2" disabled={status === 'running'}>
            {status === 'running' ? <Loader2 className="h-4 w-4 animate-spin" /> : <Play className="h-4 w-4" />}
            执行预处理
          </button>
          <div className="mt-4 rounded-md border border-blue-100 bg-blue-50/60 p-4 text-sm leading-6 text-slate-600">
            {status === 'idle' && '等待配置并执行。此处为前端 mock，不会启动真实算力任务。'}
            {status === 'running' && '任务已进入模拟队列，正在生成预处理结果摘要...'}
            {status === 'done' && '处理完成：已生成标准化音频、特征文件和元数据清单。'}
          </div>
          <button className="btn-secondary mt-4 w-full gap-2" disabled={status !== 'done'}>
            <Download className="h-4 w-4" />
            下载压缩包
          </button>
        </aside>
      </div>
    </section>
  );
}
