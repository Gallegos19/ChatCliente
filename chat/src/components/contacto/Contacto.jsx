import React from "react";
import style from "./Contacto.module.css";
import { FaUserCircle } from "react-icons/fa";

export default function Contacto() {
  return (
    <div className={style.containerContacto}>
      <FaUserCircle size={30}/>
      <h3>Contacto</h3>
    </div>
  );
}
