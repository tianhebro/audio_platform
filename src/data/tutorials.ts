export type Tutorial = { title: string; stage: '零基础' | '入门' | '进阶' | '实战'; task: string; difficulty: string; minutes: number; tags: string[]; summary: string; };
export const tutorials: Tutorial[] = [
  { title: '从波形到频谱：声音 AI 必备概念', stage: '零基础', task: '通用', difficulty: '简单', minutes: 18, tags: ['采样率', '声谱图'], summary: '用可视化方式理解采样、帧、梅尔频谱和常见音频格式。' },
  { title: '10 分钟跑通 Whisper 离线转写', stage: '入门', task: 'ASR', difficulty: '简单', minutes: 10, tags: ['ASR', 'Demo'], summary: '从上传音频到查看转写结果，理解 WER 和长音频切分。' },
  { title: '中文 TTS Pipeline 拆解', stage: '入门', task: 'TTS', difficulty: '中等', minutes: 24, tags: ['TTS', '文本前端'], summary: '梳理文本规范化、韵律预测、声学模型和声码器的职责。' },
  { title: '实时降噪 Demo 的产品化边界', stage: '实战', task: '音频增强', difficulty: '中等', minutes: 28, tags: ['降噪', '实时'], summary: '比较离线增强与实时流处理，设计可解释的对比体验。' },
  { title: '声纹识别从注册到验证', stage: '进阶', task: '声纹', difficulty: '偏难', minutes: 35, tags: ['Speaker', 'Embedding'], summary: '构建一个最小声纹验证流程，并理解 EER 与阈值选择。' },
  { title: 'AudioSet 到音频分类器', stage: '实战', task: '音频分类', difficulty: '偏难', minutes: 42, tags: ['分类', '数据集'], summary: '围绕多标签分类构建数据、模型、评测和错误分析闭环。' },
];
export const tutorialStages = ['全部', '零基础', '入门', '进阶', '实战'] as const;
export const tutorialTasks = ['全部', '通用', 'ASR', 'TTS', '音频增强', '声纹', '音频分类'] as const;
