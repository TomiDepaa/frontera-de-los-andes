"use client";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import CabinsGallery from "@/components/gallery/cabinsGallery";

const services = [
  { icon: "wifi", label: "Wi-Fi satelital" },
  { icon: "tv", label: "Smart TV" },
  { icon: "kitchen", label: "Cocina completa" },
  { icon: "microwave", label: "Electrodomésticos" },
  { icon: "knife", label: "Vajilla completa" },
  { icon: "outdoorGrill", label: "Parrilla" },
  { icon: "fireplace", label: "Calefacción a leña" },
  { icon: "shower", label: "Amenities de baño" },
  { icon: "hairDryer", label: "Secador de cabello" },
  { icon: "towel", label: "Ropa blanca" },
  { icon: "bed", label: "Ropa de cama" },
  { icon: "safeBox", label: "Caja de seguridad" },
  { icon: "car", label: "Estacionamiento" },
];

export default function Cabins() {
  return (
    <main>
      <section className="relative min-h-[60vh] md:min-h-[75vh] lg:min-h-screen flex flex-col justify-center pt-24 px-5 md:px-32 2xl:px-48 pb-14 md:pb-20 bg-cabins-headCabins bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-t from-green-brand via-green-brand/55 to-green-brand/10"></div>

        <div className="relative text-gray-100 max-w-2xl">
          <span className="inline-block px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-white text-xs font-semibold">
            Nuestras cabañas
          </span>
          <h1 className="pt-4 text-4xl md:text-6xl font-bold leading-tight">
            Acerca de Nuestras Cabañas
          </h1>
          <p className="pt-4 text-lg font-light text-white/85 max-w-xl">
            Disfrutá de una estancia única en nuestras acogedoras cabañas en
            Villa Río Hermoso, San Martín de los Andes, rodeadas de
            naturaleza y equipadas con todo el confort para tu descanso.
          </p>
          <div className="flex flex-wrap gap-x-10 gap-y-4 pt-8 mt-8 border-t border-white/20">
            <div>
              <h4 className="text-3xl font-extrabold">3</h4>
              <p className="font-light text-sm pt-1 text-white/70">
                Cabañas disponibles
              </p>
            </div>
            <div>
              <h4 className="text-3xl font-extrabold">6</h4>
              <p className="font-light text-sm pt-1 text-white/70">
                Personas por cabaña
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold">Servicios incluidos</h4>
              <p className="font-light text-sm pt-1 text-white/70">
                Wi-Fi, calefacción y mucho más
              </p>
            </div>
          </div>
        </div>

        <a
          href="#info"
          aria-label="Ir a la información de las cabañas"
          className="absolute bottom-5 left-1/2 -translate-x-1/2 z-[1]"
        >
          <ChevronDownIcon className="w-7 h-7 text-white/80 hover:text-white transition-colors animate-bounce" />
        </a>
      </section>

      <section id="info" className="px-5 md:px-20 2xl:px-40 py-16 md:py-24 space-y-8 flex flex-col items-center md:grid md:grid-cols-2 md:gap-10 md:space-y-0 lg:min-h-screen lg:content-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-ink">Info de las Cabañas</h2>
          <p className="text-lg text-muted leading-relaxed">
            Contamos con tres cabañas para 6 personas compuestas de dos
            recámaras, una con cama matrimonial y la otra por dos cuchetas, un
            baño, cocina completa, sala, deck individual para cada cabaña y un
            hermoso parque.
          </p>
        </div>
        <div>
          <img
            src="/images/cabins/CabanasDesdeCalle.jpg"
            alt="Cabañas"
            className="w-full h-auto rounded-2xl shadow-soft"
          />
        </div>
      </section>

      <section className="px-5 md:px-20 2xl:px-40 py-16 bg-surface">
        <h2 className="text-3xl font-bold text-ink mb-10">
          Servicios con los que contamos
        </h2>
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {services.map((service) => (
            <li
              key={service.label}
              className="flex items-center gap-3 bg-white rounded-2xl border border-transparent p-3 shadow-card hover:shadow-card-hover transition-shadow duration-300"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-whitegreen-light flex items-center justify-center">
                <img src={`/images/icons/${service.icon}.png`} alt="" className="size-5" />
              </div>
              <span className="min-w-0 flex-1 font-medium text-sm text-ink break-words">{service.label}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="pt-16 pb-20 md:px-20 2xl:px-40 px-5 space-y-6 md:space-y-10">
        <h2 className="text-3xl font-bold text-ink">Galería</h2>
        <CabinsGallery />
      </section>
    </main>
  );
}