import { CatalogListing, type CatalogRecord } from '../components/CatalogListing';
import { datasetResources } from '../data/platform';

const datasetFilters = [
  { title: '热门任务', tags: ['ASR', 'TTS', '声音增强', '音乐生成', '音频分类'] },
  { title: '开源协议', tags: ['Apache-2.0', 'CC BY 4.0', 'CC BY-SA'] },
  { title: '音频采样率', tags: ['16kHz', '44.1kHz', '48kHz'] },
  { title: '语言与声道', tags: ['中文普通话', '中文描述', '多语种', '单通道', '双通道'] },
  { title: '预处理', tags: ['切分', '转写对齐', '噪声混合', '响度归一化', '风格标签', '可预处理'] },
];

const datasetRecords: CatalogRecord[] = datasetResources.map((item) => ({
  id: item.id,
  title: item.name,
  subtitle: item.provider,
  kind: '数据集',
  official: item.official,
  badges: [item.task, item.size, item.license, item.sampleRate, item.language, item.channels],
  meta: [`${item.downloads} 下载`, `${item.favorites} 收藏`, item.updated],
  tags: [...item.preprocessing, ...item.tags],
  action: item.hasPreprocessed ? '跳转预处理' : '查看详情',
  href: `/datasets/${item.id}`,
}));

export function Datasets() {
  return (
    <CatalogListing
      eyebrow="Datasets"
      title="数据集"
      description="独立的数据集入口，按声音任务、开源协议、采样率、语言、声道和预处理能力进行组合筛选。"
      searchPlaceholder="快速搜索数据集"
      filters={datasetFilters}
      records={datasetRecords}
    />
  );
}
