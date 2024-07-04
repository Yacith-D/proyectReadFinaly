import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {PostUser} from '../services/axios'


const Forregistro = () => {
const [usuario,SetName] = useState("")
const [contrasena,SetPass] = useState("")
const navegar = useNavigate();


const verificarDatos = async () =>{

if (usuario.trim() === "" || contrasena.trim() === "" ) {
  alert ("espacio vacios, por favor completarlos")
  return;
  
}else{
  await PostUser(usuario,contrasena)
  alert("usuario resgistrado correctamente")
  navegar("/login")
  }
}

  return (
    <div>
        <h1>registro</h1>
        <label htmlFor="">usuario</label>
        <input type="text" id="usuario" name="nombre" value={usuario} onChange={(e) => SetName(e.target.value)} />
        <label htmlFor="">contraseña</label>
        <input type="text" id="contrasena" name="contrasena" value={contrasena} onChange={(e) => SetPass(e.target.value)} />
        <button onClick={verificarDatos}>rejistro</button>
        <button> <Link to='/login'>iniciar Sesíon</Link> </button>
  </div>
  )
}

export default Forregistro