import { useEffect, useState } from "react";
import { PostProducto } from "../../services/axios";
import { GetProducto } from "../../services/axios";
import { DeleteProducto } from "../../services/axios";
import "./crud.css";
import Swal from "sweetalert2";
import { ProductoPut } from "../../services/axios";

const Cruid = () => {
const [Nombre, setNombre] = useState("");
const [Precio, setPrecio] = useState("");
const [Descripcion, setDescripcion] = useState("");
const [Imagen, setImagen] = useState("");
const [editanto, setEditando] = useState(false)



  const verificarProductos = async () => {
    if (
      Nombre.trim() === "" || Precio.trim() === "" || Descripcion.trim() === ""  
    ) {
    Swal.fire("Espacios vacíos, por favor completarlos")
      return;
    } else {
      await PostProducto(Nombre, Precio, Descripcion, Imagen);
      setNombre("");
      setPrecio("");
      setDescripcion("");
      setImagen("")
      Almacenar();
    }
  };

  const [productos, setProductos] = useState([]);

  const Almacenar = async () => {
    const dataT = await GetProducto();
    setProductos(dataT);
    console.log(productos);
  };

  const eliminarProducto = async (id) => {
    await DeleteProducto(id);
    Almacenar();
  };

const EditarProductos =  (producto) =>{
  setEditando(true)
  setNombre(producto.nombre);
  setPrecio(producto.precio);
  setDescripcion(producto.descripcion);
  setImagen(producto.imagen)

}

const actualizarProducto = async () => {
 if (Nombre.trim() === "" || Precio.trim() === "" || Descripcion.trim() === "") {
  Swal.fire("espacios ");
 }else{
  const data = await GetProducto();
  for (const e of data) {
    const id = e.id;
    console.log(id);
    await ProductoPut(id, Nombre, Precio, Descripcion, Imagen);
  }
  
 }
}
useEffect(() => {
  Almacenar();
  actualizarProducto();
}, []);

  return (
    <div>
      <h1>Crud</h1>
      {editanto? <button id="btn" onClick={actualizarProducto}>
        actualizarhh
      </button> :  <button id="btn" onClick={verificarProductos}>
        Agregar
      </button> }
     {" "}
      <br /> <br />
      <input
        type="text"
        placeholder="nombre"
        id="nombre"
        value={Nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="text"
        placeholder="precio"
        id="precio"
        value={Precio}
        onChange={(e) => setPrecio(e.target.value)}
      />
      <input
        type="text"
        placeholder="descripcion"
        id="descripcion"
        value={Descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />
      <input
        type="text"
        placeholder="imagen"
        id="nombre"
        value={Imagen}
        onChange={(e) => setImagen(e.target.value)}
      />
      <div id="containerProducts">
        {productos.map((producto) => (
          <div key={producto.id}>
            <div>
              <img id="imgDiv" src={producto.imagen} />
            </div>
            <div>{producto.nombre}</div>
            <div>{producto.descripcion}</div>
            <div>{producto.precio}</div>
            <button id="eliminar" onClick={() => eliminarProducto(producto.id)}>
              Eliminar
            </button>
            <button  onClick={() => EditarProductos(producto)} id="editar">Editar</button>
          </div>
        ))}
        ;
      </div>
    </div>
  );
};
export default Cruid;

