import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {PostUser} from '../../services/axios'
import "./registro.css"
import Swal from "sweetalert2"

const Forregistro = () => {
const [usuario,SetName] = useState("")
const [contrasena,SetPass] = useState("")
const navegar = useNavigate();


const verificarDatos = async () =>{

if (usuario.trim() === "" || contrasena.trim() === "" ) {
  Swal.fire("espacio vacios, por favor completarlos")
  return;
  
}else{
  await PostUser(usuario,contrasena)
  alert("usuario resgistrado correctamente")  
  navegar("/login")
  }
}

  return (
    <div className="contenedorRegistro">
       <div className="contieneDiv1">
          <h1 id="tituloRegistro">registro</h1> <br />
          <div id="pru">

          <label htmlFor="">nombre</label>
          <label htmlFor="">apellido</label>

          <input type="text" id="nombre" />
          <input type="text" id="apellido" />

          <label  id="usuarioLabel">usuario</label> 
          <label id="">contraseña</label>

          <input type="text" id="" name="nombre"  value={usuario} onChange={(e) => SetName(e.target.value)} />
          <input type="text" id="" name="contrasena" value={contrasena} onChange={(e) => SetPass(e.target.value)} /> <br /> <br />
          </div>
          <button onClick={verificarDatos} id="btnRegistro">Registrar</button>  <br />
          <button id="linkSesíon"> <Link to='/login'>Ya tienes cuenta.?</Link> </button>
        </div>

        <div className="contieneDiv2">
         <img id="imgDiv" src="https://previews.123rf.com/images/valentint/valentint1701/valentint170103090/69298434-icono-de-registro-botón-de-sitio-web-de-registro-en-fondo-azul-bajo-poli.jpg" alt="" />
        </div>

  </div>
  )
}

export default Forregistro