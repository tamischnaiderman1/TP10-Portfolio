import "./Detalle.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { APIContextProvider } from "./apiContext";

export default function Detalle() {
  const { id } = useParams();
  const { creaciones } = APIContextProvider();
  const [creacionElegida, setcreacionElegida] = useState({});

  useEffect(() => {
    for (let index = 0; index < creaciones.length; index++) {
      if (creaciones[index].id === id) {
        setcreacionElegida(creaciones[index]);
      }
    }
    creaciones.filter((p) => {
      if (p.id == id) {
        setcreacionElegida(p);
      }
    });
  }, []);

  return (
    <div className="container">
      {creacionElegida && (
        <>
          <p> {creacionElegida.title}</p>
        </>
      )}
    </div>
  );
}