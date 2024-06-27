import { Link } from "react-router-dom"


const forregistro = () => {
  return (
    <div>
    <label htmlFor="">usuario</label>
     <input type="text" />
     <label htmlFor="">contraseña</label>
     <input type="text" />
     <button>rejistro</button>
     <button> <Link to='/login'>iniciar Sesíon</Link> </button>
  </div>
  )
}

export default forregistro