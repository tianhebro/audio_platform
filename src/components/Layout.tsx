import { Link, NavLink, Outlet } from 'react-router-dom';
import {
  BarChart3,
  BookOpen,
  Boxes,
  ChevronRight,
  Database,
  FileText,
  FlaskConical,
  Github,
  Home,
  LifeBuoy,
  Menu,
  Search,
  Sparkles,
  Users,
} from 'lucide-react';
import { Footer } from './Footer';

const navGroups = [
  {
    title: '主区域',
    items: [{ label: '首页', href: '/', icon: Home }],
  },
  {
    title: '资源',
    items: [
      { label: '任务图谱', href: '/tasks', icon: Boxes },
      { label: '教程', href: '/tutorials', icon: BookOpen },
      { label: '资源库', href: '/resources', icon: Database },
      { label: '研究论文', href: '/research', icon: FileText },
    ],
  },
  {
    title: '基准与实践',
    items: [
      { label: '在线 Demo', href: '/demos', icon: FlaskConical },
      { label: '趋势观察', href: '/trends', icon: BarChart3 },
    ],
  },
  {
    title: '社区',
    items: [{ label: '共建社区', href: '/community', icon: Users }],
  },
];

export function Layout() {
  return (
    <div className="min-h-screen bg-[#f7f8fb] text-slate-900">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 border-r border-slate-200 bg-white lg:flex lg:flex-col">
        <Link to="/" className="flex h-16 items-center gap-3 border-b border-slate-200 px-5">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-slate-950 text-white">
            <Sparkles className="h-4 w-4" />
          </span>
          <span>
            <span className="block text-base font-semibold leading-5">AudioSphere</span>
            <span className="block text-xs text-slate-500">声音 AI 资源社区</span>
          </span>
        </Link>

        <nav className="flex-1 overflow-y-auto px-3 py-4">
          {navGroups.map((group) => (
            <section key={group.title} className="mb-5">
              <p className="mb-2 px-2 text-xs font-semibold text-slate-400">{group.title}</p>
              <div className="grid gap-1">
                {group.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <NavLink
                      key={item.href}
                      to={item.href}
                      end={item.href === '/'}
                      className={({ isActive }) =>
                        `flex h-10 items-center gap-3 rounded-md px-3 text-sm transition ${
                          isActive
                            ? 'bg-slate-950 text-white'
                            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'
                        }`
                      }
                    >
                      <Icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </NavLink>
                  );
                })}
              </div>
            </section>
          ))}
        </nav>

        <div className="border-t border-slate-200 p-4">
          <div className="rounded-md border border-slate-200 bg-slate-50 p-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
              <LifeBuoy className="h-4 w-4" />
              数据集支持
            </div>
            <p className="mt-2 text-xs leading-5 text-slate-500">提交音频数据、模型和论文线索，完善社区索引。</p>
          </div>
        </div>
      </aside>

      <div className="lg:pl-64">
        <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
          <div className="flex h-16 items-center justify-between gap-4 px-4 md:px-6">
            <div className="flex items-center gap-3">
              <button className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 text-slate-600 lg:hidden">
                <Menu className="h-4 w-4" />
              </button>
              <div className="hidden items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500 md:flex md:w-[360px]">
                <Search className="h-4 w-4" />
                <span>搜索数据集、模型、论文、Benchmark</span>
                <kbd className="ml-auto rounded border border-slate-200 bg-white px-1.5 py-0.5 text-[11px] text-slate-400">⌘K</kbd>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                className="hidden h-9 items-center gap-2 rounded-md border border-slate-200 px-3 text-sm font-medium text-slate-600 transition hover:border-slate-300 hover:text-slate-950 sm:inline-flex"
                href="https://github.com"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <Link className="inline-flex h-9 items-center gap-2 rounded-md bg-slate-950 px-3 text-sm font-medium text-white" to="/community">
                共建资源
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </header>

        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
