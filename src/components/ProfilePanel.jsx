import { MapPin, BookCopy, Layers, Calendar, X } from 'lucide-react';

export default function ProfilePanel({ selected, onClose }) {
  if (!selected) return null;

  const p = selected;
  return (
    <section className="fixed inset-0 z-50 bg-emerald-900/30 flex items-end md:items-center justify-center px-4" role="dialog" aria-modal="true">
      <div className="w-full md:max-w-3xl bg-white rounded-t-2xl md:rounded-2xl shadow-xl overflow-hidden">
        <div className="relative">
          <img src={p.photo} alt={p.name} className="w-full h-52 object-cover" />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/90 text-emerald-800 hover:bg-white shadow"
            aria-label="Tutup profil"
          >
            <X size={18} />
          </button>
        </div>
        <div className="p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-xl font-semibold text-emerald-900">{p.name}</h3>
              <div className="flex items-center gap-1 text-emerald-600/80 text-sm"><MapPin size={14} /> {p.city}</div>
            </div>
          </div>

          <div className="mt-4 grid md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <h4 className="font-semibold text-emerald-900">Profil Singkat</h4>
              <p className="mt-1 text-emerald-700/90 text-sm leading-relaxed">
                {p.bio || 'Pendakwah yang aktif menyampaikan kajian seputar akhlak, keluarga, dan penguatan iman dengan pendekatan santun dan penuh hikmah.'}
              </p>

              <h5 className="mt-4 font-semibold text-emerald-900 inline-flex items-center gap-2"><Layers size={16} /> Fokus Dakwah</h5>
              <div className="mt-2 flex flex-wrap gap-2">
                {p.topics.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">{t}</span>
                ))}
              </div>

              <h5 className="mt-4 font-semibold text-emerald-900 inline-flex items-center gap-2"><Calendar size={16} /> Metode</h5>
              <p className="mt-1 text-emerald-700/90 text-sm">{p.method}</p>
            </div>

            <div className="md:border-l md:border-emerald-100 md:pl-4">
              <h5 className="font-semibold text-emerald-900 inline-flex items-center gap-2"><BookCopy size={16} /> Referensi</h5>
              <ul className="mt-2 space-y-2 text-sm list-disc list-inside text-emerald-700/90">
                {(p.references?.length ? p.references : [
                  'Kajian Tafsir Tematik',
                  'Fiqih Keluarga Kontemporer',
                  'Sirah Nabawiyah untuk Pemuda',
                ]).map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
