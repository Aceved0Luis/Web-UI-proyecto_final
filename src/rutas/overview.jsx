import { Card } from '../components/card.jsx';
import { useSelector } from 'react-redux';
import { Btn } from '../components/btn.jsx';

export function Overview(){

    const user = useSelector((state) => state.userSlice)
    const userFavorite = useSelector((state) => state.userFavorite)

    return(
        <>
            <br />
            <div className="contactos">
                <h1>Favorite List</h1><hr />
                {userFavorite ? userFavorite.map((user) => (
                    <Card key={user.id} avatar={user.avatar} 
                    nombre={user.first_name+" "+user.last_name} 
                    email={user.email}
                    accion={<Btn texto={<i className='bx bxs-heart'></i>}/>}/>))
                    :null
                }
            </div>
            <br />
            <h1 className="contactos">Contact List</h1>
            <div className="container">
                {user ? user.map((user) => (
                <Card key={user.id} avatar={user.avatar} 
                    nombre={user.first_name+" "+user.last_name} 
                    email={user.email}
                    accion={<Btn texto={<i className='bx bxs-heart'></i>}
                    clase="follow"/>}/>
                )):<div>Loading...</div>}
            </div>
        </>
    )
}