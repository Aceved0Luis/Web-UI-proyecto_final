import { Card } from '../components/card.jsx';
import { useSelector } from 'react-redux';
import { Btn } from '../components/btn.jsx';
import { useDispatch } from 'react-redux';
import { addfavorite } from '../store/userFavorite.jsx';
import { del } from '../store/userSlice.jsx';
import { TituloContainer } from '../components/titulo-container.jsx';

export function Contactos(){
    const user = useSelector((state) => state.userSlice)
    const userFavorite = useSelector((state) => state.userFavorite)
    const dispatch = useDispatch() 

    function addfav(user){
        dispatch(addfavorite({  
            id: user.id,                             
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            avatar: user.avatar
        }))
    }

    function delUser(user){
        dispatch(del({
            id: user.id,                              
        }))
    }

    return(
        <> 
            <br />
            <TituloContainer title={"Contact List"} />
            <div className="container">
                {user ? user.map((user) => (
                <Card clase={(userFavorite.find((userN) => userN.id === user.id)) ? "img-card-fav" : "img-card"}
                    key={user.id} avatar={user.avatar} 
                    nombre={user.first_name+" "+user.last_name} 
                    email={user.email}
                    accion={<div className='card-contact'>
                    <Btn click={() => addfav(user)} texto={<i className='bx bxs-heart'></i>} 
                    clase={(userFavorite.find((userN) => userN.id === user.id)) ? "isfollow" : "follow"}/>
                    <Btn click={() => delUser(user)} texto={<i className='bx bxs-trash-alt'></i>} clase="delete"/>
                    </div>}/>
                )):null}
            </div>
        </>
    )
}