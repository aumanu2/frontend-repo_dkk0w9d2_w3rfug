import { X, ExternalLink, MapPin, BookOpen, User } from 'lucide-react';

export default function ProfilePanel({ selected, onClose }) {
  if (!selected) return null;
  const p = selected;
  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-emerald-900/40" onClick={onClose} />
      <div className="relative w-full sm:max-w-2xl bg-white rounded-t-2xl sm:rounded-2xl shadow-xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 p-2 rounded-full bg-white/90 border border-emerald-100 text-emerald-700 hover:bg-emerald-50"
          aria-label="Tutup"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="grid sm:grid-cols-2">
          <div className="bg-emerald-50">
            <div className="aspect-[4/3] w-full overflow-hidden">
              {p.photo ? (
                <img src={p.photo} alt={p.name} className="h-full w-full object-cover" />
              ) : (
                <div className="h-full w-full grid place-items-center text-emerald-400">
                  <User className="h-12 w-12" />
                </div>
              )}
            </div>
          </div>
          <div className="p-5">
            <h3 className="text-xl font-semibold text-emerald-900">{p.name}</h3>
            <p className="mt-1 flex items-center gap-1 text-sm text-emerald-700">
              <MapPin className="h-4 w-4" /> {p.city}
            </p>
            {p.bio && <p className="mt-3 text-emerald-800/80 leading-relaxed">{p.bio}</p>}
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <BookOpen className="h-4 w-4 mt-0.5 text-emerald-700" />
                <div>
                  <p className="font-medium text-emerald-900">Fokus Kajian</p>
                  <p className="text-emerald-800/80">{p.topics.join(', ')}</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="h-4 w-4 mt-1 rounded-full bg-emerald-600" />
                <div>
                  <p className="font-medium text-emerald-900">Metode</p>
                  <p className="text-emerald-800/80">{p.method}</p>
                </div>
              </div>
            </div>
            {p.links?.length ? (
              <div className="mt-4">
                <p className="text-sm font-medium text-emerald-900">Tautan</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.links.map((l, idx) => (
                    <a key={idx} href={l.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm text-emerald-700 hover:text-emerald-900 underline">
                      <ExternalLink className="h-4 w-4" /> {l.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : null}
            {p.references?.length ? (
              <div className="mt-4">
                <p className="text-sm font-medium text-emerald-900">Rujukan</p>
                <ul className="mt-2 list-disc list-inside text-sm text-emerald-800/80 space-y-1">
                  {p.references.map((r, idx) => (
                    <li key={idx}>{r}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
