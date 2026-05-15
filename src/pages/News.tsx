import { BookOpenText, Clock3, Home, Newspaper } from 'lucide-react';
import { Link } from 'react-router-dom';

type Report = {
  title: string;
  summary: string;
  time: string;
  tags: string[];
  image: string;
};

type HotNews = {
  title: string;
  time: string;
  tags: string[];
};

const reports: Report[] = [
  {
    title: '精准率达 94%，西班牙团队基于 YOLO11 实现自动化近地天体与卫星条纹检测，连续帧之间稳定识别',
    summary: 'StreakMind 可自动识别天文图像中的卫星与小行星轨迹，大幅提升巡天数据处理与近地天体监测效率。',
    time: '1 天前',
    tags: ['AI for Science', '人工智能', '天文学', '机器学习', '深度学习'],
    image: 'from-blue-300 via-indigo-400 to-violet-500',
  },
  {
    title: '在线教程｜单卡即可爆改，面壁智能等开源 MiniCPM-V-4.6，1.3B 端侧模型支持图像理解/视频理解/OCR/多轮多模态对话',
    summary: '为了便于全球开发者快速体验这一轻量级模型，平台已上线端侧高效多模态视觉语言模型，可轻松实现该模型的在线部署。',
    time: '2 天前',
    tags: ['OCR', '人工智能', '图像识别', '深度学习', '视频理解'],
    image: 'from-sky-300 via-blue-400 to-indigo-500',
  },
  {
    title: '百所高校展开全球最大规模多队列蛋白质基因组学研究，基于近 8 万受试者数据解锁致病基因与老药新用',
    summary: '研究系统揭示循环蛋白广泛存在的顺式与反式遗传调控规律，并为疾病机制研究、潜在药物靶点筛选及老药新用提供方向。',
    time: '3 天前',
    tags: ['AI for Science', '人工智能', '深度学习'],
    image: 'from-indigo-700 via-blue-500 to-violet-700',
  },
  {
    title: 'Token 使用量降低 30%，以「阿凡达」为灵感的异构智能体框架 Eywa，高效结合语言模型与领域专用基础模型',
    summary: '研究团队提出用于连接语言智能体与领域专用基础模型的异构智能体框架，在多任务协作中减少上下文开销。',
    time: '4 天前',
    tags: ['Agent', '基础模型', '机器学习'],
    image: 'from-cyan-300 via-blue-500 to-violet-600',
  },
];

const hotNews: HotNews[] = [
  { title: 'SpaceXAI 遭人才大战离职，50 余研究员工程师离职', time: '9 小时前', tags: ['置顶', 'xAI', '人事变动'] },
  { title: 'WhatsApp 在印度推出 Business AI 助力中小企业', time: '1 小时前', tags: ['Meta', '生成式 AI'] },
  { title: 'OpenAI 推出手机远程操控 Codex 功能，利好移动办公用户', time: '7 小时前', tags: ['OpenAI', '代码生成'] },
  { title: '马斯克诉奥特曼案：陪审团将如何裁决', time: '7 小时前', tags: ['OpenAI', 'Sam Altman'] },
  { title: 'Meta 推出 Ray-Ban Display 眼镜实现虚拟书写', time: '7 小时前', tags: ['Meta', '生成式 AI'] },
  { title: '微软开始取消 Claude Code 许可证', time: '9 小时前', tags: ['微软', 'Anthropic'] },
  { title: 'OpenAI Codex 功能现集成至 ChatGPT 移动端', time: '9 小时前', tags: ['OpenAI', '生成式 AI'] },
];

const tagColors = ['text-blue-600', 'text-indigo-600', 'text-violet-600', 'text-sky-600', 'text-cyan-600', 'text-purple-600'];

export function News() {
  return (
    <section className="min-h-[calc(100vh-64px)] bg-[#f8fbff]">
      <div className="border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-violet-50">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-blue-500">
            <Home className="h-4 w-4" />
            <span>AudioSphere</span>
            <span>/</span>
            <BookOpenText className="h-4 w-4" />
            <span className="font-semibold text-blue-800">报道</span>
          </div>
          <p className="mt-5 text-base text-slate-500">来自世界各地的最新声音 AI、人工智能与科研产业报道。</p>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 md:px-6 lg:grid-cols-[1fr_380px] lg:px-8">
        <main className="grid gap-7">
          {reports.map((report, index) => (
            <article key={report.title} className="grid gap-5 md:grid-cols-[1fr_260px] md:items-start">
              <div>
                <h2 className="text-2xl font-bold leading-tight text-slate-950 transition hover:text-blue-700">{report.title}</h2>
                <p className="mt-3 text-base leading-7 text-slate-500">{report.summary}</p>
                <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-slate-500">
                  <span className="inline-flex items-center gap-1">
                    <Clock3 className="h-4 w-4" />
                    {report.time}
                  </span>
                  {report.tags.map((tag, tagIndex) => (
                    <span key={tag} className="rounded border border-blue-100 bg-blue-50/60 px-2 py-0.5 text-xs text-slate-600">
                      <span className={tagColors[tagIndex % tagColors.length]}>◇</span> {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`h-32 overflow-hidden rounded-md bg-gradient-to-br ${report.image} shadow-sm`}>
                <div className="relative h-full w-full opacity-80">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(255,255,255,0.55)_1px,transparent_1px)] bg-[length:16px_16px]" />
                  <div className="absolute bottom-5 left-6 h-12 w-28 rounded border border-white/40 bg-white/10" />
                  <div className="absolute right-7 top-8 h-12 w-12 rounded-full border border-white/50" />
                  {index % 2 === 0 && <div className="absolute right-12 bottom-5 h-10 w-24 rounded-full border border-white/40" />}
                </div>
              </div>
            </article>
          ))}
        </main>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-md border border-blue-100 bg-white p-5 shadow-[0_18px_60px_rgba(37,99,235,0.08)]">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-950">
              <Newspaper className="h-4 w-4 text-blue-600" />
              热门资讯
            </div>
            <div className="mt-4 grid gap-4">
              {hotNews.map((item) => (
                <article key={item.title}>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-2">
                      {item.tags.slice(0, 2).map((tag, index) => (
                        <span key={tag} className="text-xs text-slate-500">
                          <span className={tagColors[index % tagColors.length]}>◇</span> {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs text-slate-400">{item.time}</span>
                  </div>
                  <h3 className="mt-1 text-base font-semibold leading-6 text-slate-950 transition hover:text-blue-700">{item.title}</h3>
                </article>
              ))}
            </div>
            <Link to="/news" className="mt-5 inline-flex rounded-md border border-blue-100 bg-blue-50 px-3 py-2 text-sm font-medium text-blue-700 transition hover:bg-blue-100">
              查看所有资讯
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
