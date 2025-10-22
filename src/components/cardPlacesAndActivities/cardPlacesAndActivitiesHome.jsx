import Link from "next/link";

export default function CardPlacesAndActivitiesHome({ img, alt, title, link }) {
    return (
      <Link href={link}>
        <div className="flex flex-col items-center text-center h-52 md:w-44 m-2 py-4 space-y-8 border rounded-lg shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105">
          <img src={img} alt={alt} className="rounded-full w-24 h-24 object-cover" />
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
      </Link>
    );
  }