import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      title: "Equipos de aire acondicionado VRF",
      alt: "Equipos de aire acondicionado VRF",
      img: "images/vecteezy_compressors-air-conditioners-on-the-roof-of-the-office_17020864.jpg",
      slug: "vrf",
    },
    {
      title: "Equipos de aire acondicionado convencional",
      alt: "Equipos de aire acondicionado convencional",
      img: "images/aire-acondicionado-convencional.webp",
      slug: "convencional",
    },
    {
      title: "Equipos de aire acondicionado de precisión",
      alt: "Equipos de aire acondicionado de precisión",
      img: "images/sistemas-de-aire-acondicionado-de-precisic3b3n.jpg",
      slug: "precision",
    },
    {
      title: "Equipos de aire acondicionado Chiller",
      alt: "Equipos de aire acondicionado Chiller",
      img: "images/vecteezy_industry-engineer-under-checking-the-industry-cooling-tower_6668318.jpg",
      slug: "chiller",
    },
    {
      title: "Equipos de refrigeración industrial",
      alt: "Equipos de refrigeración industrial",
      img: "images/vecteezy_empty-industrial-refrigerator-showing-metal-shelves-and-air_68012459.jpg",
      slug: "refrigeracion-industrial",
    },
  ];

  return (
    <div id="container-module-services">
      <div className="center">
        <div className="row-services">
          <div className="title-services" data-aos="fade-up">
            <span>Nuestros</span>
            <h1>Servicios</h1>
          </div>

          <div className="groups-services">
            {services.map((service, index) => (
              <div
                className="column-services"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <Link to={`/servicios-detalle/${service.slug}`}>
                  <img src={service.img} alt={service.alt} />

                  <div className="content-text">
                    <h2>{service.title}</h2>
                    <span>VER MÁS</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;