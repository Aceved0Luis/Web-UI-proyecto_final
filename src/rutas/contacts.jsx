import { Card } from '../components/card.jsx';
import { useSelector } from 'react-redux';
import { Btn } from '../components/btn.jsx';

export function Contactos(){
    const user = useSelector((state) => state.userSlice)
    return(
        <> 
            <br />
            <h1 className="contactos">Contact List</h1>
            <div className="container">
                {user ? user.map((user) => (
                <Card key={user.id} avatar={user.avatar} 
                    nombre={user.first_name+" "+user.last_name} 
                    email={user.email}
                    accion={<div className='card-contact'>
                    <Btn texto={<i className='bx bxs-heart'></i>} clase="follow"/>
                    <Btn texto={<i className='bx bxs-trash-alt'></i>} clase="delete"/>
                    </div>}/>
                )):<div>Loading...</div>}
            </div>
        </>
    )
}