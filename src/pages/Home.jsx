import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="h-screen flex items-center justify-center bg-[#F8F3F0]">

      <div className="text-center">

        <h1 className="text-6xl font-bold text-[#A75B46] mb-6">
          Patrícia Andrade
        </h1>

        <Link
          to="/"
          className="bg-[#A75B46] text-white px-8 py-4 rounded-full"
        >
          Agendar Horário
        </Link>

      </div>

    </section>
  );
}