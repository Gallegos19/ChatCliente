import { IoIosSend } from "react-icons/io";
import style from './Button.module.css'

export default function ButtonChat() {
  return (
    <div className={style.containerButton}>
        <IoIosSend color="white" size={40}/>
    </div>
  )
}
