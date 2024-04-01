import { useSelector } from 'react-redux';
import { Card } from '../components/card';
import { Btn } from '../components/btn';
import { useDispatch } from 'react-redux';
import { delfavorite } from '../store/userFavorite.jsx';


export function Favoritos(){

  const userFavorite = useSelector((state) => state.userFavorite)
  const dispatch = useDispatch()  

  return(
    <> 
      <br />
      <h1 className="contactos">Favorite List</h1>
      <div className="container">
        {userFavorite ? userFavorite.map((user) => (
        <Card key={user.id} avatar={user.avatar} 
            nombre={user.first_name+" "+user.last_name} 
            email={user.email}
            accion={<div className='card-contact'>
            <Btn click={
              function handlerclick(){
                dispatch(delfavorite({                               
                  id: user.id
                }))
              }
            } texto={"X REMOVE"}/>
            </div>}/>
        )):<div>Loading...</div>}
      </div>
    </> 
  )
}