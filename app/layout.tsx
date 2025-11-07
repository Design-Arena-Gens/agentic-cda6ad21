import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans"
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display"
});

export const metadata: Metadata = {
  title: "Eje 360 | Compra y Venta de Inmuebles",
  description:
    "Descubre el volante digital de Eje 360: experiencias inmobiliarias confiables con visión 360°."
};

const Layout = ({ children }: { children: React.ReactNode }) => (
  <html lang="es" className={`${sans.variable} ${display.variable}`}>
    <body className="bg-slate-950 text-white antialiased">{children}</body>
  </html>
);

export default Layout;
