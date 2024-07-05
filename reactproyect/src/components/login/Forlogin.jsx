import { Link, useNavigate} from "react-router-dom"
import { GetUser } from "../../services/axios";
import { useRef, useState } from "react"
import './styleLogin.css'

const Forlogin =  () => {
const [UserName,SetName] = useState("");
const [UserPass,SetPass] = useState("");
const navegar = useNavigate("");

const ref = useRef("")
const Login = async () => {
  console.log(ref.current);
  const get = await  GetUser();
  get.forEach(e => {
    if (UserName == "" || UserPass == "") {
      alert("espacios en blanco")
      return;
    }else if (UserName === e.usuario && UserPass === e.contrasena) {
      alert("Iniciar correctamente")
      navegar("/home")
    }
    
  })
}
  return (
    <div className="contenedorLogin">
           <h3 id="tituloLogin">LOGIN</h3>
        <label htmlFor="" id="usuario">usuario</label> <br />
        <input type="text" id="inputUsuario" placeholder="ingrese su usuario" ref={ref} value={UserName} onChange={(e) => SetName(e.target.value)}  /> <br />
        <label htmlFor="" id="contrasena">contraseña</label> <br />
        <input type="text" id="inputContrasena" placeholder="ingrese su contraseña" value={UserPass} onChange={(e) => SetPass(e.target.value)} /> <br />
        <button id="btnLogin" onClick={Login}>login</button> <br />
        <button  id="btn"> <Link to='/registro'>No tienés cuenta.?</Link> </button>
    </div>
  )
}

export default Forlogin