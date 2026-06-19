import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

const BannerHome = () => {
  const slides = [
    {
      img: "/images/close-up-heat-pump-outside-home (2).jpeg",
      alt: "mantenimiento correctivo de aire acondicionado",
      span: "Especialistas en",
      title: "mantenimiento correctivo de aire acondicionado ",
      text: "Climatización industrial eficiente para empresas.",
    },
    {
      img: "/images/team-replacing-old-air-conditioner.jpeg",
      alt: "Mantenimiento de Aire Industrial",
      span: "Expertos en",
      title: "Mantenimiento de Aire Industrial",
      text: "Mantenimiento industrial que maximiza rendimiento.",
    },
    {
      img: "/images/medium-shot-smiley-people-wearing-helmets.jpeg ",
      alt: "Correctivo de Aire Acondicionado Convencional",
      span: "Especialistas en",
      title: "Correctivo de Aire Acondicionado Convencional",
      text: "Nos encargamos de la comodidad de tu hogar.",
    },
    {
      img: "/images/aire-presicion.jpg",
      alt: "Aire Acondicionado de Precisión",
      span: "Especialistas en",
      title: "Aire Acondicionado de Precisión",
      text: "Aire acondicionado de precisión, máxima eficiencia garantizada.",
    },
    {
    img: "/images/chiller.png",
    alt: "Sistemas Chiller",
    span: "Especialistas en",
    title: "Sistemas Chiller",
    text: "Enfriamiento eficiente y confiable para aplicaciones industriales y comerciales.",
  },
  ];

  return (
    <div id="container-module-banner">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1000}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="slick-banner"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="row-banner">
              <img src={slide.img} alt={slide.alt} />

              <div className="content-banner">
                <div className="headline">
                  <span>{slide.span}</span>
                  <h1>{slide.title}</h1>
                  <p>{slide.text}</p>

                  <div className="btn-banner">
                    <Link to="/servicios">Ver más</Link>

                    <a
                      href="https://api.whatsapp.com/send?phone=51938420878"
                      target="_blank"
                      rel="noreferrer"
                    >
                      COTIZAR
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <img
        className="hero__wave"
        src="/images/curved-image.png"
        alt=""
        aria-hidden="true"
      />
    </div>
  );
};

export default BannerHome;