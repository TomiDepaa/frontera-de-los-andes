"use client";
import React, { useState } from "react";
import CardPlacesAndActivitiesWhatToDo from "@/components/cardPlacesAndActivities/cardPlacesAndActivitiesWhatToDo";

export default function Activities() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <main className="relative">
      <section className="px-5 md:px-32 pt-32 pb-5 md:pb-20 space-y-2 bg-whatToDo bg-cover bg-center relative">
        <div className="absolute inset-0 bg-green-brand/50"></div>
        <h1 className="text-3xl text-bg-color font-bold relative md:pt-20">
          ¿Qué hacer?
        </h1>
        <p className="text-bg-color relative">
          ¿Todavía no sabes qué hacer? Te damos algunas opciones para conocer
          lugares increíbles y algunas actividades en la zona.
        </p>
      </section>
      {activeCard !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setActiveCard(null)}
        />
      )}
      <section className="px-5 md:px-20 py-5 md:py-20 md:space-y-10">
        <h2 className="text-2xl font-semibold ">
          Lo que no puede faltar en tu estadia
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-center mt-4 md:justify-items-center">
          <CardPlacesAndActivitiesWhatToDo
            img="/images/places/lagoHermoso.jpg"
            alt="Lago hermoso"
            title="Lago Hermoso"
            description="Lago Hermoso está ubicado en el KM xxxxx, de la ruta 40, un lugar ideal para disfrutar de la naturaleza."
            isActive={activeCard === 0}
            onClick={() => setActiveCard(activeCard === 0 ? null : 0)}
          />

          <CardPlacesAndActivitiesWhatToDo
            img="/images/places/cerroChapelco.jpg"
            alt="Cerro Chapelco"
            title="Cerro Chapelco"
            description="El Cerro Chapelco es un centro de esquí reconocido internacionalmente, con increíbles vistas y actividades todo el año."
            isActive={activeCard === 1}
            onClick={() => setActiveCard(activeCard === 1 ? null : 1)}
          />

          <CardPlacesAndActivitiesWhatToDo
            img="/images/places/cascadaChachin.jpg"
            alt="Cascada Chachín"
            title="Cascada Chachín"
            description="La cascada Chachín es un hermoso salto de agua rodeado de un bosque milenario, accesible mediante una caminata."
            isActive={activeCard === 2}
            onClick={() => setActiveCard(activeCard === 2 ? null : 2)}
          />

          <CardPlacesAndActivitiesWhatToDo
            img="/images/places/lagoHermoso.jpg"
            alt="Lago hermoso"
            title="Lago Hermoso"
            description="Lago Hermoso está ubicado en el KM xxxxx, de la ruta 40, un lugar ideal para disfrutar de la naturaleza."
            isActive={activeCard === 3}
            onClick={() => setActiveCard(activeCard === 3 ? null : 3)}
          />

          <CardPlacesAndActivitiesWhatToDo
            img="/images/places/cerroChapelco.jpg"
            alt="Cerro Chapelco"
            title="Cerro Chapelco"
            description="El Cerro Chapelco es un centro de esquí reconocido internacionalmente, con increíbles vistas y actividades todo el año."
            isActive={activeCard === 4}
            onClick={() => setActiveCard(activeCard === 4 ? null : 4)}
          />

          <CardPlacesAndActivitiesWhatToDo
            img="/images/places/cascadaChachin.jpg"
            alt="Cascada Chachín"
            title="Cascada Chachín"
            description="La cascada Chachín es un hermoso salto de agua rodeado de un bosque milenario, accesible mediante una caminata."
            isActive={activeCard === 5}
            onClick={() => setActiveCard(activeCard === 5 ? null : 5)}
          />
        </div>
      </section>
    </main>
  );
}
