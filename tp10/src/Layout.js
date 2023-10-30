import React from 'react';
import { Link, Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/busqueda"> Busqueda</Link>
          </li>
          <li>
            <Link to="/creaciones"> Creaciones</Link>
          </li>
          <li>
            <Link to="/Contacto"> Contacto</Link>
          </li>
        </ul>
      </nav>
      <Outlet />

    </>

  );

};
export default Layout