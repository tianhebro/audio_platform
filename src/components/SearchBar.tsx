import { Search } from 'lucide-react';
type SearchBarProps = { value: string; onChange: (value: string) => void; placeholder?: string; className?: string; };
export function SearchBar({ value, onChange, placeholder = '搜索任务、资源、教程...', className = '' }: SearchBarProps) {
  return <label className={`relative block ${className}`}>
    <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
    <input className="input pl-11" value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} />
  </label>;
}
