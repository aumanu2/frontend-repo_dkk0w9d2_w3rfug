import { User, MapPin, BookOpen, GraduationCap, ShieldCheck, Target, Share2, Linkedin, Twitter, Instagram } from 'lucide-react';

export default function Profile() {
  return (
    <section id="profile" className="bg-white py-16">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Profil Pendakwah</h2>
          <p className="mt-3 text-gray-600">
            Gambaran menyeluruh tentang biodata, fokus dakwah, riwayat pendidikan, pengalaman, dan gaya pendekatan.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {/* Foto & Biodata */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mx-auto flex w-full max-w-xs flex-col items-center text-center">
              <div className="relative mb-4 aspect-square w-40 overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-100">
                <div className="flex h-full w-full items-center justify-center">
                  <User className="h-16 w-16 text-emerald-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Syaikh Ahmad Al-Nur</h3>
              <div className="mt-1 inline-flex items-center gap-2 text-sm text-gray-600">
                <MapPin className="h-4 w-4" />
                <span>Makassar, Indonesia</span>
              </div>
              <div className="mt-4 space-y-2 text-left text-sm text-gray-700">
                <p><span className="font-medium">Organisasi:</span> Yayasan Al-Nur untuk Pendidikan & Dakwah</p>
                <p><span className="font-medium">Sanad Keilmuan:</span> Mengaji kitab turats dengan beberapa masyayikh di Timur Tengah.</p>
              </div>
              <div className="mt-5 flex items-center gap-3">
                <a href="#" aria-label="Instagram" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-100">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="#" aria-label="Twitter" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-100">
                  <Twitter className="h-4 w-4" />
                </a>
                <a href="#" aria-label="LinkedIn" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-100">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="#" aria-label="Website" className="inline-flex h-9 items-center gap-2 rounded-full bg-emerald-600 px-3 text-sm font-medium text-white hover:bg-emerald-700">
                  <Share2 className="h-4 w-4" /> Situs Resmi
                </a>
              </div>
            </div>
          </div>

          {/* Fokus & Gaya */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-emerald-700">
              <Target className="h-5 w-5" />
              <h4 className="text-lg font-semibold text-gray-900">Fokus Dakwah</h4>
            </div>
            <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-gray-700">
              <li>Keluarga & pendidikan karakter</li>
              <li>Anak muda & literasi digital</li>
              <li>Fiqih muamalah & ekonomi Islam</li>
              <li>Tafsir tematik & akhlak</li>
            </ul>

            <div className="mt-6 flex items-center gap-2 text-emerald-700">
              <BookOpen className="h-5 w-5" />
              <h4 className="text-lg font-semibold text-gray-900">Gaya Pendekatan</h4>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
              <span className="rounded-lg bg-emerald-50 px-3 py-2 text-emerald-800">Kontekstual</span>
              <span className="rounded-lg bg-emerald-50 px-3 py-2 text-emerald-800">Moderat</span>
              <span className="rounded-lg bg-emerald-50 px-3 py-2 text-emerald-800">Tematik</span>
              <span className="rounded-lg bg-emerald-50 px-3 py-2 text-emerald-800">Berbasis dalil</span>
            </div>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
              <ShieldCheck className="h-4 w-4" /> Validasi keilmuan lintas lembaga
            </div>
          </div>

          {/* Riwayat & Pengalaman */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-emerald-700">
              <GraduationCap className="h-5 w-5" />
              <h4 className="text-lg font-semibold text-gray-900">Riwayat Pendidikan & Lembaga</h4>
            </div>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li>Pesantren Darul Ilmi (Nonformal)</li>
              <li>S1 Syariah – Universitas Islam Negeri</li>
              <li>Studi Hadits – Cairo (Program singkat)</li>
            </ul>

            <div className="mt-6 flex items-center gap-2 text-emerald-700">
              <User className="h-5 w-5" />
              <h4 className="text-lg font-semibold text-gray-900">Pengalaman Berdakwah</h4>
            </div>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li>Ceramah umum & tabligh akbar</li>
              <li>Kajian rutin pekanan (offline & online)</li>
              <li>Konten dakwah di YouTube, Instagram, Podcast</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 rounded-xl bg-emerald-50 p-5 text-sm text-emerald-900">
          Banyak orang mengira profil cukup dengan biodata. Situs ini menonjolkan konsistensi tema dan gaya dakwah sebagai keunggulan kompetitif.
        </div>
      </div>
    </section>
  );
}
