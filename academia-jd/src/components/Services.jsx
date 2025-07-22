import { motion } from "framer-motion";

export default function Services() {
  const cards = [
    { title: "Musculação", desc: "Aparelhos modernos e acompanhamento personalizado." },
    { title: "Funcional", desc: "Movimente-se com propósito e intensidade." },
    { title: "Aulas", desc: "Zumba, spinning, yoga e muito mais!" }, 
  ];

  return (
    <section id="servicos" className="p-8 bg-white dark:bg-dark text-gray-800 dark:text-white">
      <h3 className="text-3xl font-bold text-center mb-6 text-secondary">Nossos Serviços</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <motion.div 
            key={i} 
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-2 text-primary">{card.title}</h4>
            <p>{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}