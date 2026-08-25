"use client";

export default function ActivityFilters({ categories, active, onChange }) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((cat) => {
        const isActive = active === cat;
        return (
          <button
            key={cat}
            type="button"
            onClick={() => onChange(cat)}
            aria-pressed={isActive}
            className={`px-5 py-2 rounded-full text-sm font-semibold border transition-colors duration-200 ${
              isActive
                ? "bg-green-brand text-white border-green-brand shadow-card"
                : "bg-whitegreen-light text-green-brand border-transparent hover:bg-green-brand/10"
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}