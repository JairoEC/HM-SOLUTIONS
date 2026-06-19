import { useEffect } from "react";
import AOS from "aos";

import Header from "../components/Header";
import BannerHome from "../components/home/BannerHome";
import AboutServices from "../components/home/AboutServices";
import ExperienceClients from "../components/home/ExperienceClients";
import SectionMarca from "../components/home/SectionMarcas";
import ContactQuote from "../components/home/ContactQuote";
import Footer from "../components/Footer";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <>
      <Header />

      <main>
        <section>
          <BannerHome />
          <AboutServices />
          <SectionMarca/>
          <ExperienceClients />
          <ContactQuote />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;