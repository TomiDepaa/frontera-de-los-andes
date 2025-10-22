"use client";
import { useEffect, useState } from "react";

const images = [
  "/images/carrouselHome/CabañasVerano.png",
  "/images/carrouselHome/CabañasInvierno.png",
  "/images/carrouselHome/Cabana3Abajo.jpg",
];

export default function CarouselBackground() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Imagen ${index + 1}`}
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      
      <div className="absolute inset-0 bg-black/60"></div>
    </div>
  );
}

