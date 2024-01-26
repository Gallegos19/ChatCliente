import React from 'react'
import style from './Message.module.css'
export default function Message(props) {
  return (
    <div style={{display:'flex', color:'black'}}>
      Usuario: {props.usuario}
      <br />
       Mensaje: {props.mensaje}

    </div>
  )
}
