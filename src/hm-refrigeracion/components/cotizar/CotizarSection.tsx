import React, { useState } from "react";

const CotizarSection: React.FC = () => {
  // 1. Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  // Estado opcional para manejar la carga y respuestas
  const [loading, setLoading] = useState(false);

  // 2. Manejador de cambios en los inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // 3. Manejador del envío del formulario al backend
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("¡Cotización enviada con éxito!");
        setFormData({ nombre: "", email: "", mensaje: "" }); // Limpiar formulario
      } else {
        alert("Hubo un error al enviar la cotización.");
      }
    } catch (error) {
      console.error("Error de red:", error);
      alert("No se pudo conectar con el servidor.");
    } finally {
      setLoading(false);
    }
  };

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
            
            <div className="date-footer_cotizar" data-aos="fade-right">
              <ul>
                <li>
                  <div className="icon_cotizar">
                    <img src="/icons/location.svg" alt="Ubicación" />
                  </div>
                  <div className="text-icon_cotizar">
                    <h3>Ubicación</h3>
                    <p>Ciudadela Chalaca Mz. D Lt. 30, Callao</p>
                  </div>
                </li>
                <li>
                  <div className="icon_cotizar">
                    <img src="/icons/mail.svg" alt="icons" />
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
                    <img src="/icons/call.svg" alt="Teléfono" />
                  </div>
                  <div className="text-icon_cotizar">
                    <h3>Teléfonos</h3>
                    <a href="tel:938420878">938420878 - 980596485</a>
                  </div>
                </li>
              </ul>
            </div>

            {/* 4. Formulario Reactizado */}
            <div className="form-footer_cotizar" data-aos="fade-left">
              <form onSubmit={handleSubmit}>
                <div className="input-group">
                  <input
                    type="text"
                    name="nombre"
                    placeholder="Tu Nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="input-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Tu Correo Electrónico"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="input-group">
                  <textarea
                    name="mensaje"
                    placeholder="Cuéntanos sobre tu proyecto"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" disabled={loading}>
                  {loading ? "Enviando..." : "Enviar Cotización"}
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default CotizarSection;
