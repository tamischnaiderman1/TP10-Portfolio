import React from 'react';
import { Carousel } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { useAPI } from "./apiContext";
import './Home.css';

export default function Home() {
  const { cartas } = useAPI();
  return (
    <div className="container">
      <div className="center-div">
        {console.log(cartas)}
        <Carousel
          className="carousel"
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
        >
          <div>
            <img src="" />
          </div>
          <div>
            <img src="" />
          </div>
        </Carousel>
      
      <div className="cards"></div>
      <h1>Página de Inicio</h1>
      <p>Estas son las creaciones destacadas:</p>
      {cartas.map((c) => (
        c.id<=6 &&
        <div className="card">
            <div className="card-image">
              <img width="300px" height="auto" src={c.images[1]} />
            </div>
            <div className="card__content">
              <p className="card__title">{c.title}</p>
              <p className="card__description">{c.description}</p>

              <button>
                <span>
                  <Link to={`/detalle/${c.id}`} key={c.id}> Detalle</Link>
                </span>
              </button>
            </div>
          </div>
      ))}
          </div>
    </div>
  );
}

