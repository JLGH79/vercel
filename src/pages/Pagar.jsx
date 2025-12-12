import { useNavigate } from "react-router-dom";
import { useAuthContext } from '../context/AuthContext';
import { useCartContext } from '../context/CartContext';
import "../pages/Pagar.css";
import { toast } from "react-toastify";


export default function Pagar() {
  const { usuario, cerrarSesion } = useAuthContext();
  const { carrito, total, vaciarCarrito } = useCartContext();
  const navigate = useNavigate();


  const tokenActual = localStorage.getItem('authToken');


  // Función para finalizar compra
  const comprar = () => {
    toast.success("🎉 ¡Compra realizada con éxito!", {
  icon: "👟",
});
    vaciarCarrito(); // Limpiar carrito después de comprar
    navigate("/productos");
  };


  return (
  <div className="pagar-page">
    <div className="pagar-card">

      {/* Encabezado usuario */}
      <div className="pagar-header">
        <h2>Hola, {usuario.nombre}</h2>
        <p>Email: {usuario.email}</p>
      </div>

      {/* Token */}
      <div className="pagar-token">
        <strong>Token:</strong> {tokenActual}
      </div>

      {/* Lista productos */}
      <div className="pagar-list">
        {carrito.map((producto) => {
          const cantidad = Number(producto.cantidad);
          const precioUnitario = Number(producto.precio);
          const subtotal = cantidad * precioUnitario;
          return (
            <div className="pagar-item" key={producto.id}>
              <img src={producto.avatar} alt={producto.nombre} />
              <div className="pagar-info">
                <div className="nombre">{producto.nombre}</div>
                <div className="precio">Precio unidad: ${precioUnitario.toFixed(3)}</div>
                <div className="cantidad">Cantidad: {cantidad}</div>
                <div className="subtotal"><strong>Subtotal: ${subtotal.toFixed(3)}</strong></div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Total */}
      <div className="pagar-total">
        Total a pagar: ${Number(total).toFixed(3)}
      </div>

      {/* Botones */}
      <button onClick={vaciarCarrito} className="pagar-btn trash">Vaciar carrito</button>
      <button onClick={() => navigate("/productos")} className="pagar-btn back">Seguir comprando</button>
      {carrito.length > 0 && (
        <button onClick={comprar} className="pagar-btn pay">Confirmar y pagar</button>
      )}

    </div>
  </div>
);

}


