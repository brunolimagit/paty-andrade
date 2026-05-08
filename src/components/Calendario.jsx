// src/components/Calendario.jsx
export function Calendario({ data, setData }) {
  return (
    <div>
      <label className="block text-[#3D2B24] font-semibold mb-2">
        Data
      </label>

      <input
        type="date"
        value={data}
        onChange={(e) => setData(e.target.value)}
        className="w-full border border-[#E6C6B4] rounded-2xl px-4 py-3 outline-none focus:border-[#A75B46] transition"
      />
    </div>
  );
}
