import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Detalle from './Detalle';

export default function Creaciones() {
  const [creaciones, setCreaciones] = useState([]);
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    // Cambia la ruta a tu archivo JSON local
    axios.get('/TP10-Portfolio/creaciones.json')
      .then(response => {
        setCreaciones(response.data);
      })
      .catch(error => {
        console.error('Error al obtener datos: ', error);
      });
  }, []);

  const favorito = (creacion) => {
    if (favoritos.includes(creacion.id)) {
      setFavoritos(favoritos.filter((id) => id !== creacion.id));
    } else {
      setFavoritos([...favoritos, creacion.id]);
    }
  };

  return (
    <div>
      <h1>Mis Creaciones</h1>
      {creaciones.map(creacion => (
        <div key={creacion.id}>
          <h2>{creacion.titulo}</h2>
          <p>{creacion.descripcion}</p>
          <p>Fecha: {creacion.fecha}</p>
          <a href={creacion.url} target="_blank" rel="noopener noreferrer">
            Ver proyecto
          </a>
          {creacion.imagenes.map((imagen, index) => (
            <img key={index} src={imagen} alt={`Imagen ${index + 1}`} />
          ))}
        </div>
      ))}
    </div>
  );
}

/*
  return (
    <div>
      <h1>Mis Creaciones</h1>
      {creaciones
        .filter((creacion) => creacion.destacado)
        .map((creacion) => (
          <div key={creacion.id}>
            <h2>{creacion.titulo}</h2>
            <p>{creacion.descripcion}</p>
            <p>Fecha: {creacion.fecha}</p>
            <a href={creacion.url} target="_blank" rel="noopener noreferrer">
              Ver proyecto
            </a>
            {creacion.imagenes.map((imagen, index) => (
              <img key={index} src={imagen} alt={`Imagen ${index + 1}`} />
            ))}
            <button onClick={() => toggleFavorito(creacion)}>
              {favoritos.includes(creacion.id) ? 'Eliminar de Favoritos' : 'Agregar a Favoritos'}
            </button>
          </div>
        ))}
    </div>
  );
}*/
