export const taskCategories = ['ASR', 'TTS', '声音增强', '分离', '音乐生成', '多模态', '声音克隆', '音频分类'] as const;

export type TaskCategory = (typeof taskCategories)[number];

export type DatasetResource = {
  id: string;
  name: string;
  provider: string;
  task: TaskCategory;
  license: string;
  sampleRate: string;
  language: string;
  channels: string;
  preprocessing: string[];
  downloads: string;
  size: string;
  favorites: number;
  updated: string;
  official: boolean;
  hasPreprocessed: boolean;
  audioPreview: string;
  tags: string[];
};

export type ModelResource = {
  id: string;
  name: string;
  provider: string;
  task: TaskCategory;
  license: string;
  platforms: string[];
  architecture: string;
  downloads: string;
  size: string;
  favorites: number;
  updated: string;
  official: boolean;
  runnable: boolean;
  tags: string[];
};

export type RepoResource = {
  id: string;
  name: string;
  provider: string;
  task: TaskCategory;
  license: string;
  platforms: string[];
  origin: '国产化' | '国际化';
  stars: string;
  forks: string;
  downloads: string;
  updated: string;
  official: boolean;
  hasDemo: boolean;
  hasNotebook: boolean;
  url: string;
  tags: string[];
};

export type TutorialItem = {
  id: string;
  title: string;
  author: string;
  difficulty: '入门' | '中级' | '高级';
  task: TaskCategory | '通用';
  format: '文章' | '视频' | 'Notebook' | 'Demo 实操';
  origin: '国产化' | '国际化';
  minutes: number;
  updated: string;
  favorites: number;
  progress: number;
  hasDemo: boolean;
  hasDataset: boolean;
  summary: string;
  tags: string[];
};

export type LocalizationSolution = {
  id: string;
  name: string;
  kind: '方案' | '模型' | '数据集';
  provider: string;
  task: TaskCategory;
  vendor: string;
  version: string;
  updated: string;
  certified: boolean;
  metrics: string[];
  comparison: { domestic: number; international: number; label: string };
  summary: string;
  tags: string[];
};

export type PaperItem = {
  id: string;
  title: string;
  authors: string;
  task: 'ASR' | 'TTS' | '降噪' | '分类' | '声音克隆' | '多模态';
  venue: string;
  date: string;
  summary: string;
  tags: string[];
};

export type NewsItem = {
  id: string;
  title: string;
  source: string;
  date: string;
  summary: string;
  tags: string[];
};

export type WorkshopMethod = {
  id: string;
  name: string;
  description: string;
  parameters: string[];
};

export type UserProfile = {
  name: string;
  role: string;
  avatar: string;
  email: string;
  stats: { label: string; value: string }[];
  recent: string[];
  favorites: string[];
  projects: string[];
  subscriptions: string[];
};

export const resourceStats = [
  { label: '数据集数量', value: '128' },
  { label: '数据集总大小', value: '46.8 TB' },
  { label: '总下载次数', value: '2.1M' },
  { label: '模型数量', value: '86' },
  { label: '代码仓库', value: '73' },
  { label: '论文总量', value: '312' },
];

export const faqQuestions = [
  '如何选择中文 ASR 入门数据集？',
  '降噪预处理会影响声纹识别吗？',
  '国产 TTS 方案有哪些可在线对比？',
  '音频大模型评测应该看哪些指标？',
];

export const datasetResources: DatasetResource[] = [
  {
    id: 'aishell-1',
    name: 'AISHELL-1',
    provider: '北京希尔贝壳科技',
    task: 'ASR',
    license: 'Apache-2.0',
    sampleRate: '16kHz',
    language: '中文普通话',
    channels: '单通道',
    preprocessing: ['切分', '转写对齐'],
    downloads: '486k',
    size: '178h / 15GB',
    favorites: 2380,
    updated: '2026-05-12',
    official: true,
    hasPreprocessed: true,
    audioPreview: '普通话新闻播报片段 8 秒',
    tags: ['中文', '开源协议', '16kHz', '单通道', 'ASR', '可预处理'],
  },
  {
    id: 'dns-challenge',
    name: 'DNS Challenge',
    provider: 'Microsoft Research',
    task: '声音增强',
    license: 'CC BY 4.0',
    sampleRate: '16kHz / 48kHz',
    language: '多语种',
    channels: '单双通道',
    preprocessing: ['噪声混合', '响度归一化'],
    downloads: '312k',
    size: '900h / 82GB',
    favorites: 1764,
    updated: '2026-05-08',
    official: true,
    hasPreprocessed: true,
    audioPreview: '办公室噪声语音片段 10 秒',
    tags: ['降噪', 'Benchmark', '多语种', '48kHz', '可试听'],
  },
  {
    id: 'musiccaps-cn',
    name: 'MusicCaps-CN 扩展索引',
    provider: 'AudioSphere 社区',
    task: '音乐生成',
    license: 'CC BY-SA',
    sampleRate: '44.1kHz',
    language: '中文描述',
    channels: '双通道',
    preprocessing: ['文本翻译', '风格标签'],
    downloads: '58k',
    size: '5.5k clips',
    favorites: 846,
    updated: '2026-04-27',
    official: false,
    hasPreprocessed: false,
    audioPreview: '钢琴与弦乐片段 6 秒',
    tags: ['音乐生成', '中文描述', '双通道', '社区维护'],
  },
];

export const modelResources: ModelResource[] = [
  {
    id: 'paraformer',
    name: 'Paraformer 中文语音识别',
    provider: 'ModelScope',
    task: 'ASR',
    license: 'Apache-2.0',
    platforms: ['Python', 'Docker', 'Web'],
    architecture: 'Transformer',
    downloads: '925k',
    size: '220M',
    favorites: 4218,
    updated: '2026-05-10',
    official: true,
    runnable: true,
    tags: ['国产化', 'ASR', 'Transformer', '可直接使用'],
  },
  {
    id: 'cosyvoice',
    name: 'CosyVoice 多音色 TTS',
    provider: '通义实验室',
    task: 'TTS',
    license: 'Apache-2.0',
    platforms: ['Python', 'Docker'],
    architecture: 'Codec + Transformer',
    downloads: '688k',
    size: '1.1B',
    favorites: 3896,
    updated: '2026-05-09',
    official: true,
    runnable: true,
    tags: ['国产化', 'TTS', '零样本音色', '情感控制'],
  },
  {
    id: 'deepfilternet',
    name: 'DeepFilterNet Realtime',
    provider: 'RustAudio',
    task: '声音增强',
    license: 'MIT',
    platforms: ['Python', 'C++', 'Web'],
    architecture: 'CNN + GRU',
    downloads: '402k',
    size: '8M',
    favorites: 2115,
    updated: '2026-04-29',
    official: false,
    runnable: true,
    tags: ['实时降噪', '端侧', '低功耗'],
  },
];

export const repoResources: RepoResource[] = [
  {
    id: 'funasr',
    name: 'FunASR',
    provider: 'ModelScope',
    task: 'ASR',
    license: 'MIT',
    platforms: ['Python', 'Docker', 'Web'],
    origin: '国产化',
    stars: '12.8k',
    forks: '1.9k',
    downloads: '620k',
    updated: '2026-05-13',
    official: true,
    hasDemo: true,
    hasNotebook: true,
    url: '#',
    tags: ['中文 ASR', '热词', '流式识别', 'Notebook'],
  },
  {
    id: 'demucs',
    name: 'Demucs',
    provider: 'Meta Research',
    task: '分离',
    license: 'MIT',
    platforms: ['Python'],
    origin: '国际化',
    stars: '9.4k',
    forks: '1.1k',
    downloads: '388k',
    updated: '2026-04-18',
    official: true,
    hasDemo: true,
    hasNotebook: false,
    url: '#',
    tags: ['音乐分离', '人声伴奏', 'PyTorch'],
  },
  {
    id: 'audio-demo-starter',
    name: 'Audio Demo Starter',
    provider: 'AudioSphere 社区',
    task: '多模态',
    license: 'Apache-2.0',
    platforms: ['Web', 'Docker'],
    origin: '国产化',
    stars: '2.1k',
    forks: '320',
    downloads: '92k',
    updated: '2026-05-05',
    official: false,
    hasDemo: true,
    hasNotebook: true,
    url: '#',
    tags: ['上传队列', '结果展示', '前后端模板'],
  },
];

export const tutorialItems: TutorialItem[] = [
  {
    id: 'wave-to-mel',
    title: '从波形到 Mel 频谱的声音 AI 基础',
    author: 'AudioSphere 教研组',
    difficulty: '入门',
    task: '通用',
    format: '文章',
    origin: '国产化',
    minutes: 18,
    updated: '2026-05-14',
    favorites: 820,
    progress: 72,
    hasDemo: false,
    hasDataset: true,
    summary: '用可视化方式理解采样率、帧、频谱图和常见音频格式。',
    tags: ['采样率', '声谱图', '入门路线'],
  },
  {
    id: 'asr-notebook',
    title: '用 Paraformer 跑通中文 ASR Notebook',
    author: 'ModelScope 社区',
    difficulty: '中级',
    task: 'ASR',
    format: 'Notebook',
    origin: '国产化',
    minutes: 36,
    updated: '2026-05-11',
    favorites: 1360,
    progress: 35,
    hasDemo: true,
    hasDataset: true,
    summary: '从数据选择、离线转写到 CER/WER 评估，完成一个可复现实验。',
    tags: ['ASR', 'Notebook', '中文数据集'],
  },
  {
    id: 'denoise-product',
    title: '实时降噪 Demo 的产品化边界',
    author: '工程实践小组',
    difficulty: '高级',
    task: '声音增强',
    format: 'Demo 实操',
    origin: '国际化',
    minutes: 42,
    updated: '2026-05-06',
    favorites: 760,
    progress: 0,
    hasDemo: true,
    hasDataset: false,
    summary: '比较离线增强与实时流处理，设计可解释的波形与听感对比体验。',
    tags: ['实时', '降噪', 'PESQ'],
  },
];

export const learningPaths = [
  { title: 'ASR 入门到可部署', steps: ['音频基础', '中文数据集', '离线转写', '流式识别'], progress: 46 },
  { title: 'TTS 与声音克隆安全路线', steps: ['文本前端', '声学模型', '音色控制', '水印合规'], progress: 28 },
  { title: '音频增强工程实践', steps: ['噪声建模', '实时约束', '端侧部署', '听感评估'], progress: 62 },
];

export const localizationSolutions: LocalizationSolution[] = [
  {
    id: 'asr-cn-stack',
    name: '中文会议 ASR 国产化方案',
    kind: '方案',
    provider: 'AudioSphere Lab',
    task: 'ASR',
    vendor: 'ModelScope + 私有化推理',
    version: 'v2.4',
    updated: '2026-05-13',
    certified: true,
    metrics: ['CER 5.8%', 'RTF 0.18', '热词召回 92%'],
    comparison: { domestic: 88, international: 84, label: '中文长音频综合分' },
    summary: '面向会议纪要、字幕和质检场景，强调中文热词、低延迟和私有化部署。',
    tags: ['国产化', '会议转写', '私有部署'],
  },
  {
    id: 'tts-brand-voice',
    name: '品牌音色 TTS 适配包',
    kind: '模型',
    provider: '通义实验室',
    task: 'TTS',
    vendor: 'CosyVoice',
    version: 'v1.8',
    updated: '2026-05-09',
    certified: true,
    metrics: ['MOS 4.35', '音色相似度 91%', '合成延迟 320ms'],
    comparison: { domestic: 86, international: 82, label: '中文自然度偏好' },
    summary: '支持少样本音色适配、情绪控制和企业内部素材授权流程。',
    tags: ['TTS', '音色复刻', '合规'],
  },
  {
    id: 'denoise-edge',
    name: '端侧实时降噪国产芯片适配',
    kind: '方案',
    provider: '声学工程联合组',
    task: '声音增强',
    vendor: '国产 NPU',
    version: 'v0.9',
    updated: '2026-04-30',
    certified: false,
    metrics: ['PESQ +0.42', 'CPU 18%', '端到端 24ms'],
    comparison: { domestic: 79, international: 81, label: '实时听感评分' },
    summary: '聚焦车载、会议硬件和可穿戴场景，提供低功耗模型与部署参数。',
    tags: ['端侧', '降噪', '国产芯片'],
  },
];

export const paperItems: PaperItem[] = [
  {
    id: 'audio-llm-survey',
    title: 'Towards Unified Audio Understanding and Generation',
    authors: 'Chen et al.',
    task: '多模态',
    venue: 'ACL 2026 Survey',
    date: '2026-05-12',
    summary: '梳理音频编码器、指令微调、语音对话和生成式评测的统一路线。',
    tags: ['Audio LLM', '指令微调', '评测'],
  },
  {
    id: 'tts-zero-shot',
    title: 'Robust Zero-shot Voice Cloning for Cross-lingual TTS',
    authors: 'Wang et al.',
    task: '声音克隆',
    venue: 'ICASSP 2026',
    date: '2026-05-07',
    summary: '比较跨语言音色保持、说话人表征和合规水印对生成质量的影响。',
    tags: ['TTS', '声音克隆', '水印'],
  },
  {
    id: 'denoise-low-latency',
    title: 'Low-latency Neural Filtering for Real-time Speech Enhancement',
    authors: 'Liu et al.',
    task: '降噪',
    venue: 'Interspeech 2026',
    date: '2026-04-28',
    summary: '讨论低延迟帧长、神经滤波器和主观听感之间的工程折中。',
    tags: ['降噪', '端侧', '实时'],
  },
  {
    id: 'asr-long-form',
    title: 'Context-aware Long-form Mandarin ASR',
    authors: 'Zhao et al.',
    task: 'ASR',
    venue: 'arXiv',
    date: '2026-04-20',
    summary: '利用篇章上下文和热词记忆改善长会议音频中的中文实体转写。',
    tags: ['ASR', '长音频', '热词'],
  },
];

export const newsItems: NewsItem[] = [
  {
    id: 'astro-audio-ai',
    title: '天文学信号分析引入音频基础模型特征',
    source: 'AI for Science Weekly',
    date: '2026-05-15',
    summary: '研究团队将声学事件检测方法迁移到时序天文信号，提升异常候选筛选效率。',
    tags: ['AI for Science', '天文学', '机器学习'],
  },
  {
    id: 'speech-agent',
    title: '实时语音 Agent 成为会议产品新入口',
    source: '产业观察',
    date: '2026-05-13',
    summary: 'ASR、TTS、降噪和摘要能力正在被整合为实时协作助手。',
    tags: ['人工智能', '深度学习', '语音助手'],
  },
  {
    id: 'domestic-audio',
    title: '国产音频模型生态加速补齐评测和工具链',
    source: '开源社区月报',
    date: '2026-05-09',
    summary: '多家社区发布中文数据集索引、Benchmark 脚本和可部署模型模板。',
    tags: ['国产化', '开源', 'Benchmark'],
  },
];

export const workshopMethods: WorkshopMethod[] = [
  { id: 'resample', name: '重采样', description: '统一采样率，便于 ASR/TTS/增强任务复用。', parameters: ['目标采样率', '声道策略'] },
  { id: 'normalize', name: '归一化', description: '统一响度与峰值，减少训练数据分布偏移。', parameters: ['目标 LUFS', '峰值限制'] },
  { id: 'denoise', name: '降噪', description: '对含噪语音进行增强，输出增强前后对比。', parameters: ['降噪强度', '保真优先级'] },
  { id: 'silence', name: '静音移除', description: '根据阈值裁剪长静音，提升训练与标注效率。', parameters: ['静音阈值', '最短保留时长'] },
  { id: 'augment', name: '数据增强', description: '混入噪声、速度扰动或音量扰动生成训练样本。', parameters: ['增强倍数', '噪声类型'] },
  { id: 'features', name: '特征提取', description: '导出 MFCC、Mel 或 STFT 特征文件。', parameters: ['特征类型', '窗口长度'] },
];

export const userProfile: UserProfile = {
  name: '林声',
  role: '声音 AI 研究者',
  avatar: 'LS',
  email: 'linsheng@example.com',
  stats: [
    { label: '学习进度', value: '54%' },
    { label: '收藏资源', value: '36' },
    { label: '贡献内容', value: '8' },
    { label: '订阅专题', value: '12' },
  ],
  recent: ['AISHELL-1 数据集', '实时降噪 Demo', '中文 ASR Notebook', '国产化会议转写方案'],
  favorites: ['Paraformer 中文语音识别', 'DNS Challenge', '音频增强工程实践'],
  projects: ['中文会议降噪 Demo', 'TTS 音色测评文章', 'Audio LLM 论文清单'],
  subscriptions: ['ASR 任务更新', '国产化方案', '每周论文精选', '行业资讯快报'],
};
