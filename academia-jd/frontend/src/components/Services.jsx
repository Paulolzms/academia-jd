import { Dumbbell, HeartPulse, Flame, Users2 } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Musculação",
    icon: <Dumbbell size={48} />,
    desc: "Equipamentos modernos para ganho de força e hipertrofia.",
  },
  {
    title: "Cardio",
    icon: <HeartPulse size={48} />,
    desc: "Esteiras, bikes e elípticos para melhorar seu condicionamento.",
  },
  {
    title: "HIIT / Funcional",
    icon: <Flame size={48} />,
    desc: "Treinos intensos para emagrecimento e performance.",
  },
];

export default function ServicesSection() {
  return (
    <section id="servicos" className="bg-white dark:bg-dark py-16 px-6 text-white">
      <h2 className="text-4xl font-bold text-center mb-10 text-yellow-400">Nossos Serviços</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            className="bg-zinc-800 rounded-2xl p-6 shadow-lg hover:scale-105 hover:shadow-yellow-500/30 transition duration-300 border-t-4 border-yellow-500"
            whileHover={{ y: -5 }}
          >
            <div className="text-secondary mb-10">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-10">{service.title}</h3>
            <p className="text-zinc-300">{service.desc}</p>
          </motion.div>
        ))}
      </div>
      <motion.div
      className="bg-zinc-800 rounded-2xl mt-8 p-6 shadow-lg hover:scale-105 hover:shadow-yellow-500/30 transition duration-300 border-t-4 border-yellow-500"
      whileHover={{ y: -5 }}
      >
        <div className="text-secondary mb-10"><Users2 size={48} /></div>
        <h3 className="text-xl font-semibold mb-10">Personal Trainer</h3>
        <p className="text-zinc-300">Na nossa academia, você conta com uma equipe de personal trainers altamente qualificada, pronta para transformar sua jornada de treino em resultados reais.
        Com acompanhamento individualizado, nossos profissionais criam planos personalizados de acordo com seus objetivos, condicionamento físico e estilo de vida.</p>
      </motion.div>
    </section>
  );
}
