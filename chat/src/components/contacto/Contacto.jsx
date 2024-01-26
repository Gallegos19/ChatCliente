import style from "./Contacto.module.css";
import { FaUserCircle } from "react-icons/fa";

export default function Contacto(props) {
  return (
    <div className={style.containerContacto}>
      <FaUserCircle size={30}/>
      <h3>{props.contacto}</h3>
    </div>
  );
}
