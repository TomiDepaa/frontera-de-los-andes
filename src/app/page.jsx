import ItemsInfo from "@/components/itemsInfo/itemsInfo";
import GreenButton from "@/components/buttons/greenButton";
import CardPlacesAndActivitiesHome from "@/components/cardPlacesAndActivities/cardPlacesAndActivitiesHome";
import HeroCarousel from "@/components/carousel/heroCarousel";

export default function Home() {
  return (
    <main className="flex flex-col justify-between overflow-hidden">
      <section className="relative w-full min-h-[600px] md:min-h-[720px] pt-32 pb-16 px-5 flex flex-col items-center justify-center text-center overflow-hidden">
        <HeroCarousel />
        <div className="absolute inset-0 bg-green-brand/70"></div>

        <div className="relative z-[1]">
          <h1 className="text-2xl text-white pb-3">Bienvenidos a</h1>
          <img
            className="h-32 md:h-40 mx-auto"
            src="/images/Frontera_Trans.png"
            alt="Frontera de los Andes"
          />
          <p className="text-white/85 text-center py-8 max-w-xl mx-auto">
            Descubre una estadía única en Villa Río Hermoso, San Martín de los
            Andes, donde la naturaleza y la comodidad se encuentran.
          </p>
          <div className="flex justify-center">
            <GreenButton text="Conocer Más" path="/cabins" img="/images/icons/arrowRight.png" />
          </div>
        </div>
      </section>

      <section className="p-5 md:px-20 md:py-24">
        <div className="max-w-2xl">
          <h4 className="text-green-brand font-semibold">Relájate y disfruta</h4>
          <h2 className="pt-2 text-3xl md:text-4xl font-bold text-ink">
            Escape perfecto en el sur argentino
          </h2>
          <p className="pt-4 text-lg text-muted">
            En Frontera de los Andes te esperan cabañas completamente equipadas
            en un entorno natural inigualable. Perfecto para familias, parejas,
            amigos y aventureros.
          </p>
        </div>
        <div className="pt-14 pb-8 grid gap-8 md:grid-cols-3">
          <ItemsInfo
            img="/images/icons/forest.png"
            title="Entorno Natural"
            paragraph="Rodeado de bosques, ríos y montañas, ideal para desconectar y recargar energías."
          />
          <ItemsInfo
            img="/images/icons/wifi.png"
            title="Internet Satelital"
            paragraph="Para que te mantengas conectado si lo necesitas."
          />
          <ItemsInfo
            img="/images/icons/knife.png"
            title="Cocina Equipada"
            paragraph="Electrodomésticos modernos y utensilios de cocina para tu comodidad."
          />
        </div>
      </section>

      <section className="p-5 pt-16 md:px-20 md:pt-24 bg-surface">
        <div className="max-w-xl text-center mx-auto md:mx-0 md:text-left space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold text-ink">
            Explora Lugares y Actividades
          </h2>
          <p className="font-light text-lg text-muted">
            Todas las actividades y lugares que necesitas conocer para que este
            viaje sea inolvidable.
          </p>
        </div>
        <div className="grid grid-cols-2 pt-10 md:flex md:justify-center md:flex-wrap">
          <CardPlacesAndActivitiesHome img="/images/places/lagoHermoso.jpg" alt="Lago hermoso" title="Lago Hermoso" link="/whatDo" />
          <CardPlacesAndActivitiesHome img="/images/places/cascadaÑivinco.jpg" alt="Cascada Ñivinco" title="Cascada Ñivinco" link="/whatDo" />
          <CardPlacesAndActivitiesHome img="/images/activities/cerroChapelco.jpg" alt="Cerro Chapelco" title="Cerro Chapelco" link="/whatDo" />
          <CardPlacesAndActivitiesHome img="/images/activities/pesca.jpg" alt="Pesca con mosca" title="Pesca" link="/whatDo" />
        </div>
        <div className="flex justify-center pt-10">
          <GreenButton text="Conocer Más" path="/whatDo" img="/images/icons/arrowRight.png" />
        </div>
      </section>

      <section className="px-5 pt-16 pb-16 md:px-20 md:pt-24">
        <div className="md:grid md:grid-cols-2 md:gap-10">
          <div className="space-y-3 md:content-center">
            <h2 className="text-3xl md:text-4xl font-bold text-ink">Nuestra Ubicación</h2>
            <p className="font-light text-muted">
              Ubicados en Villa Río Hermoso kilómetro 2189 de la Ruta Nacional
              40, a 25 km del centro San Martín de los Andes, nuestro complejo
              es el punto de partida perfecto para explorar la Patagonia.
            </p>
          </div>
          <div className="py-8 md:py-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3042.413832665414!2d-71.38258652341736!3d-40.31097227145669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961105a1576077ef%3A0xea98a9a499e686b1!2sCaba%C3%B1as%20frontera%20de%20los%20andes!5e0!3m2!1ses!2sar!4v1742235208336!5m2!1ses!2sar"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicacion Frontera de los Andes"
              className="w-full h-52 md:h-64 rounded-xl shadow-card"
            ></iframe>
          </div>
        </div>
        <div className="pt-10 space-y-4 md:grid md:grid-cols-2 md:gap-10 md:pt-16">
          <div className="md:content-center md:order-1">
            <div className="flex items-center space-x-2">
              <img src="/images/icons/locationGreen.png" alt="Ubicación" className="size-6" />
              <h3 className="font-semibold text-lg text-ink">Cabañas Frontera de los Andes</h3>
            </div>
            <p className="pt-2 text-muted">
              Te dejamos un video del recorrido desde San Martín de Los Andes hasta Cabañas Frontera de los Andes.
            </p>
          </div>
          <video controls className="w-full rounded-xl shadow-card md:order-0">
            <source src="/video/Ruta.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
    </main>
  );
}