"use client";
import React, { useState } from "react";
import CardPlacesAndActivitiesWhatToDo from "@/components/cardPlacesAndActivities/cardPlacesAndActivitiesWhatToDo";

export default function Activities() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <main className="relative">
      <section className="px-5 md:px-32 pt-32 pb-10 md:pb-24 space-y-4 bg-whatToDo bg-cover bg-center relative">
        <div className="absolute inset-0 bg-green-brand/50"></div>

        <div className="relative space-y-3 md:pt-20">
          <h1 className="text-3xl md:text-5xl text-bg-color font-bold drop-shadow-lg">
            Descubrí la magia de Patagonia
          </h1>
          <p className="text-bg-color text-base md:text-lg max-w-3xl">
            Desde nuestras cabañas, ubicadas en Villa Río Hermoso —a solo 25 km del centro de San Martín de los Andes—,
            podés disfrutar de una gran variedad de experiencias al aire libre. Recorré senderos entre bosques nativos,
            descubrí lagos y ríos de aguas cristalinas, y viví la magia de la Patagonia en cada estación del año.
          </p>
          <p className="text-bg-color text-base md:text-lg max-w-2xl italic">
            Trekkings, kayak, esquí, pesca o simplemente disfrutar un atardecer junto al río...
            acá siempre hay algo para hacer!
          </p>
        </div>
      </section>
      {activeCard !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setActiveCard(null)}
        />
      )}
      <section className="px-5 md:px-20 py-5 md:py-20 md:space-y-10">
        <h4 className="text-green-600 font-semibold">Relájate y disfruta</h4>
        <h2 className="pt-1 text-3xl font-bold">
          Lagos y ríos
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-center mt-4 md:justify-items-center">
          <CardPlacesAndActivitiesWhatToDo
            img="/images/places/lagoHermoso.jpg"
            alt="Lago hermoso"
            title="Lago Hermoso"
            description="El Lago Hermoso es un pintoresco destino natural ubicado en la Ruta de los Siete Lagos, a unos 35 km de San Martín de los Andes, Argentina. Ofrece una variedad de actividades durante todo el año, desde playas para nadar, practicar kayak y hacer senderismo en verano, hasta un centro de esquí en invierno. El área cuenta con opciones de alojamiento como campings y cabañas, así como servicios gastronómicos, siendo accesible por un corto camino de ripio desde la Ruta Nacional 40."
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
      <section className="px-5 md:px-20 py-5 md:py-20 md:space-y-10">
        <h4 className="text-green-600 font-semibold">Relájate y disfruta</h4>
        <h2 className="pt-1 text-3xl font-bold">
          Actividades para el invierno
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-center mt-4 md:justify-items-center">
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
            alt="Lago Hermoso Ski"
            title="Lago Hermoso Ski"
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
