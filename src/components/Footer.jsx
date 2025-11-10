export default function Footer() {
  return (
    <footer id="tentang" className="border-t border-emerald-100 bg-emerald-50">
      <div className="max-w-6xl mx-auto px-4 py-8 text-center text-sm text-emerald-700/80">
        <p>
          Dibangun dengan semangat persaudaraan dan kebermanfaatan. Mari jaga adab, tebarkan salam, dan kuatkan ukhuwah.
        </p>
        <p className="mt-2">© {new Date().getFullYear()} Direktori Pendakwah Nusantara</p>
      </div>
    </footer>
  );
}
