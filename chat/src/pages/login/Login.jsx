import { useState } from 'react';
import axios from 'axios';
import style from './Login.module.css';
import { IoLogoSnapchat } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validar que los campos no estén vacíos
    if (!email || !password) {
      setError('Por favor, completa todos los campos.');
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:3005/chatneco/usuario/auth',
        {
          correo: email,
          contrasena: password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      // Guardar el token en localStorage
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('id', response.data.id);

      navigate('/home');
    } catch (error) {
      // Manejar el error, por ejemplo, mostrar un mensaje al usuario
      setError('Error al iniciar sesión. Verifica tu correo y contraseña.');
      console.error('Error al iniciar sesión:', error.response.data.message);
    }
  };

  const irRegistro = () => {
    navigate('/register');
  };

  return (
    <div className={style.ContainerLogin}>
      <div className={style.ladoIzquierdo}>
        <IoLogoSnapchat size={80} />
        <h1>ChatNeco</h1>
      </div>
      <div className={style.ladoDerecho}>
        <h2>Iniciar Sesion</h2>
        <br />
        <br />
        <form onSubmit={handleLogin}>
          <strong>Correo</strong>
          <input
            type="email"
            placeholder="Escribe tu correo"
            className={style.inputs}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <strong>Contraseña</strong>
          <input
            type="password"
            placeholder="Escribe tu contraseña"
            className={style.inputs}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <div className={style.error}>{error}</div>}

          <button type="submit" className={style.boton}>
            <b>Iniciar Sesion</b>
          </button>
        </form>

        <a onClick={irRegistro}>No tienes cuenta, registrate aca</a>
      </div>
    </div>
  );
}
