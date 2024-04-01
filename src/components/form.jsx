import { useState } from "react"
import { useDispatch } from 'react-redux'
import { add } from '../store/userSlice'
export function Form({show}){
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [favorite, setFavorite] = useState(false)
    
    const dispatch = useDispatch()
    
    const handlerclick = (e) => {
        e.preventDefault()
        dispatch(add({
                first_name: firstname,
                last_name: lastname,
                email: email,
            })
        )
        setFirstname("")
        setLastname("")
        setEmail("")
        
        
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