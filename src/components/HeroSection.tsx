import { Link } from 'react-router-dom';
import { Network, PlayCircle, Search } from 'lucide-react';
export function HeroSection() {
  return <section className="relative overflow-hidden bg-aurora text-white wave-grid">
    <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 md:grid-cols-[1.05fr_.95fr] md:px-6 lg:px-8 lg:py-28">
      <div className="relative z-10">
        <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-blue-100">AudioSphere · 声音 AI Community Demo</span>
        <h1 className="mt-7 max-w-4xl text-5xl font-black tracking-tight md:text-7xl">声音 AI 的统一入口</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100 md:text-xl">教程、资源、Demo、研究与趋势，一站看懂声音 AI。让新手看得懂，让研究者找得到，让从业者跟得上。</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Link className="btn-primary bg-white text-blue-700 hover:bg-blue-50" to="/tasks"><Network className="mr-2 h-4 w-4" />探索任务图谱</Link><Link className="btn-secondary border-white/20 bg-white/10 text-white hover:bg-white hover:text-blue-700" to="/demos"><PlayCircle className="mr-2 h-4 w-4" />体验在线 Demo</Link></div>
      </div>
      <div className="relative z-10 rounded-[2rem] border border-white/15 bg-white/10 p-5 shadow-glow backdrop-blur">
        <div className="rounded-3xl bg-white p-5 text-slate-900">
          <div className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3"><Search className="h-4 w-4 text-blue-600" /><span className="text-sm text-slate-500">搜索 “实时降噪 Benchmark”</span></div>
          <div className="mt-5 grid gap-3">
            {['ASR 转写路径', 'TTS 音色可控', '音频增强评测', 'Audio LLM 趋势'].map((item, index) => <div key={item} className="flex items-center justify-between rounded-2xl border border-slate-100 p-4"><div><p className="font-semibold">{item}</p><p className="text-xs text-slate-500">任务 → 教程 → 资源 → Demo</p></div><span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-blue-700">{index + 1}</span></div>)}
          </div>
          <div className="mt-5 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 p-4 text-white"><p className="text-sm font-semibold">结构化知识图谱</p><p className="mt-1 text-xs text-blue-100">节点连接任务、数据集、模型、论文和趋势观察。</p></div>
        </div>
      </div>
    </div>
  </section>;
}
