import React from 'react'
import style from './Message.module.css'
export default function Message(props) {
  return (
    <div style={{display:'flex', color:'black', marginBottom:'2%', boxShadow:'0px 1px 0px black', maxWidth:'40vw', borderRadius:'5px', alignItems:'center', justifyContent:'left', flexWrap:'wrap'}}>
      Usuario: {props.usuario}
      <br />
       Mensaje: {props.mensaje}

    </div>
  )
}
