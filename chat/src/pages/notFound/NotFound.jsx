import style from './NotFound.module.css';

export default function NotFound() {
  return (
    <div className={style.container}>
      <h1 className={style.title}>404 - Pagina no encontrada</h1>
      <p className={style.message}>La página que buscas no existe o no se encuentra disponible.</p>
    </div>
  );
}
