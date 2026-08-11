import { MapPinIcon } from "@heroicons/react/24/outline";

// Ubicación de Cabañas Frontera de los Andes (Villa Río Hermoso, Ruta 40 km 2189)
const CABIN_LAT = -40.31097227145669;
const CABIN_LNG = -71.38258652341736;

export default function ActivityCard({
  img,
  alt,
  title,
  category,
  difficulty,
  description,
  lat,
  lng,
  reverse = false,
}) {
  const hasLocation = typeof lat === "number" && typeof lng === "number";

  const mapEmbedUrl = hasLocation
    ? `https://www.google.com/maps?q=${lat},${lng}&hl=es&z=13&output=embed`
    : null;

  const directionsUrl = hasLocation
    ? `https://www.google.com/maps/dir/?api=1&origin=${CABIN_LAT},${CABIN_LNG}&destination=${lat},${lng}&travelmode=driving`
    : null;

  return (
    <div
      className={`grid md:grid-cols-2 gap-6 md:gap-12 items-center ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="rounded-2xl overflow-hidden shadow-card aspect-[4/3] md:aspect-[5/4]">
        <img
          src={img}
          alt={alt}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
        />
      </div>

      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-whitegreen-light text-green-brand text-xs font-semibold">
            {category}
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-surface text-muted text-xs font-semibold">
            {difficulty}
          </span>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-ink">{title}</h3>
        <p className="text-muted leading-relaxed">{description}</p>

        {hasLocation && (
          <div className="space-y-3 pt-2">
            <div className="rounded-xl overflow-hidden shadow-card">
              <iframe
                src={mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Mapa de ${title}`}
                className="w-full h-40 md:h-48"
              ></iframe>
            </div>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-brand text-white text-sm font-semibold py-2 px-5 rounded-full shadow-card hover:bg-emerald-900 transition-colors"
            >
              <MapPinIcon className="w-5 h-5" />
              Cómo llegar desde las cabañas
            </a>
          </div>
        )}
      </div>
    </div>
  );
}