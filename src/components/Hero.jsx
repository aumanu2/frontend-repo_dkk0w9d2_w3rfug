import { Search } from 'lucide-react';

export default function Hero({ search, setSearch }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 via-white to-white pointer-events-none" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid md:grid-cols-2 items-center gap-8">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3 py-1 text-xs text-emerald-700">
              Direktori Da'i Indonesia
            </p>
            <h1 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-emerald-900">
              Temukan Ustadz & Dai sesuai kota, tema, dan metode dakwah
            </h1>
            <p className="mt-3 text-emerald-700/80">
              Jelajahi profil, fokus kajian, dan tautan rujukan dalam satu tempat.
            </p>
            <div className="mt-6 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-emerald-500" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Cari nama, kota, atau tema kajian..."
                className="w-full rounded-xl border border-emerald-200 bg-white/80 px-11 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-100 to-emerald-50" />
          </div>
        </div>
      </div>
    </section>
  );
}
