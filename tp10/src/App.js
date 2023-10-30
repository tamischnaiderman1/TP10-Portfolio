import Contacto from "./Contacto.js";
import Home from "./Home.js";
import Layout from "./Layout.js";
import Detalle from "./Detalle.js";
import "./App.css";
import Creaciones from "./Creaciones.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { APIContextProvider } from "./apiContext";


export default function App() {

  return (
    <APIContextProvider>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout />}></Route>
              <Route path="/home" element={<Home />}></Route>
            <Route path="/contacto" element={<Contacto />}></Route>
            <Route path="*" element={<h1>404</h1>}></Route>
            <Route path="/Creaciones" element={<Creaciones />}></Route>
            <Route path="/Detalle" element={<Detalle />}></Route>
          
        </Routes>
      </BrowserRouter >
      </APIContextProvider>
  );
}
