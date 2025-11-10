import { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Filters from './components/Filters';
import PreacherGrid from './components/PreacherGrid';
import ProfilePanel from './components/ProfilePanel';
import Footer from './components/Footer';
import ProfilePage from './components/ProfilePage';

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
    education: ['S1 Syariah - UIN Jakarta', 'Pengajian Kitab Kuning - Pesantren XYZ'],
    organizations: ['LAZIS X', 'Majelis Taklim Al-Hikmah'],
    sanad: ['Berguru kepada KH. A, Ust. B'],
    education_full: [
      { title: 'S1 Syariah', place: 'UIN Jakarta', years: '2012-2016' },
      { title: 'Pengajian Kitab Kuning', place: 'Pesantren XYZ', years: '2010-2012' },
    ],
    experience: ['Ceramah Jumat di Masjid Agung', 'Kajian rutin bulanan', 'Konten dakwah di YouTube'],
    style: ['Kontekstual', 'Moderat'],
    contacts: [{ label: 'Email', value: 'ahmad@example.com' }, { label: 'WhatsApp', value: '+62 812-0000-0000' }],
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
    education: ['S2 Ilmu Tafsir - UIN Bandung'],
    organizations: ['Komunitas Muslimah Aisyah'],
    experience: ['Kelas daring mingguan', 'Siaran IG Live kajian keluarga'],
    style: ['Tematik', 'Moderat'],
  },
  {
    id: 3,
    name: 'Ustadz M. Ridwan',
    city: 'Surabaya',
    topics: ['Sirah', 'Pemuda', 'Akhlak'],
    method: 'Kajian Masjid',
    photo: '',
    links: [],
    experience: ['Pembinaan pemuda masjid', 'Kajian sirah bulanan'],
    style: ['Motivatif'],
  },
  {
    id: 4,
    name: 'Ustadzah Hana Lestari',
    city: 'Yogyakarta',
    topics: ['Fiqih Wanita', 'Adab'],
    method: 'Seminar',
    photo: '',
    references: ['Buku: Fiqih Wanita Kontemporer', 'Majelis Ilmu Al-Ikhlas'],
    education_full: [
      { title: 'Pesantren Putri', place: 'Pesantren An-Nisa', years: '2008-2011' },
      { title: 'S1 Hukum Keluarga Islam', place: 'UIN Sunan Kalijaga', years: '2012-2016' },
    ],
    style: ['Tekstual', 'Tematik'],
  },
  {
    id: 5,
    name: 'Ustadz Farhan Alim',
    city: 'Medan',
    topics: ['Tauhid', 'Ekonomi Syariah'],
    method: 'Podcast',
    photo: '',
    links: [{ label: 'Spotify', url: 'https://spotify.com' }],
    experience: ['Podcast mingguan'],
    style: ['Kontekstual'],
  },
];

export default function App() {
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({ city: '', topic: '', method: '' });
  const [selected, setSelected] = useState(null);
  const [view, setView] = useState('list'); // 'list' | 'profile'

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

  const handleSelect = (p) => {
    setSelected(p);
    setView('profile');
  };

  const handleBack = () => {
    setView('list');
  };

  if (view === 'profile' && selected) {
    return <ProfilePage data={selected} onBack={handleBack} />;
  }

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
      <PreacherGrid data={filtered} onSelect={handleSelect} />
      <Footer />
      {/* Modal profil lama tetap tersedia bila diperlukan */}
      <ProfilePanel selected={null} onClose={() => {}} />
    </div>
  );
}
