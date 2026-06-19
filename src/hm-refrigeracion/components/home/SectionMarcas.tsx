import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const SectionMarca = () => {
  const marcas = [
    { img: "/images/lg-logo.jpg", alt: "Lg" },
    { img: "/images/samsung-logo.png", alt: "Samsung" },
    { img: "/images/carrier-logo.png", alt: "Carrier" },
    { img: "/images/daikin-logo.png", alt: "Daikin" },
    { img: "/images/lennox-logo.png", alt: "Lennox" },
    { img: "/images/york-vector-logo.png", alt: "York" },
  ];

  return (
    <section id="container-module-marcas">
      <div className="center">
        <div className="row-marcas">
          <div className="title-marcas" data-aos="fade-up">
            <h2>MARCAS CON LAS QUE TRABAJAMOS</h2>
            <p>
              Trabajamos con las mejores marcas del mercado para garantizar
              calidad, eficiencia y durabilidad en cada uno de nuestros
              proyectos.
            </p>
          </div>

          <div
            className="carousel-marcas"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Swiper
              modules={[Autoplay]}
              slidesPerView={5}
              spaceBetween={30}
              loop={true}
              speed={3500}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 2,
                },
                576: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 4,
                },
                1200: {
                  slidesPerView: 5,
                },
              }}
            >
              {marcas.map((marca, index) => (
                <SwiperSlide key={index}>
                  <div className="item-marca">
                    <img src={marca.img} alt={marca.alt} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionMarca;