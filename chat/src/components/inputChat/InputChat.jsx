import { useState } from 'react';
import style from './InputChat.module.css';
import ButtonChat from '../ButtonChat/ButtonChat';
export default function InputChat({ enviarMensaje }) {
  const [nuevoMensaje, setNuevoMensaje] = useState('');

  const handleInputChange = (e) => {
    setNuevoMensaje(e.target.value);
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
      <button style={{borderRadius:'50%'}} onClick={handleEnviarClick}><ButtonChat/></button>
    </div>
  );
}
