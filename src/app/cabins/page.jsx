"use client";
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
      <section className="pt-32 pb-16 w-full relative bg-cabins-headCabins bg-cover bg-center">
        <div className="absolute inset-0 bg-green-brand/80"></div>
        <div className="relative px-5 md:px-32 text-gray-200">
          <h1 className="text-4xl font-bold">
            Acerca de Nuestras Cabañas
          </h1>
          <p className="pt-3 text-lg font-light max-w-2xl">
            Disfruta de una estancia única en nuestras acogedoras cabañas en
            Villa Río Hermoso, San Martin de los Andes, rodeadas de
            naturaleza y equipadas con todo el confort para tu descanso.
          </p>
          <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl">
            <div>
              <h4 className="text-2xl font-extrabold">3</h4>
              <p className="font-light pt-1">Cabañas disponibles</p>
            </div>
            <div>
              <h4 className="text-2xl font-extrabold">6 personas</h4>
              <p className="font-light pt-1">Capacidad máxima por cabaña</p>
            </div>
            <div>
              <h4 className="text-xl font-extrabold">Servicios incluidos</h4>
              <p className="font-light pt-1">Wi-Fi, calefación, y muchos más</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 md:px-20 py-16 md:py-24 space-y-8 flex flex-col items-center md:grid md:grid-cols-2 md:gap-10 md:space-y-0">
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

      <section className="px-5 md:px-20 py-16 bg-surface">
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
              <span className="font-medium text-sm text-ink">{service.label}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="pt-16 pb-20 md:px-20 px-5 space-y-6 md:space-y-10">
        <h2 className="text-3xl font-bold text-ink">Galería</h2>
        <CabinsGallery />
      </section>
    </main>
  );
}