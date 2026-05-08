import { Link } from 'react-router-dom';
export function Footer() {
  return <footer className="border-t border-slate-200 bg-white">
    <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-4 md:px-6 lg:px-8">
      <div className="md:col-span-2"><p className="text-xl font-black text-slate-950">AudioSphere 声音 AI 社区</p><p className="mt-3 max-w-md text-sm leading-6 text-slate-600">面向新手、研究者和从业者的声音 AI 统一入口 Demo。当前为静态原型，便于部署到 GitHub Pages 并持续迭代。</p></div>
      <div><p className="font-bold text-slate-950">导航</p><div className="mt-3 grid gap-2 text-sm text-slate-600"><Link to="/tasks">任务图谱</Link><Link to="/resources">资源库</Link><Link to="/demos">在线 Demo</Link></div></div>
      <div><p className="font-bold text-slate-950">共建</p><div className="mt-3 grid gap-2 text-sm text-slate-600"><Link to="/community">投稿资源</Link><Link to="/community">提交 Demo</Link><Link to="/trends">趋势观察</Link></div></div>
    </div>
  </footer>;
}
