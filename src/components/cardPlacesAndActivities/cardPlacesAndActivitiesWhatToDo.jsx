"use client";

export default function CardPlacesAndActivitiesWhatToDo({
  img,
  alt,
  title,
  description,
  isActive,
  onClick,
}) {
  return (
    <>
      <div
        className={`relative flex flex-col items-center h-52 md:w-48 m-2 py-4 space-y-8 border rounded-lg shadow-lg  cursor-pointer transition-transform duration-300 hover:scale-105 ${
          isActive ? "hidden" : ""
        }`}
        onClick={onClick}
      >
        <img
          src={img}
          alt={alt}
          className="rounded-full w-24 h-24 object-cover transition-all duration-300"
        />
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>

      {isActive && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="relative bg-white p-8 w-96 md:w-3/5 rounded-lg shadow-2xl z-50">
            <button
              className="absolute top-2 right-2 text-2xl font-bold text-gray-600 hover:text-gray-900"
              onClick={(e) => {
                e.stopPropagation();
                onClick(null); 
              }}
            >
              ✕
            </button>

            <img
              src={img}
              alt={alt}
              className="rounded-lg w-full h-56 md:h-80 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mt-2">{description}</p>
          </div>
        </div>
      )}
    </>
  );
}
