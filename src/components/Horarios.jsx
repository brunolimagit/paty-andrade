// src/components/Horarios.jsx
export function Horarios({ horarios, horarioSelecionado, setHorarioSelecionado }) {
  return (
    <div>
      <label className="block text-[#3D2B24] font-semibold mb-3">
        Horários disponíveis
      </label>

      <div className="grid grid-cols-3 gap-3">
        {horarios.map((horario) => (
          <button
            key={horario}
            onClick={() => setHorarioSelecionado(horario)}
            className={`py-3 rounded-2xl font-semibold border transition cursor-pointer
              ${
                horarioSelecionado === horario
                  ? "bg-[#A75B46] text-white border-[#A75B46]"
                  : "border-[#E6C6B4] text-[#A75B46] hover:bg-[#E6C6B4] hover:text-white"
              }
            `}
          >
            {horario}
          </button>
        ))}
      </div>
    </div>
  );
}