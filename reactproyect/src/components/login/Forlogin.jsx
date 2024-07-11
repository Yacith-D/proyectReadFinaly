import { Link, useNavigate} from "react-router-dom"
import { GetUser } from "../../services/axios";
import { useRef, useState } from "react"
import './styleLogin.css'
import Swal from "sweetalert2";

const Forlogin =  () => { // creacion de variables y un usenagigate para que me dirija a mi pagina principal
const [UserName,SetName] = useState("");
const [UserPass,SetPass] = useState("");
const navegar = useNavigate("");

const ref = useRef("")
const Login = async () => { // Mi funcion del login, obtengo mis usuarios por medio del get y despues hago un foreach para itere y encuentre los usuarios registrados
  console.log(ref.current);
  const get = await  GetUser();
  get.forEach(e => {
    if (UserName.trim() == "" || UserPass.trim() == "") { // una validacion para los espacios en blanco
      Swal.fire("espacios en blanco, por favor completarlos")
      return;
    }else if (UserName === e.usuario && UserPass === e.contrasena) { // validacion para que el usuario y contraseña sean igual a los que estan en la api
      Swal.fire("Bievenido", "success");               // y si es correcto, realiza una alerta de bienvenido y me dirija a mi home
      navegar("/home")
    }
  })
}
  return (
    <div id="containerLogin">
      <div id="contenedorLoginLeft">
        <h3 id="tituloLogin">LOGIN</h3>
        <label htmlFor="" id="usuario">Usuario</label> <br />
        <input type="text" id="inputUsuario" placeholder="ingrese su usuario" ref={ref} value={UserName} onChange={(e) => SetName(e.target.value)}  /> <br />
        <label htmlFor="" id="contrasena">Contraseña</label> <br />
        <input type="text" id="inputContrasena" placeholder="ingrese su contraseña" value={UserPass} onChange={(e) => SetPass(e.target.value)} /> <br />
        <button id="btnLogin" onClick={Login}>Iniciar Sesion</button> <br />
        <button  id="btn"> <Link to='/registro'>No tienés cuenta.?</Link></button>
      </div>
      <div id="contenedorLoginRight">
        <img id="imgLogin" src="https://media.vogue.es/photos/6076c96d8381e111eecd322d/master/w_1600%2Cc_limit/image%2520(3).png"/>
      </div>
      <style>{'body { background-color: whitesmoke'}</style>
    </div>  
  )
}

export default Forlogin