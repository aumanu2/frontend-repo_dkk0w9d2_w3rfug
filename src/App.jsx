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
    name: 'Ustadz Ahmad Fauzan',
    city: 'Jakarta',
    topics: ['Aqidah', 'Fiqih', 'Akhlak'],
    method: 'Majelis Taklim',
    photo: '',
    links: [
      { label: 'YouTube', url: 'https://youtube.com' },
      { label: 'Instagram', url: 'https://instagram.com' },
    ],
    bio: 'Aktif membina kajian rutin dan pembinaan akhlak pemuda di wilayah Jabodetabek.',
  },
  {
    id: 2,
    name: 'Ustadzah Siti Rahma',
    city: 'Bandung',
    topics: ['Tafsir', 'Keluarga'],
    method: 'Kelas Daring',
    photo: '',
    links: [{ label: 'Website', url: 'https://example.com' }],
    bio: 'Fokus pada edukasi keluarga sakinah dan tadabbur ayat-ayat pilihan.',
  },
  {
    id: 3,
    name: 'Ustadz M. Ridwan',
    city: 'Surabaya',
    topics: ['Sirah', 'Pemuda', 'Akhlak'],
    method: 'Kajian Masjid',
    photo: '',
    links: [],
  },
  {
    id: 4,
    name: 'Ustadzah Hana Lestari',
    city: 'Yogyakarta',
    topics: ['Fiqih Wanita', 'Adab'],
    method: 'Seminar',
    photo: '',
    references: ['Buku: Fiqih Wanita Kontemporer', 'Majelis Ilmu Al-Ikhlas'],
  },
  {
    id: 5,
    name: 'Ustadz Farhan Alim',
    city: 'Medan',
    topics: ['Tauhid', 'Ekonomi Syariah'],
    method: 'Podcast',
    photo: '',
    links: [{ label: 'Spotify', url: 'https://spotify.com' }],
  },
];

export default function App() {
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({ city: '', topic: '', method: '' });
  const [selected, setSelected] = useState(null);

  const cities = useMemo(() => Array.from(new Set(DATA.map((d) => d.city))).sort(), []);
  const topics = useMemo(() => Array.from(new Set(DATA.flatMap((d) => d.topics))).sort(), []);
  const methods = useMemo(() => Array.from(new Set(DATA.map((d) => d.method))).sort(), []);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return DATA.filter((d) => {
      const matchText = !q || [d.name, d.city, ...(d.topics || [])].join(' ').toLowerCase().includes(q);
      const matchCity = !filters.city || d.city === filters.city;
      const matchTopic = !filters.topic || (d.topics || []).includes(filters.topic);
      const matchMethod = !filters.method || d.method === filters.method;
      return matchText && matchCity && matchTopic && matchMethod;
    });
  }, [search, filters]);

  return (
    <div className="min-h-screen bg-white text-emerald-900">
      <Navbar />
      <Hero search={search} setSearch={setSearch} />
      <Filters
        filters={filters}
        setFilters={setFilters}
        cities={cities}
        topics={topics}
        methods={methods}
      />
      <PreacherGrid data={filtered} onSelect={setSelected} />
      <Footer />
      <ProfilePanel selected={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
