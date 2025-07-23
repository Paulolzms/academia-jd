import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const navItems = [
    { name: "Início", href: "#inicio" },
    { name: "Serviços", href: "#servicos" },
    { name: "Planos", href: "#planos" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <header className="bg-black dark:bg-black text-white dark:text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
        <h1 className="text-2xl font-extrabold text-primary">
          Academia <span className="text-secondary">JD</span>
        </h1>

        {/* Ícones e botões */}
        <nav className="hidden md:flex gap-6 items-center text-lg font-medium">
          {navItems.map((item) => (
            <motion.a
              whileHover={{ scale: 1.1 }}
              key={item.name}
              href={item.href}
              className="hover:text-yellow-400 transition"
            >
              {item.name}
            </motion.a>
          ))}

          {/* Botão de dark mode */}
          <button
            onClick={() => setDark(!dark)}
            className="hover:scale-110 transition text-xl ml-4"
            title="Alternar tema"
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </nav>

        {/* Botão hamburguer (mobile) */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden px-6 pb-4 flex flex-col gap-4 bg-white dark:bg-black text-black dark:text-white"
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-lg font-medium hover:text-yellow-400"
            >
              {item.name}
            </a>
          ))}
          <button
            onClick={() => setDark(!dark)}
            className="text-left mt-2 text-xl"
          >
            {dark ? "☀️ Modo Claro" : "🌙 Modo Escuro"}
          </button>
        </motion.div>
      )}
    </header>
  );
}
