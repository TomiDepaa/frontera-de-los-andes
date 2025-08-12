export default function ItemsInfo({ img, title, paragraph }) {
  return (
    <>
      <div>
        <div className="flex space-x-3">
          <img src={`${img}`} alt="Bosque" className="size-6" />
          <h3 className="font-semibold text-lg">{title}</h3>
        </div>
        <p className="font-light">
          {paragraph}
        </p>
      </div>
    </>
  );
}
