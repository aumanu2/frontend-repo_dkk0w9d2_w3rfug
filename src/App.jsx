import { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Filters from './components/Filters';
import PreacherGrid from './components/PreacherGrid';
import ProfilePanel from './components/ProfilePanel';
import Footer from './components/Footer';

const DATA = [
  {
    id: 1,
    name: 'Ustadz Ahmad Fauzi',
    city: 'Jakarta',
    topics: ['Akhlak', 'Keluarga', 'Pemuda'],
    method: 'Tatap muka & Daring',
    photo:
      'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1200&auto=format&fit=crop',
    links: [
      { label: 'Video Kajian', href: 'https://youtube.com' },
      { label: 'Artikel', href: 'https://medium.com' },
    ],
    bio: 'Aktif mengisi kajian tematik di masjid-masjid wilayah Jabodetabek dengan pendekatan sejuk dan menguatkan adab.'
  },
  {
    id: 2,
    name: 'Ustadzah Siti Rahma',
    city: 'Bandung',
    topics: ['Tafsir', 'Akhwat', 'Keluarga'],
    method: 'Tatap muka',
    photo:
      'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop',
    links: [
      { label: 'Video Kajian', href: 'https://youtube.com' },
    ],
  },
  {
    id: 3,
    name: 'Ustadz Ridwan N.',
    city: 'Yogyakarta',
    topics: ['Sirah', 'Akidah'],
    method: 'Daring',
    photo:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=1200&auto=format&fit=crop',
    links: [
      { label: 'Artikel', href: 'https://medium.com' },
    ],
  },
  {
    id: 4,
    name: 'Ustadzah Hana L.',
    city: 'Surabaya',
    topics: ['Fiqih', 'Keluarga'],
    method: 'Tatap muka & Daring',
    photo:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop',
    links: [
      { label: 'Video Kajian', href: 'https://youtube.com' },
    ],
  },
  {
    id: 5,
    name: 'Ustadz Farhan Pratama',
    city: 'Makassar',
    topics: ['Akhlak', 'Muamalah'],
    method: 'Tatap muka',
    photo:
      'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1200&auto=format&fit=crop',
    links: [
      { label: 'Artikel', href: 'https://medium.com' },
    ],
  },
];

export default function App() {
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({ city: '', topic: '', method: '' });
  const [selected, setSelected] = useState(null);

  const cities = useMemo(() => Array.from(new Set(DATA.map((d) => d.city))), []);
  const topics = useMemo(() => Array.from(new Set(DATA.flatMap((d) => d.topics))), []);
  const methods = useMemo(() => Array.from(new Set(DATA.map((d) => d.method))), []);

  const filtered = useMemo(() => {
    return DATA.filter((d) => {
      const text = (d.name + ' ' + d.city + ' ' + d.topics.join(' ')).toLowerCase();
      const s = search.trim().toLowerCase();
      const okSearch = !s || text.includes(s);
      const okCity = !filters.city || d.city === filters.city;
      const okTopic = !filters.topic || d.topics.includes(filters.topic);
      const okMethod = !filters.method || d.method === filters.method;
      return okSearch && okCity && okTopic && okMethod;
    });
  }, [search, filters]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <Hero search={search} setSearch={setSearch} />
      <Filters filters={filters} setFilters={setFilters} cities={cities} topics={topics} methods={methods} />
      <PreacherGrid items={filtered} onSelect={setSelected} />
      <Footer />
      <ProfilePanel selected={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
