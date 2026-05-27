import { Link } from 'react-router-dom';
import { localizationSolutions } from '../data/platform';

export function LocalizationBenchmark() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 md:px-6 lg:px-8">
      <div className="panel p-6">
        <p className="badge">Benchmark Hub</p>
        <h1 className="mt-4 text-3xl font-semibold text-slate-950">国产化性能评测中心</h1>
        <p className="mt-3 text-sm text-slate-600">聚焦声音 AI 的 CER/WER、RTF、MOS、PESQ、端到端延迟等关键指标。</p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {localizationSolutions.map((item) => (
          <article key={item.id} className="rounded-md border border-blue-100 bg-white p-4">
            <h2 className="font-semibold text-slate-950">{item.name}</h2>
            <p className="mt-2 text-xs text-slate-500">{item.computeBase} · {item.framework}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {item.metrics.map((metric) => (
                <span key={metric} className="rounded bg-blue-50 px-2 py-1 text-xs text-blue-700">{metric}</span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-4">
        <Link to="/localization" className="btn-secondary">返回国产化总览</Link>
      </div>
    </section>
  );
}
