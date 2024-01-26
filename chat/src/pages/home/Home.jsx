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
  const id = localStorage.getItem('id');
  useEffect(() => {
    socket.on('connect', () => setIsConnected(true));

    socket.on('chat_message', (data) => {
      setMensajes((mensajes) => [...mensajes, data]);
    });

    return () => {
      socket.off('connect');
      socket.off('chat_message');
    };
  }, []);
    // Set localStorage if connected
    if (isConnected) {
      console.info('connect')
    }
  const enviarMensaje = (mensajes) => {
    console.log(mensajes)
    socket.emit('chat_message', {
      usuario: id,
      mensaje: mensajes,
    });
    console.log(mensajes)


  };

  return (
    <div className={style.homeContainer}>
      <Nav />
      <div className={style.input}>
        <div className={style.messagesContainer}>
        {mensajes.map((mensaje, index) => (
          <Message key={index} usuario={mensaje.usuario} mensaje={mensaje.mensaje} />
        ))}
        </div>
        <InputChat enviarMensaje={enviarMensaje} />
      </div>
    </div>
  );
}
