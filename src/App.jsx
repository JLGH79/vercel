import React from "react";
import Inicio from "./pages/Inicio";
import Navbar from "./pages/Navbar";
import Productos from "./pages/Productos";
import ProductoDetalle from "./pages/DetalleProductos";
import Pagar from "./pages/Pagar";
import RutaProtegida from "./pages/RutaProtegida";
import IniciarSesion from "./pages/IniciarSesion";
import Footer from "./pages/Footer";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { ProductsProvider } from "./context/ProductsContext";
import Dashboard from "./pages/Dashboard";
import FormularioProducto from './components/FormularioProducto';
import EliminarProducto from './components/EliminarProducto';
import Reviews from "./pages/Reviews"; 
import Contact from "./pages/Contact";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './styles/Toastify.css';


import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <AuthProvider>
        <CartProvider>
          <ProductsProvider>

            <Navbar />

            <ToastContainer
  position="top-right"
  autoClose={3000}
  closeButton={true}
  hideProgressBar={false}
  pauseOnHover
  draggable
  limit={3}
/>


            <Routes>
        
              <Route path="/" element={<Inicio />} />
              <Route path="/productos" element={<Productos />} />
              <Route path="/productos/:id" element={<ProductoDetalle />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/iniciar-sesion" element={<IniciarSesion />} />
              <Route path="/productos/:categoria/:id" element={<ProductoDetalle />} />

              {/* RUTAS PROTEGIDAS */}
              <Route path="/pagar" element={<RutaProtegida><Pagar /></RutaProtegida>} />
              <Route path="/dashboard" element={<RutaProtegida soloAdmin={true}><Dashboard /></RutaProtegida>} />

              <Route path="/formulario-producto" element={<RutaProtegida><FormularioProducto /></RutaProtegida>} />
              <Route path="/eliminar-producto" element={<RutaProtegida><EliminarProducto /></RutaProtegida>} />

              {/* Redirección por defecto */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>

            <Footer />

          </ProductsProvider>
        </CartProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
