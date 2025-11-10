import { Book, Globe, Heart } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="bg-emerald-50/60 py-16">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Tentang Penceramah</h2>
          <p className="mt-3 text-lg leading-7 text-gray-600">
            Syaikh Ahmad Al-Nur adalah pengajar, khatib, dan pembina komunitas yang
            telah menyampaikan khutbah dan kajian di berbagai masjid di seluruh dunia.
            Pendekatannya memadukan keilmuan klasik dengan bimbingan praktis sehari-hari.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
              <Book className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Al-Qur’an & Sunnah</h3>
            <p className="mt-2 text-sm text-gray-600">
              Menekankan sumber yang autentik dengan kasih sayang dan hikmah.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
              <Globe className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Dampak Komunitas</h3>
            <p className="mt-2 text-sm text-gray-600">
              Program untuk pemuda, keluarga, dan mualaf di berbagai negara.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
              <Heart className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Akhlak & Ihsan</h3>
            <p className="mt-2 text-sm text-gray-600">
              Menumbuhkan ketulusan, kesabaran, dan keunggulan dalam kehidupan sehari-hari.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
