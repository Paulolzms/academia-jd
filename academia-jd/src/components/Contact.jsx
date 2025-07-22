export default function Contact() {
  return (
    <section id="contato" className="p-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <h3 className="text-3xl font-bold text-center mb-6">Fale Conosco</h3>
      <form className="max-w-xl mx-auto grid gap-4">
        <input
          type="text"
          placeholder="Seu nome"
          className="p-3 rounded border dark:bg-gray-800 dark:border-gray-700"
        />
        <input
          type="email"
          placeholder="Seu e-mail"
          className="p-3 rounded border dark:bg-gray-800 dark:border-gray-700"
        />
        <textarea
          placeholder="Sua mensagem"
          rows="4"
          className="p-3 rounded border dark:bg-gray-800 dark:border-gray-700"
        />
        <button className="bg-yellow-400 hover:bg-yellow-500 text-white py-2 px-4 rounded w-fit">
          Enviar Mensagem
        </button>
      </form>
    </section>
  );
}
