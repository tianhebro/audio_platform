export type ResourceKind = '数据集' | '模型' | '论文' | 'Benchmark' | '工具';
export type Resource = { name: string; kind: ResourceKind; task: string; summary: string; tags: string[]; url: string; };
export const resourceKinds: ('全部' | ResourceKind)[] = ['全部', '数据集', '模型', '论文', 'Benchmark', '工具'];
export const resources: Resource[] = [
  { name: 'LibriSpeech', kind: '数据集', task: 'ASR', summary: '经典英文有声书语音识别数据集，适合 ASR 入门与基线复现。', tags: ['英文', '开源', '识别'], url: '#' },
  { name: 'AISHELL-1', kind: '数据集', task: 'ASR', summary: '中文普通话语音识别常用数据集，教程和 Benchmark 覆盖丰富。', tags: ['中文', 'ASR'], url: '#' },
  { name: 'DNS Challenge', kind: 'Benchmark', task: '音频增强', summary: '微软发起的语音降噪挑战，覆盖真实噪声、主观听感与实时约束。', tags: ['降噪', '评测'], url: '#' },
  { name: 'Whisper', kind: '模型', task: 'ASR', summary: '多语种鲁棒语音识别模型，适合作为离线转写与 Demo 原型基线。', tags: ['多语种', '转写'], url: '#' },
  { name: 'VITS', kind: '模型', task: 'TTS', summary: '端到端语音合成代表项目，方便理解声学模型和声码器融合路线。', tags: ['TTS', '端到端'], url: '#' },
  { name: 'AudioLM 论文脉络', kind: '论文', task: '音频大模型', summary: '从神经音频 codec 到语言建模生成音频的关键思路整理。', tags: ['生成', 'Codec'], url: '#' },
  { name: 'ESPnet', kind: '工具', task: '通用', summary: '覆盖 ASR、TTS、增强等任务的开源语音处理工具箱。', tags: ['工具箱', '训练'], url: '#' },
  { name: 'DCASE Challenge', kind: 'Benchmark', task: '音频分类', summary: '声学场景分类、事件检测和异常声音检测的重要评测平台。', tags: ['SED', '分类'], url: '#' },
  { name: 'MusicCaps', kind: '数据集', task: '音乐生成', summary: '文本描述与音乐片段配对数据，可用于文本到音乐生成评测。', tags: ['音乐', '文本到音频'], url: '#' },
];
