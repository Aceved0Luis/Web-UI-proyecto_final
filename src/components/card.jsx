export function card({id, nombre, apellido, correo, foto}){

    const full_name = nombre + ' ' +apellido;

    return(
        <article key={id} className='card'>
            <img className='img-card' src={foto} alt="perfil" />
            <h2 className='name-card'>{full_name}</h2>
            <span className='mail-card'>{correo}</span>
            <hr className='separador-card' />
            <button className='follow'>
                <i className='bx bxs-heart'></i>
            </button>
        </article>
    )
}