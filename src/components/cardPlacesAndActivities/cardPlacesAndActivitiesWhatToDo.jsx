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
        className={`group relative flex flex-col items-center text-center h-52 md:w-48 m-2 py-6 px-3 space-y-5 bg-white border border-surface rounded-2xl shadow-card cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover ${
          isActive ? "hidden" : ""
        }`}
        onClick={onClick}
      >
        <div className="rounded-full w-20 h-20 overflow-hidden bg-whitegreen-light ring-2 ring-transparent group-hover:ring-green-brand/30 transition-all duration-300">
          <img
            src={img}
            alt={alt}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-base font-semibold text-ink">{title}</h3>
      </div>

      {isActive && (
        <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
          <div className="relative bg-white p-6 md:p-8 w-full max-w-lg rounded-2xl shadow-soft z-50">
            <button
              className="absolute top-3 right-3 flex items-center justify-center w-8 h-8 rounded-full bg-surface text-ink hover:bg-green-brand hover:text-white transition-colors duration-200"
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
              className="rounded-xl w-full h-56 md:h-72 object-cover mb-5"
            />
            <h3 className="text-xl font-semibold text-ink">{title}</h3>
            <p className="mt-2 text-muted leading-relaxed">{description}</p>
          </div>
        </div>
      )}
    </>
  );
}