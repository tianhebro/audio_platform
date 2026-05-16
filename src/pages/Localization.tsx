import { useMemo, useState } from 'react';
import {
  BarChart3,
  Bookmark,
  Boxes,
  Cpu,
  Download,
  FlaskConical,
  Gauge,
  Layers3,
  Map,
  Radar,
  ShieldCheck,
  SlidersHorizontal,
  Wrench,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { localizationSolutions, taskCategories, type LocalizationSolution } from '../data/platform';

const computeBases = ['全部', '华为昇腾', '寒武纪', '海光', '摩尔线程', '燧原'] as const;
const frameworks = ['全部', 'MindSpore', 'PaddlePaddle', '国产优化版 PyTorch', '国产优化版 TensorFlow'] as const;
const complianceOptions = ['全部', '信创认证', '数据不出境', '等保三级适配'] as const;
const sortOptions = ['国产化适配深度', '算力性价比', '行业热度'] as const;

const computeMatrix = [
  { name: '华为昇腾', alias: 'Ascend', value: 'CANN / MindSpore', score: 95 },
  { name: '寒武纪', alias: 'Cambricon', value: 'MLU / Triton', score: 86 },
  { name: '海光', alias: 'Hygon', value: 'DCU / ROCm 兼容', score: 78 },
  { name: '摩尔线程', alias: 'MTT', value: 'MUSA / 图音协同', score: 73 },
  { name: '燧原', alias: 'Enflame', value: 'TopsRider / Paddle', score: 82 },
];

const audioChipWall = ['恒玄低功耗语音唤醒', '瑞昱国产线麦克风阵列', '国产 DSP 回声消除', '端侧 ANC 前处理', '车载音频 SoC 联调'];

function scoreColor(score: number) {
  if (score >= 90) return 'bg-blue-600';
  if (score >= 80) return 'bg-violet-500';
  return 'bg-cyan-500';
}

function matchesCompliance(item: LocalizationSolution, compliance: string) {
  return compliance === '全部' || item.compliance.includes(compliance);
}

function sortSolutions(items: LocalizationSolution[], sort: (typeof sortOptions)[number]) {
  const sorted = [...items];
  if (sort === '算力性价比') return sorted.sort((a, b) => b.costPerformance - a.costPerformance);
  if (sort === '行业热度') return sorted.sort((a, b) => b.industryHeat - a.industryHeat);
  return sorted.sort((a, b) => b.depthScore - a.depthScore);
}

export function Localization() {
  const [computeBase, setComputeBase] = useState<(typeof computeBases)[number]>('全部');
  const [framework, setFramework] = useState<(typeof frameworks)[number]>('全部');
  const [task, setTask] = useState<'全部' | (typeof taskCategories)[number]>('全部');
  const [compliance, setCompliance] = useState<(typeof complianceOptions)[number]>('全部');
  const [sort, setSort] = useState<(typeof sortOptions)[number]>('国产化适配深度');

  const filtered = useMemo(
    () =>
      sortSolutions(
        localizationSolutions.filter(
          (item) =>
            (computeBase === '全部' || item.computeBase === computeBase) &&
            (framework === '全部' || item.framework === framework) &&
            (task === '全部' || item.task === task) &&
            matchesCompliance(item, compliance),
        ),
        sort,
      ),
    [computeBase, framework, task, compliance, sort],
  );

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 md:px-6 lg:px-8">
      <div className="overflow-hidden rounded-md border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-violet-50 p-6 shadow-[0_18px_60px_rgba(37,99,235,0.08)]">
        <span className="badge">Full-stack Localization</span>
        <div className="mt-4 grid gap-6 xl:grid-cols-[1fr_360px] xl:items-end">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950">国产化全栈适配专区</h1>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-600">
              以智算底座、国产框架、音频任务、合规认证和端侧芯片为核心，展示从“看方案”到“拉起国产算力实验室”的闭环能力。
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[
              ['适配方案', localizationSolutions.length],
              ['国产卡', computeMatrix.length],
              ['成熟度', 'L1-L5'],
            ].map(([label, value]) => (
              <div key={label} className="rounded-md border border-blue-100 bg-white p-3">
                <p className="text-xs text-slate-500">{label}</p>
                <p className="mt-2 text-xl font-semibold text-blue-700">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {computeMatrix.map((item) => (
          <article key={item.name} className="rounded-md border border-blue-100 bg-white p-4 shadow-[0_10px_28px_rgba(37,99,235,0.05)]">
            <div className="flex items-center gap-2">
              <Cpu className="h-5 w-5 text-blue-600" />
              <div>
                <h2 className="font-semibold text-slate-950">{item.name}</h2>
                <p className="text-xs text-slate-500">{item.alias}</p>
              </div>
            </div>
            <p className="mt-3 text-sm text-slate-500">{item.value}</p>
            <div className="mt-3 h-2 rounded bg-blue-50">
              <div className={`h-2 rounded ${scoreColor(item.score)}`} style={{ width: `${item.score}%` }} />
            </div>
          </article>
        ))}
      </section>

      <div className="mt-6 grid gap-6 xl:grid-cols-[280px_1fr]">
        <aside className="space-y-4">
          <section className="panel p-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-950">
              <SlidersHorizontal className="h-4 w-4 text-blue-600" />
              多维筛选索引
            </div>
            <div className="mt-4 space-y-4">
              <Select label="算力底座" value={computeBase} options={computeBases} onChange={setComputeBase} />
              <Select label="架构框架" value={framework} options={frameworks} onChange={setFramework} />
              <Select label="任务类型" value={task} options={['全部', ...taskCategories] as const} onChange={setTask} />
              <Select label="合规性" value={compliance} options={complianceOptions} onChange={setCompliance} />
              <Select label="排序" value={sort} options={sortOptions} onChange={setSort} />
            </div>
          </section>

          <section className="panel p-4">
            <h2 className="flex items-center gap-2 text-sm font-semibold text-slate-950">
              <ShieldCheck className="h-4 w-4 text-blue-600" />
              国产音频芯片墙
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {audioChipWall.map((item) => (
                <span key={item} className="rounded-full bg-blue-50 px-3 py-1 text-xs text-blue-700">
                  {item}
                </span>
              ))}
            </div>
          </section>
        </aside>

        <div className="columns-1 gap-4 lg:columns-2">
          {filtered.map((item) => (
            <SolutionCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Select<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: readonly T[];
  onChange: (value: T) => void;
}) {
  return (
    <label className="block">
      <span className="text-xs font-semibold text-slate-400">{label}</span>
      <select className="input mt-2" value={value} onChange={(event) => onChange(event.target.value as T)}>
        {options.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </label>
  );
}

function SolutionCard({ item }: { item: LocalizationSolution }) {
  return (
    <article className="mb-4 break-inside-avoid rounded-md border border-blue-100 bg-white p-5 shadow-[0_14px_40px_rgba(37,99,235,0.07)]">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="flex flex-wrap gap-2">
            <span className="resource-pill">{item.kind}</span>
            <span className="badge">{item.computeBase}</span>
            <span className="rounded bg-violet-50 px-2 py-1 text-xs font-medium text-violet-700">{item.maturity}</span>
          </div>
          <h2 className="mt-4 text-xl font-semibold text-slate-950">{item.name}</h2>
          <p className="mt-2 text-sm text-slate-500">
            {item.provider} · {item.vendor} · {item.framework}
          </p>
        </div>
        <button className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-blue-100 text-blue-600">
          <Bookmark className="h-4 w-4" />
        </button>
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-600">{item.summary}</p>

      <div className="mt-4 grid grid-cols-3 gap-3">
        {[
          ['自研率', item.selfRelianceScore],
          ['适配深度', item.depthScore],
          ['性价比', item.costPerformance],
        ].map(([label, value]) => (
          <div key={label} className="rounded-md bg-blue-50/70 p-3">
            <p className="text-xs text-slate-500">{label}</p>
            <p className="mt-1 text-lg font-semibold text-blue-700">{value}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-md border border-blue-100 bg-blue-50/40 p-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-950">
          <Radar className="h-4 w-4 text-blue-600" />
          国产化替代性能雷达
        </div>
        <div className="mt-3 grid gap-3">
          {item.radar.map((axis) => (
            <div key={axis.label}>
              <div className="flex justify-between text-xs text-slate-500">
                <span>{axis.label}</span>
                <span>国产 {axis.domestic} / 国际 {axis.international}</span>
              </div>
              <div className="mt-1 h-2 rounded bg-white">
                <div className="h-2 rounded bg-blue-600" style={{ width: `${axis.domestic}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 grid gap-3 lg:grid-cols-2">
        <InfoBlock icon={Gauge} title="TCO 成本分析" lines={[`国产方案 ${item.tco.domestic}`, `国际方案 ${item.tco.international}`, item.tco.saving]} />
        <InfoBlock icon={Map} title="适配生态地图" lines={item.ecosystem} />
        <InfoBlock icon={Wrench} title="工程化参考" lines={item.engineering} />
        <InfoBlock icon={Boxes} title="行业方案包" lines={item.scenarios} />
      </div>

      <div className="mt-4 rounded-md border border-blue-100 bg-white p-3">
        <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-950">
          <ShieldCheck className="h-4 w-4 text-blue-600" />
          安全与合规优势
        </h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">{item.securityAdvantage}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {[...item.compliance, ...item.tags].map((tag) => (
            <span key={tag} className="rounded-full bg-blue-50 px-3 py-1 text-xs text-blue-700">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-5 grid gap-2 sm:grid-cols-2">
        <button className="btn-secondary gap-2">
          <BarChart3 className="h-4 w-4" />
          适配技术看板
        </button>
        <Link to="/demos" className="btn-primary gap-2">
          <FlaskConical className="h-4 w-4" />
          国产算力实验室
        </Link>
        <button className="btn-secondary gap-2">
          <Layers3 className="h-4 w-4" />
          一键性能压测
        </button>
        <button className="btn-secondary gap-2">
          <Download className="h-4 w-4" />
          镜像仓库一键达
        </button>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {item.policies.map((policy) => (
          <span key={policy} className="rounded bg-slate-100 px-2 py-1 text-xs text-slate-600">
            {policy}
          </span>
        ))}
        <Link to="/workshop" className="rounded bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">
          数据集脱敏工坊
        </Link>
      </div>
    </article>
  );
}

function InfoBlock({ icon: Icon, title, lines }: { icon: typeof Cpu; title: string; lines: string[] }) {
  return (
    <div className="rounded-md bg-slate-50 p-3">
      <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-950">
        <Icon className="h-4 w-4 text-blue-600" />
        {title}
      </h3>
      <div className="mt-2 grid gap-1">
        {lines.map((line) => (
          <p key={line} className="text-xs leading-5 text-slate-500">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}
