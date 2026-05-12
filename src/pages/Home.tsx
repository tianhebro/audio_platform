import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Boxes,
  Brain,
  Database,
  FileText,
  FlaskConical,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from 'lucide-react';

const audiences = [
  { title: '学习者', value: '入门知识 / 基础教程 / 快速体验' },
  { title: '开发者与研究者', value: '数据集 / 模型 / 论文 / Benchmark' },
  { title: '企业与高端用户', value: '趋势洞察 / 调研报告 / 国产化方案' },
];

const highlights = [
  { icon: ShieldCheck, title: '国产化资源', value: '国内模型、数据、工具链、部署适配' },
  { icon: Brain, title: '全任务覆盖', value: '理解、生成、处理、分析、音乐、音频大模型' },
  { icon: FlaskConical, title: '效果对比', value: '国产模型与国际模型在线体验对比' },
];

const modules = [
  { code: 'A', title: '首页', icon: Sparkles, href: '/', value: '品牌入口、热门任务、最新动态' },
  { code: 'B', title: '任务导航', icon: Boxes, href: '/tasks', value: 'ASR、TTS、降噪、声纹、音乐、音频大模型' },
  { code: 'C', title: '学习中心', icon: BookOpen, href: '/tutorials', value: '零基础、任务教程、实战案例、项目拆解' },
  { code: 'D', title: '资源中心', icon: Database, href: '/resources', value: '数据集、模型、论文、工具、Benchmark' },
  { code: 'E', title: 'Demo 体验', icon: FlaskConical, href: '/demos', value: '上传音频、生成结果、播放对比、效果评测' },
  { code: 'F', title: '研究与趋势', icon: BarChart3, href: '/research', value: '论文速递、热点追踪、专题调研、行业观察' },
  { code: 'G', title: '社区与用户中心', icon: Users, href: '/community', value: '投稿、收藏、订阅、问答、兴趣标签' },
];

const supports = [
  { icon: Search, title: '搜索', value: '任务、模型、论文、教程、Demo' },
  { icon: Target, title: '标签', value: '任务、数据、语言、国产化/国际化' },
  { icon: Database, title: '聚合', value: 'Hugging Face、GitHub、官方数据集、国内资源' },
  { icon: Users, title: '留存', value: '收藏、订阅、每周精选、个性化推荐' },
  { icon: BarChart3, title: '统计', value: '热门任务、热门模型、国产化趋势' },
];

const values = ['统一入口', '全领域覆盖', '国产化特色', '社区沉淀', '持续扩展'];

export function Home() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8 md:px-6">
      <div className="panel overflow-hidden">
        <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-violet-700 px-6 py-8 text-white">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">声音 AI 社区</h1>
              <p className="mt-4 max-w-3xl text-base leading-7 text-blue-50">
                统一入口、全领域覆盖、国产化适配。
              </p>
            </div>
            <div className="grid gap-3">
              {audiences.map((item) => (
                <div key={item.title} className="rounded-md border border-white/15 bg-white/10 p-3">
                  <p className="text-sm font-semibold">{item.title}</p>
                  <p className="mt-1 text-xs text-blue-50">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-4 border-b border-blue-100 bg-white p-5 md:grid-cols-3">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="soft-panel p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-blue-800">
                  <Icon className="h-4 w-4" />
                  {item.title}
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-500">{item.value}</p>
              </div>
            );
          })}
        </div>
      </div>

      <section className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {modules.map((item) => {
          const Icon = item.icon;
          return (
            <Link key={item.title} to={item.href} className="panel group p-5 transition hover:-translate-y-0.5 hover:border-blue-200">
              <div className="flex items-center justify-between">
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-blue-50 text-sm font-semibold text-blue-700">
                  {item.code}
                </span>
                <Icon className="h-5 w-5 text-blue-600" />
              </div>
              <h2 className="mt-4 text-lg font-semibold text-slate-950 group-hover:text-blue-700">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">{item.value}</p>
            </Link>
          );
        })}
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
        <div className="panel p-5">
          <div className="grid gap-3">
            {supports.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex gap-3 rounded-md border border-blue-100 bg-blue-50/40 p-3">
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                  <div>
                    <p className="text-sm font-semibold text-slate-950">{item.title}</p>
                    <p className="mt-1 text-sm text-slate-500">{item.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="panel p-5">
          <div className="grid grid-cols-2 gap-3">
            {values.map((item, index) => (
              <div key={item} className="rounded-md border border-blue-100 bg-white p-3">
                <span className="flex h-6 w-6 items-center justify-center rounded bg-blue-600 text-xs font-semibold text-white">
                  {index + 1}
                </span>
                <p className="mt-3 text-sm font-semibold text-slate-700">{item}</p>
              </div>
            ))}
          </div>
          <Link className="btn-primary mt-5 gap-2" to="/tasks">
            进入任务导航
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </section>
  );
}
