import { Users, Search } from 'lucide-react';

export default function HeroMulti({ search, setSearch, total }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-white">
      <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-emerald-800">
            <Users className="h-4 w-4" />
            <span className="text-xs font-semibold tracking-wide">Direktori Pendakwah</span>
          </div>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            Jelajahi dan dukung para pendakwah terpercaya
          </h1>
          <p className="mt-3 max-w-prose text-base leading-relaxed text-gray-600 md:text-lg">
            Temukan ustadz/ustadzah berdasarkan kota, tema kajian, dan metode dakwah. Bangun koneksi,
            ikuti kegiatan, dan kurasi konten yang bermanfaat.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <div className="relative w-full max-w-xl">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Cari nama pendakwah, tema, atau kota..."
                className="w-full rounded-xl border border-gray-300 bg-white px-10 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
              />
            </div>
          </div>

          <p className="mt-4 text-sm text-gray-500">Saat ini terdaftar {total} pendakwah.</p>
        </div>

        <div className="relative mx-auto aspect-[5/3] w-full max-w-lg overflow-hidden rounded-2xl border border-emerald-100 bg-emerald-50/50 shadow-sm">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(16,185,129,0.15),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(16,185,129,0.15),transparent_50%)]" />
          <div className="relative flex h-full items-center justify-center">
            <Users className="h-20 w-20 text-emerald-500" />
          </div>
        </div>
      </div>
    </section>
  );
}
