
import React from 'react';
import { galeria } from '../../data/galeria';
import type { GaleriaItem } from '../../data/galeria';


export const Carousel = () => {
  return (
    <>
      <div id="carouselHM" className="carousel slide" data-bs-ride="carousel">

      {/* Indicadores (puntitos) */}
      <div className="carousel-indicators">
        {galeria.map((item: GaleriaItem, index: number) => (
          <button
            key={item.id}
            type="button"
            data-bs-target="#carouselHM"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : undefined}
            aria-label={item.titulo}
          />
        ))}
      </div>

      {/* Imágenes */}
      <div className="carousel-inner">
        {galeria.map((item: GaleriaItem, index: number) => (
          <div
            key={item.id}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img
              src={item.imagen}
              className="d-block w-100"
              alt={item.alt}
              style={{ maxHeight: '500px', objectFit: 'cover' }}
            />
            <div className="carousel-caption d-none d-md-block" 
            style={{
              backgroundColor: 'rgba(0,0,0,0.5)',
              borderRadius: '8px',
              padding: '12px 20px',
            }}>
              <h5>{item.titulo}</h5>
              <p>{item.descripcion}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Botones anterior / siguiente */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselHM"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Anterior</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselHM"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Siguiente</span>
      </button>

    </div>
    </>
  )
}
