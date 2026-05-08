import { useState } from 'react';
import { Play, Upload } from 'lucide-react';
import type { Demo } from '../data/demos';
export function DemoCard({ demo }: { demo: Demo }) {
  const [result, setResult] = useState('等待输入后运行模拟推理...');
  const [text, setText] = useState('声音 AI 的统一入口，帮助你从任务找到教程、资源和趋势。');
  const runDemo = () => setResult(demo.output);
  return <article className="card-hover rounded-3xl border border-slate-200 bg-white p-6">
    <div className="flex items-center justify-between"><span className="badge">{demo.category}</span><span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">{demo.status}</span></div>
    <h3 className="mt-4 text-xl font-bold text-slate-950">{demo.title}</h3>
    <p className="mt-3 text-sm leading-6 text-slate-600">{demo.summary}</p>
    <div className="mt-5 space-y-3">
      {demo.category === 'TTS' ? <textarea className="input min-h-24" value={text} onChange={(event) => setText(event.target.value)} /> : <button className="flex w-full items-center justify-center gap-2 rounded-2xl border border-dashed border-blue-200 bg-blue-50 px-4 py-6 text-sm font-semibold text-blue-700"><Upload className="h-4 w-4" /> 上传音频文件（占位）</button>}
      <div className="rounded-2xl bg-slate-50 p-4">
        <div className="mb-3 flex h-12 items-center gap-1">{Array.from({ length: 28 }).map((_, index) => <span key={index} className="w-1 rounded-full bg-gradient-to-t from-blue-500 to-violet-500" style={{ height: `${12 + ((index * 7) % 34)}px` }} />)}</div>
        <audio controls className="w-full" />
      </div>
      <button onClick={runDemo} className="btn-primary w-full"><Play className="mr-2 h-4 w-4" />运行模拟 Demo</button>
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-700">{result}</div>
    </div>
    <div className="mt-5 flex flex-wrap gap-2">{demo.tags.map((tag) => <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">{tag}</span>)}</div>
  </article>;
}
