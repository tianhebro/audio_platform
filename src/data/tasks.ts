import { AudioLines, Bot, Ear, Mic, Music2, Radio, ScanSearch, ShieldCheck, Sparkles } from 'lucide-react';
import type { ComponentType } from 'react';

export type Task = {
  slug: string;
  name: string;
  shortName: string;
  summary: string;
  scenarios: string[];
  level: string;
  icon: ComponentType<{ className?: string }>;
  datasets: string[];
  models: string[];
  metrics: string[];
  starterPath: string[];
  demos: string[];
  trend: string;
};

export const tasks: Task[] = [
  { slug: 'asr', name: 'ASR（语音识别）', shortName: 'ASR', summary: '把连续语音转写为结构化文本，是会议纪要、字幕、语音搜索的基础能力。', scenarios: ['会议转写', '视频字幕', '客服质检'], level: '新手友好', icon: Mic, datasets: ['AISHELL-1', 'LibriSpeech', 'Common Voice'], models: ['Whisper', 'Paraformer', 'Wav2Vec 2.0'], metrics: ['WER', 'CER', 'RTF'], starterPath: ['理解采样率与声学特征', '跑通离线转写 Demo', '学习流式识别与热词'], demos: ['在线语音识别 Demo'], trend: '端侧小模型、低延迟流式、多语种鲁棒性仍是热门方向。' },
  { slug: 'tts', name: 'TTS（语音合成）', shortName: 'TTS', summary: '将文本转换为自然语音，重点关注音色、韵律、情感和可控性。', scenarios: ['AI 播客', '有声书', '虚拟人'], level: '入门', icon: AudioLines, datasets: ['LJSpeech', 'VCTK', 'AISHELL-3'], models: ['VITS', 'FastSpeech 2', 'CosyVoice'], metrics: ['MOS', '韵律自然度', '合成延迟'], starterPath: ['理解文本前端与声学模型', '体验单说话人合成', '尝试多音色与情感控制'], demos: ['在线 TTS Demo'], trend: '大模型驱动的零样本音色复刻与可控表达正在快速演进。' },
  { slug: 'voice-cloning', name: '声音克隆', shortName: 'Clone', summary: '用少量参考音频生成相似音色，适用于个性化语音和数字人。', scenarios: ['品牌音色', '数字分身', '本地化配音'], level: '进阶', icon: Sparkles, datasets: ['VCTK', 'LibriTTS', 'Emilia'], models: ['XTTS', 'OpenVoice', 'Seed-VC'], metrics: ['音色相似度', '自然度', '安全水印'], starterPath: ['学习说话人编码', '了解授权与水印', '评估相似度与滥用风险'], demos: ['音色复刻沙盒'], trend: '安全合规、可追溯水印和跨语言迁移是落地关键。' },
  { slug: 'speaker-recognition', name: '声纹 / 说话人识别', shortName: 'Speaker ID', summary: '识别“是谁在说话”，常用于鉴权、分离说话人和内容索引。', scenarios: ['声纹登录', '说话人分离', '内容归档'], level: '进阶', icon: Ear, datasets: ['VoxCeleb', 'CN-Celeb', 'AMI'], models: ['ECAPA-TDNN', 'x-vector', 'ResNetSE'], metrics: ['EER', 'minDCF', 'DER'], starterPath: ['理解 embedding', '跑通注册/验证', '学习 diarization'], demos: ['声纹验证 Demo'], trend: '远场、噪声、短语音和隐私保护评测越来越重要。' },
  { slug: 'audio-enhancement', name: '音频增强 / 降噪', shortName: 'Enhance', summary: '降低噪声、回声和混响，提升语音可懂度与下游任务效果。', scenarios: ['会议降噪', '直播连麦', '车载语音'], level: '新手友好', icon: ShieldCheck, datasets: ['DNS Challenge', 'VoiceBank-DEMAND', 'WHAM!'], models: ['Demucs', 'DeepFilterNet', 'RNNoise'], metrics: ['PESQ', 'STOI', 'SI-SDR'], starterPath: ['认识噪声类型', '体验降噪前后对比', '学习实时处理约束'], demos: ['在线降噪对比 Demo'], trend: '实时低功耗、神经编解码器和端云协同是重点。' },
  { slug: 'source-separation', name: '声源分离', shortName: 'Separation', summary: '从混合音频中分离人声、伴奏、乐器或多个说话人。', scenarios: ['K 歌消音', '会议分离', '音乐制作'], level: '进阶', icon: Radio, datasets: ['MUSDB18', 'WSJ0-2mix', 'LibriMix'], models: ['Conv-TasNet', 'Demucs', 'SepFormer'], metrics: ['SDR', 'SI-SNR', '分离延迟'], starterPath: ['理解混合信号', '体验人声伴奏分离', '学习掩码估计'], demos: ['人声分离 Demo'], trend: '通用音频分离与指令式分离模型开始出现。' },
  { slug: 'audio-classification', name: '音频分类 / 声学事件检测', shortName: 'SED', summary: '识别环境声、事件和场景，支撑城市感知与内容理解。', scenarios: ['异常声音告警', '媒体标签', '工业质检'], level: '入门', icon: ScanSearch, datasets: ['AudioSet', 'ESC-50', 'DCASE'], models: ['PANNs', 'AST', 'BEATs'], metrics: ['mAP', 'F1', 'AUC'], starterPath: ['理解频谱图', '训练分类器', '学习多标签检测'], demos: ['声学事件识别 Demo'], trend: '音频基础模型提升了少样本与跨域泛化能力。' },
  { slug: 'music-generation', name: '音乐生成', shortName: 'Music Gen', summary: '根据文本、旋律或参考片段生成音乐、音效和配乐。', scenarios: ['短视频配乐', '游戏音效', '创作草稿'], level: '探索', icon: Music2, datasets: ['MusicCaps', 'MAESTRO', 'FMA'], models: ['MusicGen', 'AudioLDM', 'Stable Audio'], metrics: ['主观偏好', 'CLAPScore', '版权风险'], starterPath: ['理解文本到音频', '体验提示词生成', '学习版权与风格控制'], demos: ['音乐生成 Prompt Demo'], trend: '可控结构、长时一致性和版权治理是商业化核心。' },
  { slug: 'audio-llm', name: '音频大模型 / 多模态音频', shortName: 'Audio LLM', summary: '让模型听懂、推理并生成音频，是声音 AI 的统一接口方向。', scenarios: ['语音助手', '音频问答', '多模态 Agent'], level: '前沿', icon: Bot, datasets: ['AudioCaps', 'Clotho', 'WavCaps'], models: ['Qwen-Audio', 'SALMONN', 'LTU'], metrics: ['任务准确率', '指令遵循', '幻觉率'], starterPath: ['了解音频编码器', '体验音频问答', '跟踪多模态评测'], demos: ['音频问答 Demo'], trend: '声音理解与生成统一、工具调用和实时对话是前沿热点。' },
];

export const featuredTaskSlugs = ['asr', 'tts', 'audio-enhancement'];
export const getTask = (slug: string) => tasks.find((task) => task.slug === slug);
