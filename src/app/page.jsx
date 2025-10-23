import ItemsInfo from "@/components/itemsInfo/itemsInfo";
import GreenButton from "@/components/buttons/greenButton";
import CardPlacesAndActivitiesHome from "@/components/cardPlacesAndActivities/cardPlacesAndActivitiesHome";
import CarouselBackground from "@/components/Carousel/carouselBackground";

export default function Home() {
  return (
    <main className="flex flex-col justify-between">
      <section className="relative w-full h-screen lg:h-svh pb-10 px-5 flex flex-col items-center justify-center overflow-hidden">
        <CarouselBackground />
        <div className="relative z-10 flex flex-col items-center text-center">
          <img
            className="h-40 lg:h-56"
            src="/images/Frontera_Trans.png"
            alt="Frontera de los Andes"
          />
          <h1 className="text-white text-center text-xl lg:text-3xl lg:font-medium pt-12 md:mx-20 lg:w-3/4 drop-shadow-md">
            Descubre una estadía única en Villa Río Hermoso, San Martín de los
            Andes, donde la naturaleza y la comodidad se encuentran.
          </h1>
        </div>
          <img
          className="absolute z-10 bottom-36 animate-bounce" 
          src="/images/icons/arrowDown.png" 
          alt="Flecha hacia abajo" 
        />
      </section>
      <section className="p-5 pt-14 md:px-20 lg:grid lg:grid-cols-2 ">
        <div>
          <div>
            <h4 className="text-green-600 font-semibold">Relájate y disfruta</h4>
            <h2 className="pt-1 text-3xl">
              <strong>Escape Perfecto en el Sur Argentino</strong>
            </h2>
            <img
            className="my-5 lg:hidden rounded-lg shadow-xxl w-full h-72 object-cover object-bottom"
            src="/images/cabins/Cabaña2Tranquera.jpg"
            alt="Frontera de los Andes"
          />
            <p className="pt-4 text-lg">
              En Frontera de los Andes te esperan cabañas completamentes equipadas
              en un entorno natural inigualable. Perfecto para familias, parejas,
              amigos y aventureros.
            </p>
          </div>
          <div className="pt-8 pb-8 space-y-5">
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
          <div className="flex justify-center">
            <GreenButton
              text="Conocer Más"
              path="/cabins"
              img="/images/icons/arrowRight.png"
            />
          </div>
        </div>
        <div>
          <img
            className="hidden lg:block rounded-lg shadow-xxl w-full lg:h-1/2 object-cover object-bottom"
            src="/images/cabins/Cabaña2Tranquera.jpg"
            alt="Frontera de los Andes"
          />
        </div>

      </section>
      <section className="p-5 pt-20 md:px-20">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold w-1/2 ">
            Explora Lugares y Actividades
          </h2>
          <p className="font-light text-lg">
            Todas las actividades y lugares que necesitas conocer para que este
            viaje sea inolvidable!
          </p>
        </div>
        <div className="grid grid-cols-2 pt-10 md:flex md:justify-center">
          <CardPlacesAndActivitiesHome
            img="/images/places/lagoHermoso.jpg"
            alt="Lago hermoso"
            title="Lago Hermoso"
            link="/whatDo"
          />
          <CardPlacesAndActivitiesHome
            img="/images/places/cascadaÑivinco.jpg"
            alt="Cascada Ñivinco"
            title="Cascada Ñivinco"
            link="/whatDo"
          />
          <CardPlacesAndActivitiesHome
            img="/images/activities/cerroChapelco.jpg"
            alt="Cerro Chapelco"
            title="Cerro Chapelco"
            link="/whatDo"
          />
          <CardPlacesAndActivitiesHome
            img="/images/activities/pesca.jpg"
            alt="Pesca con mosca"
            title="Pesca"
            link="/whatDo"
          />
        </div>
        <div className="flex justify-center pt-9">
          <GreenButton
            text="Conocer Más"
            path="/whatDo"
            img="/images/icons/arrowRight.png"
          />
        </div>
      </section>
      <section className="px-5 pt-20 md:px-20">
        <div className="md:grid md:grid-cols-2">
          <div className="space-y-2 md:content-center md:pe-7">
            <h2 className="text-3xl font-bold w-1/2 ">Nuestra Ubicación</h2>
            <p className="font-light">
              Ubicados en Villa Río Hermoso kilometro 2189 de la Ruta Nacional
              40, a 25 KM del centro San Martín de los Andes, nuestro complejo
              es el punto de partida perfecto para explorar la Patagonia.
            </p>
          </div>
          <div className="py-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3042.413832665414!2d-71.38258652341736!3d-40.31097227145669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961105a1576077ef%3A0xea98a9a499e686b1!2sCaba%C3%B1as%20frontera%20de%20los%20andes!5e0!3m2!1ses!2sar!4v1742235208336!5m2!1ses!2sar"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicacion Frontera de los Andes"
              className="w-full h-52  md:h-56"
            ></iframe>
          </div>
        </div>
        <div className="space-y-4 md:grid md:grid-cols-2">
          <div className="md:content-center md:order-1 md:ps-7">
            <div className="flex items-center space-x-2">
              <img src="/images/icons/locationGreen.png" alt="Ubicación" className="size-7" />
              <h3 className="font-bold text-emerald-800 text-lg">Cabañas Frontera de los Andes</h3>
            </div>
            <p>Te dejamos un video del recorrido desde San Martin de Los Andes hasta Cabanias Frontera de los Andes</p>
          </div>
          <video controls className="md:h-auto md:w-96 md:order-0">
            <source src="/video/Ruta.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
    </main>
  );
}
