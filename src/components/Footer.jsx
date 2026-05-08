// src/components/Footer.jsx
export function Footer() {
  return (
    <footer className="bg-[#A75B46] text-white py-10 px-6 mt-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        <div>
          <h2 className="text-2xl font-bold mb-4">
            Patrícia Andrade
          </h2>

          <p className="text-white/80 leading-relaxed">
            Atendimento especializado em unhas, beleza e sofisticação.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">
            Contato
          </h3>

          <ul className="space-y-2 text-white/80">
            <li>(85) 99999-9999</li>
            <li>contato@email.com</li>
            <li>Fortaleza - CE</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">
            Horários
          </h3>

          <ul className="space-y-2 text-white/80">
            <li>Seg - Sex: 08h às 18h</li>
            <li>Sábado: 08h às 14h</li>
            <li>Domingo: Fechado</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/20 mt-10 pt-5 text-center text-white/70">
        © 2026 Patrícia Andrade - Todos os direitos reservados.
      </div>
    </footer>
  );
}