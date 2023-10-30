import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Página de Inicio</h1>
      <p>Estas son las creaciones destacadas:</p>

      <Link to="/Creaciones"><button>Ver mis creaciones</button></Link>
    </div>
  );
}

 