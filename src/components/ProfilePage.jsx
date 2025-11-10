import { ArrowLeft, MapPin, GraduationCap, Users, BookOpen, Mic, Compass, Share2, ExternalLink, User } from 'lucide-react';

export default function ProfilePage({ data, onBack }) {
  const p = data;
  return (
    <div className="min-h-screen bg-white text-emerald-900">
      <header className="sticky top-0 z-40 border-b border-emerald-100 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 h-16 flex items-center gap-3">
          <button onClick={onBack} className="inline-flex items-center gap-2 rounded-lg border border-emerald-200 px-3 py-2 text-emerald-700 hover:bg-emerald-50">
            <ArrowLeft className="h-4 w-4" />
            <span>Kembali</span>
          </button>
          <h1 className="ml-2 text-lg font-semibold truncate">Profil Pendakwah</h1>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 sm:px-6 py-8">
        {/* Profil Pendakwah */}
        <section className="grid gap-6 md:grid-cols-[280px,1fr] items-start">
          <div className="overflow-hidden rounded-2xl border border-emerald-100 bg-emerald-50">
            <div className="aspect-[4/5] w-full">
              {p.photo ? (
                <img src={p.photo} alt={p.name} className="h-full w-full object-cover" />
              ) : (
                <div className="h-full w-full grid place-items-center text-emerald-400">
                  <User className="h-16 w-16" />
                </div>
              )}
            </div>
          </div>
          <div className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm">
            <h2 className="text-2xl font-bold">{p.name}</h2>
            <p className="mt-1 flex items-center gap-2 text-emerald-700"><MapPin className="h-4 w-4" /> {p.city}</p>
            {p.bio && <p className="mt-3 text-emerald-800/80 leading-relaxed">{p.bio}</p>}
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {p.education?.length ? (
                <div className="flex items-start gap-2">
                  <GraduationCap className="mt-1 h-5 w-5 text-emerald-700" />
                  <div>
                    <p className="font-medium">Latar Pendidikan</p>
                    <ul className="mt-1 list-disc list-inside text-sm text-emerald-800/80 space-y-0.5">
                      {p.education.map((e, i) => <li key={i}>{e}</li>)}
                    </ul>
                  </div>
                </div>
              ) : null}
              {p.organizations?.length ? (
                <div className="flex items-start gap-2">
                  <Users className="mt-1 h-5 w-5 text-emerald-700" />
                  <div>
                    <p className="font-medium">Organisasi</p>
                    <ul className="mt-1 list-disc list-inside text-sm text-emerald-800/80 space-y-0.5">
                      {p.organizations.map((e, i) => <li key={i}>{e}</li>)}
                    </ul>
                  </div>
                </div>
              ) : null}
              {p.sanad?.length ? (
                <div className="flex items-start gap-2 sm:col-span-2">
                  <BookOpen className="mt-1 h-5 w-5 text-emerald-700" />
                  <div>
                    <p className="font-medium">Sanad Keilmuan</p>
                    <ul className="mt-1 list-disc list-inside text-sm text-emerald-800/80 space-y-0.5">
                      {(Array.isArray(p.sanad) ? p.sanad : [p.sanad]).map((s, i) => <li key={i}>{s}</li>)}
                    </ul>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </section>

        {/* Fokus Dakwah */}
        <section className="mt-8 rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2">
            <Compass className="h-5 w-5 text-emerald-700" />
            <h3 className="text-lg font-semibold">Fokus Dakwah</h3>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {(p.focus || p.topics || []).map((t, i) => (
              <span key={i} className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm text-emerald-800">{t}</span>
            ))}
          </div>
        </section>

        {/* Riwayat Pendidikan & Lembaga */}
        {p.education_full?.length ? (
          <section className="mt-8 rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-emerald-700" />
              <h3 className="text-lg font-semibold">Riwayat Pendidikan & Lembaga</h3>
            </div>
            <ul className="mt-3 space-y-2 text-emerald-800/90">
              {p.education_full.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-600" />
                  <div>
                    <p className="font-medium">{item.title}</p>
                    {item.place && <p className="text-sm">{item.place}</p>}
                    {item.years && <p className="text-xs text-emerald-700/80">{item.years}</p>}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {/* Pengalaman Berdakwah */}
        {p.experience?.length ? (
          <section className="mt-8 rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2">
              <Mic className="h-5 w-5 text-emerald-700" />
              <h3 className="text-lg font-semibold">Pengalaman Berdakwah</h3>
            </div>
            <ul className="mt-3 grid gap-3 sm:grid-cols-2">
              {p.experience.map((ex, i) => (
                <li key={i} className="rounded-lg border border-emerald-100 bg-emerald-50/60 p-3 text-sm text-emerald-900">{ex}</li>
              ))}
            </ul>
          </section>
        ) : null}

        {/* Gaya Dakwah atau Pendekatan */}
        {p.style?.length ? (
          <section className="mt-8 rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-emerald-700" />
              <h3 className="text-lg font-semibold">Gaya/Pendekatan Dakwah</h3>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.style.map((s, i) => (
                <span key={i} className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm">{s}</span>
              ))}
            </div>
          </section>
        ) : null}

        {/* Kontak & Media Sosial Resmi */}
        {(p.contacts || p.links)?.length ? (
          <section className="mt-8 rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2">
              <Share2 className="h-5 w-5 text-emerald-700" />
              <h3 className="text-lg font-semibold">Kontak & Media Sosial</h3>
            </div>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {p.contacts?.map((c, i) => (
                <div key={i} className="rounded-lg border border-emerald-100 p-3 text-sm">
                  <p className="font-medium">{c.label}</p>
                  <p className="text-emerald-800/80">{c.value}</p>
                </div>
              ))}
              {p.links?.map((l, i) => (
                <a key={i} href={l.url} target="_blank" rel="noreferrer" className="group rounded-lg border border-emerald-100 p-3 text-sm hover:bg-emerald-50 inline-flex items-center justify-between">
                  <span className="font-medium">{l.label}</span>
                  <ExternalLink className="h-4 w-4 text-emerald-700 group-hover:translate-x-0.5 transition" />
                </a>
              ))}
            </div>
          </section>
        ) : null}
      </main>
    </div>
  );
}
