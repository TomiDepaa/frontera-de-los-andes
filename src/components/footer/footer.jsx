export default function Footer() {
  return (
    <>
      <footer className="bg-footer-background bg-top bg-cover mt-16 py-20 md:pt-64 lg:pt-[30rem] xl" >
        <section>
          <div className="flex space-x-10 justify-center pt-5 mt-20 md:mt-0 lg:mt-0">
            <a
              href="https://www.instagram.com/fronteradelosandes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
            >
                <img src="/images/icons/instagram.png" alt="Instagram" />
            </a>
            <a href="https://api.whatsapp.com/send?phone=5492352409793">
                <img src="/images/icons/whatsapp.png" alt="Whatsapp" />
            </a>
            <a
              href="https://maps.app.goo.gl/dhSFBHx3MKtksAqs6"
              target="_blank"
            >
                <img src="/images/icons/ubication.png" alt="" />
            </a>
          </div>
        </section>
      </footer>
    </>
  );
}
