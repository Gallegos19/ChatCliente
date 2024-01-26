import { IoLogoSnapchat } from "react-icons/io5";
import style from './Banner.module.css'

export default function Banner() {
  return (
    <div className={style.ContainerBanner}>
         <IoLogoSnapchat size={30}/>
         <p>
         CHATNECO
         </p>
        
    </div>
  )
}
