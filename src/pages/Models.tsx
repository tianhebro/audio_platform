import { CatalogListing, type CatalogRecord } from '../components/CatalogListing';
import { modelResources } from '../data/platform';

const modelFilters = [
  { title: '热门任务', tags: ['ASR', 'TTS', '声音增强', '分离', '多模态', '声音克隆'] },
  { title: '部署平台', tags: ['Python', 'Docker', 'Web', 'C++'] },
  { title: '模型架构', tags: ['Transformer', 'Codec', 'CNN', 'GRU'] },
  { title: '开源协议', tags: ['Apache-2.0', 'MIT'] },
  { title: '能力标签', tags: ['国产化', '可直接使用', '实时降噪', '端侧', '零样本音色', '情感控制'] },
];

const modelRecords: CatalogRecord[] = modelResources.map((item) => ({
  id: item.id,
  title: item.name,
  subtitle: item.provider,
  kind: '模型',
  official: item.official,
  badges: [item.task, item.size, item.architecture, item.license, ...item.platforms],
  meta: [`${item.downloads} 下载`, `${item.favorites} 收藏`, item.updated],
  tags: item.tags,
  action: item.runnable ? '直接使用' : '查看详情',
  href: `/models/${item.id}`,
}));

export function Models() {
  return (
    <CatalogListing
      eyebrow="Models"
      title="模型"
      description="独立的模型入口，按任务、部署平台、模型架构、开源协议和可运行状态筛选。"
      searchPlaceholder="快速搜索模型"
      filters={modelFilters}
      records={modelRecords}
    />
  );
}
