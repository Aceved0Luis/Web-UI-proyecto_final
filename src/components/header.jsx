import { Link } from "react-router-dom";
import { Btn } from "./btn"
import './header.css'
import { useLocation } from 'react-router-dom';

export function Header(){
    let location = useLocation();

    switch(location.pathname){
        case '/favoritos':
            return (
                <header className="header">
                    <img src="/img/globant.png" alt="Logo de Globant"/>
                    <div className="header-div">
                        <ul className="header-nav">
                            <li><Link to="/">Overview</Link></li>
                            <li><Link to="contactos">Contacts</Link></li>
                            <li>Favorites</li>
                        </ul>
                        <Btn texto={"+ New"} />
                    </div>
                </header>
            )
        case '/contactos':
            return (
                <header className="header">
                    <img src="/img/globant.png" alt="Logo de Globant"/>
                    <div className="header-div">
                        <ul className="header-nav">
                            <li><Link to="/">Overview</Link></li>
                            <li>Contacts</li>
                            <li><Link to="favoritos">Favorites</Link></li>
                        </ul>
                        <Btn texto={"+ New"} />
                    </div>
                </header>
            )
            default:
                return (
                    <header className="header">
                        <img src="/img/globant.png" alt="Logo de Globant"/>
                        <div className="header-div">
                            <ul className="header-nav">
                                <li>Overview</li>
                                <li><Link to="contactos">Contacts</Link></li>
                                <li><Link to="favoritos">Favorites</Link></li>
                            </ul>
                            <Btn texto={"+ New"} />
                        </div>
                    </header>
                )
   }

    
}