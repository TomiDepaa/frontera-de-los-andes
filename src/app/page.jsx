import ItemsInfo from "@/components/itemsInfo/itemsInfo";
import GreenButton from "@/components/buttons/greenButton";
import HeroCarousel from "@/components/carousel/heroCarousel";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const homeActivities = [
  {
    img: "/images/activities/cerroChapelco.jpg",
    alt: "Cerro Chapelco",
    title: "Cerro Chapelco",
    category: "Nieve y montaña",
    featured: true,
  },
  {
    img: "/images/places/lagoHermoso.jpg",
    alt: "Lago Hermoso",
    title: "Lago Hermoso",
    category: "Naturaleza",
  },
  {
    img: "/images/places/cascadaÑivinco.jpg",
    alt: "Cascada Ñivinco",
    title: "Cascada Ñivinco",
    category: "Trekking",
  },
  {
    img: "/images/activities/pesca.jpg",
    alt: "Pesca con mosca",
    title: "Pesca con Mosca",
    category: "Agua",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col justify-between overflow-hidden">
      <section className="relative w-full min-h-screen px-5 flex flex-col items-center justify-center text-center overflow-hidden">
        <HeroCarousel />
        <div className="absolute inset-0 bg-black/65"></div>

        <div className="relative z-[1]">
          <h1 className="text-2xl font-medium text-white pb-3">Bienvenido a</h1>
          <img
            className="h-52 lg:h-60 mx-auto"
            src="/images/Frontera_Trans.png"
            alt="Frontera de los Andes"
          />
          <p className="text-white/85 text-center py-8 max-w-xl mx-auto">
            Descubre una estadía única en Villa Río Hermoso, San Martín de los
            Andes, donde la naturaleza y la comodidad se encuentran.
          </p>
        </div>

        <a
          href="#descubre"
          aria-label="Ir a la siguiente sección"
          className="absolute bottom-16 left-1/2 -translate-x-1/2 z-[1] animate-bounce"
        >
          <ChevronDownIcon className="w-8 h-8 text-white/80 hover:text-white transition-colors" />
        </a>
      </section>

      <section id="descubre" className="p-5 md:px-20 md:py-24 2xl:px-40">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h4 className="text-green-brand font-semibold">Relájate y disfruta</h4>
            <h2 className="pt-2 text-3xl md:text-4xl font-bold text-ink">
              Escape perfecto en el sur argentino
            </h2>
            <p className="pt-4 text-lg text-muted">
              En Frontera de los Andes te esperan cabañas completamente equipadas
              en un entorno natural inigualable. Perfecto para familias, parejas,
              amigos y aventureros.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-card h-72 md:h-[420px]">
            <img
              src="/images/cabins/Cabaña1.jpg"
              alt="Cabaña rodeada de naturaleza"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="pt-14 pb-8 grid gap-8 md:grid-cols-3">
          <ItemsInfo
            img="/images/icons/forest.png"
            title="Entorno Natural"
            paragraph="Rodeado de bosques, ríos y montañas, ideal para desconectar y recargar energías."
          />
          <ItemsInfo
            img="/images/icons/wifi.png"
            title="Internet Satelital"
            paragraph="Para que te mantengas conectado si lo necesitas."
          />
          <ItemsInfo
            img="/images/icons/knife.png"
            title="Cocina Equipada"
            paragraph="Electrodomésticos modernos y utensilios de cocina para tu comodidad."
          />
        </div>
        <div className="flex justify-center pt-4">
          <GreenButton text="Conocer Más" path="/cabins" img="/images/icons/arrowRight.png" />
        </div>
      </section>

      <section
        className="relative h-[60vh] md:h-[75vh] bg-fixed bg-cover bg-center flex items-center justify-center text-center px-5"
        style={{ backgroundImage: "url('/images/cabins/CabanasDesdeCalle.jpg')" }}
      >
        <div className="absolute inset-0 bg-green-brand/60"></div>
        <div className="relative max-w-xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Desconectá en el corazón de la Patagonia
          </h2>
          <p className="pt-5 text-white/85 text-lg">
            Cada rincón de Frontera de los Andes está pensado para que
            disfrutes del entorno sin resignar comodidad.
          </p>
        </div>
      </section>

      <section className="px-5 md:px-20 py-16 md:py-24 2xl:px-40">
        <div className="max-w-xl mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-ink">Un vistazo por dentro</h2>
          <p className="pt-3 text-lg text-muted">
            Espacios cálidos, luminosos y equipados para que te sientas como en casa.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-3 md:gap-4 md:h-[520px]">
          <Link
            href="/cabins"
            className="relative col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-card group"
          >
            <img
              src="/images/cabins/in/LivingZonaEstar.jpg"
              alt="Living de la cabaña"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </Link>
          <Link
            href="/cabins"
            className="relative rounded-2xl overflow-hidden shadow-card group"
          >
            <img
              src="/images/cabins/in/CocinaDeFrente.jpg"
              alt="Cocina equipada"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </Link>
          <Link
            href="/cabins"
            className="relative rounded-2xl overflow-hidden shadow-card group"
          >
            <img
              src="/images/cabins/in/HabitacionDoble.jpg"
              alt="Habitación matrimonial"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </Link>
          <Link
            href="/cabins"
            className="relative col-span-2 rounded-2xl overflow-hidden shadow-card group"
          >
            <img
              src="/images/cabins/EscaleraParque.jpg"
              alt="Parque y deck exterior"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </Link>
        </div>
        <div className="flex justify-center pt-10">
          <GreenButton text="Ver Galería Completa" path="/cabins" img="/images/icons/arrowRight.png" />
        </div>
      </section>

      <section className="p-5 pt-16 md:px-20 md:pt-24 2xl:px-40 bg-surface">
        <div className="max-w-xl text-center mx-auto md:mx-0 md:text-left space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold text-ink">
            Explora Lugares y Actividades
          </h2>
          <p className="font-light text-lg text-muted">
            Todas las actividades y lugares que necesitas conocer para que este
            viaje sea inolvidable.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 pt-10 md:h-[440px]">
          {homeActivities
            .filter((activity) => activity.featured)
            .map((activity) => (
              <Link
                key={activity.title}
                href="/whatDo"
                className="group relative rounded-2xl overflow-hidden shadow-card aspect-[4/3] md:aspect-auto md:h-full"
              >
                <img
                  src={activity.img}
                  alt={activity.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-brand/85 via-green-brand/10 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-white text-xs font-semibold mb-2">
                    {activity.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white">{activity.title}</h3>
                </div>
              </Link>
            ))}

          <div className="flex flex-col divide-y divide-white/60 md:justify-center">
            {homeActivities
              .filter((activity) => !activity.featured)
              .map((activity) => (
                <Link
                  key={activity.title}
                  href="/whatDo"
                  className="group flex items-center gap-4 py-4 first:pt-0 last:pb-0 hover:pl-2 transition-all duration-300"
                >
                  <div className="w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden">
                    <img
                      src={activity.img}
                      alt={activity.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-green-brand">
                      {activity.category}
                    </span>
                    <h4 className="font-semibold text-ink">{activity.title}</h4>
                  </div>
                  <ChevronRightIcon className="w-5 h-5 text-muted ml-auto group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
          </div>
        </div>
        <div className="flex justify-center pt-10">
          <GreenButton text="Conocer Más" path="/whatDo" img="/images/icons/arrowRight.png" />
        </div>
      </section>

      <section className="px-5 pt-16 pb-16 md:px-20 md:pt-24 2xl:px-40">
        <div className="md:grid md:grid-cols-2 md:gap-10">
          <div className="space-y-3 md:content-center">
            <h2 className="text-3xl md:text-4xl font-bold text-ink">Nuestra Ubicación</h2>
            <p className="font-light text-muted">
              Ubicados en Villa Río Hermoso kilómetro 2189 de la Ruta Nacional
              40, a 25 km del centro San Martín de los Andes, nuestro complejo
              es el punto de partida perfecto para explorar la Patagonia.
            </p>
          </div>
          <div className="py-8 md:py-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3042.413832665414!2d-71.38258652341736!3d-40.31097227145669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961105a1576077ef%3A0xea98a9a499e686b1!2sCaba%C3%B1as%20frontera%20de%20los%20andes!5e0!3m2!1ses!2sar!4v1742235208336!5m2!1ses!2sar"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicacion Frontera de los Andes"
              className="w-full h-52 md:h-64 rounded-xl shadow-card"
            ></iframe>
          </div>
        </div>
        <div className="pt-10 space-y-4 md:grid md:grid-cols-2 md:gap-10 md:pt-16">
          <div className="md:content-center md:order-1">
            <div className="flex items-center space-x-2">
              <img src="/images/icons/locationGreen.png" alt="Ubicación" className="size-6" />
              <h3 className="font-semibold text-lg text-ink">Cabañas Frontera de los Andes</h3>
            </div>
            <p className="pt-2 text-muted">
              Te dejamos un video del recorrido desde San Martín de Los Andes hasta Cabañas Frontera de los Andes.
            </p>
          </div>
          <video controls className="w-full rounded-xl shadow-card md:order-0">
            <source src="/video/Ruta.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
    </main>
  );
}