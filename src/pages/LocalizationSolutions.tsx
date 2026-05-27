import { Link } from 'react-router-dom';
import { localizationSolutions } from '../data/platform';

export function LocalizationSolutions() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 md:px-6 lg:px-8">
      <div className="panel p-6">
        <p className="badge">Solution Packages</p>
        <h1 className="mt-4 text-3xl font-semibold text-slate-950">国产化落地方案包</h1>
        <p className="mt-3 text-sm text-slate-600">面向政务、金融、车载、安防、会议等场景，提供可部署的方案建议。</p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {localizationSolutions.map((item) => (
          <article key={item.id} className="rounded-md border border-blue-100 bg-white p-4">
            <h2 className="font-semibold text-slate-950">{item.name}</h2>
            <p className="mt-2 text-sm text-slate-600">{item.summary}</p>
            <div className="mt-3">
              <p className="text-xs font-semibold text-slate-500">行业场景</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {item.scenarios.map((scenario) => (
                  <span key={scenario} className="rounded bg-slate-100 px-2 py-1 text-xs text-slate-600">{scenario}</span>
                ))}
              </div>
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
