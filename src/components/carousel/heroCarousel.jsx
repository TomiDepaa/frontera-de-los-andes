"use client";
import { useEffect, useState } from "react";

const images = [
  "/images/carrouselHome/cabanasVerano.png",
  "/images/carrouselHome/cabanasInvierno.png",
];

export default function HeroCarousel({ interval = 5000 }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [interval]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {images.map((src, index) => (
        <img
          key={src}
          src={src}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Ir a la imagen ${index + 1}`}
              onClick={() => setCurrent(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === current ? "w-6 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}