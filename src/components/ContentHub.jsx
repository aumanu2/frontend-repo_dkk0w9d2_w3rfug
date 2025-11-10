import { Youtube, FileText, Mic, BookMarked, CheckCircle2, ExternalLink } from 'lucide-react';

const resources = {
  videos: [
    { title: 'Tafsir Surat Al-Mulk (Bag. 1)', platform: 'YouTube', url: 'https://youtube.com' },
    { title: 'Fiqih Muamalah Ringkas', platform: 'YouTube', url: 'https://youtube.com' },
  ],
  articles: [
    { title: 'Adab Menuntut Ilmu', url: '#' },
    { title: 'Ekonomi Islam: Prinsip Dasar', url: '#' },
  ],
  podcasts: [
    { title: 'Kajian Rutin: Akhlak', url: 'https://spotify.com' },
    { title: 'Ngaji Tematik: Keluarga', url: 'https://spotify.com' },
  ],
  papers: [
    { title: 'Zakat Produktif dan Pemberdayaan', url: '#' },
  ],
};

export default function ContentHub() {
  return (
    <section id="content" className="bg-emerald-50/60 py-16">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Konten Dakwah</h2>
          <p className="mt-3 text-gray-600">Video, artikel, podcast, dan karya ilmiah terkurasi dengan validasi keilmuan.</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-emerald-700"><Youtube className="h-5 w-5"/><h4 className="font-semibold text-gray-900">Video</h4></div>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              {resources.videos.map((v, i) => (
                <li key={i} className="flex items-start justify-between gap-3">
                  <a href={v.url} target="_blank" rel="noreferrer" className="hover:text-emerald-700">{v.title}</a>
                  <ExternalLink className="h-4 w-4 text-gray-400" />
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-emerald-700"><FileText className="h-5 w-5"/><h4 className="font-semibold text-gray-900">Artikel & E-book</h4></div>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              {resources.articles.map((a, i) => (
                <li key={i} className="flex items-start justify-between gap-3">
                  <a href={a.url} className="hover:text-emerald-700">{a.title}</a>
                  <ExternalLink className="h-4 w-4 text-gray-400" />
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-emerald-700"><Mic className="h-5 w-5"/><h4 className="font-semibold text-gray-900">Podcast</h4></div>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              {resources.podcasts.map((p, i) => (
                <li key={i} className="flex items-start justify-between gap-3">
                  <a href={p.url} target="_blank" rel="noreferrer" className="hover:text-emerald-700">{p.title}</a>
                  <ExternalLink className="h-4 w-4 text-gray-400" />
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-emerald-700"><BookMarked className="h-5 w-5"/><h4 className="font-semibold text-gray-900">Karya Ilmiah</h4></div>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              {resources.papers.map((p, i) => (
                <li key={i} className="flex items-start justify-between gap-3">
                  <a href={p.url} className="hover:text-emerald-700">{p.title}</a>
                  <ExternalLink className="h-4 w-4 text-gray-400" />
                </li>
              ))}
            </ul>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
              <CheckCircle2 className="h-4 w-4"/> Diverifikasi oleh lembaga/ulama senior
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
