import React, { useState } from 'react';
import style from './Nav.module.css';
import Contacto from '../contacto/Contacto';
import Banner from '../Banner/Banner';
import { IoMdLogOut } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

export default function Nav() {
  const navigate = useNavigate();
  const id = localStorage.getItem('id');
  const [newChatId, setNewChatId] = useState('');

  function logout() {
    if (id && parseInt(id, 10) > 0) {
      localStorage.removeItem('id');
      localStorage.removeItem('token');
      navigate('/');
    } else {
      console.error("ID inválido");
    }
  }

  function handleCreateChat() {
    const parsedChatId = parseInt(newChatId, 10);

    if (parsedChatId > 0) {
      // Lógica para crear el chat con el ID válido
      console.log(`Creando chat con ID ${parsedChatId}`);
    } else {
      // Puedes manejar una alerta o mensaje de error aquí
      console.error("ID de chat inválido");
    }
  }

  return (
    <div className={style.ContainerNav}>
      <Banner />
      <div className={style.chatsContacto}>
        <Contacto contacto='Chat General' />
   
      </div>
      <div className={style.crearChat}>
        <input
          type="number"
          placeholder='Ingresa el ID del usuario '
          value={newChatId}
          onChange={(e) => setNewChatId(e.target.value)}
        />
        <button onClick={handleCreateChat}>Crear Chat</button>
      </div>
      <div className={style.downBanner}>
        <IoMdLogOut size={30} onClick={logout} />
        <p>
          Id: {id}
        </p>
      </div>
    </div>
  )
}
