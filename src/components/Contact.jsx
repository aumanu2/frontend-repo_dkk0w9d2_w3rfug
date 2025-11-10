import { Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('Thanks for reaching out! We will get back to you soon.');
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="bg-white py-16">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Contact</h2>
          <p className="mt-2 text-gray-600">
            Invite for a sermon, request counseling, or send a message.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-8 md:grid-cols-2">
          <form onSubmit={handleSubmit} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="grid gap-4">
              <input
                type="text"
                name="name"
                required
                placeholder="Full name"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Email address"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
              />
              <textarea
                name="message"
                required
                rows="4"
                placeholder="Your message"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                <Send className="h-5 w-5" /> Send Message
              </button>
              {status && (
                <p className="text-sm text-emerald-700">{status}</p>
              )}
            </div>
          </form>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 text-gray-700">
              <Mail className="h-5 w-5 text-emerald-600" />
              <span>contact@alnur.org</span>
            </div>
            <div className="mt-4 flex items-center gap-3 text-gray-700">
              <MapPin className="h-5 w-5 text-emerald-600" />
              <span>Worldwide | Based in Dubai, UAE</span>
            </div>

            <div className="mt-6 rounded-xl bg-emerald-50 p-4 text-sm text-emerald-900">
              For event bookings, please include date, location, and expected audience size.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
