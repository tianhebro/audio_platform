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
      { label: '任务导航', href: '/tasks', icon: Boxes },
      { label: '学习中心', href: '/tutorials', icon: BookOpen },
      { label: '资源中心', href: '/resources', icon: Database },
      { label: '研究与趋势', href: '/research', icon: FileText },
    ],
  },
  {
    title: '基准与实践',
    items: [
      { label: 'Demo 体验', href: '/demos', icon: FlaskConical },
      { label: '趋势观察', href: '/trends', icon: BarChart3 },
    ],
  },
  {
    title: '社区',
    items: [{ label: '社区与用户中心', href: '/community', icon: Users }],
  },
];

export function Layout() {
  return (
    <div className="app-shell min-h-screen text-slate-900">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 border-r border-blue-100 bg-white lg:flex lg:flex-col">
        <Link to="/" className="flex h-16 items-center gap-3 border-b border-blue-100 px-5">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-[0_10px_24px_rgba(59,130,246,0.28)]">
            <Sparkles className="h-4 w-4" />
          </span>
          <span>
            <span className="block text-base font-semibold leading-5 text-slate-950">AudioSphere</span>
            <span className="block text-xs text-blue-600">统一入口 · 国产化适配</span>
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
                            ? 'bg-blue-600 text-white shadow-sm'
                            : 'text-slate-600 hover:bg-blue-50 hover:text-blue-700'
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

        <div className="border-t border-blue-100 p-4">
          <div className="rounded-md border border-blue-100 bg-blue-50/70 p-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-blue-800">
              <LifeBuoy className="h-4 w-4" />
              国产化特色
            </div>
            <p className="mt-2 text-xs leading-5 text-slate-600">聚合国内模型、数据、方案与效果对比，支撑调研和落地。</p>
          </div>
        </div>
      </aside>

      <div className="lg:pl-64">
        <header className="sticky top-0 z-30 border-b border-blue-100 bg-white/90 backdrop-blur">
          <div className="flex h-16 items-center justify-between gap-4 px-4 md:px-6">
            <div className="flex items-center gap-3">
              <button className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-blue-100 text-blue-700 lg:hidden">
                <Menu className="h-4 w-4" />
              </button>
              <div className="hidden items-center gap-2 rounded-md border border-blue-100 bg-blue-50/60 px-3 py-2 text-sm text-slate-500 md:flex md:w-[360px]">
                <Search className="h-4 w-4 text-blue-600" />
                <span>搜索数据集、模型、论文、Benchmark</span>
                <kbd className="ml-auto rounded border border-blue-100 bg-white px-1.5 py-0.5 text-[11px] text-blue-400">⌘K</kbd>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                className="hidden h-9 items-center gap-2 rounded-md border border-blue-100 bg-white px-3 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-700 sm:inline-flex"
                href="https://github.com"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <Link className="btn-primary gap-2" to="/community">
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
