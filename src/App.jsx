import { Card } from './components/card.jsx';
import { Suspense } from 'react';
import { fetchData } from './logic/fetchData';
import { Header } from './components/header.jsx';

const apiData = fetchData("https://reqres.in/api/users?page=1");

function App() {
  const datos = apiData.read();
  return (
    <>
      <Header />
      <br />
      <h1 className="contactos"><hr />Contact List</h1>
      <div className="container">
      <Suspense fallback={<div>Loading...</div>}>
        {datos.data ?.map((user) => (
          <Card id={user.id} avatar={user.avatar} nombre={user.first_name+" "+user.last_name} email={user.email}/>
        ))}
      </Suspense>
      </div>
    </>
  )
}

export default App
