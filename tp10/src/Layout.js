import React from 'react';
import { Link, Outlet } from "react-router-dom";
import './Layout.css'

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/home"><button>
                 Home
                </button></Link>
          </li>
          <br/>
          <li>
            <Link to="/busqueda"> <button>Busqueda</button></Link>
          </li>
          <br/>
          <li>
            <Link to="/creaciones"> <button>Creaciones</button></Link>
          </li>
          <br/>
          <li>
            <Link to="/Contacto"> <button>Contacto</button></Link>
          </li>
          <br/>
        </ul>
      </nav>
      <Outlet />

    </>

  );

};
export default Layout