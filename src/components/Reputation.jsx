import { Building2, ThumbsUp, Quote, Shield, Scale, Users } from 'lucide-react';

const partners = [
  'Dewan Masjid Indonesia',
  'Baznas Daerah',
  'Yayasan Kajian Sunnah',
  'Universitas Islam Negeri',
];

const testimonials = [
  {
    name: 'H. Farid',
    role: 'Ketua DKM',
    quote: 'Penyampaian yang menyejukkan, berbasis dalil dan mudah dipahami masyarakat.',
  },
  {
    name: 'Siti Aisyah',
    role: 'Jamaah',
    quote: 'Kajian rutin yang konsisten membantu kami memperbaiki akhlak sehari-hari.',
  },
];

export default function Reputation() {
  return (
    <section id="reputation" className="bg-emerald-50/60 py-16">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Jejak & Reputasi Dakwah</h2>
          <p className="mt-3 text-gray-600">Portofolio kerja sama, sertifikasi, testimoni, dan komitmen integritas.</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-emerald-700"><Building2 className="h-5 w-5"/><h4 className="font-semibold text-gray-900">Lembaga Mitra</h4></div>
            <ul className="mt-3 list-disc list-inside space-y-2 text-sm text-gray-700">
              {partners.map((p, i) => (<li key={i}>{p}</li>))}
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-emerald-700"><Shield className="h-5 w-5"/><h4 className="font-semibold text-gray-900">Sertifikasi & Rekomendasi</h4></div>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li>Diverifikasi oleh Majelis Ulama setempat</li>
              <li>Rekomendasi Yayasan Dakwah Nasional</li>
              <li>Komitmen anti-hoaks & ujaran kebencian</li>
            </ul>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
              <Scale className="h-4 w-4"/> Indeks Integritas: Transparansi program & akuntabilitas dana
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-emerald-700"><Users className="h-5 w-5"/><h4 className="font-semibold text-gray-900">Testimoni</h4></div>
            <div className="mt-3 space-y-4">
              {testimonials.map((t, i) => (
                <figure key={i} className="rounded-xl bg-emerald-50 p-4">
                  <Quote className="h-5 w-5 text-emerald-600" />
                  <blockquote className="mt-2 text-sm text-gray-700">“{t.quote}”</blockquote>
                  <figcaption className="mt-2 text-xs text-gray-500">— {t.name}, {t.role}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-xl bg-white p-5 text-sm text-emerald-900 ring-1 ring-emerald-100">
          Reputasi di dunia dakwah sering dipengaruhi persepsi emosional. Kami berupaya menampilkan data dan portofolio nyata untuk objektivitas penilaian.
        </div>
      </div>
    </section>
  );
}
