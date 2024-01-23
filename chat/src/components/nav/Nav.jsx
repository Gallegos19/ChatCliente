import React from 'react'
import style from './Nav.module.css';
import Contacto from '../contacto/Contacto';
import Banner from '../Banner/Banner';
export default function Nav() {
  return (
    <div className={style.ContainerNav}>
        <Banner/>
        <div className={style.chatsContacto}>
        <Contacto contacto='Juan Mecanico'/>   
        <Contacto contacto='Juan Mecanico'/>
        <Contacto contacto='Juan Mecanico'/>
        <Contacto contacto='Juan Mecanico'/>
        <Contacto contacto='Juan Mecanico'/>
        <Contacto contacto='Juan Mecanico'/>
        <Contacto contacto='Juan Mecanico'/>
        <Contacto contacto='Juan Mecanico'/>
        <Contacto contacto='Juan Mecanico'/>
        <Contacto contacto='Juan Mecanico'/>
        </div>
       

        
     
        
    </div>
  )
}
