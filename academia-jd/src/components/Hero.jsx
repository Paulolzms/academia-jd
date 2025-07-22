export default function Hero() {
  return (
    <section 
      id="inicio" 
      className="bg-[url('/bg-gym.jpg')] bg-cover bg-center h-[500px] flex items-center justify-center text-white"
    >
      <div className="bg-black bg-opacity-60 p-8 rounded-xl">
        <h2 className="text-4xl font-bold mb-4">Transforme seu corpo e sua vida</h2>
        <p className="text-lg">Treine com os melhores equipamentos e profissionais</p>
      </div>
    </section>
  )
}