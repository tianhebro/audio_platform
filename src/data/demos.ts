export type Demo = { slug: string; title: string; category: string; summary: string; tags: string[]; status: '可体验' | 'Mock'; output: string; };
export const demos: Demo[] = [
  { slug: 'asr-live', title: '在线语音识别 Demo', category: 'ASR', summary: '上传或录制一段语音，模拟获得时间戳、置信度和关键词命中。', tags: ['上传音频', '时间戳', '热词'], status: 'Mock', output: '识别结果：欢迎来到声音 AI 社区，这里可以快速找到教程、资源和趋势。' },
  { slug: 'tts-studio', title: '在线 TTS Demo', category: 'TTS', summary: '输入文本、选择音色与情绪，模拟生成可播放的合成语音。', tags: ['文本输入', '多音色', '情感'], status: 'Mock', output: '已生成 12 秒自然语音，音色：清澈女声，情绪：专业解说。' },
  { slug: 'denoise-lab', title: '在线降噪对比 Demo', category: '音频增强', summary: '上传含噪音频，对比增强前后的波形与听感评分。', tags: ['降噪', '对比', 'PESQ'], status: 'Mock', output: '增强完成：噪声估计 -18dB，语音清晰度评分提升 31%。' },
];
