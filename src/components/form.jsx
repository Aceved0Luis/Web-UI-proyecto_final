import { useState } from "react"
import { useDispatch } from 'react-redux'
import { add } from '../store/userSlice'
import { useSelector } from 'react-redux';
import { addfavorite } from "../store/userFavorite";

export function Form({show, set}){

    const user = useSelector((state) => state.userSlice)
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [favorite, setFavorite] = useState(false)
    const dispatch = useDispatch()

    const handlerclick = (e) => {
        e.preventDefault()
        let id = user.length + 1;
        dispatch(add({
                id: id,
                first_name: firstname,
                last_name: lastname,
                email: email,
            })
        )
        if (favorite){
            dispatch(addfavorite({  
                id: id,
                first_name: firstname,
                last_name: lastname,
                email: email
            }))
            setFavorite(false);
        }
        set(false)
        setFirstname("");
        setLastname("");
        setEmail("");
        id = 0;
    }

    return(
        <section className="formulario-section" style={show ? ({display:"inline-block"}) : ({display:"none"})}>
            <form onSubmit={handlerclick}>
                <input type = "text" value = {firstname} onChange = {(e) => setFirstname(e.target.value)} required placeholder = "First Name"/>
                <input type = "text" value = {lastname} onChange = {(e) => setLastname(e.target.value)}required placeholder = "Last Name"/>
                <input type = "email" value = {email} onChange = {(e) => setEmail(e.target.value)}required placeholder = "Email"/>
                <br />
                <label>
                    Enable like favorite
                    <input type = "checkbox" value = {favorite} onChange = {(e) => setFavorite(e.target.checked)} />
                </label>
                <br />
                <button>SAVE</button>
            </form>
        </section>
    )
} 