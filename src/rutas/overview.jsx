import { Card } from '../components/card.jsx';
import { useSelector } from 'react-redux';

export function Overview(){

    const user = useSelector((state) => state.userSlice[0])
    
    return(
        <>
            <br />
            <h1 className="contactos">Contact List</h1>
            <div className="container">
                {user ? user.map((user) => (
                <Card id={user.id} avatar={user.avatar} nombre={user.first_name+" "+user.last_name} email={user.email}/>
                )):<div>Loading...</div>}
            </div>
        </>
    )
}