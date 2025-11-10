import { Book, Globe, Heart } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="bg-emerald-50/60 py-16">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">About the Preacher</h2>
          <p className="mt-3 text-lg leading-7 text-gray-600">
            Sheikh Ahmad Al-Nur is a teacher, khateeb, and community mentor who has
            delivered sermons and classes across masajid worldwide. His approach
            blends classical scholarship with practical, everyday guidance.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
              <Book className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Qur’an & Sunnah</h3>
            <p className="mt-2 text-sm text-gray-600">
              Emphasis on authentic sources with compassion and wisdom.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
              <Globe className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Community Impact</h3>
            <p className="mt-2 text-sm text-gray-600">
              Programs for youth, families, and converts around the globe.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
              <Heart className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Character & Ihsan</h3>
            <p className="mt-2 text-sm text-gray-600">
              Cultivating sincerity, patience, and excellence in daily life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
