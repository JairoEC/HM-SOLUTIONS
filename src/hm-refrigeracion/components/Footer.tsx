import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div id="container-module-footer">
        <div className="center">
          <div className="content-footer1">

            <div className="row-footer">

              <div className="column-footer-1">

                <div className="logo-footer">
                  <img
                    src="/images/logo-blanco-hg.png"
                    alt="HG SAC"
                  />
                </div>

                <p>
                  Aseguramos el cumplimiento de esta política mediante la evaluación constante de nuestro desempeño, enfocándonos en la eficiencia, la calidad y el logro de resultados.
                </p>

                {/*
                <div className="social-media">
                  <p>Síganos</p>

                  <div className="social-links">
                    <ul>

                      <li>
                        <a
                          href="#"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            src="/icons/icon-face.svg"
                            alt="Facebook"
                          />
                        </a>
                      </li>

                      <li>
                        <a
                          href="#"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            src="/icons/icon-link.svg"
                            alt="LinkedIn"
                          />
                        </a>
                      </li>

                      <li>
                        <a
                          href="#"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            src="/icons/icon-inst.svg"
                            alt="Instagram"
                          />
                        </a>
                      </li>

                    </ul>
                  </div>
                </div>
                 */}

              </div> 

              <div className="column-footer-2">

                <h3>Menú</h3>

                <div className="menu-menu-container">
                  <ul className="menu">

                    <li>
                      <Link to="/">
                        Inicio
                      </Link>
                    </li>

                    <li>
                      <Link to="/nosotros">
                        Nosotros
                      </Link>
                    </li>

                    <li>
                      <Link to="/servicios">
                        Servicios
                      </Link>
                    </li>

                    <li>
                      <Link to="/cotizar">
                        Cotizar
                      </Link>
                    </li>

                  </ul>
                </div>

              </div>

              <div className="column-footer-3">

                <h3>Servicios</h3>

               <ul>
                <li>
                  <Link to="/servicios-detalle/vrf">
                    Equipos de aire acondicionado VRF
                  </Link>
                </li>

                <li>
                  <Link to="/servicios-detalle/convencional">
                    Equipos de aire acondicionado convencional
                  </Link>
                </li>

                <li>
                  <Link to="/servicios-detalle/precision">
                    Equipos de aire acondicionado de precisión
                  </Link>
                </li>

                <li>
                  <Link to="/servicios-detalle/chiller">
                    Equipos de aire acondicionado Chiller
                  </Link>
                </li>

                <li>
                  <Link to="/servicios-detalle/refrigeracion-industrial">
                    Equipos de refrigeración industrial
                  </Link>
                </li>
              </ul>

              </div>

              <div className="column-footer-4">

                <h3>Contáctanos</h3>

                <div className="contact-info">
                  <span>
                    <i className="icon-ubication"></i>
                    Ciudadela Chalaca Mz. D Lt. 30, Callao
                  </span>
                </div>

                <div className="contact-info">
                  <a href="mailto:gianfrancohilariogutierrez@gmail.com">
                    <i className="icon-email"></i>
                    gianfrancohilariogutierrez@gmail.com
                  </a>
                </div>

                <div className="contact-info">
                  <a href="tel:938420878">
                    <i className="icon-phone"></i>
                    +51 980 596 485
                  </a>
                </div>

                {/* <div className="contact-info">
                  <a href="#">
                    <i className="icon-book"></i>
                    Libro de reclamaciones
                  </a>
                </div> */}

              </div>

            </div>

            <div className="footer-bottom">
              <div className="copyright">
                <p>
                  Copyright 2026 HG SAC ©,
                  Todos los derechos reservados
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;