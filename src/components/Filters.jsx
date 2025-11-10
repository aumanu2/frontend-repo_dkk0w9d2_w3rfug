import { ChevronDown } from 'lucide-react';

export default function Filters({ filters, setFilters, cities, topics, methods }) {
  const base = 'w-full md:w-auto flex-1 md:flex-none appearance-none bg-white border border-emerald-200 rounded-lg px-3 py-2 text-sm text-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-300';

  return (
    <section id="direktori" className="bg-emerald-50 border-y border-emerald-100">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative">
            <select
              className={`${base} pr-8`}
              value={filters.city}
              onChange={(e) => setFilters({ ...filters, city: e.target.value })}
            >
              <option value="">Semua Kota</option>
              {cities.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <ChevronDown size={16} className="absolute right-2 top-1/2 -translate-y-1/2 text-emerald-500 pointer-events-none" />
          </div>

          <div className="relative">
            <select
              className={`${base} pr-8`}
              value={filters.topic}
              onChange={(e) => setFilters({ ...filters, topic: e.target.value })}
            >
              <option value="">Semua Tema</option>
              {topics.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
            <ChevronDown size={16} className="absolute right-2 top-1/2 -translate-y-1/2 text-emerald-500 pointer-events-none" />
          </div>

          <div className="relative">
            <select
              className={`${base} pr-8`}
              value={filters.method}
              onChange={(e) => setFilters({ ...filters, method: e.target.value })}
            >
              <option value="">Semua Metode</option>
              {methods.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
            <ChevronDown size={16} className="absolute right-2 top-1/2 -translate-y-1/2 text-emerald-500 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
