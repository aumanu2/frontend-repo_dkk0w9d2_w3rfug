import { UserPlus, Calendar, Share2 } from 'lucide-react';

export default function HowItWorks() {
  const items = [
    {
      icon: UserPlus,
      title: 'Daftarkan Pendakwah',
      desc: 'Tim kami akan melakukan verifikasi dasar untuk menjaga kualitas dan kredibilitas.',
    },
    {
      icon: Calendar,
      title: 'Kelola Agenda',
      desc: 'Publikasikan jadwal kajian, lokasi, dan siapkan pendaftaran peserta dengan mudah.',
    },
    {
      icon: Share2,
      title: 'Sebarkan Manfaat',
      desc: 'Bagikan tautan video, artikel, dan materi dakwah ke audiens yang lebih luas.',
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-emerald-50/40">
      <div className="container mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">Cara Kerja</h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-gray-600">Platform ini dirancang untuk menampung banyak pendakwah sekaligus, memudahkan kurasi konten dan pengelolaan kegiatan.</p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <it.icon className="h-6 w-6 text-emerald-600" />
              <h3 className="mt-3 text-lg font-semibold text-gray-900">{it.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-gray-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
