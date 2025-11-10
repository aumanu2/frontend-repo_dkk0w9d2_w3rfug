import { User, MapPin, BookOpen } from 'lucide-react';

export default function PreacherGrid({ data, onSelect }) {
  if (!data.length) {
    return (
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 text-center text-emerald-700">
        Tidak ada hasil. Coba ubah kata kunci atau filter.
      </div>
    );
  }
  return (
    <section id="direktori" className="mx-auto max-w-6xl px-4 sm:px-6 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((p) => (
          <article key={p.id} className="rounded-xl border border-emerald-100 bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-t-xl bg-emerald-50">
              {p.photo ? (
                <img src={p.photo} alt={p.name} className="h-full w-full object-cover" />
              ) : (
                <div className="h-full w-full grid place-items-center text-emerald-400">
                  <User className="h-10 w-10" />
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="text-emerald-900 font-semibold">{p.name}</h3>
              <p className="mt-1 flex items-center gap-1 text-sm text-emerald-700">
                <MapPin className="h-4 w-4" /> {p.city}
              </p>
              <p className="mt-2 flex items-center gap-2 text-xs text-emerald-700/80">
                <BookOpen className="h-4 w-4" /> {p.topics.slice(0, 3).join(', ')}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-1">{p.method}</span>
                <button
                  onClick={() => onSelect(p)}
                  className="text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 px-3 py-2 rounded-lg"
                >
                  Profil
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
