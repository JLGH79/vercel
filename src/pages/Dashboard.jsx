import React from 'react';
import { useAuthContext } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import '../pages/Dashboard.css';

export default function Dashboard() {
  const { usuario, cerrarSesion } = useAuthContext();
  const navigate = useNavigate();

  // Obtener el token actual
  const tokenActual = localStorage.getItem('authToken');

  // Función para navegar al formulario de agregar producto
  const manejarAgregarProducto = () => {
    navigate('/formulario-producto');
  };

return (
  <div className="dashboard-container">

    {/* ✅ TÍTULO ARRIBA Y CENTRADO */}
    <h1 className="dashboard-title">Dashboard Administrativo</h1>

    {/* ✅ TARJETA ABAJO DEL TÍTULO */}
    <div className="dashboard-card">
      <p><strong>Sesión iniciada como:</strong> {usuario.nombre}</p>

      <div className="dashboard-token">
        <strong>Token de autenticación:</strong>
        <br />
        <code>{tokenActual}</code>
      </div>

      <h3>Acciones:</h3>
      <div className="btn-admin-container">
        <button onClick={manejarAgregarProducto} className="btn-agregar">
          Agregar Productos
        </button>

        <Link to="/productos" className="btn-ver">
          Ver / Editar / Eliminar Productos
        </Link>
      </div>

      <hr />

      <button onClick={cerrarSesion} className="btn-logout">
        Cerrar sesión
      </button>
    </div>

  </div>
);

}