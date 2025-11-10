import { useState } from 'react';
import { Building2, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-emerald-100">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-emerald-700 font-semibold">
          <Building2 className="h-6 w-6" />
          <span>Direktori Da'i Nusantara</span>
        </a>
        <button
          className="md:hidden p-2 rounded-lg border border-emerald-200 text-emerald-700"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#direktori" className="text-emerald-700 hover:text-emerald-900">Direktori</a>
          <a href="#profil" className="text-emerald-700 hover:text-emerald-900">Profil</a>
          <a href="#tentang" className="text-emerald-700 hover:text-emerald-900">Tentang</a>
        </div>
      </nav>
      {open && (
        <div className="md:hidden border-t border-emerald-100 bg-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex flex-col gap-2">
            <a href="#direktori" className="py-2 text-emerald-700">Direktori</a>
            <a href="#profil" className="py-2 text-emerald-700">Profil</a>
            <a href="#tentang" className="py-2 text-emerald-700">Tentang</a>
          </div>
        </div>
      )}
    </header>
  );
}
