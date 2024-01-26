import { useState } from 'react';
import axios from 'axios';
import style from './Register.module.css';
import { IoLogoSnapchat } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      // Validar que los campos no estén vacíos
      if (!name || !email || !password) {
        setError('Por favor, completa todos los campos.');
        return;
      }

      await axios.post(
        'http://localhost:3005/chatneco/usuario/',
        {
          correo: email,
          nombre: name,
          contrasena: password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      // Redirigir a la página principal después del registro
      navigate('/');
    } catch (error) {
      setError('Error al registrarse. Verifica tus datos.');
      console.error('Error al registrarse:', error.response?.data?.message || error.message);
    }
  };

  return (
    <div className={style.ContainerLogin}>
      <div className={style.ladoIzquierdo}>
        <IoLogoSnapchat size={80} />
        <h1>ChatNeco</h1>
      </div>
      <div className={style.ladoDerecho}>
        <h2>Registrarse</h2>
        <br />
        <br />
        <form onSubmit={handleRegister} className={style.form}>
          <strong>Nombre</strong>
          <input
            type="text"
            placeholder="Escribe tu nombre"
            className={style.inputs}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

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
            <b>Registrarse</b>
          </button>
        </form>
      </div>
    </div>
  );
}
