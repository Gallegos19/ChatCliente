import { useState } from 'react';
import style from './InputChat.module.css';
import ButtonChat from '../ButtonChat/ButtonChat';
export default function InputChat({ enviarMensaje }) {
  const [nuevoMensaje, setNuevoMensaje] = useState('');

  const handleInputChange = (e) => {
    setNuevoMensaje(e.target.value);
    console.log(nuevoMensaje)
  };

  const handleEnviarClick = () => {
    if (nuevoMensaje.trim() !== '') {
      enviarMensaje(nuevoMensaje);
      setNuevoMensaje('');
    }
  };

  return (
    <div className={style.containerInput}>
      <input
        type="text"
        placeholder="Write your messages"
        value={nuevoMensaje}
        onChange={handleInputChange}
      />
      <button onClick={handleEnviarClick}><ButtonChat/></button>
    </div>
  );
}
