import  {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Registro from "../pages/registro"
import Login from "../pages/login"


const rutas = () => {
  return (
    <div>
    <Router>
      <Routes>
             <Route path="/registro" element={<Registro />} />
             <Route path="/login" element={<Login />} />
      </Routes>
    </Router>

  </div>
  )
}

export default rutas