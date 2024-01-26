import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const token = localStorage.getItem('token');

  if (!token) {
    // Si no hay token, redirigir al componente de inicio de sesión
    return <Navigate to="/" />;
  }

  // Si hay un token, renderizar el componente Home
  return <Outlet />;
};

export default PrivateRoute;
