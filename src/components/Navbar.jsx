import { Mosque, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#direktori', label: 'Direktori' },
    { href: '#profil', label: 'Profil' },
    { href: '#tentang', label: 'Tentang' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-emerald-100">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600 text-white shadow">
            <Mosque size={18} />
          </span>
          <div className="leading-tight">
            <div className="font-semibold text-emerald-700">Direktori Pendakwah</div>
            <div className="text-xs text-emerald-500">Nuansa Islami Indonesia</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-emerald-700/80 hover:text-emerald-800 hover:underline underline-offset-4"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden p-2 rounded-lg border border-emerald-200 text-emerald-700"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-emerald-100 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-emerald-700/90"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
