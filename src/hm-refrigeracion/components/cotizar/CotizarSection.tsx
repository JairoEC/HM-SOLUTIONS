import React from "react";

const CotizarSection: React.FC = () => {
  return (
    <>
      <div id="container-module-bannerCotizar">
        <img
          src="images/vecteezy_industry-engineer-under-checking-the-industry-cooling-tower_6668318.jpg"
          alt="Banner Cotizar"
        />
      </div>

      <div id="container-footer_cotizar">
        <div className="center">
          <div className="row-formfooter_cotizar">

            <div
              className="date-footer_cotizar"
              data-aos="fade-right"
            >
              <ul>

                <li>
                  <div className="icon_cotizar">
                    <img
                      src="/icons/location.svg"
                      alt="Ubicación"
                    />
                  </div>

                  <div className="text-icon_cotizar">
                    <h3>Ubicación</h3>
                    <p>Ciudadela Chalaca Mz. D Lt. 30, Callao</p>
                  </div>
                </li>

                <li>
                  <div className="icon_cotizar">
                    <img
                      src="/icons/mail.svg"
                      alt="icons"
                    />
                  </div>

                  <div className="text-icon_cotizar">
                    <h3>E-mail</h3>

                    <a href="mailto:gianfrancohilariogutierrez@gmail.com">
                      gianfrancohilariogutierrez@gmail.com
                    </a>
                  </div>
                </li>

                <li>
                  <div className="icon_cotizar">
                    <img
                      src="/icons/call.svg"
                      alt="Teléfono"
                    />
                  </div>

                  <div className="text-icon_cotizar">
                    <h3>Teléfonos</h3>

                    <a href="tel:938420878">
                      938420878 - 980596485
                    </a>
                  </div>
                </li>

              </ul>
            </div>

            <div
              className="form-footer_cotizar"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <h2>Asesoría Gratuita</h2>

              <form className="cotizar-formulario">

                <div className="cotizar-campo">
                  <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                  />
                </div>

                <div className="cotizar-campo">
                  <input
                    type="text"
                    name="apellido"
                    placeholder="Apellido"
                  />
                </div>

                <div className="cotizar-campo">
                  <input
                    type="tel"
                    name="celular"
                    placeholder="Celular"
                  />
                </div>

                <div className="cotizar-campo">
                  <input
                    type="email"
                    name="correo"
                    placeholder="Correo electrónico"
                  />
                </div>

                <div className="cotizar-campo cotizar-campo-full">
                  <textarea
                    name="mensaje"
                    placeholder="Cuéntanos sobre tu proyecto o requerimiento"
                  />
                </div>

                <div className="cotizar-campo-full cotizar-boton">
                  <input
                    type="submit"
                    value="Enviar"
                  />
                </div>

              </form>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CotizarSection;