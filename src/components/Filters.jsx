import { Filter } from 'lucide-react';

export default function Filters({ values, onChange, counts }) {
  const set = (k) => (e) => onChange({ ...values, [k]: e.target.value });

  return (
    <section className="border-y border-gray-200 bg-white/60 backdrop-blur">
      <div className="container mx-auto max-w-6xl px-6 py-4">
        <div className="flex flex-col items-start gap-3 md:flex-row md:items-center md:justify-between">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700">
            <Filter className="h-4 w-4" />
            <span>Filter Pendakwah</span>
          </div>
          <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 md:w-auto md:grid-cols-3">
            <select value={values.city} onChange={set('city')} className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200">
              <option value="">Semua Kota {counts?.city ? `(${counts.city})` : ''}</option>
              <option>Jakarta</option>
              <option>Bandung</option>
              <option>Surabaya</option>
              <option>Yogyakarta</option>
              <option>Medan</option>
            </select>
            <select value={values.topic} onChange={set('topic')} className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200">
              <option value="">Semua Tema</option>
              <option>Akhlak</option>
              <option>Fiqih</option>
              <option>Tauhid</option>
              <option>Keluarga</option>
              <option>Tafsir</option>
            </select>
            <select value={values.method} onChange={set('method')} className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200">
              <option value="">Semua Metode</option>
              <option>Offline</option>
              <option>Online</option>
              <option>Hybrid</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}
