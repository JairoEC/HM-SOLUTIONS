const IsoSection = () => {
  return (
    <section className="iso-section">
      <div className="iso-container">
        <div className="iso-title">

          <h2>Nuestras Certificaciones</h2>

          <p>
            Contamos con certificaciones internacionales que respaldan
            nuestros procesos, garantizando calidad, seguridad y mejora
            continua en cada uno de nuestros servicios.
          </p>
        </div>

        <div className="iso-grid">
          <div className="iso-card">
            <img
              src="/images/ISO-90012015.svg"
              alt="ISO 9001"
              className="iso-image"
            />
          </div>

          <div className="iso-card">
            <img
              src="/images/ISO-450012025.svg"
              alt="ISO 14001"
              className="iso-image"
            />
          </div>

          <div className="iso-card">
            <img
              src="/images/ISO-370012025.svg"
              alt="ISO 45001"
              className="iso-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IsoSection;