import { CatalogListing, type CatalogRecord } from '../components/CatalogListing';
import { repoResources } from '../data/platform';

const repositoryFilters = [
  { title: '任务分类', tags: ['ASR', 'TTS', '声音增强', '分离', '音乐生成', '多模态'] },
  { title: '开源协议', tags: ['MIT', 'Apache-2.0', 'GPL'] },
  { title: '平台兼容性', tags: ['Python', 'C++', 'Docker', 'Web'] },
  { title: '国产化 / 国际化', tags: ['国产化', '国际化'] },
  { title: '可运行内容', tags: ['示例 Demo', 'Notebook'] },
];

const repositoryRecords: CatalogRecord[] = repoResources.map((item) => ({
  id: item.id,
  title: item.name,
  subtitle: item.provider,
  kind: '开源仓库',
  official: item.official,
  badges: [item.task, item.license, item.origin, ...item.platforms],
  meta: [`${item.stars} stars`, `${item.forks} forks`, `${item.downloads} 下载`, item.updated],
  tags: [...item.tags, item.hasDemo ? '示例 Demo' : '', item.hasNotebook ? 'Notebook' : ''].filter(Boolean),
  action: '快速克隆 / 下载',
  href: `/repositories/${item.id}`,
}));

export function Repositories() {
  return (
    <CatalogListing
      eyebrow="Repositories"
      title="开源仓库"
      description="独立的开源仓库入口，按任务、协议、平台兼容性、国产化标识和可运行内容筛选。"
      searchPlaceholder="快速搜索开源仓库"
      filters={repositoryFilters}
      records={repositoryRecords}
    />
  );
}
