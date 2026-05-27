import { Link } from 'react-router-dom';
import { localizationSolutions } from '../data/platform';

export function LocalizationMatrix() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 md:px-6 lg:px-8">
      <div className="panel p-6">
        <p className="badge">Localization Matrix</p>
        <h1 className="mt-4 text-3xl font-semibold text-slate-950">国产化适配矩阵</h1>
        <p className="mt-3 text-sm text-slate-600">按“任务 × 算力底座 × 框架 × 成熟度”查看国产化可落地状态。</p>
      </div>

      <div className="mt-6 overflow-hidden rounded-md border border-blue-100 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="bg-blue-50/70 text-slate-600">
            <tr>
              <th className="px-4 py-3 font-semibold">方案 / 模型</th>
              <th className="px-4 py-3 font-semibold">任务</th>
              <th className="px-4 py-3 font-semibold">算力底座</th>
              <th className="px-4 py-3 font-semibold">框架</th>
              <th className="px-4 py-3 font-semibold">成熟度</th>
            </tr>
          </thead>
          <tbody>
            {localizationSolutions.map((item) => (
              <tr key={item.id} className="border-t border-blue-100">
                <td className="px-4 py-3 font-medium text-slate-900">{item.name}</td>
                <td className="px-4 py-3 text-slate-600">{item.task}</td>
                <td className="px-4 py-3 text-slate-600">{item.computeBase}</td>
                <td className="px-4 py-3 text-slate-600">{item.framework}</td>
                <td className="px-4 py-3"><span className="rounded bg-violet-50 px-2 py-1 text-xs font-medium text-violet-700">{item.maturity}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4">
        <Link to="/localization" className="btn-secondary">返回国产化总览</Link>
      </div>
    </section>
  );
}
