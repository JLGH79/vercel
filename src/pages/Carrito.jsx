import React from "react";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import "../pages/Carrito.css";

export default function CarritoCompras() {
  const { carrito, vaciarCarrito, agregarCantidad, quitarCantidad, total  } = useCartContext();

  const navigate = useNavigate();

  const irAPagar = () => {
    navigate("/pagar", { state: { carrito } });
  };

 return (
  <div className="cart-page">
    <div className="cart-card">
      <h2 className="cart-title">Carrito de Compras</h2>

      {carrito.length === 0 ? (
        <p style={{textAlign:"center", fontSize:"1.2rem", color:"#555"}}>El carrito está vacío</p>
      ) : (
        <>
          <div className="cart-list">
            {carrito.map((item) => (
              <div className="cart-item" key={item.id}>
                <span className="cart-item-info">
                  {item.nombre} — <strong>${Number(item.precio).toFixed(3)}</strong>
                </span>
                <span className="cart-item-sub">(Cantidad: {item.cantidad})</span>

                <div className="cart-qty-controls">
                  <button className="cart-qty-btn" onClick={() => quitarCantidad(item.id)}>-</button>
                  <button className="cart-qty-btn" onClick={() => agregarCantidad(item.id)}>+</button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-total">
            Total: ${Number(total).toFixed(3)}
          </div>

          <button onClick={vaciarCarrito} className="cart-btn trash">Vaciar Carrito</button>
          <button onClick={irAPagar} className="cart-btn pay">Pagar</button>
        </>
      )}
    </div>
  </div>
);
}