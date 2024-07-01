import  { Routes,Route} from "react-router-dom"
import Registro from "../pages/registro"
import Login from "../pages/login"
import Home from "../pages/home"
import Contact from "../pages/contact"
import Admi from "../pages/admi"

const Rutas = () => {

  return (
    <div>
      <Routes>
             <Route path="/registro" element={<Registro />} />
             <Route path="/login" element={<Login />} />
             <Route path="/" element={<Home />} />
             <Route path="/home" element={<Home />} />
             <Route path="/contacto" element={<Contact/>} />
             <Route path="/administracion" element={<Admi/> } />

      </Routes>
  </div>
  )
}

export default Rutas