export function Card({id, nombre, email, accion, avatar="/img/profile.png"}){


  return(
    <article key={id} className='card'>
      <img className='img-card' src={avatar} alt="perfil" />
      <h2 className='name-card'>{nombre}</h2>
      <span className='mail-card'>{email}</span>
      <hr className='separador-card' />
      {accion}
  </article>
  )
}