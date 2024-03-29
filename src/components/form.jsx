import { useState } from "react"
import { useDispatch } from 'react-redux'
import { add } from '../store/userSlice'
export function Form({show}){
    const [firstname, setfirstname] = useState("")
    const [lastname, setlastname] = useState("")
    const [email, setemail] = useState("")
    const [favorite, setfavorite] = useState(false)
    
    const dispatch = useDispatch()
    
    const handlerclick = () => {
        dispatch(add({
                firs_tname: firstname,
                last_name: lastname,
                email: email,
            })
        )
        setfirstname("")
        setlastname("")
        setemail("")
        
        
    }

    return(
        <section className="formulario-section" style={show ? ({display:"inline-block"}) : ({display:"none"})}>
            <form onSubmit={handlerclick}>
                <input type = "text" value = {firstname} onChange = {(e) => setfirstname(e.target.value)} required placeholder = "First Name"/>
                <input type = "text" value = {lastname} onChange = {(e) => setlastname(e.target.value)}required placeholder = "Last Name"/>
                <input type = "email" value = {email} onChange = {(e) => setemail(e.target.value)}required placeholder = "Email"/>
                <br />
                <label>
                    Enable like favorite
                    <input type = "checkbox" value = {favorite} onChange = {(e) => setfavorite(e.target.checked)} />
                </label>
                <br />
                <button>SAVE</button>
            </form>
        </section>
    )
} 