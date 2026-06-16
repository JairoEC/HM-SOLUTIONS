import React, { useState } from 'react';
// Definimos la estructura estricta del formulario
interface FormDataState {
  nombre: string;
  apellido: string;
  celular: string;
  correo: string;
  mensaje: string;
}

const ContactQuote = () => {
  const [formData, setFormData] = useState<FormDataState>({
    nombre: '',
    apellido: '',
    celular: '',
    correo: '',
    mensaje: ''
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<{ type: string; message: string }>({ type: '', message: '' });

  // CORRECCIÓN 2: Soporta tanto Input como TextArea
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // CORRECCIÓN 1: Usa FormEvent para el formulario
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: '¡Solicitud enviada! Tu correo está en cola.' });
        setFormData({ nombre: '', apellido: '', celular: '', correo: '', mensaje: '' });
      } else {
        setStatus({ type: 'error', message: data.error || 'Hubo un problema en el servidor.' });
      }
    } catch (error) {
      console.error('Error de conexión:', error);
      setStatus({ type: 'error', message: 'No se pudo conectar con el servidor.' });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div id="container-footer_cotizar">
      <div className="center">
        <div className="row-formfooter_cotizar">

          <div className="date-footer_cotizar" data-aos="fade-right">
            <ul>
              <li>
                <div className="icon_cotizar"><img src="/icons/location.svg" alt="Ubicación" /></div>
                <div className="text-icon_cotizar">
                  <h3>Ubicación</h3>
                  <p>Ciudadela Chalaca Mz. D Lt. 30, Callao</p>
                </div>
              </li>
              <li>
                <div className="icon_cotizar"><img src="/icons/mail.svg" alt="icons" /></div>
                <div className="text-icon_cotizar">
                  <h3>E-mail</h3>
                  <a href="mailto:gianfrancohilariogutierrez@gmail.com">gianfrancohilariogutierrez@gmail.com</a>
                </div>
              </li>
              <li>
                <div className="icon_cotizar"><img src="/icons/call.svg" alt="Teléfono" /></div>
                <div className="text-icon_cotizar">
                  <h3>Teléfonos</h3>
                  <a href="tel:938420878">938420878 - 980596485</a>
                </div>
              </li>
            </ul>
          </div>

          <div className="form-footer_cotizar" data-aos="fade-left" data-aos-delay="200">
            <h2>Asesoría Gratuita</h2>

            {/* 4. Vinculación del evento onSubmit */}
            <form className="cotizar-formulario" onSubmit={handleSubmit}>

              <div className="cotizar-campo">
                <input
                  type="text"
                  name="nombre"
                  placeholder="Nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="cotizar-campo">
                <input
                  type="text"
                  name="apellido"
                  placeholder="Apellido"
                  value={formData.apellido}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="cotizar-campo">
                <input
                  type="tel"
                  name="celular"
                  placeholder="Celular"
                  value={formData.celular}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="cotizar-campo">
                <input
                  type="email"
                  name="correo"
                  placeholder="Correo electrónico"
                  value={formData.correo}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="cotizar-campo cotizar-campo-full">
                <textarea
                  name="mensaje"
                  placeholder="Cuéntanos sobre tu proyecto o requerimiento"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Mensajes de éxito o error */}
              {status.message && (
                <div className={`cotizar-campo-full mensaje-status ${status.type}`}>
                  <p style={{ color: status.type === 'success' ? 'green' : 'red', margin: '10px 0' }}>
                    {status.message}
                  </p>
                </div>
              )}

              {/* Deshabilitar botón durante la carga */}
              <div className="cotizar-campo-full cotizar-boton">
                <input
                  type="submit"
                  value={loading ? "Enviando..." : "Enviar"}
                  disabled={loading}
                />
              </div>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactQuote;
