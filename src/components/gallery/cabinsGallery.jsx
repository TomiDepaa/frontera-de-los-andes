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
    { src: "/images/cabins/Cabaña1.jpg", alt: "Cabaña Frontera de los Andes, vista exterior" },
    { src: "/images/cabins/Cabaña2Tranquera.jpg", alt: "Cabaña con tranquera de acceso" },
    { src: "/images/cabins/Cabaña3Parque.jpg", alt: "Cabaña rodeada de parque" },
    { src: "/images/cabins/CabañasInvierno.jpg", alt: "Cabañas nevadas en invierno" },
    { src: "/images/cabins/EscaleraParque.jpg", alt: "Escalera de acceso al parque" },
    { src: "/images/cabins/EstacionamientoInvierno.jpg", alt: "Estacionamiento nevado en invierno" },
    { src: "/images/cabins/in/Cocina.jpg", alt: "Cocina equipada de la cabaña" },
    { src: "/images/cabins/in/CocinaDeFrente.jpg", alt: "Vista frontal de la cocina" },
    { src: "/images/cabins/in/CocinaCostado.jpg", alt: "Vista lateral de la cocina" },
    { src: "/images/cabins/in/Living.jpg", alt: "Living de la cabaña" },
    { src: "/images/cabins/in/LivingZonaEstar.jpg", alt: "Zona de estar del living" },
    { src: "/images/cabins/in/ZonaDeEstar.jpg", alt: "Zona de estar" },
    { src: "/images/cabins/in/VistaZonaEstar.jpg", alt: "Vista de la zona de estar" },
    { src: "/images/cabins/in/BañoPileta.jpg", alt: "Baño con pileta" },
    { src: "/images/cabins/in/Bano.jpg", alt: "Baño de la cabaña" },
    { src: "/images/cabins/in/Ducha.jpg", alt: "Ducha del baño" },
    { src: "/images/cabins/in/HabitacionDoble.jpg", alt: "Habitación matrimonial" },
    { src: "/images/cabins/in/HabitacionDoble1.jpg", alt: "Habitación matrimonial, otro ángulo" },
    { src: "/images/cabins/in/HabitacionDoble2.jpg", alt: "Habitación matrimonial, vista adicional" },
    { src: "/images/cabins/in/HabitacionCuaduple4.jpg", alt: "Habitación con dos cuchetas" },
    { src: "/images/cabins/in/HabitacionCuaduple1.jpg", alt: "Habitación con dos cuchetas, otro ángulo" },
    { src: "/images/cabins/in/HabitacionCuaduple2.jpg", alt: "Habitación con dos cuchetas, vista adicional" },
    { src: "/images/cabins/in/HabitacionCuaduple3.jpg", alt: "Habitación con dos cuchetas, detalle" },
    { src: "/images/cabins/Cabana3Abajo.jpg", alt: "Cabaña vista desde abajo del parque" },
    { src: "/images/cabins/CabanasDesdeCalle.jpg", alt: "Cabañas vistas desde la calle" },
    { src: "/images/cabins/ParqueDesdeCalle.jpg", alt: "Parque de las cabañas visto desde la calle" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map(({ src, alt }, index) => (
        <a key={index} href={src} data-fancybox="gallery" data-src={src}>
          <img
            src={src}
            alt={alt}
            className="w-full h-44 lg:h-60 object-cover rounded-lg shadow-lg hover:opacity-80 cursor-pointer"
          />
        </a>
      ))}
    </div>
  );
}
