export default function Footer() {
  return (
    <footer id="tentang" className="border-t border-emerald-100 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 text-center">
        <p className="text-emerald-800/80">“Sampaikan dariku walau satu ayat.” — HR. Bukhari</p>
        <p className="mt-2 text-sm text-emerald-700">© {new Date().getFullYear()} Direktori Da'i Nusantara</p>
      </div>
    </footer>
  );
}
