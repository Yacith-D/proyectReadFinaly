import axios from "axios";
import { Link } from "react-router-dom"


const forlogin = () => {
    axios.post ("http://localhost:3000/user")
  return (
    <div>

           <h3>LOGIN</h3>

        <label htmlFor="">usuario</label>
        <input type="text" />
        <label htmlFor="">contraseña</label>
        <input type="text" />
        <button>login</button>
        <button> <Link to='/registro'>registrar</Link> </button>


    </div>
  )
}

export default forlogin