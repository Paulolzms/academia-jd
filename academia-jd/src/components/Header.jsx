import { useEffect, useState } from "react";

export default function Header() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Academia <span className="text-secondary">JD</span></h1>
      <nav className="space-x-4">
        <a href="#inicio" className="hover:text-yellow-400">Inicio</a>
        <a href="#servicos" className="hover:text-yellow-400">Serviços</a>
        <a href="#planos" className="hover:text-yellow-400">Planos</a>
        <a href="#contato" className="hover:text-yellow-400">Contato</a>
        <button
          onClick={() => setDark(!dark)}
          className="bg-grey-700 hover:bg-gray600 px-2 py-1 rounded text-sm ml-4"
        >
          {dark ? "☀️" : "🌙"}
        </button>
      </nav>
    </header>
  )
}