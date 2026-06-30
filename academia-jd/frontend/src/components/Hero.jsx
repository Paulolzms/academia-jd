import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section 
      id="inicio" 
      className="bg-[url('./public/bg-gym.jpg')] bg-cover bg-center h-screen flex items-center justify-start px-10 text-white relative"
    >
<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-transparent"></div>
      <motion.div 
        className="bg-black/50 backdrop-blur-md max-w-2xl p-12 border-l-4 border-yellow-500 rounded-xl text-left text-white relative z-10"  
        initial={{ opacity: 0, y: 50}}
        animate={{ opacity: 1, y: 0}}
        transition={{ duration: 1 }}
      >
        <h2 className="text-5xl font-extrabold mb-6">Transforme<br></br> seu corpo <br></br><span className="text-yellow-500">e sua vida!</span></h2>
        <p className="text-lg text-yellow-500">Alcance seus objetivos com uma estrutura moderna e profissionais qualificados.</p>
        <button className="bg-yellow-500 text-black font-bold px-8 py-3 rounded-lg mt-8 hover:bg-red-600 hover:text-white transition-all duration-300 hover:scale-105 cursor-pointer">Conheça nossos planos</button>
      </motion.div>
    </section>
  )
}