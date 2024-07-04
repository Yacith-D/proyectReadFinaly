import { Link, useNavigate} from "react-router-dom"
import { GetUser } from "../services/axios";
import { useRef, useState } from "react"


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
    <div>
           <h3>LOGIN</h3>

        <label htmlFor="">usuario</label>
        <input type="text" placeholder="ingrese su usuario" ref={ref} value={UserName} onChange={(e) => SetName(e.target.value)}  />
        <label htmlFor="">contraseña</label>
        <input type="text" placeholder="ingrese su contraseña" value={UserPass} onChange={(e) => SetPass(e.target.value)} />
        <button onClick={Login}>login</button>
        <button > <Link to='/registro'>registrar</Link> </button>


    </div>
  )
}

export default Forlogin