import { Instagram, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-10 text-sm">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Endereço */}
        <div>
          <h3 className="font-bold mb-2">ENDEREÇO</h3>
          <p>Academia JD<br />Rua Exemplo, 123<br />Rio Piracicaba - MG</p>
        </div>

        {/* Horários */}
        <div>
          <h3 className="font-bold mb-2">HORÁRIOS:</h3>
          <p>Seg a Sex <span className="font-bold text-yellow-400">07–22h</span></p>
          <p>Sábado <span className="font-bold text-red-500">10–12h</span></p>
          <p>Domingo <span className="font-bold text-yellow-400">Fechado</span></p>
          <p className="text-xs mt-2 italic">* Horários especiais em feriados e eventos</p>
        </div>

        {/* Redes sociais */}
        <div>
          <h3 className="font-bold mb-2">SIGA-NOS:</h3>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="https://www.instagram.com/_academiajd/" target="_blank" className="hover:text-primary"><Instagram size={20} /></a>
            <a href="https://www.instagram.com/_academiajd/" target="_blank" className="hover:text-secondary"><Facebook size={20} /></a>
            <a href="https://www.instagram.com/_academiajd/" target="_blank" className="hover:text-primary"><Youtube size={20} /></a>
          </div>
        </div>
      </div>

      {/* Navegação inferior */}
      <div className="border-t border-gray-700 mt-10 pt-6">
        <div className="flex flex-wrap justify-center gap-4 font-semibold text-xs tracking-wide">
          <a href="#">AJUDA</a>
          <a href="#">CURSOS</a>
          <a href="#">EVENTOS</a>
          <a href="#">PLANOS</a>
          <a href="#">SOBRE NÓS</a>
          <a href="#">HORÁRIOS</a>
          <a href="#">LOJA</a>
          <a href="#">ÁREA DO ALUNO</a>
        </div>

        <div className="text-center text-xs text-gray-400 mt-6">
          <p>
            <a href="#" className="underline mr-4">Política de Privacidade</a>
            <a href="#" className="underline">Termos Legais</a>
          </p>
          <p className="mt-2">&copy; Academia JD {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
