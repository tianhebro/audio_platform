import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bookmark, Menu, Search, X, Zap } from 'lucide-react';
const navItems = [
  ['首页', '/'], ['任务', '/tasks'], ['教程', '/tutorials'], ['资源', '/resources'], ['Demo', '/demos'], ['研究', '/research'], ['趋势', '/trends'], ['社区', '/community'],
] as const;
export function Navbar() {
  const [open, setOpen] = useState(false);
  const linkClass = ({ isActive }: { isActive: boolean }) => `rounded-full px-3 py-2 text-sm font-semibold transition ${isActive ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-100 hover:text-blue-700'}`;
  return <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
    <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 py-3 md:px-6 lg:px-8">
      <Link to="/" className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-glow"><Zap className="h-5 w-5" /></span><div><p className="font-black leading-5 text-slate-950">AudioSphere</p><p className="text-xs text-slate-500">声音 AI 社区</p></div></Link>
      <nav className="hidden items-center gap-1 lg:flex">{navItems.map(([label, href]) => <NavLink key={href} to={href} className={linkClass}>{label}</NavLink>)}</nav>
      <div className="hidden items-center gap-2 md:flex"><button className="btn-secondary px-4 py-2"><Search className="mr-2 h-4 w-4" />搜索</button><button className="btn-secondary px-4 py-2"><Bookmark className="mr-2 h-4 w-4" />订阅</button><button className="btn-primary px-4 py-2">登录 / 注册</button></div>
      <button className="rounded-xl border border-slate-200 p-2 lg:hidden" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </div>
    {open && <div className="border-t border-slate-100 bg-white px-4 py-4 lg:hidden"><nav className="grid gap-2">{navItems.map(([label, href]) => <NavLink key={href} to={href} onClick={() => setOpen(false)} className={linkClass}>{label}</NavLink>)}</nav><div className="mt-4 grid gap-2"><button className="btn-secondary">搜索</button><button className="btn-primary">登录 / 注册</button></div></div>}
  </header>;
}
