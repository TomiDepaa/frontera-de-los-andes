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
      "Ubicado en el KM xxxxx de la Ruta 40, Lago Hermoso es uno de los rincones más tranquilos de la zona. Sus aguas cristalinas y el entorno de bosque nativo lo convierten en el lugar ideal para un picnic, una caminata liviana junto a la costa o simplemente desconectar en familia.",
    lat: -40.3553838,
    lng: -71.5219477,
  },
  {
    img: "/images/places/cerroChapelco.jpg",
    alt: "Cerro Chapelco",
    title: "Cerro Chapelco",
    category: "Nieve y Montaña",
    difficulty: "Moderada",
    description:
      "Reconocido internacionalmente como centro de esquí, el Cerro Chapelco ofrece pistas para todos los niveles en invierno, y trekking y mountain bike el resto del año. Sus miradores regalan una de las mejores vistas de la cordillera patagónica.",
    lat: -40.1976935,
    lng: -71.3189281,
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