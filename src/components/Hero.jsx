import { Search, MapPin, BookOpen } from 'lucide-react';

export default function Hero({ search, setSearch }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 via-white to-white pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 pt-12 pb-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 text-emerald-700 px-3 py-1 text-xs border border-emerald-100">
              <MapPin size={14} /> Direktori Ustadz & Ustadzah Nusantara
            </div>
            <h1 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight text-emerald-900">
              Temukan Pendakwah Islami yang Tepat untuk Acara Anda
            </h1>
            <p className="mt-4 text-emerald-700/80">
              Jelajahi profil para pendakwah Indonesia berdasarkan kota, tema kajian, dan metode dakwah.
            </p>

            <div className="mt-6 flex items-center gap-3 bg-white shadow-sm border border-emerald-100 rounded-xl p-2">
              <Search className="text-emerald-500 ml-2" size={18} />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Cari nama pendakwah, kota, atau tema…"
                className="flex-1 bg-transparent outline-none py-2 px-1 text-emerald-900 placeholder-emerald-400"
              />
            </div>

            <div className="mt-4 flex items-center gap-4 text-sm text-emerald-600/80">
              <span className="inline-flex items-center gap-1"><BookOpen size={16} /> Kajian rutin & tematik</span>
              <span>•</span>
              <span>Metode tatap muka & daring</span>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1200&auto=format&fit=crop"
              alt="Ilustrasi masjid Indonesia"
              className="w-full rounded-2xl shadow-md border border-emerald-100"
              loading="eager"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-emerald-600/10 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
