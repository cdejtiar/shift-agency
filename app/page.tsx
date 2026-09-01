import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Servicios } from "@/components/Servicios";
import { Nosotros } from "@/components/Nosotros";
import { Trabajos } from "@/components/Trabajos";
import { Reviews } from "@/components/Reviews";
import { Contacto } from "@/components/Contacto";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Servicios />
        <Nosotros />
        <Trabajos />
        <Reviews />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
