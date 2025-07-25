import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section 
      id="inicio" 
      className="bg-[url('./public/bg-gym.jpg')] bg-cover bg-center h-screen flex items-center justify-center text-white"
    >
      <motion.div 
        className="bg-black bg-opacity-80 p-8 rounded-xl text-center text-white"  
        initial={{ opacity: 0, y: 50}}
        animate={{ opacity: 1, y: 0}}
        transition={{ duration: 1 }}
      >
        <h2 className="text-5xl font-bold mb-4">Transforme seu corpo e sua vida!</h2>
        <p className="text-lg">Treine com os melhores equipamentos e profissionais.</p>
      </motion.div>
    </section>
  )
}