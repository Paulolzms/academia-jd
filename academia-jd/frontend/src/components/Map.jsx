export default function Map() {
  return (
    <section id="mapa" className="w-full py-10 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6 text-black dark:text-white">
          Localização
        </h2>

        <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg border">
          <iframe 
          title="Academia JD"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.8628846165966!2d-43.17690952435597!3d-19.930182081458305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa4fff6065ba887%3A0xc0ec6f47d78e68e2!2sAcademia%20JD!5e0!3m2!1spt-BR!2sbr!4v1753240453674!5m2!1spt-BR!2sbr" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
