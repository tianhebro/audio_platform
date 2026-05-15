import { Bookmark, Clock3, FolderKanban, Settings, UserRound, Bell, GraduationCap } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { userProfile } from '../data/platform';

export function UserCenter() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 md:px-6 lg:px-8">
      <SectionHeader eyebrow="User" title="用户中心" description="静态展示个人资料、学习进度、浏览历史、收藏夹、我的项目/贡献、订阅和设置入口。" />

      <div className="mt-8 grid gap-6 xl:grid-cols-[300px_1fr]">
        <aside className="panel p-5">
          <div className="flex items-center gap-3">
            <span className="flex h-14 w-14 items-center justify-center rounded-md bg-blue-600 text-lg font-semibold text-white">{userProfile.avatar}</span>
            <div>
              <h2 className="font-semibold text-slate-950">{userProfile.name}</h2>
              <p className="text-sm text-slate-500">{userProfile.role}</p>
              <p className="mt-1 text-xs text-blue-600">{userProfile.email}</p>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3">
            {userProfile.stats.map((item) => (
              <div key={item.label} className="rounded-md border border-blue-100 bg-blue-50/50 p-3">
                <p className="text-xs text-slate-500">{item.label}</p>
                <p className="mt-2 text-lg font-semibold text-slate-950">{item.value}</p>
              </div>
            ))}
          </div>
        </aside>

        <div className="grid gap-5 md:grid-cols-2">
          <Panel icon={GraduationCap} title="学习进度" items={['ASR 入门路线 46%', '音频增强工程实践 62%', 'TTS 安全路线 28%']} />
          <Panel icon={Clock3} title="近期浏览" items={userProfile.recent} />
          <Panel icon={Bookmark} title="收藏夹" items={userProfile.favorites} action="创建 / 删除 / 分类收藏夹" />
          <Panel icon={FolderKanban} title="我的项目 / 贡献" items={userProfile.projects} action="编辑和管理已投稿内容" />
          <Panel icon={Bell} title="订阅" items={userProfile.subscriptions} action="查看任务、专题、资源更新" />
          <Panel icon={Settings} title="设置" items={['个人资料管理', '账号相关设置', '通知偏好']} action="查看修改个人资料" />
        </div>
      </div>
    </section>
  );
}

function Panel({ icon: Icon, title, items, action }: { icon: typeof UserRound; title: string; items: string[]; action?: string }) {
  return (
    <article className="rounded-md border border-blue-100 bg-white p-5 shadow-[0_10px_28px_rgba(37,99,235,0.05)]">
      <div className="flex items-center gap-2 text-lg font-semibold text-slate-950">
        <Icon className="h-5 w-5 text-blue-600" />
        {title}
      </div>
      <div className="mt-4 grid gap-2">
        {items.map((item) => (
          <div key={item} className="rounded-md bg-blue-50/50 px-3 py-2 text-sm text-slate-600">
            {item}
          </div>
        ))}
      </div>
      {action && <button className="btn-secondary mt-4">{action}</button>}
    </article>
  );
}
