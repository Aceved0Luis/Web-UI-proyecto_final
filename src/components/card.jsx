
export function Card({id, avatar, nombre, email}){
  return(
    <article key={id} className='card'>
      <img className='img-card' src={avatar} alt="perfil" />
      <h2 className='name-card'>{nombre}</h2>
      <span className='mail-card'>{email}</span>
      <hr className='separador-card' />
      <button className='follow'>
        <i className='bx bxs-heart'></i>
      </button>
  </article>
  )
}