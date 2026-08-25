"use client";
import { useMemo, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import ActivityCard from "@/components/cardPlacesAndActivities/activityCard";
import ActivityFilters from "@/components/cardPlacesAndActivities/activityFilters";

const activities = [
  {
    img: "/images/places/lagoHermoso.jpg",
    alt: "Lago Hermoso",
    title: "Lago Hermoso",
    category: "Lagos",
    difficulty: "Fácil",
    description:
      "Dentro del Parque Nacional Lanín, a 25 km de San Martín de los Andes y muy cerca de Villa Río Hermoso, este lago de origen glaciario es uno de los rincones más tranquilos de la Ruta de los Siete Lagos. Sus aguas cristalinas y el bosque de lengas y coihues que lo rodea lo convierten en el lugar ideal para acampar, pescar, remar en kayak o simplemente relajarse en sus playas de arena fina y canto rodado.",
    lat: -40.3606544,
    lng: -71.4768227,
  },
  {
    img: "/images/activities/cerroChapelco.jpg",
    alt: "Cerro Chapelco",
    title: "Cerro Chapelco",
    category: "Nieve y Montaña",
    difficulty: "Moderada",
    description:
      "Reconocido internacionalmente como centro de esquí, el Cerro Chapelco ofrece pistas para todos los niveles en invierno, y trekking y mountain bike el resto del año. Sus miradores regalan una de las mejores vistas de la cordillera patagónica.",
    lat: -40.1978326,
    lng: -71.3195105,
  },
  {
    img: "/images/places/cascadaChachin.jpg",
    alt: "Cascada Chachín",
    title: "Cascada Chachín",
    category: "Trekking",
    difficulty: "Moderada",
    description:
      "Un sendero de bosque milenario conduce hasta este imponente salto de agua. La caminata es apta para toda la familia y es una de las excursiones más elegidas por quienes visitan San Martín de los Andes.",
    lat: -40.1407478,
    lng: -71.6712301,
  },
  {
    img: "/images/activities/pesca.jpg",
    alt: "Pesca con mosca",
    title: "Pesca con Mosca",
    category: "Ríos",
    difficulty: "Moderada",
    description:
      "Los ríos y lagos de la zona son un destino reconocido por pescadores de todo el mundo. Se pueden contratar guías locales para una jornada de pesca con mosca rodeados de paisajes patagónicos únicos.",
    lat: -40.1764375,
    lng: -71.3804375,
  },
  {
    img: "/images/places/lagoLacar.jpg",
    alt: "Lago Lácar",
    title: "Lago Lácar",
    category: "Lagos",
    difficulty: "Fácil",
    description:
      "El gran lago de San Martín de los Andes, con aguas de tonos que van del azul intenso al verde esmeralda. Sus costas ofrecen playas como Catritre y Quila Quina, paseos en lancha, kayak y miradores con vistas panorámicas de la ciudad.",
    lat: -40.1606,
    lng: -71.3584,
  },
  {
    img: "/images/places/lagoMachonico.jpg",
    alt: "Lago Machónico",
    title: "Lago Machónico",
    category: "Lagos",
    difficulty: "Fácil",
    description:
      "El primero de los siete lagos que se encuentran a la vera de la mítica Ruta de los Siete Lagos. Sus aguas calmas y de un azul profundo se contemplan desde un amplio mirador sobre la ruta, ideal para una parada fotográfica en el camino.",
    lat: -40.32879492003899,
    lng: -71.412882210394,
  },
  {
    img: "/images/places/lagoMeliquina.jpg",
    alt: "Lago Meliquina",
    title: "Lago Meliquina",
    category: "Lagos",
    difficulty: "Fácil",
    description:
      "Rodeado de bosques andinopatagónicos de lengas y coihues, el Lago Meliquina ocupa un amplio valle perpendicular a la cordillera. Su costa este alberga la pintoresca Villa Meliquina, punto de partida para varias excursiones de la zona.",
    lat: -40.34250340130558,
    lng: -71.34068046013275,
  },
  {
    img: "/images/places/lagoFalkner.jpg",
    alt: "Lago Falkner",
    title: "Lago Falkner",
    category: "Lagos",
    difficulty: "Fácil",
    description:
      "Uno de los lagos más bonitos de la Ruta de los Siete Lagos, protegido del viento y con enormes playas de arena ideales para el descanso. Un clásico infaltable para quienes recorren el camino hacia Villa La Angostura.",
    lat: -40.442642724737425,
    lng: -71.53919933060652,
  },
  {
    img: "/images/places/lagoVillarino.jpeg",
    alt: "Lago Villarino",
    title: "Lago Villarino",
    category: "Lagos",
    difficulty: "Fácil",
    description:
      "Vecino del Lago Falkner y parte del recorrido de los Siete Lagos, el Villarino se destaca por sus aguas tranquilas rodeadas de bosque nativo. Un excelente punto para detenerse a disfrutar del paisaje cordillerano.",
    lat: -40.45134440782516,
    lng: -71.57273371682767,
  },
  {
    img: "/images/places/lagoFiloHuaHum.jpg",
    alt: "Lago Filo Hua Hum",
    title: "Lago Filo Hua Hum",
    category: "Lagos",
    difficulty: "Moderada",
    description:
      "Dentro del Parque Nacional Lanín y cercano a Villa Meliquina, este lago es uno de los preferidos por los pescadores que buscan truchas arcoíris y fontinalis. Cuenta con un camping y un pequeño refugio junto a la costa.",
    lat: -40.498485110348355,
    lng: -71.30032202178437,
  },
  {
    img: "/images/places/rioCaleufu.jpg",
    alt: "Río Caleufú - Pozones de Caleufú",
    title: "Río Caleufú (Pozones de Caleufú)",
    category: "Ríos",
    difficulty: "Moderada",
    description:
      "El Río Caleufú nace de la unión de los ríos Filo Hua Hum y Meliquina, y en uno de sus tramos el agua fue erosionando las piedras dando lugar a pozones profundos de un turquesa intenso. Ideal para trekking, mountain bike y una pausa refrescante en verano. El acceso es por camino de ripio y no está señalizado, así que conviene ir con el recorrido descargado.",
    lat: -40.49330164954184,
    lng: -71.21245188577504,
  },
  {
    img: "/images/places/villaMeliquina.jpg",
    alt: "Villa Meliquina",
    title: "Villa Meliquina",
    category: "Lagos",
    difficulty: "Fácil",
    description:
      "Una pequeña aldea de montaña a orillas del Lago Meliquina, sin red eléctrica y abastecida por energía solar y eólica. Es la puerta de entrada a excursiones como el Lago Filo Hua Hum, Casa de Piedra y los Pozones de Caleufú.",
    lat: -40.382526223122824,
    lng: -71.2583359097525,
  },
  {
    img: "/images/places/playaYuco.jpg",
    alt: "Playa de Yuco",
    title: "Playa de Yuco",
    category: "Lagos",
    difficulty: "Fácil",
    description:
      "Conocida como la playa 'caribeña' de la Patagonia por el color turquesa de sus aguas, Yuco reúne cinco playas conectadas por senderos dentro del Parque Nacional Lanín, sobre la margen norte del Lago Lácar. Cuenta con áreas de picnic y senderos de trekking de baja dificultad.",
    lat: -40.16522,
    lng: -71.52661,
  },
  {
    img: "/images/places/quilaQuina.jpg",
    alt: "Quila Quina",
    title: "Quila Quina",
    category: "Lagos",
    difficulty: "Fácil",
    description:
      "Villa veraniega sobre la costa sur del Lago Lácar, con playas de arena, una cascada, una fuente de agua mineral y pinturas rupestres de la comunidad mapuche Curruhuinca. Se accede en auto por camino de montaña o en excursión en lancha desde San Martín de los Andes.",
    lat: -40.17038922038547,
    lng: -71.44124963489081,
  },
  {
    img: "/images/places/cascadaNivinco.jpg",
    alt: "Cascada Ñivinco",
    title: "Cascada Ñivinco",
    category: "Trekking",
    difficulty: "Fácil",
    description:
      "Un sendero corto y accesible para toda la familia, dentro del Parque Nacional Nahuel Huapi, que atraviesa el bosque andino patagónico y cruza el río Ñivinco en varios tramos hasta llegar a una imponente cascada. Ideal como parada en el recorrido de la Ruta de los Siete Lagos.",
    lat: -40.4876,
    lng: -71.6637,
  },
  {
    img: "/images/places/lagoHermosoSki.jpg",
    alt: "Lago Hermoso Ski",
    title: "Lago Hermoso Ski",
    category: "Nieve y Montaña",
    difficulty: "Moderada",
    description:
      "El centro de esquí más nuevo de la región, dentro del Parque Nacional Lanín y sobre la Ruta de los Siete Lagos. Con cupo diario limitado, ofrece pistas para todo nivel, esquí nórdico y de travesía, caminatas con raquetas, cabalgatas y paseos en moto de nieve, con vistas privilegiadas de la cordillera.",
    lat: -40.357031436347,
    lng: -71.44975539696829,
  },
];

export default function Activities() {
  const categories = useMemo(
    () => ["Todos", ...Array.from(new Set(activities.map((a) => a.category)))],
    []
  );
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filteredActivities =
    activeFilter === "Todos"
      ? activities
      : activities.filter((a) => a.category === activeFilter);

  return (
    <main>
      <section className="relative min-h-[65vh] md:min-h-[80vh] lg:min-h-screen flex flex-col justify-center pt-24 px-5 md:px-32 2xl:px-48 pb-14 md:pb-20 bg-whatToDo bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-t from-green-brand via-green-brand/55 to-green-brand/10"></div>

        <div className="relative text-gray-100 max-w-2xl">
          <span className="inline-block px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-white text-xs font-semibold">
            Actividades y puntos de interés
          </span>
          <h1 className="pt-4 text-4xl md:text-6xl font-bold leading-tight">
            ¿Qué hacer en la Patagonia?
          </h1>
          <p className="pt-4 text-lg font-light text-white/85 max-w-xl">
            Te damos algunas opciones para conocer lugares increíbles y
            actividades en la zona, para que tu estadía sea inolvidable.
          </p>
          <div className="flex gap-10 pt-8 mt-8 border-t border-white/20">
            <div>
              <h4 className="text-3xl font-extrabold">{activities.length}</h4>
              <p className="font-light text-sm pt-1 text-white/70">
                Lugares destacados
              </p>
            </div>
            <div>
              <h4 className="text-3xl font-extrabold">Todo el año</h4>
              <p className="font-light text-sm pt-1 text-white/70">
                Actividades disponibles
              </p>
            </div>
          </div>
        </div>

        <a
          href="#actividades"
          aria-label="Ir a las actividades"
          className="absolute bottom-5 left-1/2 -translate-x-1/2 z-[1]"
        >
          <ChevronDownIcon className="w-7 h-7 text-white/80 hover:text-white transition-colors animate-bounce" />
        </a>
      </section>

      <section id="actividades" className="px-5 md:px-20 2xl:px-40 pt-10 md:pt-16">
        <ActivityFilters
          categories={categories}
          active={activeFilter}
          onChange={setActiveFilter}
        />
      </section>

      <section className="px-5 md:px-20 2xl:px-40 py-10 md:py-16 space-y-16 md:space-y-24">
        {filteredActivities.length > 0 ? (
          filteredActivities.map((activity, index) => (
            <ActivityCard
              key={activity.title}
              {...activity}
              reverse={index % 2 !== 0}
            />
          ))
        ) : (
          <p className="text-muted text-center py-10">
            No hay actividades disponibles para este filtro por el momento.
          </p>
        )}
      </section>
    </main>
  );
}