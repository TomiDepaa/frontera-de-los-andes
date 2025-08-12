"use client";
import CabinsGallery from "@/components/gallery/cabinsGallery";

export default function Cabins() {
  return (
    <>
      <main>
        <section className="pt-28 w-full relative bg-cabins-headCabins bg-cover bg-center">
          <div className="absolute inset-0 bg-green-brand/80"></div>
          <div className="px-5 md:px-32 text-gray-200">
            <h1 className="text-4xl font-bold relative">
              Acerca de Nuestras Cabañas
            </h1>
            <p className="pt-3 text-lg font-light relative">
              Disfruta de una estancia única en nuestras acogedoras cabañas en
              Villa Río Hermoso, San Martin de los Andes , rodeadas de
              naturaleza y equipadas con todo el confort para tu descanso.
            </p>
            <div className="py-10 space-y-7 relative">
              <div className="space-y-1">
                <h4 className="pl-1 text-2xl font-extrabold">3</h4>
                <p className="font-light">Cabañas disponibles</p>
              </div>
              <div className="space-y-1">
                <h4 className="pl-1 text-2xl font-extrabold">6 personas</h4>
                <p className="font-light">Capacidad máxima por cabaña</p>
              </div>
              <div className="space-y-1">
                <h4 className="text-2xl font-extrabold">Servicios incluidos</h4>
                <p className="font-light">Wi-Fi, calefación, y muchos más</p>
              </div>
            </div>
          </div>
        </section>
        <section className="px-5 md:px-20 md:py-20 space-y-5 flex flex-col items-center md:grid md:grid-cols-2 md:space-x-5">
          <div className="pt-10 space-y-3">
            <h1 className="text-3xl font-bold">Info de las Cabañas</h1>
            <p className="text-lg">
              Contamos con tres cabañas para 6 personas compuestas de dos
              recámaras, una con cama matrimonial y la otra por dos cuchetas, un
              baño, cocina completa, sala, deck individual para cada cabaña y un
              hermoso parque.
            </p>
          </div>
          <div>
          <img
            src="/images/cabins/CabanasDesdeCalle.jpg"
            alt="Cabañas"
            className="size-96 md:w-full h-auto rounded-lg"
          />
          </div>
        </section>
        <section className="px-5 md:px-20 py-10 flex flex-col items-center md:items-stretch">
          <div className="">
            <h2 className="text-3xl font-bold ">
              Servicios con los que contamos
            </h2>
            <ul className="grid grid-cols-2 gap-x-2 list-inside space-y-5 md:grid-cols-4 ">
              <div className="pt-5 flex space-x-2 text-center">
                <img
                  src="/images/icons/wifi.png"
                  alt="Wi-Fi"
                  className="size-6"
                />
                <li className="font-semibold">Wi-Fi satelital</li>
              </div>
              <div className="flex space-x-2 text-center">
                <img
                  src="/images/icons/tv.png"
                  alt="Wi-Fi"
                  className="size-6"
                />
                <li className="font-semibold">Smart TV</li>
              </div>
              <div className="flex space-x-2 text-center">
                <img
                  src="/images/icons/kitchen.png"
                  alt="Wi-Fi"
                  className="size-6"
                />
                <li className="font-semibold">Cocina completa</li>
              </div>
              <div className="flex space-x-2 text-center">
                <img
                  src="/images/icons/microwave.png"
                  alt="Wi-Fi"
                  className="size-6"
                />
                <li className="font-semibold">Electrodomésticos</li>
              </div>
              <div className="flex space-x-2 text-center">
                <img
                  src="/images/icons/knife.png"
                  alt="Wi-Fi"
                  className="size-6"
                />
                <li className="font-semibold">Vajilla completa</li>
              </div>
              <div className="flex space-x-2 text-center">
                <img
                  src="/images/icons/outdoorGrill.png"
                  alt="Wi-Fi"
                  className="size-6"
                />
                <li className="font-semibold">Parrilla</li>
              </div>
              <div className="flex space-x-2 text-center">
                <img
                  src="/images/icons/fireplace.png"
                  alt="Wi-Fi"
                  className="size-6"
                />
                <li className="font-semibold">Calefacción a leña</li>
              </div>
              <div className="flex space-x-2 text-center">
                <img
                  src="/images/icons/shower.png"
                  alt="Wi-Fi"
                  className="size-6"
                />
                <li className="font-semibold">Amenities de baño</li>
              </div>
              <div className="flex space-x-2 text-center">
                <img
                  src="/images/icons/hairDryer.png"
                  alt="Wi-Fi"
                  className="size-6"
                />
                <li className="font-semibold">Secador de cabello</li>
              </div>
              <div className="flex space-x-2 text-center">
                <img
                  src="/images/icons/towel.png"
                  alt="Wi-Fi"
                  className="size-6"
                />
                <li className="font-semibold">Ropa blanca</li>
              </div>
              <div className="flex space-x-2 text-center">
                <img
                  src="/images/icons/bed.png"
                  alt="Wi-Fi"
                  className="size-6"
                />
                <li className="font-semibold">Ropa de cama</li>
              </div>
              <div className="flex space-x-2 text-center">
                <img
                  src="/images/icons/safeBox.png"
                  alt="Wi-Fi"
                  className="size-6"
                />
                <li className="font-semibold">Caja de seguridad</li>
              </div>
              <div className="flex space-x-2 text-center">
                <img
                  src="/images/icons/car.png"
                  alt="Wi-Fi"
                  className="size-6"
                />
                <li className="font-semibold">Estacionamiento</li>
              </div>
            </ul>
          </div>
        </section>
        <section className="pt-10 md:px-20 px-5 space-y-3 md:space-y-10">
          <h2 className="text-3xl font-bold">Galeria</h2>
          <CabinsGallery />
        </section>
      </main>
    </>
  );
}
