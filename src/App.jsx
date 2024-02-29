import './App.css'

function App() {

  return (
    <article className='card'>
      <img className='img-card' src="./public/img/profile.png" alt="perfil" />
      <h2 className='name-card'>Full name</h2>
      <span className='mail-card'>mail@mail.com</span>
      <hr className='separador-card' />
      <button className='follow'>
        <i className='bx bxs-heart'></i>
      </button>
    </article>
  )
}

export default App
