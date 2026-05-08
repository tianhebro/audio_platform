type SectionHeaderProps = { eyebrow?: string; title: string; description?: string; align?: 'left' | 'center'; };
export function SectionHeader({ eyebrow, title, description, align = 'left' }: SectionHeaderProps) {
  return <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
    {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">{eyebrow}</p>}
    <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">{title}</h2>
    {description && <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>}
  </div>;
}
