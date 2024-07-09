import { useState } from "react"
import { GetProducto } from "../services/axios"



const MostrarRelojes = () => {

const [relojes,setRelijes] = useState ([])

const renderizaRelojes = async () => {
    const dataReloj = await  GetProducto()
   console.log(dataReloj);

}



 return (
    <div>
        
  <button onClick={renderizaRelojes}></button>

    </div>
  )
}

export default MostrarRelojes