// src/components/CardServico.jsx
export function CardServico({ titulo, descricao, preco }) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg border border-[#E6C6B4] hover:-translate-y-2 transition duration-300">
      <h3 className="text-2xl font-bold text-[#3D2B24] mb-3">
        {titulo}
      </h3>

      <p className="text-[#6B5B55] leading-relaxed mb-5">
        {descricao}
      </p>

      <span className="text-[#A75B46] font-bold text-xl">
        {preco}
      </span>
    </div>
  );
}