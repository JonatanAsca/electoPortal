import "./Login.css"
import { useState } from "react"

export function Login(){
    const [usuario, setUsuario] = useState(null)
    const [clave, setClave] = useState(null)
    const [error, setError] = useState(false)

    const handlesubmit = (e) => {
        e.preventDefault()

        if(usuario == null || clave == null){
            setError(true)
            return
        }
    }

    return(
        <section>
            <h1>Login</h1>
            <form className="Login"
            onSubmit={handlesubmit} >
                

                <input 
                type="text" 
                value={usuario}
                onChange={e => setUsuario(e.target.value)}/>
                <input 
                type="password" 
                value={clave}
                onChange={e => setClave(e.target.value)}/>
                <button>Iniciar Sesion</button>
            </form>
            {error && <p>Todos los campos son obligatorios</p>}
        </section>
    )
}
