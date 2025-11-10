import { MapPin, BookOpen, PlayCircle } from 'lucide-react';

const tagsToColor = (tag) => {
  const map = {
    "akhlak": "bg-emerald-50 text-emerald-700 border-emerald-200",
    "fiqih": "bg-sky-50 text-sky-700 border-sky-200",
    "tauhid": "bg-amber-50 text-amber-800 border-amber-200",
    "keluarga": "bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200",
  };
  return map[tag?.toLowerCase()] || "bg-gray-50 text-gray-700 border-gray-200";
};

export default function PreacherGrid({ data }) {
  return (
    <section id="direktori" className="container mx-auto max-w-6xl px-6 py-12">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">Pendakwah Terverifikasi</h2>
          <p className="mt-1 text-sm text-gray-600">Profil ringkas, fokus tema, dan tautan konten terbaru.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((p) => (
          <article key={p.id} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
            <div className="flex items-center gap-4 p-5">
              <img src={p.photo} alt={p.name} className="h-14 w-14 rounded-full object-cover" />
              <div className="min-w-0">
                <h3 className="truncate text-lg font-semibold text-gray-900">{p.name}</h3>
                <div className="mt-1 flex items-center gap-2 text-xs text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span className="truncate">{p.city}</span>
                </div>
              </div>
            </div>

            <div className="px-5 pb-5">
              <div className="flex flex-wrap gap-2">
                {p.topics.slice(0, 4).map((t) => (
                  <span key={t} className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-medium ${tagsToColor(t)}`}>
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-4 grid grid-cols-3 divide-x divide-gray-100 overflow-hidden rounded-lg border border-gray-200">
                <a href={p.links?.videos || '#'} className="flex items-center justify-center gap-2 bg-gray-50 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <PlayCircle className="h-4 w-4" />
                  Video
                </a>
                <a href={p.links?.articles || '#'} className="flex items-center justify-center gap-2 bg-gray-50 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <BookOpen className="h-4 w-4" />
                  Artikel
                </a>
                <a href={p.links?.profile || '#'} className="flex items-center justify-center gap-2 bg-gray-50 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Profil
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
