import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/fondo6.png";
import "../pages/Navbar.css";
import "../pages/Inicio.css";


// Contextos
import { useAuthContext } from "../context/AuthContext";
import { useCartContext } from "../context/CartContext";

import { FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navigate = useNavigate();
  const { usuario, isAuthenticated, cerrarSesion } = useAuthContext();
  const { vaciarCarrito, carrito } = useCartContext();

  const totalItemsCarrito = carrito.reduce(
    (total, item) => total + item.cantidad,
    0
  );

  const manejarCerrarSesion = () => {
    navigate("/productos");
    setTimeout(() => {
      vaciarCarrito();
      cerrarSesion();
    }, 150);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo-container">
        <Link to="/" className="logo-link" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="Sports & Shoes" className="logo" />
          <span className="logo-text">
            <span className="tienda">Tienda</span> Sports & Shoes
          </span>
        </Link>
      </div>

      {/* Botón hamburguesa */}
      <div className={`menu-toggle ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Inicio</Link></li>
       <li><Link to="/productos" onClick={() => setMenuOpen(false)}>Productos</Link></li>
        <li><Link to="/reviews" onClick={() => setMenuOpen(false)}>Reseñas</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contacto</Link></li>

        {/* Admin */}
        {usuario?.nombre === "admin" && (
          <li><Link to="/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</Link></li>
        )}

        {/* Carrito */}
        <li className="carrito-link">
          <Link to="/pagar" onClick={() => setMenuOpen(false)} className="cart-icon">
            <FaShoppingCart />
            {totalItemsCarrito > 0 && (
              <span className="cart-count">{totalItemsCarrito}</span>
            )}
          </Link>
        </li>

        {/* Login / Logout */}
        {!isAuthenticated ? (
          <li> <Link 
    to="/iniciar-sesion" 
    className="login-btn"
    onClick={() => setMenuOpen(false)}
  >
    Login
  </Link>
</li>
        ) : (
          <>
            <li className="usuario">Hola, {usuario.nombre}</li>
            <li>
              <button className="logout-btn" onClick={manejarCerrarSesion}>
                Cerrar sesión
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
