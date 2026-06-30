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
  {
    title: "Personal Trainer",
    icon: <Users2 size={48} />,
    desc: "Acompanhamento individualizado para acelerar seus resultados.",
  },
];

export default function ServicesSection() {
  return (
    <section 
      id="servicos" 
      className="bg-gray-100 dark:bg-neutral-800 py-20 px-6 text-white"
    >
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        <div>
          
          <h2 className="text-5xl lg:text-6x1 font-bold mb-5 text-black dark:text-white">
            Muito mais <span className="text-yellow-500">que uma 
            <br />  
            Academia!</span>
          </h2>

          <p className="text-1xl text-black dark:text-white mb-10">
            Estrutura e profissionais
            preparados para ajudar você a alcançar <br /> seus objetivos.
          </p>

          {/* GRID DOS CARDS */}
          <div className="grid md:grid-cols-2 sm:grid-cols-2 gap-6 mb-10">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-100 border border-transparent hover:border-yellow-500"
                whileHover={{ y: -5 }}
              >
                <div className="flex justify-center text-secondary mb-4">{service.icon}</div>
                <h3 className="text-xl text-zinc-800 font-semibold mb-3">{service.title}</h3>
                <p className="text-zinc-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>

        <div className="bg-[url('./public/bg-retrato.jpg')] rounded-3xl bg-cover bg-center h-full flex items-center justify-center p-10">
          <img
            src="/bg-retrato.jpg"
            alt="Pessoa treinando"
            className="rounded-3xl shadow-2xl object-cover h-full"
          />
        </div>
        

      </div>

    </section>
  );
}
