import { useState } from "react"
export function Card({id, avatar, nombre, email}){

  const [isFavorite, setIsFavorite]=useState(false)

  return(
    <article key={id} className='card'>
      <img className='img-card' src={avatar} alt="perfil" />
      <h2 className='name-card'>{nombre}</h2>
      <span className='mail-card'>{email}</span>
      <hr className='separador-card' />
      <button className='follow' onClick={()=> setIsFavorite(!isFavorite)}>
        <i id="intro" className='bx bxs-heart' style={isFavorite ? ({color:"#C1D72F"}) : ({})}></i>
      </button>
  </article>
  )
}