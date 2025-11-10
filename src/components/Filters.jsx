const Select = ({ label, value, onChange, options }) => (
  <label className="flex flex-col gap-1 text-sm text-emerald-800">
    <span className="font-medium">{label}</span>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="rounded-lg border border-emerald-200 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
    >
      <option value="">Semua</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
  </label>
);

export default function Filters({ filters, setFilters, cities, topics, methods }) {
  const onUpdate = (key) => (val) => setFilters((f) => ({ ...f, [key]: val }));
  return (
    <section className="border-y border-emerald-100 bg-emerald-50/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Select label="Kota" value={filters.city} onChange={onUpdate('city')} options={cities} />
        <Select label="Tema" value={filters.topic} onChange={onUpdate('topic')} options={topics} />
        <Select label="Metode" value={filters.method} onChange={onUpdate('method')} options={methods} />
      </div>
    </section>
  );
}
