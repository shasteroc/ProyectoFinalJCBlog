import "./Formulario.css"
import {useState} from "react"
export function Formulario(){
    const {nombre, setNombre} = useState ("")
    const {contrasena, setContrasena} = useState ("")
    const {error, setError} = useState (false)

    const handleSubmit =() => {
        e.preventDefault()
        if (nombre=="" || contrasena==""){
            setError(true)
            return
        }
    }

    return(
        <section>
            <h1>Login</h1>

            <form 
                className="formulario"
                onSubmit={handleSubmit}
            >
                <input 
                    type="text" 
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                />
                <input 
                    type="password" 
                    value={contrasena}
                    onChange={e => setContrasena(e.target.value)}
                />
                <button>Iniciar sesion</button>
            </form>
            {error && <p>Todos los campos son obligatorios</p>}
        </section>
    )
}