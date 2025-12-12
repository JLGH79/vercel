import React from "react";
import "../pages/Inicio.css";

export default function Hero() {
  return (
    <section className="hero-section">
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src="/video/fondo.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay">
        <h1>Bienvenido a la Tienda Sports & Shoes</h1>
        <p>Explora nuestros productos y encuentra lo que buscas.</p>
        <a href="/productos" className="btn-cta">Ver Productos</a>
      </div>
    </section>
  );
}
