import Hero from './components/Hero';
import Sermons from './components/Sermons';
import About from './components/About';
import Contact from './components/Contact';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <a href="#" className="text-xl font-extrabold tracking-tight">
            Al-Nur
          </a>
          <nav className="hidden gap-8 text-sm font-medium text-gray-700 md:flex">
            <a href="#sermons" className="hover:text-emerald-700">Ceramah</a>
            <a href="#about" className="hover:text-emerald-700">Tentang</a>
            <a href="#contact" className="hover:text-emerald-700">Kontak</a>
          </nav>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="border-t border-gray-200 bg-white px-6 py-3 md:hidden">
            <div className="flex flex-col gap-3 text-sm font-medium text-gray-700">
              <a href="#sermons" onClick={() => setOpen(false)} className="hover:text-emerald-700">Ceramah</a>
              <a href="#about" onClick={() => setOpen(false)} className="hover:text-emerald-700">Tentang</a>
              <a href="#contact" onClick={() => setOpen(false)} className="hover:text-emerald-700">Kontak</a>
            </div>
          </div>
        )}
      </header>

      <main>
        <Hero />
        <Sermons />
        <About />
        <Contact />
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
