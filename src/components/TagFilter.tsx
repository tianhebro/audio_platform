type TagFilterProps<T extends string> = { options: readonly T[]; active: T; onChange: (value: T) => void; };
export function TagFilter<T extends string>({ options, active, onChange }: TagFilterProps<T>) {
  return <div className="flex flex-wrap gap-2">
    {options.map((option) => <button key={option} onClick={() => onChange(option)} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${active === option ? 'bg-blue-600 text-white shadow-glow' : 'border border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:text-blue-700'}`}>{option}</button>)}
  </div>;
}
