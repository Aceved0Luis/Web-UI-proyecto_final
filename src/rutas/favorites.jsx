import { useSelector } from 'react-redux';
import { Card } from '../components/card';
import { Btn } from '../components/btn';
import { useDispatch } from 'react-redux';
import { delfavorite } from '../store/userFavorite.jsx';
import { TituloContainer } from '../components/titulo-container.jsx';

export function Favoritos(){

  const userFavorite = useSelector((state) => state.userFavorite)
  const dispatch = useDispatch() 
  function handlerclick(user){
    dispatch(delfavorite({                               
      id: user.id
    }))
  } 

  return(
    <> 
      <br />
      <TituloContainer title={"Favorite List"} />
      <div className="container-fav">
        {userFavorite ? userFavorite.map((user) => (
        <Card clase={"img-card-fav"} key={user.id} avatar={user.avatar} 
            nombre={user.first_name+" "+user.last_name} 
            email={user.email}
            accion={<div className='card-contact'>
            <Btn click={() => handlerclick(user)} texto={"X REMOVE"} clase={"remove"}/>
            </div>} />
        )):<div>Loading...</div>}
      </div>
    </> 
  )
}