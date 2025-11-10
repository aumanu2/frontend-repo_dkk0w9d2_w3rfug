import { PlayCircle, Youtube, Headphones, Clock } from 'lucide-react';

const sermons = [
  {
    title: 'Mercy and Forgiveness in the Qur’an',
    duration: '42:15',
    platform: 'YouTube',
    link: 'https://www.youtube.com/',
  },
  {
    title: 'Finding Tranquility in Prayer',
    duration: '36:02',
    platform: 'Podcast',
    link: 'https://spotify.com',
  },
  {
    title: 'Patience: A Path to Jannah',
    duration: '28:47',
    platform: 'YouTube',
    link: 'https://www.youtube.com/',
  },
];

export default function Sermons() {
  return (
    <section id="sermons" className="bg-white py-16">
      <div className="container mx-auto px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Recent Sermons</h2>
            <p className="mt-2 text-gray-600">Watch and listen to selected lectures and reminders.</p>
          </div>
          <a
            href="#"
            className="hidden rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 sm:inline-block"
          >
            View All
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sermons.map((s, idx) => (
            <a
              key={idx}
              href={s.link}
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <PlayCircle className="h-5 w-5" />
                  </span>
                  <h3 className="text-base font-semibold text-gray-900 group-hover:text-emerald-700">
                    {s.title}
                  </h3>
                </div>
                <span className="inline-flex items-center gap-1 text-sm text-gray-500">
                  <Clock className="h-4 w-4" /> {s.duration}
                </span>
              </div>
              <div className="mt-4 flex items-center gap-3 text-sm text-gray-500">
                {s.platform === 'YouTube' ? (
                  <Youtube className="h-4 w-4" />
                ) : (
                  <Headphones className="h-4 w-4" />
                )}
                <span>{s.platform}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
