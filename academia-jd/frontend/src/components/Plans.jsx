export default function Plans() {
  return (
    <section id="planos" className="p-8 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      <h3 className="text-3xl font-bold text-center mb-6">Nossos Planos</h3>
      <div className="flex flex-col md:flex-row gap-6 justify-center">
        {[
          { name: "Mensal", price: "R$99", benefits: ["Sem contrato", "Acesso livre"] },
          { name: "Trimestral", price: "R$270", benefits: ["+10% desconto", "Acompanhamento extra"] },
          { name: "Anual", price: "R$999", benefits: ["+20% desconto", "Personal incluso"] },
        ].map((plan, i) => (
          <div key={i} className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow text-center w-full max-w-xs">
            <h4 className="text-xl font-bold">{plan.name}</h4>
            <p className="text-3xl my-4">{plan.price}</p>
            <ul className="mb-4">
              {plan.benefits.map((b, j) => (
                <li key={j}>✅ {b}</li>
              ))}
            </ul>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-white py-2 px-4 rounded">
              Assinar
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}