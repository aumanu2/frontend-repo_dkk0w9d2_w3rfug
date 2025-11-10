import { MapPin, ExternalLink, User } from 'lucide-react';

export default function PreacherGrid({ items, onSelect }) {
  return (
    <section className="bg-white" aria-label="Daftar pendakwah">
      <div className="max-w-6xl mx-auto px-4 py-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6" id="profil">
        {items.map((p) => (
          <article key={p.id} className="group rounded-xl border border-emerald-100 overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={p.photo} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-semibold text-emerald-900">{p.name}</h3>
                  <div className="flex items-center gap-1 text-sm text-emerald-600/80"><MapPin size={14} /> {p.city}</div>
                </div>
                <button
                  onClick={() => onSelect(p)}
                  className="inline-flex items-center gap-1 text-emerald-700 hover:text-emerald-800 text-sm"
                >
                  <User size={14} /> Profil
                </button>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.topics.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">{t}</span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-4 text-sm">
                {p.links?.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-emerald-700 hover:text-emerald-800">
                    <ExternalLink size={14} /> {l.label}
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
