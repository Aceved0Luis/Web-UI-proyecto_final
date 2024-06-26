import { NavLink } from "react-router-dom";
import { Btn } from "./btn"
import './header.css'
import { Form } from "./form";
import { useState } from "react";

export function Header(){

    const [show,setShow] = useState(false);
    return (
        <>
            <header className="header">
                <i className='bx bxs-contact'></i>
                <div className="header-div">
                    <ul className="header-nav">
                        <li><NavLink to="/">Overview</NavLink></li>
                        <li><NavLink to="/contactos">Contacts</NavLink></li>
                        <li><NavLink to="/favoritos">Favorites</NavLink></li>
                    </ul>
                    <Btn clase={"btn-new"} texto={"+ New"} click={()=> setShow(!show)}/>
                </div>
            </header>
            <Form show={show} set={setShow}/>
        </>
    )
       
            
}
