import { DeleteProducto } from "../services/axios";


const ProductosVenta = ({producto, productos,setProductos}) => {


  const eliminarProducto = async  () => {
console.log(producto.id);
await DeleteProducto(producto.id) 
setProductos([])
  }
  return (

    <div  id="producto" >
    <div>{producto.nombre}</div>
    <div>{producto.precio}</div>
    <div>{producto.descripcion}</div>
    
    <button id="editar">Editar</button>
    <button onClick={eliminarProducto} id="eliminar">Eliminar</button>
  </div>
  )
}

export default ProductosVenta