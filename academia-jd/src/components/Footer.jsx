export default function Footer() {
  return (
    <footer id="contato" className="bg-gray-900 text-white dark: bg-grey-800 p-6 text-center space-y-4"> 
      <div>
        <p className="font-bold">Contato:</p>
        <p>📞 (31) 99999-9999</p>
        <p>📧 contato@academiajd.com</p>
        <p>📍 Rua Exemplo, 123 - Rio Piracicaba</p>
      </div>
      <div className="space-x-4">
        <a href="https://www.instagram.com/_academiajd/" target="_blank" className="hover:text-yellow-400">Instagram</a>
        <a href="https://wa.me/5531999999999" target="_blank" className="hover:text-yellow-400">WhatsApp</a>
      </div>
      <p>© {new Date().getFullYear()} Academia JD — Todos os direitos reservados</p>
    </footer>  
  )
}