export function Card({nombre, email, accion, clase='img-card', avatar="/img/profile.png"}){


  return(
    <article className='card'>
      <img className={clase} src={avatar} alt="Image perfil" />
      <h2 className='name-card'>{nombre}</h2>
      <span className='mail-card'>{email}</span>
      <hr className='separador-card' />
      {accion}
  </article>
  )
}