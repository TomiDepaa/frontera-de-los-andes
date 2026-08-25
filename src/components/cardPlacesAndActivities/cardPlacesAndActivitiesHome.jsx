import Link from "next/link";

export default function CardPlacesAndActivitiesHome({ img, alt, title, link }) {
  return (
    <Link href={link}>
      <div className="group flex flex-col items-center text-center h-48 md:w-44 m-2 py-6 px-3 space-y-5 bg-white rounded-2xl border border-surface shadow-card cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
        <div className="rounded-full w-20 h-20 overflow-hidden bg-whitegreen-light flex items-center justify-center ring-2 ring-transparent group-hover:ring-green-brand/30 transition-all duration-300">
          <img src={img} alt={alt} className="w-full h-full object-cover" />
        </div>
        <h3 className="text-base font-semibold text-ink">{title}</h3>
      </div>
    </Link>
  );
}