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
    </div>
  );
}