import { useEffect } from "react";
import { useParams } from "react-router-dom";

import AOS from "aos";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { DetailSection } from "../components/servicios-detalle/DetailSection";
import { servicesData } from "../../data/data";

const ServiciosDetalle = () => {
  const { slug } = useParams();

  const service = servicesData.find((item) => item.slug === slug);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  if (!service) {
    return (
      <>
        <Header />
        <h1>Servicio no encontrado</h1>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <main>
        <section>
          <DetailSection {...service} />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ServiciosDetalle;