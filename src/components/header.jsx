import { NavLink } from "react-router-dom";
import { Btn } from "./btn"
import './header.css'
import { useLocation } from 'react-router-dom';
import { Form } from "./form";
import { useState } from "react";

export function Header(){
    let location = useLocation();
    const [show,setShow] = useState(false);

    return (
        <>
            <header className="header">
                <img src="/img/globant.png" alt="Logo de Globant"/>
                <div className="header-div">
                    <ul className="header-nav">
                        <li><NavLink to="/">Overview</NavLink></li>
                        <li><NavLink to="/contactos">Contacts</NavLink></li>
                        <li><NavLink to="/favoritos">Favorites</NavLink></li>
                    </ul>
                    <Btn texto={"+ New"} click={()=> setShow(!show)}/>
                </div>
            </header>
            <Form show={show}/>
        </>
    )
       
            
}
