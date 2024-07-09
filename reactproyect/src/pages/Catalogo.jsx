import { useEffect, useState } from 'react'
import CatalogoInfo from '../components/catalogo/CatalogoInfo'
import { GetProducto } from '../services/axios'




const Catalogo = () => {

  const [productoHappy, setProductoHappy] = useState([])
  const render = async () => {
    const data = await GetProducto()
    const filtrarHappy = data.filter(happy => happy.nombre === '')
    setProductoHappy(filtrarHappy)
  }

  useEffect(() => {
    render()
  }, []);

  return (
    <>
    {productoHappy.map((productoHappy, index) =>  (
      <div key={index}>
        <div>{productoHappy.nombre}</div>
        <div>{productoHappy.precio}</div>
        <div>{productoHappy.descripcion}</div>
      </div>
    ))}
    <div>
        <CatalogoInfo />
    </div>
    </>
  )
}



export default Catalogo