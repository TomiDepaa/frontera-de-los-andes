"use client";
import { useMemo, useState } from "react";
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
  },
  {
    img: "/images/places/cerroChapelco.jpg",
    alt: "Cerro Chapelco",
    title: "Cerro Chapelco",
    category: "Nieve y Montaña",
    difficulty: "Moderada",
    description:
      "Reconocido internacionalmente como centro de esquí, el Cerro Chapelco ofrece pistas para todos los niveles en invierno, y trekking y mountain bike el resto del año. Sus miradores regalan una de las mejores vistas de la cordillera patagónica.",
  },
  {
    img: "/images/places/cascadaChachin.jpg",
    alt: "Cascada Chachín",
    title: "Cascada Chachín",
    category: "Trekking",
    difficulty: "Moderada",
    description:
      "Un sendero de bosque milenario conduce hasta este imponente salto de agua. La caminata es apta para toda la familia y es una de las excursiones más elegidas por quienes visitan San Martín de los Andes.",
  },
  {
    img: "/images/activities/pesca.jpg",
    alt: "Pesca con mosca",
    title: "Pesca con Mosca",
    category: "Ríos",
    difficulty: "Moderada",
    description:
      "Los ríos y lagos de la zona son un destino reconocido por pescadores de todo el mundo. Se pueden contratar guías locales para una jornada de pesca con mosca rodeados de paisajes patagónicos únicos.",
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
      <section className="relative pt-32 pb-16 md:pb-24 px-5 md:px-32 bg-whatToDo bg-cover bg-center">
        <div className="absolute inset-0 bg-green-brand/70"></div>
        <div className="relative text-gray-100 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold">¿Qué hacer?</h1>
          <p className="pt-4 text-lg font-light">
            Te damos algunas opciones para conocer lugares increíbles y
            algunas actividades en la zona, para que tu estadía sea
            inolvidable.
          </p>
          <div className="flex gap-8 pt-8">
            <div>
              <h4 className="text-2xl font-extrabold">{activities.length}</h4>
              <p className="font-light text-sm pt-1">Lugares destacados</p>
            </div>
            <div>
              <h4 className="text-2xl font-extrabold">Todo el año</h4>
              <p className="font-light text-sm pt-1">Actividades disponibles</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 md:px-20 pt-10 md:pt-16">
        <ActivityFilters
          categories={categories}
          active={activeFilter}
          onChange={setActiveFilter}
        />
      </section>

      <section className="px-5 md:px-20 py-10 md:py-16 space-y-16 md:space-y-24">
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