import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Diego S.",
    text: "Honestissima academia, ótimos equipamentos, boa localização e ótimos profissionais. Recomendo",
  },
  {
    name: "Rogerio I.",
    text: "Minha segunda casa melhor lugar pra aliviar a mente e crescer! Atendimento ótimo.",
  },
  {
    name: "Maryana V.",
    text: "Academia completa, bons profissionais e um atendimento diferenciado",
  },
  {
    name: "Luan C.",
    text: "Excelente atendimento e acompanhamento dos professores.",
  },
];

export default function GoogleReviewsSection() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "snap",
    slides: {
      perView: 1,
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 16 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 20 },
      },
    },
  });

  return (
    <section className="bg-black text-white py-16 px-4 md:px-8">
      <div className="max-w-5xl mx-auto text-center">
        {/* Título e avaliação */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center gap-2 mb-6">
            {/* Google logo + texto */}
            <div className="flex items-center gap-2">
              <img
                src="https://www.gstatic.com/images/branding/product/1x/googleg_32dp.png"
                alt="Google Logo"
                className="w-6 h-6"
              />
              <span className="text-lg font-semibold text-gray-300">
                Google Reviews
              </span>
            </div>

            {/* Nota */}
            <h2 className="text-5xl font-extrabold text-yellow-400">4.9</h2>

            {/* Estrelas */}
            <div className="flex gap-1 text-yellow-400">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Star key={i} fill="currentColor" stroke="none" size={20} />
                ))}
            </div>

            {/* Total de avaliações */}
            <p className="text-sm text-gray-400">30 avaliações no Google</p>

            {/* Link para o Maps */}
            <a
              href="https://www.google.com/search?q=academia+jd&oq=academia+jd+&gs_lcrp=EgRlZGdlKgYIABBFGDkyBggAEEUYOTIJCAEQABgNGIAEMgkIAhAAGA0YgAQyCQgDEAAYDRiABDIJCAQQABgNGIAEMgkIBRAAGA0YgAQyBggGEEUYPDIGCAcQRRg8MgYICBBFGDzSAQg0MjkzajBqMagCALACAA&sourceid=chrome&ie=UTF-8#lrd=0xa4fff6065ba887:0xc0ec6f47d78e68e2,1,,,,"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 text-sm font-medium underline mt-2"
            >
              Ver todas no Google
            </a>
          </div>
        </motion.div>

        {/* Carrossel */}
        <motion.div
          ref={sliderRef}
          className="keen-slider mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {reviews.map((review, index) => (
            <div
              className="keen-slider__slide bg-zinc-900 border border-zinc-700 rounded-xl p-5 shadow-md text-left"
              key={index}
            >
              <p className="text-sm text-gray-100 mb-3">"{review.text}"</p>
              <span className="text-xs text-gray-400">— {review.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
