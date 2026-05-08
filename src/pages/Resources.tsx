import { useMemo, useState } from 'react';
import { ResourceCard } from '../components/ResourceCard';
import { SearchBar } from '../components/SearchBar';
import { SectionHeader } from '../components/SectionHeader';
import { TagFilter } from '../components/TagFilter';
import { resources, resourceKinds } from '../data/resources';
export function Resources() {
  const [kind, setKind] = useState<(typeof resourceKinds)[number]>('全部');
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => resources.filter((item) => (kind === '全部' || item.kind === kind) && `${item.name}${item.task}${item.summary}${item.tags.join('')}`.toLowerCase().includes(query.toLowerCase())), [kind, query]);
  return <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8"><SectionHeader eyebrow="Resources" title="结构化资源库" description="资源目前由本地 mock data 驱动，后续可替换为 API、搜索后端和用户收藏系统。" /><div className="mt-8 rounded-3xl border border-slate-200 bg-white p-5"><SearchBar value={query} onChange={setQuery} placeholder="搜索数据集、模型、论文、Benchmark、工具..." /><div className="mt-5"><TagFilter options={resourceKinds} active={kind} onChange={setKind} /></div></div><div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{filtered.map((item) => <ResourceCard key={item.name} resource={item} />)}</div></section>;
}
