import { Btn } from "./btn"
import './header.css'
export function Header(){
    return (
        <header className="header">
            <img src="../public/img/globant.png" alt="Logo de Globant"/>
            <div className="header-div">
                <ul className="header-nav">
                    <li>Overview</li>
                    <li>Contacts</li>
                    <li>Favorites</li>
                </ul>
                <Btn texto={"+ New"} />
            </div>
        </header>
    )
}