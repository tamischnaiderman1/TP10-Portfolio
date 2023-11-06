import Contacto from "./Contacto.js";
import Home from "./Home.js";
import Layout from "./Layout.js";
import Detalle from "./Detalle.js";
import "./App.css";
import Creaciones from "./Creaciones.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { APIContextProvider } from "./apiContext";
 import './App.css';

export default function App() {
  return (
    <APIContextProvider>
      <BrowserRouter>
        <div className="header">
          <nav>
            <a href="/">Inicio</a>
            <a href="/home">Home</a>
            <a href="/contacto">Contacto</a>
          </nav>
        </div>

        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<h1>404</h1>} />
          <Route path="/Creaciones" element={<Creaciones />} />
          <Route path="/Detalle" element={<Detalle />} />
        </Routes>
      </BrowserRouter>
    </APIContextProvider>
  );
}
