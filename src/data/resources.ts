export type ResourceKind = '数据集' | '模型' | '论文' | 'Benchmark' | '工具';

export type Resource = {
  name: string;
  kind: ResourceKind;
  task: string;
  summary: string;
  tags: string[];
  updated: string;
  size: string;
  url: string;
};

export const resourceKinds: ('全部' | ResourceKind)[] = ['全部', '数据集', '模型', '论文', 'Benchmark', '工具'];

export const resources: Resource[] = [
  {
    name: 'LibriSpeech',
    kind: '数据集',
    task: '语音识别',
    summary: '经典英文有声书语音识别数据集，适合 ASR 入门、基线复现和声学模型评测。',
    tags: ['英文', '开源', 'ASR'],
    updated: '3 小时内',
    size: '1,000h',
    url: '#',
  },
  {
    name: 'AISHELL-1',
    kind: '数据集',
    task: '语音识别',
    summary: '中文普通话语音识别常用数据集，教程、论文和 Benchmark 覆盖丰富。',
    tags: ['中文', '普通话', 'ASR'],
    updated: '21 小时前',
    size: '178h',
    url: '#',
  },
  {
    name: 'DNS Challenge',
    kind: 'Benchmark',
    task: '音频增强',
    summary: '面向真实噪声、主观听感和实时约束的语音降噪挑战基准。',
    tags: ['降噪', '评测', '实时'],
    updated: '1 天前',
    size: 'Benchmark',
    url: '#',
  },
  {
    name: 'Whisper',
    kind: '模型',
    task: '语音识别',
    summary: '多语种鲁棒语音识别模型，适合作为离线转写、字幕和检索 Demo 的基线。',
    tags: ['多语种', '转写', 'OpenAI'],
    updated: '2 天前',
    size: '39M-1.5B',
    url: '#',
  },
  {
    name: 'VITS',
    kind: '模型',
    task: '语音合成',
    summary: '端到端语音合成代表模型，便于理解声学模型、声码器和条件控制路线。',
    tags: ['TTS', '端到端', '生成'],
    updated: '2 天前',
    size: 'Model',
    url: '#',
  },
  {
    name: 'AudioLM 论文脉络',
    kind: '论文',
    task: '音频大模型',
    summary: '从神经音频 codec 到语言建模生成音频的关键思路整理。',
    tags: ['生成', 'Codec', 'LLM'],
    updated: '4 天前',
    size: 'Paper',
    url: '#',
  },
  {
    name: 'ESPnet',
    kind: '工具',
    task: '通用框架',
    summary: '覆盖 ASR、TTS、增强等任务的开源语音处理工具箱。',
    tags: ['训练', '工具箱', 'PyTorch'],
    updated: '12 天前',
    size: 'Toolkit',
    url: '#',
  },
  {
    name: 'DCASE Challenge',
    kind: 'Benchmark',
    task: '音频分类',
    summary: '声学场景分类、事件检测和异常声音检测的重要评测平台。',
    tags: ['SED', '分类', '场景'],
    updated: '18 天前',
    size: 'Benchmark',
    url: '#',
  },
  {
    name: 'MusicCaps',
    kind: '数据集',
    task: '音乐生成',
    summary: '文本描述与音乐片段配对数据，可用于文本到音乐生成和音频描述评测。',
    tags: ['音乐', '文本到音频', '生成'],
    updated: '1 个月前',
    size: '5.5k',
    url: '#',
  },
];
