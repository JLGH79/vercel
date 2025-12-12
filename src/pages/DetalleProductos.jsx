import { Link, useParams, useLocation } from "react-router-dom";
import "../pages/ProductoDetalle.css";

const ProductoDetalle = () => {

  const { id } = useParams();
  const location = useLocation();
  const producto = location.state?.producto;

  return (
    <div className="producto-detalle-container">
      <h2>Detalles del Producto {id}</h2>

      <ul className="producto-detalle-card">
        <li key={producto.id}>
          <h3>{producto.nombre}</h3>

          <p>
            <strong>Descripción:</strong> {producto.descripcion}
          </p>

          <p>
            <strong>Precio:</strong> ${producto.precio}
          </p>

          <img src={producto.avatar} alt={producto.nombre} />
        </li>

        <hr />

        <Link to="/productos">
          <button className="boton-volver">Volver</button>
        </Link>
      </ul>
    </div>
  );
};

export default ProductoDetalle;
