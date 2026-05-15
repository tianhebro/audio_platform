import { useState } from 'react';
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
  Globe2,
  Home,
  Menu,
  Newspaper,
  Search,
  Settings,
  Sparkles,
  UserRound,
  Users,
  Wrench,
  X,
} from 'lucide-react';
import { userProfile } from '../data/platform';
import { Footer } from './Footer';

const navGroups = [
  {
    title: '主区域',
    items: [{ label: '首页', href: '/', icon: Home }],
  },
  {
    title: '资源入口',
    items: [
      { label: '数据集', href: '/datasets', icon: Database },
      { label: '模型', href: '/models', icon: Boxes },
      { label: '开源仓库', href: '/repositories', icon: Github },
    ],
  },
  {
    title: '学习与研究',
    items: [
      { label: '任务导航', href: '/tasks', icon: Boxes },
      { label: '学习中心', href: '/tutorials', icon: BookOpen },
      { label: '论文库', href: '/papers', icon: FileText },
    ],
  },
  {
    title: '研究与实践',
    items: [
      { label: '国产化适配', href: '/localization', icon: Globe2 },
      { label: '行业资讯', href: '/news', icon: Newspaper },
      { label: '数据工坊', href: '/workshop', icon: Wrench },
      { label: '在线 Demo', href: '/demos', icon: FlaskConical },
      { label: '趋势观察', href: '/trends', icon: BarChart3 },
    ],
  },
  {
    title: '社区与用户',
    items: [
      { label: '社区入口', href: '/community', icon: Users },
      { label: '用户中心', href: '/user', icon: UserRound },
    ],
  },
];

function NavGroups({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <>
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
                  onClick={onNavigate}
                  className={({ isActive }) =>
                    `flex h-10 items-center gap-3 rounded-md px-3 text-sm transition ${
                      isActive ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 hover:bg-blue-50 hover:text-blue-700'
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
    </>
  );
}

export function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);

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
          <NavGroups />
        </nav>

      </aside>

      {menuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button className="absolute inset-0 bg-slate-950/30" onClick={() => setMenuOpen(false)} aria-label="关闭导航遮罩" />
          <aside className="relative h-full w-72 overflow-y-auto border-r border-blue-100 bg-white">
            <div className="flex h-16 items-center justify-between border-b border-blue-100 px-4">
              <Link to="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-blue-600 text-white">
                  <Sparkles className="h-4 w-4" />
                </span>
                <span className="font-semibold text-slate-950">AudioSphere</span>
              </Link>
              <button className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-blue-100 text-blue-700" onClick={() => setMenuOpen(false)}>
                <X className="h-4 w-4" />
              </button>
            </div>
            <nav className="px-3 py-4">
              <NavGroups onNavigate={() => setMenuOpen(false)} />
            </nav>
          </aside>
        </div>
      )}

      <div className="lg:pl-64">
        <header className="sticky top-0 z-30 border-b border-blue-100 bg-white/90 backdrop-blur">
          <div className="flex h-16 items-center justify-between gap-4 px-4 md:px-6">
            <div className="flex items-center gap-3">
              <button
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-blue-100 text-blue-700 lg:hidden"
                onClick={() => setMenuOpen(true)}
              >
                <Menu className="h-4 w-4" />
              </button>
              <div className="hidden items-center gap-2 rounded-md border border-blue-100 bg-blue-50/60 px-3 py-2 text-sm text-slate-500 md:flex md:w-[420px]">
                <Search className="h-4 w-4 text-blue-600" />
                <span>搜索数据集、模型、论文、资讯、国产化方案</span>
                <kbd className="ml-auto rounded border border-blue-100 bg-white px-1.5 py-0.5 text-[11px] text-blue-400">⌘K</kbd>
              </div>
            </div>

            <div className="relative flex items-center gap-2">
              <a
                className="hidden h-9 items-center gap-2 rounded-md border border-blue-100 bg-white px-3 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-700 sm:inline-flex"
                href="https://github.com"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <Link className="btn-primary hidden gap-2 sm:inline-flex" to="/community">
                共建资源
                <ChevronRight className="h-4 w-4" />
              </Link>
              <button
                className="flex h-9 w-9 items-center justify-center rounded-md bg-blue-600 text-sm font-semibold text-white"
                onClick={() => setUserOpen(!userOpen)}
                aria-label="打开用户菜单"
              >
                {userProfile.avatar}
              </button>
              {userOpen && (
                <div className="absolute right-0 top-11 w-56 rounded-md border border-blue-100 bg-white p-2 shadow-[0_18px_50px_rgba(15,23,42,0.12)]">
                  <div className="border-b border-blue-100 px-3 py-2">
                    <p className="text-sm font-semibold text-slate-950">{userProfile.name}</p>
                    <p className="text-xs text-slate-500">{userProfile.role}</p>
                  </div>
                  <Link onClick={() => setUserOpen(false)} to="/user" className="mt-2 flex items-center gap-2 rounded-md px-3 py-2 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-700">
                    <UserRound className="h-4 w-4" />
                    个人中心
                  </Link>
                  <Link onClick={() => setUserOpen(false)} to="/user" className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-700">
                    <Database className="h-4 w-4" />
                    收藏夹
                  </Link>
                  <Link onClick={() => setUserOpen(false)} to="/user" className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-700">
                    <Boxes className="h-4 w-4" />
                    我的项目
                  </Link>
                  <Link onClick={() => setUserOpen(false)} to="/user" className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-700">
                    <Settings className="h-4 w-4" />
                    设置
                  </Link>
                </div>
              )}
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
