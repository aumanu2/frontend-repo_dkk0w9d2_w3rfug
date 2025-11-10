import { User, Mic, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-white">
      <div className="container mx-auto px-6 pt-16 pb-20 sm:pt-20">
        <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:gap-16">
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
              <Mic className="h-4 w-4" />
              Ulama & Penceramah Islam
            </div>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Syaikh Ahmad Al-Nur
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-7 text-gray-600">
              Menginspirasi hati melalui Al-Qur’an, Sunnah, dan hikmah yang abadi. 
              Berbagi khutbah, kajian, dan bimbingan untuk hidup yang seimbang dan berlandaskan iman.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#sermons"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                <Play className="h-5 w-5" />
                Tonton Ceramah
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-5 py-3 font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                Kontak
              </a>
            </div>
          </div>

          <div className="relative w-full lg:w-1/2">
            <div className="mx-auto aspect-square w-64 sm:w-80 rounded-3xl bg-gradient-to-tr from-emerald-500 via-emerald-400 to-teal-400 p-[3px] shadow-lg">
              <div className="flex h-full w-full items-center justify-center rounded-3xl bg-white/90 backdrop-blur">
                <div className="relative h-56 w-56 sm:h-72 sm:w-72 rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center">
                  <User className="h-24 w-24 text-emerald-600" />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-emerald-200/60 blur-2xl" />
            <div className="pointer-events-none absolute -top-6 -right-6 h-24 w-24 rounded-full bg-teal-200/60 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
