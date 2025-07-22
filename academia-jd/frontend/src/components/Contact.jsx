import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [form, serForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/send", form);
      alert("Mensagem enviada com sucesso!");
    } catch (error) {
      alert("Erro ao enviar.")
    }
  };

  return (
    <section id="contato" className="p-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <h2 className="text-3xl text-primary font-bold text-center mb-6">Fale conosco</h2>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto grid gap-4">
        <input
          type="text"
          placeholder="Seu nome"
          required
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="p-3 rounded border dark:bg-gray-800"
        />
        <input
          type="email"
          placeholder="Seu e-mail"
          required
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="p-3 rounded border dark:bg-gray-800"
        />
        <textarea
          placeholder="Sua mensagem"
          rows="4"
          required
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="p-3 rounded border dark:bg-gray-800"
        />
        <button className="bg-primary hover:bg-yellow-500 text-white py-2 px-4 rounded w-fit">
          Enviar
        </button>
      </form>
    </section>
  );
}
