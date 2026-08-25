import { ChevronRightIcon } from "@heroicons/react/24/outline";

export const metadata = {
  title: "Contacto",
  description:
    "Contactanos por WhatsApp o Instagram, o visitanos en Villa Río Hermoso, San Martín de los Andes. Sin motor de reservas: coordinamos tu estadía directamente.",
  alternates: {
    canonical: "/contact",
  },
};

const contactMethods = [
  {
    icon: "/images/icons/whatsappGreen.png",
    title: "WhatsApp",
    description: "Escribinos directo para consultas y reservas.",
    cta: "Enviar mensaje",
    href: "https://api.whatsapp.com/send?phone=5492352409793",
  },
  {
    icon: "/images/icons/instagramGreen.png",
    title: "Instagram",
    description: "Mirá fotos, novedades y disponibilidad de las cabañas.",
    cta: "Ver perfil",
    href: "https://www.instagram.com/fronteradelosandes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    icon: "/images/icons/ubicationGreen.png",
    title: "Ubicación",
    description: "Villa Río Hermoso, San Martín de los Andes.",
    cta: "Cómo llegar",
    href: "https://maps.app.goo.gl/dhSFBHx3MKtksAqs6",
  },
];

export default function Contact() {
  return (
    <main>
      <section className="pt-32 pb-24 md:pb-32 px-5 md:px-20 2xl:px-40 bg-green-brand text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">Contactanos</h1>
        <p className="pt-4 text-lg text-white/80 max-w-xl mx-auto">
          Escribinos por WhatsApp, seguinos en Instagram o visitanos en Villa
          Río Hermoso — estamos para ayudarte con tu próxima estadía.
        </p>
      </section>

      <section className="px-5 md:px-20 2xl:px-40 -mt-14 md:-mt-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {contactMethods.map((method) => (
            <a
              key={method.title}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center gap-3 bg-white border border-surface rounded-2xl p-8 shadow-soft hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-whitegreen-light flex items-center justify-center">
                <img src={method.icon} alt={method.title} className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-ink">{method.title}</h3>
              <p className="text-muted text-sm">{method.description}</p>
              <span className="inline-flex items-center gap-1 text-green-brand font-semibold text-sm pt-2 group-hover:gap-2 transition-all duration-300">
                {method.cta}
                <ChevronRightIcon className="w-4 h-4" />
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="px-5 md:px-20 2xl:px-40 py-16 md:py-24">
        <div className="md:grid md:grid-cols-2 md:gap-10">
          <div className="space-y-3 md:content-center">
            <h2 className="text-3xl md:text-4xl font-bold text-ink">Cómo llegar</h2>
            <p className="font-light text-muted">
              Ubicados en Villa Río Hermoso kilómetro 2189 de la Ruta Nacional
              40, a 25 km del centro San Martín de los Andes, nuestro complejo
              es el punto de partida perfecto para explorar la Patagonia.
            </p>
            <a
              href="https://maps.app.goo.gl/dhSFBHx3MKtksAqs6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-green-brand font-semibold text-sm pt-2 hover:gap-2 transition-all duration-300"
            >
              Abrir en Google Maps
              <ChevronRightIcon className="w-4 h-4" />
            </a>
          </div>
          <div className="py-8 md:py-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3042.413832665414!2d-71.38258652341736!3d-40.31097227145669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961105a1576077ef%3A0xea98a9a499e686b1!2sCaba%C3%B1as%20frontera%20de%20los%20andes!5e0!3m2!1ses!2sar!4v1742235208336!5m2!1ses!2sar"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicacion Frontera de los Andes"
              className="w-full h-64 md:h-80 rounded-xl shadow-card"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}