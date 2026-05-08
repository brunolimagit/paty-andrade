import  Header  from "../components/Header";
import HomePrincipal from "../components/HomePrincipal"
import { Footer } from "../components/Footer";
import { FormularioAgendamento } from "../components/FormularioAgendamento";
import { CardServico } from "../components/CardServico";

export default function Agendamento() {
  return (
    <>
      <Header />
      <HomePrincipal/>
    <main className="bg-[#F8F3F0] min-h-screen font-raleway">

      {/* HEADER */}

      {/* HERO */}
      <section className=" h-[500px] relative flex items-center justify-center ">


        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 text-center px-6">
          <p className="text-[#E6C6B4] uppercase tracking-[5px] font-semibold mb-4">
            Agendamento Online
          </p>

          <h1 className="text-5xl md:text-7xl text-white font-bold leading-tight">
            Reserve seu horário
          </h1>

          <p className="text-white/80 mt-6 text-lg max-w-2xl mx-auto">
            Escolha o melhor horário para cuidar das suas unhas
            com conforto e praticidade.
          </p>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <div className="text-center mb-14">
          <p className="text-[#A75B46] uppercase tracking-[4px] font-semibold mb-3">
            Serviços
          </p>

          <h2 className="text-4xl font-bold text-[#3D2B24]">
            Escolha seu atendimento
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <CardServico
            titulo="Alongamento"
            descricao="Unhas elegantes e sofisticadas com acabamento premium."
            preco="R$ 120"
          />

          <CardServico
            titulo="Fibra de Vidro"
            descricao="Alta durabilidade e aspecto natural."
            preco="R$ 150"
          />

          <CardServico
            titulo="Manutenção"
            descricao="Cuidados essenciais para manter suas unhas impecáveis."
            preco="R$ 80"
          />

          <CardServico
            titulo="Esmaltação"
            descricao="Acabamento delicado com cores modernas."
            preco="R$ 50"
          />

        </div>
      </section>

      {/* AGENDAMENTO */}
      <section className="max-w-6xl mx-auto px-6 pb-20">

        <div className="text-center mb-14">
          <p className="text-[#A75B46] uppercase tracking-[4px] font-semibold mb-3">
            Agende agora
          </p>

          <h2 className="text-4xl font-bold text-[#3D2B24]">
            Escolha sua data e horário
          </h2>
        </div>

        <FormularioAgendamento />

      </section>

      {/* FOOTER */}
      <Footer />

    </main>
    </>
  );
}