import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { io } from 'socket.io-client';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import NotFound from '../pages/notFound/NotFound';
import '../css/App.css';
import Home from '../pages/home/Home';
import { useState, useEffect } from "react";

// Your socket connection
const socket = io('http://localhost:3005');

// Your component function
function App() {
  // Initialize state and effect here
  const [isConnected, setIsConnected] = useState(false);
  const [nuevoMensaje, setNuevoMensaje] = useState('');
  const [mensajes, setMensajes] = useState([]);

  
  
  return (
    <>
      <BrowserRouter>
        <div>
          <Routes>
            {/* Ruta protegida */}
            <Route path="/home" element={<ProtectedRoute element={<Home />} />} />

            {/* Rutas públicas */}
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Ruta para cualquier otra URL no coincidente */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

// ProtectedRoute component
const ProtectedRoute = ({ element }) => {
  // Verificar la existencia del token en el localStorage
  const isAuthenticated = localStorage.getItem("token");

  if (!isAuthenticated) {
    // Redirigir a la página de inicio de sesión si no hay token
    return <Navigate to="/" />;
  }

  // Mostrar el componente de la ruta protegida si hay un token
  return element;
};

export default App;
