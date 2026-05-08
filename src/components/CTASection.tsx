export function CTASection() {
  return <section className="rounded-[2rem] bg-aurora p-8 text-white shadow-glow md:p-12">
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-100">Subscribe</p>
      <h2 className="mt-3 text-3xl font-bold md:text-4xl">订阅声音 AI 月度观察</h2>
      <p className="mt-4 text-blue-100">每月聚合任务进展、代表论文、开源项目、Benchmark 变化和可体验 Demo。</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center"><input className="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-blue-100 outline-none" placeholder="you@example.com" /><button className="rounded-full bg-white px-6 py-3 text-sm font-bold text-blue-700">预约订阅</button></div>
    </div>
  </section>;
}
