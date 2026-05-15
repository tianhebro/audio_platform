import { Link, Navigate, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  BookOpen,
  Boxes,
  CheckCircle2,
  Database,
  Download,
  ExternalLink,
  FileText,
  FlaskConical,
  GitFork,
  Heart,
  Play,
  Star,
} from 'lucide-react';
import {
  datasetResources,
  modelResources,
  paperItems,
  repoResources,
  tutorialItems,
  type DatasetResource,
  type ModelResource,
  type RepoResource,
} from '../data/platform';

type DetailKind = 'dataset' | 'model' | 'repository';

type ResourceDetailProps = {
  kind: DetailKind;
};

type DetailView = {
  id: string;
  name: string;
  owner: string;
  typeLabel: string;
  backHref: string;
  backLabel: string;
  summary: string;
  tags: string[];
  badges: string[];
  stats: { label: string; value: string }[];
  info: { label: string; value: string }[];
  metrics: string[];
  usageTitle: string;
  usage: string[];
  runnable: boolean;
};

function datasetView(item: DatasetResource): DetailView {
  return {
    id: item.id,
    name: item.name,
    owner: item.provider,
    typeLabel: '数据集',
    backHref: '/datasets',
    backLabel: '返回数据集',
    summary: `${item.name} 面向 ${item.task} 任务，覆盖 ${item.language}、${item.sampleRate}、${item.channels} 音频，可用于训练、评测与数据工坊预处理。`,
    tags: [...item.tags, ...item.preprocessing],
    badges: [item.task, item.license, item.sampleRate, item.language, item.channels],
    stats: [
      { label: '下载', value: item.downloads },
      { label: '收藏', value: String(item.favorites) },
      { label: '规模', value: item.size },
      { label: '更新', value: item.updated },
    ],
    info: [
      { label: '提供方', value: item.provider },
      { label: '开源协议', value: item.license },
      { label: '是否官方', value: item.official ? '官方资源' : '社区资源' },
      { label: '可预处理', value: item.hasPreprocessed ? '支持跳转数据工坊' : '暂未提供' },
    ],
    metrics: ['可试听样例', item.audioPreview, ...item.preprocessing],
    usageTitle: '数据使用方式',
    usage: ['选择数据集版本与任务标签', '在数据工坊配置重采样、归一化、静音移除等预处理方法', '下载预处理压缩包或关联到模型训练任务'],
    runnable: item.hasPreprocessed,
  };
}

function modelView(item: ModelResource): DetailView {
  return {
    id: item.id,
    name: item.name,
    owner: item.provider,
    typeLabel: '模型',
    backHref: '/models',
    backLabel: '返回模型',
    summary: `${item.name} 是面向 ${item.task} 的 ${item.architecture} 模型，支持 ${item.platforms.join(' / ')} 部署，适合快速体验、效果对比和工程集成。`,
    tags: item.tags,
    badges: [item.task, item.size, item.architecture, item.license, ...item.platforms],
    stats: [
      { label: '下载', value: item.downloads },
      { label: '收藏', value: String(item.favorites) },
      { label: '大小', value: item.size },
      { label: '更新', value: item.updated },
    ],
    info: [
      { label: '提供方', value: item.provider },
      { label: '架构', value: item.architecture },
      { label: '开源协议', value: item.license },
      { label: '可运行', value: item.runnable ? '可直接使用' : '仅展示信息' },
    ],
    metrics: ['延迟评估', '任务准确率', '资源占用', '部署兼容性'],
    usageTitle: '模型调用方式',
    usage: ['安装模型依赖并拉取权重', '选择 Python、Docker 或 Web 运行环境', '通过在线 Demo 或数据工坊验证输入输出效果'],
    runnable: item.runnable,
  };
}

function repoView(item: RepoResource): DetailView {
  return {
    id: item.id,
    name: item.name,
    owner: item.provider,
    typeLabel: '开源仓库',
    backHref: '/repositories',
    backLabel: '返回开源仓库',
    summary: `${item.name} 提供 ${item.task} 相关代码、脚本和示例，适合复现实验、二次开发和快速搭建可运行 Demo。`,
    tags: [...item.tags, item.origin, item.hasDemo ? '示例 Demo' : '', item.hasNotebook ? 'Notebook' : ''].filter(Boolean),
    badges: [item.task, item.license, item.origin, ...item.platforms],
    stats: [
      { label: 'Star', value: item.stars },
      { label: 'Fork', value: item.forks },
      { label: '下载', value: item.downloads },
      { label: '更新', value: item.updated },
    ],
    info: [
      { label: '提供方', value: item.provider },
      { label: '协议', value: item.license },
      { label: '平台', value: item.platforms.join(' / ') },
      { label: '可运行内容', value: [item.hasDemo ? 'Demo' : '', item.hasNotebook ? 'Notebook' : ''].filter(Boolean).join(' / ') || '基础代码' },
    ],
    metrics: ['Star 趋势', 'Fork 活跃度', 'Issue 响应', '示例完整度'],
    usageTitle: '仓库使用方式',
    usage: ['查看 README 与示例目录', '快速克隆或下载代码', '运行 Notebook / Demo 并关联数据集与模型'],
    runnable: item.hasDemo || item.hasNotebook,
  };
}

function getDetail(kind: DetailKind, id: string): DetailView | undefined {
  if (kind === 'dataset') {
    const item = datasetResources.find((entry) => entry.id === id);
    return item ? datasetView(item) : undefined;
  }
  if (kind === 'model') {
    const item = modelResources.find((entry) => entry.id === id);
    return item ? modelView(item) : undefined;
  }
  const item = repoResources.find((entry) => entry.id === id);
  return item ? repoView(item) : undefined;
}

export function ResourceDetail({ kind }: ResourceDetailProps) {
  const { id = '' } = useParams();
  const detail = getDetail(kind, id);

  if (!detail) {
    return <Navigate to={kind === 'dataset' ? '/datasets' : kind === 'model' ? '/models' : '/repositories'} replace />;
  }

  const relatedTutorials = tutorialItems.slice(0, 3);
  const relatedPapers = paperItems.slice(0, 3);

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 md:px-6 lg:px-8">
      <Link to={detail.backHref} className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800">
        <ArrowLeft className="h-4 w-4" />
        {detail.backLabel}
      </Link>

      <div className="mt-5 rounded-md border border-blue-100 bg-white shadow-[0_18px_60px_rgba(37,99,235,0.08)]">
        <div className="border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-violet-50 p-6">
          <div className="flex flex-wrap items-start justify-between gap-5">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="resource-pill">{detail.typeLabel}</span>
                {detail.badges.slice(0, 6).map((badge) => (
                  <span key={badge} className="rounded-full bg-white px-2.5 py-1 text-xs text-slate-600 shadow-sm">
                    {badge}
                  </span>
                ))}
              </div>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">{detail.name}</h1>
              <p className="mt-2 text-sm text-slate-500">{detail.owner}</p>
              <p className="mt-4 max-w-4xl text-sm leading-6 text-slate-600">{detail.summary}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              <button className="btn-secondary gap-2">
                <Heart className="h-4 w-4" />
                收藏
              </button>
              <button className="btn-primary gap-2">
                <Download className="h-4 w-4" />
                下载
              </button>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {detail.stats.map((item) => (
              <div key={item.label} className="rounded-md border border-blue-100 bg-white p-3">
                <p className="text-xs text-slate-500">{item.label}</p>
                <p className="mt-2 text-lg font-semibold text-slate-950">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6 p-6 xl:grid-cols-[1fr_320px]">
          <main className="space-y-6">
            <section className="rounded-md border border-blue-100 bg-white p-5">
              <h2 className="text-xl font-semibold text-slate-950">介绍</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{detail.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {detail.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-blue-50 px-3 py-1 text-xs text-blue-700">
                    {tag}
                  </span>
                ))}
              </div>
            </section>

            <section className="rounded-md border border-blue-100 bg-white p-5">
              <h2 className="text-xl font-semibold text-slate-950">{detail.usageTitle}</h2>
              <div className="mt-4 grid gap-3">
                {detail.usage.map((step, index) => (
                  <div key={step} className="flex gap-3 rounded-md bg-blue-50/60 p-3 text-sm text-slate-600">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-blue-600 text-xs font-semibold text-white">{index + 1}</span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-md border border-blue-100 bg-white p-5">
              <h2 className="text-xl font-semibold text-slate-950">指标与评估</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {detail.metrics.map((metric) => (
                  <div key={metric} className="rounded-md bg-slate-50 p-3 text-sm font-medium text-slate-700">
                    <CheckCircle2 className="mr-2 inline h-4 w-4 text-blue-600" />
                    {metric}
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-md border border-blue-100 bg-white p-5">
              <h2 className="text-xl font-semibold text-slate-950">关联教程与论文</h2>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-950">
                    <BookOpen className="h-4 w-4 text-blue-600" />
                    教程
                  </h3>
                  <div className="mt-3 grid gap-2">
                    {relatedTutorials.map((item) => (
                      <Link key={item.id} to="/tutorials" className="rounded-md bg-blue-50/50 px-3 py-2 text-sm text-slate-600 hover:bg-blue-50">
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-950">
                    <FileText className="h-4 w-4 text-blue-600" />
                    论文
                  </h3>
                  <div className="mt-3 grid gap-2">
                    {relatedPapers.map((item) => (
                      <Link key={item.id} to="/papers" className="rounded-md bg-blue-50/50 px-3 py-2 text-sm text-slate-600 hover:bg-blue-50">
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </main>

          <aside className="space-y-5">
            <section className="rounded-md border border-blue-100 bg-white p-5">
              <h2 className="text-lg font-semibold text-slate-950">资源信息</h2>
              <div className="mt-4 grid gap-3">
                {detail.info.map((item) => (
                  <div key={item.label} className="flex justify-between gap-4 text-sm">
                    <span className="text-slate-500">{item.label}</span>
                    <span className="text-right font-medium text-slate-800">{item.value}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-md border border-blue-100 bg-white p-5">
              <h2 className="text-lg font-semibold text-slate-950">快捷操作</h2>
              <div className="mt-4 grid gap-2">
                {detail.runnable && (
                  <Link to="/demos" className="btn-primary gap-2">
                    <Play className="h-4 w-4" />
                    可运行 Demo
                  </Link>
                )}
                <Link to="/workshop" className="btn-secondary gap-2">
                  <FlaskConical className="h-4 w-4" />
                  数据工坊
                </Link>
                <button className="btn-secondary gap-2">
                  <ExternalLink className="h-4 w-4" />
                  外部主页
                </button>
              </div>
            </section>

            <section className="rounded-md border border-blue-100 bg-white p-5">
              <h2 className="text-lg font-semibold text-slate-950">活跃度</h2>
              <div className="mt-4 grid gap-3 text-sm text-slate-600">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2"><Star className="h-4 w-4 text-amber-500" />收藏热度</span>
                  <span>高</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2"><GitFork className="h-4 w-4 text-blue-500" />复用潜力</span>
                  <span>可落地</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2"><Boxes className="h-4 w-4 text-violet-500" />任务覆盖</span>
                  <span>完整</span>
                </div>
              </div>
            </section>
          </aside>
        </div>
      </div>
    </section>
  );
}
