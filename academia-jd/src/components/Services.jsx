export default function Services() {
  return (
    <section id="servicos" className="p-8 bg-white text-gray-800">
      <h3 className="text-3xl font-bold mb-6">Nossos Serviços</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "Musculação", desc: "Aparelhos modernos e acompanhamento personalizado." },
          { title: "Treinamento funcional", desc: "Movimente-se com propósito e intensidade." },
          { title: "Aulas Coletivas", desc: "Zumba, spinning, yoga e muito mais!" }, 
        ].map((s, i) => (
          <div key={i} className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">{s.title}</h4>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}