import { Calendar, MapPin, Clock, BellRing, Send } from 'lucide-react';
import { useState } from 'react';

const events = [
  { title: 'Kajian Tafsir Pekanan', date: 'Ahad, 24 Nov 2025', time: 'Ba’da Maghrib', location: 'Masjid Al-Ikhlas, Jakarta', maps: 'https://maps.google.com' },
  { title: 'Seminar Ekonomi Islam', date: 'Sabtu, 30 Nov 2025', time: '09:00 - 12:00', location: 'Auditorium UIN', maps: 'https://maps.google.com' },
  { title: 'Tabligh Akbar Akhlak', date: 'Jumat, 06 Des 2025', time: '19:30', location: 'Lapangan Kota, Makassar', maps: 'https://maps.google.com' },
];

export default function Agenda() {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  function subscribe(e) {
    e.preventDefault();
    setMsg('Terdaftar! Pengingat akan dikirim via email.');
    setEmail('');
  }

  return (
    <section id="agenda" className="bg-white py-16">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Agenda & Kegiatan</h2>
          <p className="mt-3 text-gray-600">Kalender kajian, lokasi, dan pendaftaran jamaah.</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="grid gap-4">
              {events.map((ev, i) => (
                <div key={i} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <div className="inline-flex items-center gap-2 text-emerald-700">
                        <Calendar className="h-5 w-5" />
                        <h4 className="font-semibold text-gray-900">{ev.title}</h4>
                      </div>
                      <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-gray-600">
                        <span className="inline-flex items-center gap-1"><Clock className="h-4 w-4" />{ev.date} • {ev.time}</span>
                        <a href={ev.maps} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-emerald-700"><MapPin className="h-4 w-4" />{ev.location}</a>
                      </div>
                    </div>
                    <a href="#" className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700">
                      <Send className="h-4 w-4" /> RSVP
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-emerald-700">
              <BellRing className="h-5 w-5" />
              <h4 className="font-semibold text-gray-900">Pengingat Otomatis</h4>
            </div>
            <p className="mt-2 text-sm text-gray-600">Daftarkan email Anda untuk menerima pengingat kegiatan.</p>
            <form onSubmit={subscribe} className="mt-4 flex gap-2">
              <input value={email} onChange={(e)=>setEmail(e.target.value)} required type="email" placeholder="Email Anda" className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/40" />
              <button className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700">
                <BellRing className="h-4 w-4" /> Daftar
              </button>
            </form>
            {msg && <p className="mt-2 text-sm text-emerald-700">{msg}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
