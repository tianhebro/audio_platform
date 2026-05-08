export type Insight = { title: string; type: string; summary: string; tags: string[]; date: string; };
export const insights: Insight[] = [
  { title: '声音 AI 从单点工具走向统一入口', type: '月度观察', summary: 'ASR、TTS、增强和音频问答开始被集成到同一个产品工作流，用户更关心任务闭环。', tags: ['平台化', '工作流'], date: '2026-05' },
  { title: '端侧实时音频能力成为应用分水岭', type: '行业趋势', summary: '会议、车载和可穿戴场景推动低延迟、低功耗和隐私保护模型落地。', tags: ['端侧', '实时'], date: '2026-04' },
  { title: '音频大模型评测需要更接近真实任务', type: '专题调研', summary: '单一指标无法覆盖听感、理解、推理和安全，复合任务评测正在形成。', tags: ['评测', 'Audio LLM'], date: '2026-03' },
];
export const directionMap = ['识别转写', '合成生成', '增强修复', '理解推理', '安全治理', '开发者工具'];
