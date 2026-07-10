export default function Footer() {
  return (
    <footer className="relative bg-footer-background bg-top bg-cover mt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-green-brand/0 via-green-brand/25 to-green-brand"></div>
      <div className="relative pt-16 pb-10 md:pt-72 lg:pt-[21rem] 2xl:pt-[30rem]">
        <div className="flex flex-col items-center text-center gap-6 px-5">
          {/* <img src="/images/Frontera_Trans.png" alt="Frontera de Los Andes" className="h-14 opacity-95" /> */}
          <p className="text-white-brand/70 text-sm max-w-md">
            Villa Río Hermoso, San Martín de los Andes — Patagonia Argentina
          </p>
          <div className="flex gap-5">
            <a
              href="https://www.instagram.com/fronteradelosandes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              className="flex items-center justify-center w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
            >
              <img src="/images/icons/instagram.png" alt="Instagram" className="w-5 h-5" />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5492352409793"
              target="_blank"
              className="flex items-center justify-center w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
            >
              <img src="/images/icons/whatsapp.png" alt="Whatsapp" className="w-5 h-5" />
            </a>
            <a
              href="https://maps.app.goo.gl/dhSFBHx3MKtksAqs6"
              target="_blank"
              className="flex items-center justify-center w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
            >
              <img src="/images/icons/ubication.png" alt="Ubicación" className="w-5 h-5" />
            </a>
          </div>
          <p className="text-white-brand/40 text-xs pt-4 pb-2">
            © {new Date().getFullYear()} Frontera de Los Andes
          </p>
        </div>
      </div>
    </footer>
  )
}