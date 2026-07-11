export default function ActivityCard({
  img,
  alt,
  title,
  category,
  difficulty,
  description,
  reverse = false,
}) {
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
      </div>
    </div>
  );
}