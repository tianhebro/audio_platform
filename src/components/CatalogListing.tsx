import { useMemo, useState } from 'react';
import { Bookmark, CalendarDays, Download, MoreHorizontal, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export type FilterSection = {
  title: string;
  tags: string[];
};

export type CatalogRecord = {
  id: string;
  title: string;
  subtitle: string;
  kind: string;
  official?: boolean;
  badges: string[];
  meta: string[];
  tags: string[];
  action?: string;
  href?: string;
};

type CatalogListingProps = {
  eyebrow: string;
  title: string;
  description: string;
  searchPlaceholder: string;
  filters: FilterSection[];
  records: CatalogRecord[];
};

function toggleFilter(active: string[], value: string) {
  return active.includes(value) ? active.filter((item) => item !== value) : [...active, value];
}

export function CatalogListing({ eyebrow, title, description, searchPlaceholder, filters, records }: CatalogListingProps) {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [saved, setSaved] = useState<string[]>([]);

  const filtered = useMemo(
    () =>
      records.filter((record) => {
        const haystack = `${record.title}${record.subtitle}${record.kind}${record.badges.join('')}${record.meta.join('')}${record.tags.join('')}`.toLowerCase();
        const matchesQuery = haystack.includes(query.toLowerCase());
        const matchesTags = activeFilters.every((filter) => haystack.includes(filter.toLowerCase()));
        return matchesQuery && matchesTags;
      }),
    [activeFilters, query, records],
  );

  const toggleSaved = (id: string) => setSaved((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]));

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 md:px-6 lg:px-8">
      <div className="mb-6">
        <span className="badge">{eyebrow}</span>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">{title}</h1>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-500">{description}</p>
      </div>

      <div className="grid gap-6 xl:grid-cols-[300px_1fr]">
        <aside className="space-y-5">
          <label className="relative block">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-blue-500" />
            <input
              className="input pl-10"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={searchPlaceholder}
            />
          </label>

          {filters.map((section) => (
            <section key={section.title} className="panel p-4">
              <h2 className="text-sm font-semibold text-slate-950">{section.title}</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {section.tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setActiveFilters((current) => toggleFilter(current, tag))}
                    className={`rounded-full px-2.5 py-1.5 text-xs font-medium transition ${
                      activeFilters.includes(tag)
                        ? 'bg-blue-600 text-white'
                        : 'border border-blue-100 bg-blue-50/60 text-slate-600 hover:border-blue-200 hover:bg-white hover:text-blue-700'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </section>
          ))}

          {activeFilters.length > 0 && (
            <button onClick={() => setActiveFilters([])} className="btn-secondary w-full">
              清空筛选
            </button>
          )}
        </aside>

        <div className="grid min-w-0 content-start items-start gap-4 lg:grid-cols-2 lg:auto-rows-[104px]">
          {filtered.map((record) => {
            const isSaved = saved.includes(record.id);
            const primaryBadges = [record.kind, ...record.badges].slice(0, 6);
            const secondaryMeta = [record.subtitle, ...record.meta].slice(0, 4);
            const compactTags = record.tags.slice(0, 3);
            return (
              <article
                key={record.id}
                onClick={() => record.href && navigate(record.href)}
                className="h-[104px] overflow-hidden rounded-lg border border-blue-100 bg-white px-4 py-3 shadow-[0_10px_26px_rgba(37,99,235,0.05)] transition hover:border-indigo-500 hover:bg-blue-50/20"
              >
                <div className="flex items-start justify-between gap-3">
                  <h2 className="min-w-0 truncate text-base font-semibold text-slate-950">{record.title}</h2>
                  <div className="flex shrink-0 items-center gap-1">
                    <button
                      onClick={(event) => {
                        event.stopPropagation();
                        toggleSaved(record.id);
                      }}
                      onMouseDown={(event) => event.stopPropagation()}
                      className={`inline-flex h-6 w-6 items-center justify-center rounded-full ${
                        isSaved ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-500'
                      }`}
                      aria-label="收藏"
                    >
                      <Bookmark className="h-3.5 w-3.5" />
                    </button>
                    <button
                      onClick={(event) => event.stopPropagation()}
                      onMouseDown={(event) => event.stopPropagation()}
                      className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-slate-500"
                      aria-label="更多"
                    >
                      <MoreHorizontal className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>

                <div className="mt-2 flex items-center gap-1.5 overflow-hidden whitespace-nowrap">
                  {record.official && <span className="shrink-0 rounded-full bg-red-50 px-2 py-0.5 text-[11px] font-semibold text-red-600">官方</span>}
                  {primaryBadges.map((badge) => (
                    <span key={badge} className="shrink-0 max-w-[150px] truncate rounded-full bg-slate-100 px-2 py-0.5 text-[11px] leading-5 text-slate-600">
                      {badge}
                    </span>
                  ))}
                  {compactTags.map((tag) => (
                    <span key={tag} className="shrink-0 max-w-[130px] truncate rounded-full bg-blue-50 px-2 py-0.5 text-[11px] leading-5 text-blue-700">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-2 flex items-center gap-x-4 overflow-hidden whitespace-nowrap text-xs text-slate-500">
                  {secondaryMeta.map((item, index) => (
                    <span key={item} className="inline-flex shrink-0 max-w-[180px] items-center gap-1 truncate">
                      {index === 0 ? (
                        <span className="h-3.5 w-3.5 rounded-full bg-gradient-to-br from-blue-500 to-violet-500" />
                      ) : (
                        <CalendarDays className="h-3.5 w-3.5 shrink-0 text-blue-400" />
                      )}
                      {item}
                    </span>
                  ))}
                  {record.action && (
                    <span className="inline-flex shrink-0 items-center gap-1 text-blue-600">
                      <Download className="h-3.5 w-3.5" />
                      {record.action}
                    </span>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
