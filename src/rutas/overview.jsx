import { Card } from '../components/card.jsx';
import { useSelector } from 'react-redux';
import { Btn } from '../components/btn.jsx';
import { useDispatch } from 'react-redux';
import { addfavorite, delfavorite } from '../store/userFavorite.jsx';

export function Overview(){

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

    function delfav(user){
        dispatch(delfavorite({                               
            id: user.id
        }))
    }

    return(
        <>
            <br />
            {userFavorite.length > 0 ? <>
                <div>
                    <h1>Favorite List</h1><hr />
                </div>
                <div className="contactos">
                    <div className="container-fav">
                        {userFavorite ? userFavorite.map((user) => (
                            <Card clase={"img-card-fav"} key={user.id} avatar={user.avatar} 
                                nombre={user.first_name+" "+user.last_name} 
                                email={user.email}
                                accion={<Btn click={() => delfav(user)}
                                    texto={"X REMOVE"} 
                                    clase={"remove"}
                                />}
                            />)):<h5>sin data</h5>
                        }
                    </div>
                </div></>:null
            }
            <br />
            <h1 className="contactos">Contact List</h1>
            <div className="container">
                {user ? user.map((user) => (
                    <Card clase={(userFavorite.find((userN) => userN.id === user.id)) ? "img-card-fav" : "img-card"} 
                        key={user.id} avatar={user.avatar} 
                        nombre={user.first_name+" "+user.last_name} 
                        email={user.email}
                        accion={<Btn click={() => addfav(user)}
                            texto={<i className='bx bxs-heart'></i>}
                            clase={(userFavorite.find((userN) => userN.id === user.id)) ? "isfollow" : "follow"}
                        />}
                    />
                )):<div>Loading...</div>}
            </div>
        </>
    )
}