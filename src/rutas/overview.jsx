import { Card } from '../components/card.jsx';
import { useEffect, useState } from 'react';
import { Header } from '../components/header.jsx';

const url = "https://reqres.in/api/users?page=1"

export function Overview(){
    
    const [user, setUser] = useState();

    useEffect(() => {
        const getUser = async() => {
            const response = await fetch(url).then((response) => response.json());
            setUser(response.data);
        }
        getUser()
    },[])
    
    return(
        <>
            <Header />
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