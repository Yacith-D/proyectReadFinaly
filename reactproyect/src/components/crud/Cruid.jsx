import { useEffect, useState } from "react";
import { PostProducto } from "../../services/axios";
import { GetProducto } from "../../services/axios";
import { DeleteProducto } from "../../services/axios";
import './crud.css'


const Cruid = () => {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState(""); 
  const [imagen, setImagen] = useState('');

  
  const verificarProductos = async () => {
    if (nombre.trim() === "" || precio.trim() === "" || descripcion.trim() === "") {
      alert("Espacios vacíos, por favor completarlos");
      return;
    } else {
      await PostProducto(nombre, precio, descripcion, imagen);
      setNombre('')
      setPrecio("")
      setDescripcion("")
      Almacenar()
    }
  };


  const [productos, setProductos] = useState([]);

  const Almacenar = async () => {
    const dataT = await GetProducto();
    setProductos(dataT);
    console.log(productos);
};

const eliminarProducto = async  (id) => {
  await DeleteProducto(id)
  Almacenar()
}


useEffect(() => {
  Almacenar();
}, []);

  return (


    <div>

      <h1>Crud</h1>
      <button id="btn" onClick={verificarProductos}>Agregar</button> <br /> <br />
      <input type="text" placeholder="nombre" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      <input type="text" placeholder="precio" id="precio" value={precio} onChange={(e) => setPrecio(e.target.value)} />
      <input type="text" placeholder="descripcion" id="descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
      <input type="text" placeholder="imagen" id="nombre" value={imagen} onChange={(e) => setImagen(e.target.value)} />
      <div id="containerProducts">
        
     {productos.map((producto) => (
        <div key={producto.id}>
         <div><img  id="imgDiv" src={producto.imagen}/></div>
         <div>{producto.nombre}</div>
         <div>{producto.descripcion}</div>
         <div>{producto.precio}</div>
          <button id="eliminar" onClick={() => eliminarProducto(producto.id)}>Eliminar</button>
          <button id="editar">Editar</button>

        </div>        

      ))};
    


    </div>

    </div>




  );
};
export default Cruid;



// import { useState } from "react"
// import PostProducto from "../../services/Productos"


// const Cruid = () => {
// const [nombre,setNombre] = useState ("")
// const [precio,setPrecio] = useState ("")
// const [descripcion,setDescripcion] = useState ("")

//   const verificarProductos = async () =>{

//     if (nombre.trim() === "" || precio.trim() === "" || descripcion.trim() === "") {
//       alert ("espacio vacios, por favor completarlos")
//       return;
      
//     }else{
//       await PostProducto(nombre,precio,descripcion.id)
//       }


// }

//   return (
//      <div>
//       <h1>Crud</h1>
//     <button id="btn" onClick={verificarProductos}>Agregar</button> <br /> <br />

//     <input type="text"id="nombre"  value={nombre} onChange={(e) => setNombre(e.target.value)} />
//     <input type="text" id="precio"  value={precio} onChange={(e) => setPrecio(e.target.value)}/>
//     <input type="text" id="descripcion"  value={descripcion} onChange={(e) => setDescripcion(e.target.value)}/>

//     <button id="editar">editar</button>
//     <button id="eliminar">eliminar</button>
//     </div>

//   )
// }

// export default Cruid