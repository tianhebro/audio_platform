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
  { title: '小白 / 学习者', value: '入门知识、基础教程、快速体验' },
  { title: '开发者 / 研究者', value: '数据集、模型、论文、Benchmark' },
  { title: '高端用户 / 企业', value: '方向洞察、调研报告、国产化方案' },
];

const modules = [
  {
    code: 'A',
    title: '首页',
    icon: Sparkles,
    href: '/',
    value: '平台介绍、品牌形象、核心入口、热门任务与最新动态概览。',
  },
  {
    code: 'B',
    title: '任务导航',
    icon: Boxes,
    href: '/tasks',
    value: '覆盖语音理解、语音生成、音频处理、声源分析、音乐创作和前沿方向。',
  },
  {
    code: 'C',
    title: '学习中心',
    icon: BookOpen,
    href: '/tutorials',
    value: '零基础入门、任务教程、实战演示、真实项目案例拆解。',
  },
  {
    code: 'D',
    title: '资源中心',
    icon: Database,
    href: '/resources',
    value: '数据集、模型、论文、工具和 Benchmark，支持国产化/国际化分类。',
  },
  {
    code: 'E',
    title: 'Demo 体验',
    icon: FlaskConical,
    href: '/demos',
    value: 'ASR、TTS、降噪、声音克隆等在线体验，以及国内外模型效果对比。',
  },
  {
    code: 'F',
    title: '研究与趋势',
    icon: BarChart3,
    href: '/research',
    value: '论文速递、热点追踪、趋势图谱、专题调研、国产化案例分析。',
  },
  {
    code: 'G',
    title: '社区与用户中心',
    icon: Users,
    href: '/community',
    value: '投稿、收藏、订阅、问答、经验分享、用户主页和兴趣标签。',
  },
];

const supports = [
  { icon: Search, title: '全站搜索', value: '按任务、模型、论文、教程、Demo 检索' },
  { icon: Target, title: '标签体系', value: '任务类型、数据类型、语言、国产化/国际化' },
  { icon: Database, title: '数据聚合', value: '聚合 Hugging Face、GitHub、官方数据集与国内资源' },
  { icon: Users, title: '用户留存', value: '收藏、订阅、每周精选、个性化推荐内容' },
  { icon: BarChart3, title: '统计分析', value: '热门任务、热门模型、国产化趋势面板' },
];

const strategy = [
  '统一入口：解决声音领域信息碎片化',
  '全领域覆盖：从小白到专家都能找到价值',
  '国产化特色：国内模型、效果、方案与对比',
  '社区沉淀：投稿、讨论、收藏和经验持续积累',
  '可扩展性：新任务、新模型、新趋势随时接入',
];

export function Home() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8 md:px-6">
      <div className="mb-6 text-sm text-blue-500">AudioSphere / 总体架构 / 声音 AI 社区</div>

      <div className="panel overflow-hidden">
        <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-violet-700 px-6 py-8 text-white">
          <span className="inline-flex rounded bg-white/15 px-2 py-1 text-xs font-medium text-blue-50">核心定位</span>
          <div className="mt-5 grid gap-6 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">声音 AI 统一入口 + 全领域覆盖 + 国产化适配</h1>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-blue-50">
                面向学习者、开发者、研究者、企业和行业专家，提供从任务理解、资源检索、在线体验到趋势洞察的一体化社区平台。
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
          <div className="soft-panel p-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-blue-800">
              <ShieldCheck className="h-4 w-4" />
              国产化资源
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-500">突出国内模型、数据、工具链和部署适配方案。</p>
          </div>
          <div className="soft-panel p-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-blue-800">
              <Brain className="h-4 w-4" />
              全任务覆盖
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-500">语音理解、生成、处理、分析、音乐和音频大模型。</p>
          </div>
          <div className="soft-panel p-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-blue-800">
              <FlaskConical className="h-4 w-4" />
              效果对比
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-500">在线 Demo 承载国产模型与国际模型的体验式对比。</p>
          </div>
        </div>
      </div>

      <section className="mt-8">
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <span className="badge">Top-level Modules</span>
            <h2 className="mt-3 text-2xl font-semibold text-slate-950">顶层模块分块</h2>
          </div>
          <div className="hidden items-center gap-2 text-sm text-blue-600 md:flex">
            任务导航
            <ArrowRight className="h-4 w-4" />
            学习 / 资源 / Demo
            <ArrowRight className="h-4 w-4" />
            趋势与社区
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
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
                <h3 className="mt-4 text-lg font-semibold text-slate-950 group-hover:text-blue-700">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{item.value}</p>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
        <div className="panel p-5">
          <span className="badge">Platform Capabilities</span>
          <h2 className="mt-3 text-2xl font-semibold text-slate-950">跨模块支撑功能</h2>
          <div className="mt-5 grid gap-3">
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
          <span className="badge">Leadership View</span>
          <h2 className="mt-3 text-2xl font-semibold text-slate-950">战略意义</h2>
          <div className="mt-5 grid gap-3">
            {strategy.map((item, index) => (
              <div key={item} className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-blue-600 text-xs font-semibold text-white">
                  {index + 1}
                </span>
                <p className="text-sm leading-6 text-slate-600">{item}</p>
              </div>
            ))}
          </div>
          <Link className="btn-primary mt-6 gap-2" to="/tasks">
            从任务导航进入
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </section>
  );
}
