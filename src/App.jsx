import { useMemo, useState } from 'react';
import HeroMulti from './components/HeroMulti';
import Filters from './components/Filters';
import PreacherGrid from './components/PreacherGrid';
import HowItWorks from './components/HowItWorks';
import Profile from './components/Profile';
import { Menu, X } from 'lucide-react';

export default function App() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({ city: '', topic: '', method: '' });

  // Data contoh multi-pendakwah; di tahap berikutnya bisa dihubungkan ke backend
  const data = [
    {
      id: 'p1',
      name: 'Ustadz Fadil Rahman',
      city: 'Jakarta',
      topics: ['Akhlak', 'Keluarga', 'Fiqih'],
      method: 'Hybrid',
      photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
      links: {
        videos: '#',
        articles: '#',
        profile: '#profile',
      },
    },
    {
      id: 'p2',
      name: 'Ustadzah Hana Luthfi',
      city: 'Bandung',
      topics: ['Akhlak', 'Tauhid'],
      method: 'Offline',
      photo: 'https://images.unsplash.com/photo-1541534401786-2077eed87a72?q=80&w=400&auto=format&fit=crop',
      links: { videos: '#', articles: '#', profile: '#profile' },
    },
    {
      id: 'p3',
      name: 'Ustadz Arif Maulana',
      city: 'Surabaya',
      topics: ['Fiqih', 'Tafsir'],
      method: 'Online',
      photo: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=400&auto=format&fit=crop',
      links: { videos: '#', articles: '#', profile: '#profile' },
    },
    {
      id: 'p4',
      name: 'Ustadzah Zahra Karim',
      city: 'Yogyakarta',
      topics: ['Keluarga', 'Akhlak', 'Tafsir'],
      method: 'Hybrid',
      photo: 'https://images.unsplash.com/photo-1520975922284-7b683db681d9?q=80&w=400&auto=format&fit=crop',
      links: { videos: '#', articles: '#', profile: '#profile' },
    },
    {
      id: 'p5',
      name: 'Ustadz Salman Idris',
      city: 'Medan',
      topics: ['Tauhid', 'Fiqih'],
      method: 'Offline',
      photo: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=400&auto=format&fit=crop',
      links: { videos: '#', articles: '#', profile: '#profile' },
    },
  ];

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return data.filter((p) => {
      const matchSearch = !q ||
        p.name.toLowerCase().includes(q) ||
        p.city.toLowerCase().includes(q) ||
        p.topics.some((t) => t.toLowerCase().includes(q));
      const matchCity = !filters.city || p.city === filters.city;
      const matchTopic = !filters.topic || p.topics.map((t) => t.toLowerCase()).includes(filters.topic.toLowerCase());
      const matchMethod = !filters.method || p.method === filters.method;
      return matchSearch && matchCity && matchTopic && matchMethod;
    });
  }, [data, search, filters]);

  const nav = [
    { href: '#direktori', label: 'Direktori' },
    { href: '#filter', label: 'Filter' },
    { href: '#profile', label: 'Profil' },
    { href: '#cara-kerja', label: 'Cara Kerja' },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <a href="#" className="text-xl font-extrabold tracking-tight">Al-Nur</a>
          <nav className="hidden gap-8 text-sm font-medium text-gray-700 md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-emerald-700">{n.label}</a>
            ))}
          </nav>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="border-t border-gray-200 bg-white px-6 py-3 md:hidden">
            <div className="flex flex-col gap-3 text-sm font-medium text-gray-700">
              {nav.map((n) => (
                <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="hover:text-emerald-700">{n.label}</a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <HeroMulti search={search} setSearch={setSearch} total={data.length} />

        <div id="filter">
          <Filters values={filters} onChange={setFilters} counts={{ city: data.length }} />
        </div>

        <PreacherGrid data={filtered} />

        <Profile />

        <div id="cara-kerja">
          <HowItWorks />
        </div>
      </main>

      <footer className="border-t border-gray-200 bg-white">
        <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-gray-600 md:flex-row">
          <p>© {new Date().getFullYear()} Al-Nur. Seluruh hak cipta dilindungi.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-emerald-700">Privasi</a>
            <a href="#" className="hover:text-emerald-700">Ketentuan</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
