import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar.jsx";
import Footer from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = "https://www.fronteradelosandes.com";
const siteTitle = "Frontera de los Andes | Cabañas en Villa Río Hermoso, San Martín de los Andes";
const siteDescription =
  "Cabañas para 6 personas en Villa Río Hermoso, a 25 km de San Martín de los Andes, Patagonia Argentina. Naturaleza, comodidad y todo el confort para tu estadía.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Frontera de los Andes",
  },
  description: siteDescription,
  keywords: [
    "cabañas San Martín de los Andes",
    "cabañas Villa Río Hermoso",
    "alojamiento Patagonia",
    "cabañas Neuquén",
    "Ruta de los Siete Lagos",
  ],
  authors: [{ name: "Tomas De Paulo" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "Frontera de los Andes",
    images: ["/images/Frontera_Trans.png"],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/Frontera_Trans.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-bg-color text-ink antialiased`}>
        <Navbar />
        <div className="fixed right-4 md:right-10 bottom-4 md:bottom-10 z-20">
          <a
            href="https://api.whatsapp.com/send?phone=5492352402805"
            target="_blank"
            rel="noopener noreferrer"
            className="block shadow-soft rounded-full transition-transform duration-300 hover:scale-110"
          >
            <img src="/images/icons/whatsappBubble.png" alt="Whatsapp" className="w-14 md:w-16" />
          </a>
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}