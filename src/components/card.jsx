export function Card({nombre, email, accion, avatar="/img/profile.png"}){


  return(
    <article className='card'>
      <img className='img-card' src={avatar} alt="Image perfil" />
      <h2 className='name-card'>{nombre}</h2>
      <span className='mail-card'>{email}</span>
      <hr className='separador-card' />
      {accion}
  </article>
  )
}