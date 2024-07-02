import { useState } from "react";
import { PostProducto } from "../../services/axios";

const Cruid = () => {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState(""); // 
  const verificarProductos = async () => {
    if (nombre.trim() === "" || precio.trim() === "" || descripcion.trim() === "") {
      alert("Espacios vacíos, por favor completarlos");
      return;
    } else {
      await PostProducto(nombre, precio, descripcion);
    }
  };
  return (
    <div>
      <h1>Crud</h1>
      <button id="btn" onClick={verificarProductos}>Agregar</button> <br /> <br />
      <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      <input type="text" id="precio" value={precio} onChange={(e) => setPrecio(e.target.value)} />
      <input type="text" id="descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
      <button id="editar">Editar</button>
      <button id="eliminar">Eliminar</button> 
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