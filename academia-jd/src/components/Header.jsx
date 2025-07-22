export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Academia JD</h1>
      <nav className="space-x-4">
        <a href="#inicio" className="hover:text-yellow-400">Inicio</a>
        <a href="#servicos" className="hover:text-yellow-400">Serviços</a>
        <a href="#planos" className="hover:text-yellow-400">Planos</a>
        <a href="#contato" className="hover:text-yellow-400">Contato</a>
      </nav>
    </header>
  )
}