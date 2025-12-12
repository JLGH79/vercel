  import React from "react";
  import "../pages/Contact.css"; 

  export default function Contact() {
    return (
      <div className="contact-page">
        <div className="contact-card">
          <h1>Contactanos</h1>
          <form
            action="https://formspree.io/f/xkgbavgd"
            method="POST"
          >
            <input
              type="text"
              name="name"
              placeholder="Tu nombre"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Tu correo"
              required
            />
            <textarea
              name="message"
              placeholder="Tu mensaje"
              rows="5"
              required
            />
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    );
  }
