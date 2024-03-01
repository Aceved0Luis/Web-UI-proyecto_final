import { Suspense } from 'react';
import { fetchData } from './logic/fetchData.jsx'
import { card } from './components/card.jsx';

const apiData = fetchData("https://reqres.in/api/users?page=1");

function App() {

  const datos = apiData.read();

  return (
    <>
      <h1 className="contactos"><hr />Contact List</h1>
      <div className="container">
        <Suspense fallback={<div>Loading...</div>}>
          {datos.data ?.map((user) => (
            <article key={user.id} className='card'>
              <img className='img-card' src={user.avatar} alt="perfil" />
              <h2 className='name-card'>{user.first_name +" "+ user.last_name}</h2>
              <span className='mail-card'>{user.email}</span>
              <hr className='separador-card' />
              <button className='follow'>
                  <i className='bx bxs-heart'></i>
              </button>
            </article>
          ))}
        </Suspense>
      </div>
    </>
  )
}

export default App
