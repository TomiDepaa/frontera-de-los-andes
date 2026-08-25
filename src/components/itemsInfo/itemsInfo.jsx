export default function ItemsInfo({ img, title, paragraph }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="flex-shrink-0 w-11 h-11 rounded-full bg-whitegreen-light flex items-center justify-center">
        <img src={img} alt="" className="size-5" />
      </div>
      <div>
        <h3 className="font-semibold text-lg text-ink">{title}</h3>
        <p className="font-light text-muted pt-1">{paragraph}</p>
      </div>
    </div>
  );
}