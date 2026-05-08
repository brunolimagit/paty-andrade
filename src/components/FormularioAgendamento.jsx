// src/components/FormularioAgendamento.jsx

import { useState } from "react";
import { api } from "../services/api";
import { Horarios } from "./Horarios";
import { Calendario } from "./Calendario";

export function FormularioAgendamento() {

  const horarios = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
  ];

  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [servico, setServico] = useState("");
  const [data, setData] = useState("");
  const [horarioSelecionado, setHorarioSelecionado] = useState("");

  async function handleAgendamento(e) {
    e.preventDefault();

    try {
      await api.post("/agendamentos", {
        nome,
        telefone,
        servico,
        data,
        horario: horarioSelecionado,
      });

      alert("Agendamento realizado com sucesso!");

      setNome("");
      setTelefone("");
      setServico("");
      setData("");
      setHorarioSelecionado("");

    } catch (error) {
      alert("Erro ao agendar");
    }
  }

  return (
    <section className="grid lg:grid-cols-2 gap-10 items-center">

      {/* FORMULÁRIO */}
      <div className="bg-white rounded-[40px] p-8 shadow-2xl border border-[#E6C6B4]">

        <div className="mb-8">
          <p className="text-[#A75B46] uppercase tracking-[4px] font-semibold mb-2">
            Agendamento
          </p>

          <h2 className="text-4xl font-bold text-[#3D2B24]">
            Reserve seu horário
          </h2>
        </div>

        <form onSubmit={handleAgendamento} className="space-y-5">

          {/* Nome */}
          <div>
            <label className="block text-[#3D2B24] font-semibold mb-2">
              Nome
            </label>

            <input
              type="text"
              placeholder="Digite seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full border border-[#E6C6B4] rounded-2xl px-4 py-3 outline-none focus:border-[#A75B46]"
            />
          </div>

          {/* Telefone */}
          <div>
            <label className="block text-[#3D2B24] font-semibold mb-2">
              Telefone
            </label>

            <input
              type="text"
              placeholder="(85) 99999-9999"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              className="w-full border border-[#E6C6B4] rounded-2xl px-4 py-3 outline-none focus:border-[#A75B46]"
            />
          </div>

          {/* Serviço */}
          <div>
            <label className="block text-[#3D2B24] font-semibold mb-2">
              Serviço
            </label>

            <select
              value={servico}
              onChange={(e) => setServico(e.target.value)}
              className="w-full border border-[#E6C6B4] rounded-2xl px-4 py-3 outline-none focus:border-[#A75B46]"
            >
              <option value="">Escolha um serviço</option>
              <option>Alongamento em Gel</option>
              <option>Fibra de Vidro</option>
              <option>Manutenção</option>
              <option>Esmaltação</option>
            </select>
          </div>

          {/* Calendário */}
          <Calendario
            data={data}
            setData={setData}
          />

          {/* Horários */}
          <Horarios
            horarios={horarios}
            horarioSelecionado={horarioSelecionado}
            setHorarioSelecionado={setHorarioSelecionado}
          />

          {/* Botão */}
          <button
            type="submit"
            className="w-full bg-[#A75B46] hover:bg-[#8F4A39] text-white py-4 rounded-2xl font-bold text-lg transition cursor-pointer"
          >
            Confirmar Agendamento
          </button>

        </form>
      </div>

      {/* IMAGEM */}
      <div className="relative h-[700px] rounded-[40px] overflow-hidden shadow-2xl">

        <img
          src="https://images.unsplash.com/photo-1610992015732-2449b76344bc?q=80&w=1200&auto=format&fit=crop"
          alt="manicure"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/20"></div>

        <div className="absolute bottom-10 left-10 right-10 bg-white/20 backdrop-blur-md rounded-3xl p-6 border border-white/30">

          <h2 className="text-3xl font-bold text-white mb-3">
            Beleza e sofisticação
          </h2>

          <p className="text-white/90 leading-relaxed">
            Atendimento personalizado para valorizar ainda mais sua beleza.
          </p>

        </div>
      </div>

    </section>
  );
}