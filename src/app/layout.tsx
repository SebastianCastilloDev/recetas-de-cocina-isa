import type { Metadata, Viewport } from "next";
import { Dancing_Script } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-script",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Recetario Familiar",
  description:
    "Recetario familiar: recetas, historia, imágenes, cursos y herramientas de cocina.",
  appleWebApp: {
    capable: true,
    title: "Recetario Familiar",
    statusBarStyle: "default",
  },
};

export const viewport: Viewport = {
  themeColor: "#ecdcc4",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`h-full antialiased ${dancingScript.variable}`}>
      <body className="min-h-full flex flex-col bg-crema text-texto">
        <Navbar />
        {/* pb-20 deja espacio para la barra inferior en móvil */}
        <main className="flex-1 pb-20 md:pb-0">{children}</main>
        <Footer />
        <BottomNav />
      </body>
    </html>
  );
}
