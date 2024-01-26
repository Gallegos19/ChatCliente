import { useState, useEffect } from 'react';
import style from './Home.module.css';
import Nav from '../../components/nav/Nav';
import InputChat from '../../components/inputChat/InputChat';
import ButtonChat from '../../components/ButtonChat/ButtonChat';
import Message from '../../components/message/Message';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3005');

export default function Home() {
  const [isConnected, setIsConnected] = useState(false);
  const [mensajes, setMensajes] = useState([]);
  const [usuarioInfo, setUsuarioInfo] = useState(null);
  const [notis, setNotis] = useState(null);
  const [contadorMensajes, setContadorMensajes] = useState(0);

  const id = localStorage.getItem('id');

  useEffect(() => {
    obtenerInfoUsuario(); // Llamar a la función una vez al cargar el componente
    obtenerConteoMensajes();

    socket.on('update_contador', (newContadorValue) => {
      setContadorMensajes(newContadorValue);
    });
    socket.on('connect', () => setIsConnected(true));

    socket.on('chat_message', (data) => {
      setMensajes((mensajes) => [...mensajes, data]);
    });

    // Implementación de long polling: Realizar una solicitud cada 5 segundos
    const pollingInterval = setInterval(obtenerConteoMensajes, 5000);

    return () => {
      socket.off('connect');
      socket.off('chat_message');
      clearInterval(pollingInterval); // Limpiar el temporizador al desmontar el componente
    };
  }, []);

  // Función para obtener información del usuario
  const obtenerInfoUsuario = async () => {
    try {
      const response = await fetch(`http://localhost:3005/chatneco/usuario/${id}`);
      const data = await response.json();
      setUsuarioInfo(data.data);
    } catch (error) {
      console.error('Error al obtener información del usuario:', error);
    }
  };


  // Función para obtener el conteo de mensajes con long polling
  const obtenerConteoMensajes = async () => {
    try {
      const response = await fetch(`http://localhost:3005/chatneco/chat/contador`);
      if (response.ok) {
        const data = await response.json();
        if (data.contador !== contadorMensajes) {
          setContadorMensajes(data.contador);
        }
      } else {
        console.error('Error:', response.status);
      }
    } catch (error) {
      if (error.name === 'AbortError') {
        console.log('La petición ha tardado demasiado. Intentando de nuevo...');
        obtenerConteoMensajes();
      } else {
        console.error('Error inesperado:', error);
      }
    }
  };

  // Función para enviar mensajes
  const enviarMensaje = (mensaje) => {
    if (usuarioInfo) {
      // Enviar el mensaje junto con la información del usuario
      socket.emit('chat_message', {
        usuario: usuarioInfo.nombre,
        mensaje: mensaje,
      });
    }
  };

  // Set localStorage si está conectado
  if (isConnected) {
    console.info('Conectado');
  }

  return (
    <div className={style.homeContainer}>
      <Nav />
      <div className={style.input}>
        <div className={style.messagesContainer}>
          {mensajes.map((mensaje, index) => (
            <Message key={index} usuario={mensaje.usuario} mensaje={mensaje.mensaje} />
          ))}
        </div>
        <div className={style.notificaciones}>
          <p style={{color:'black'}}>Se han enviado {contadorMensajes} mensajes</p>
        </div>
        <InputChat enviarMensaje={enviarMensaje} />
      </div>
    </div>
  );
}
