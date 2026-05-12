import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-[1.5fr_1fr_1fr] md:px-6">
        <div>
          <p className="text-lg font-semibold text-slate-950">AudioSphere</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">
            学习、理解、实践，与社区一起构建声音 AI 的开放资源索引。
          </p>
        </div>
        <div>
          <p className="font-semibold text-slate-950">产品</p>
          <div className="mt-3 grid gap-2 text-sm text-slate-500">
            <Link to="/resources">资源库</Link>
            <Link to="/tutorials">教程</Link>
            <Link to="/demos">在线 Demo</Link>
          </div>
        </div>
        <div>
          <p className="font-semibold text-slate-950">社区</p>
          <div className="mt-3 grid gap-2 text-sm text-slate-500">
            <Link to="/community">共建资源</Link>
            <Link to="/trends">趋势观察</Link>
            <Link to="/research">研究论文</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 px-4 py-4 text-center text-xs text-slate-400">© 2026 AudioSphere</div>
    </footer>
  );
}
