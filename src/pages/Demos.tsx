import { DemoCard } from '../components/DemoCard';
import { SectionHeader } from '../components/SectionHeader';
import { demos } from '../data/demos';
export function Demos() { return <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8"><SectionHeader eyebrow="Demos" title="声音 AI 在线实验室" description="通过上传、文本输入、音频控件、结果区域和模拟推理按钮，展示未来接入真实模型服务后的体验。" /><div className="mt-8 grid gap-5 lg:grid-cols-3">{demos.map((demo) => <DemoCard key={demo.slug} demo={demo} />)}</div></section>; }
