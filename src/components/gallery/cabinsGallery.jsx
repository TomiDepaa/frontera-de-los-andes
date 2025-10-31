"use client";
import { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default function CabinsGallery() {
  useEffect(() => {
    Fancybox.bind("[data-fancybox='gallery']", {
      infinite: false,
    });
    return () => {
      Fancybox.destroy();
    };
  }, []);

  const images = [
    "/images/cabins/Cabaña1.jpg",
    "/images/cabins/Cabaña2Tranquera.jpg",
    "/images/cabins/Cabaña3Parque.jpg",
    "/images/cabins/CabañasInvierno.jpg",
    "/images/cabins/EscaleraParque.jpg",
    "/images/cabins/EstacionamientoInvierno.jpg",
    "/images/cabins/in/Cocina.jpg",
    "/images/cabins/in/CocinaDeFrente.jpg",
    "/images/cabins/in/CocinaCostado.jpg",
    "/images/cabins/in/Living.jpg",
    "/images/cabins/in/LivingZonaEstar.jpg",
    "/images/cabins/in/ZonaDeEstar.jpg",
    "/images/cabins/in/VistaZonaEstar.jpg",
    "/images/cabins/in/BañoPileta.jpg",
    "/images/cabins/in/Bano.jpg",
    "/images/cabins/in/Ducha.jpg",
    "/images/cabins/in/HabitacionDoble.jpg",
    "/images/cabins/in/HabitacionDoble1.jpg",
    "/images/cabins/in/HabitacionDoble2.jpg",
    "/images/cabins/in/HabitacionCuaduple4.jpg",
    "/images/cabins/in/HabitacionCuaduple1.jpg",
    "/images/cabins/in/HabitacionCuaduple2.jpg",
    "/images/cabins/in/HabitacionCuaduple3.jpg",
    "/images/cabins/Cabana3Abajo.jpg",
    "/images/cabins/CabanasDesdeCalle.jpg",
    "/images/cabins/ParqueDesdeCalle.jpg",
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((src, index) => (
        <a key={index} data-fancybox="gallery" data-src={src}>
          <img
            src={src}
            alt={`Imagen ${index + 1}`}
            className="w-full h-44 lg:h-60 object-cover rounded-lg shadow-lg hover:opacity-80 cursor-pointer"
          />
        </a>
      ))}
    </div>
  );
}
