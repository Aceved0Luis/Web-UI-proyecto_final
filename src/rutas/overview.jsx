import { Card } from '../components/card.jsx';
import { useSelector } from 'react-redux';
import { Btn } from '../components/btn.jsx';
import { useDispatch } from 'react-redux';
import { addfavorite, delfavorite } from '../store/userFavorite.jsx';

export function Overview(){

    const user = useSelector((state) => state.userSlice)
    const userFavorite = useSelector((state) => state.userFavorite)
    const dispatch = useDispatch()   

    return(
        <>
            <br />
            <div className="contactos">
                <h1>Favorite List</h1>
                <div className="container">
                    {userFavorite ? userFavorite.map((user) => (
                        <Card key={user.id} avatar={user.avatar} 
                        nombre={user.first_name+" "+user.last_name} 
                        email={user.email}
                        accion={<Btn click={
                            function handlerclick(){
                                dispatch(delfavorite({                               
                                    id: user.id
                                }))
                            }
                        } texto={"X REMOVE"}/>}/>))
                        :<h5>sin data</h5>
                    }
                </div>
            </div>
            <br />
            <h1 className="contactos">Contact List</h1>
            <div className="container">
                {user ? user.map((user) => (
                    <Card key={user.id} avatar={user.avatar} 
                    nombre={user.first_name+" "+user.last_name} 
                    email={user.email}
                    accion={<Btn click={
                        function handlerclick(){
                            dispatch(addfavorite({                               
                                first_name: user.first_name,
                                last_name: user.last_name,
                                email: user.email,
                                avatar: user.avatar
                            }))
                        }
                    } texto={<i className='bx bxs-heart'></i>}
                    clase="follow"/>}/>
                )):<div>Loading...</div>}
            </div>
        </>
    )
}