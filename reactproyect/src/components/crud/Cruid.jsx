import { useEffect, useState } from "react";
import { PostProducto } from "../../services/axios";
import { GetProducto } from "../../services/axios";
import { DeleteProducto } from "../../services/axios";
import "./crud.css";
import Swal from "sweetalert2";
import { ProductoPut } from "../../services/axios";

// Aqui realizo mis variables de precio etc de mi producto
const Cruid = () => {
const [Nombre, setNombre] = useState("");
const [Precio, setPrecio] = useState("");
const [Descripcion, setDescripcion] = useState("");
const [Imagen, setImagen] = useState("");
const [editanto, setEditando] = useState(false)
const [Producto, setProducto] = useState([]);

const extraterDatos = async () => {
  const dataTabla = await GetProducto();
  setProducto(dataTabla);
};

useEffect(() => {
  extraterDatos();
}, []);

//funcion para realizar el envio de datos ala api y una validacion para no dejar espacios en blanco
//y llamo a mis Set para que se vacien los inputs despues del envio
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
// Aqui una funcion que contiene mis datos por medio del metodo get para mostrarlos
  const Almacenar = async () => {
    const dataT = await GetProducto();
    setProductos(dataT);
    console.log(productos);
  };

  const eliminarProducto = async (id) => { //funcion para eliminar productos, llamo ala delete y le paso el id para identificar el producto
    await DeleteProducto(id);             // y llamo almacenar que contiene el get
    Almacenar();
  };

const EditarProductos =  (producto) =>{ //Aqui hago que los inputs tenga los valores del producto que se elijio para editar
  setEditando(true)
  setNombre(producto.nombre);
  setPrecio(producto.precio);
  setDescripcion(producto.descripcion);
  setImagen(producto.imagen)

}

 //Mi funcion para editar mis productos, primero una validacion para los campos vacios, y si los campos no estan vacios que hagan lo siguiente
// una variable que contiene el id y va a iterar con el productos que se elijio y despues se le hace el put con los datos cambiados
const actualizarProducto = async () => { 
 if (Nombre.trim() === "" || Precio.trim() === "" || Descripcion.trim() === "") {
  console.log("vacio");
 }else{
  const data = await GetProducto();
  for (const e of data) {
    const id = e.id;
    console.log(id);
    await ProductoPut(id, Nombre, Precio, Descripcion, Imagen);
  }
  
 }
}
useEffect(() => { // renderizo mis 2 funciones para actualizar la informacion
  Almacenar();
  actualizarProducto();
}, []);

  return (
    <div>
      <h1>Crud</h1>
      {editanto? <button id="btn" onClick={actualizarProducto}>
        actualizar
      </button> : <button id="btn" onClick={verificarProductos}>
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
      /> <br />  <br />
      <>   
         <div className="contenedorCrudtitle">
            <div>Nombre</div>
            <div>Descripcion</div>
            <div>Precio</div>
            <div>Imagen</div>
            <div>Editar</div>
            <div>Eliminar</div>
        </div>
      </>
      {Producto.map((producto) => (
        <> 
         {/* se le hace un mapeo para buscar los datos en la api losmuestra  */}
          <div className="contenedorCrud">  
            <div>{producto.nombre}</div>
            <div>{producto.descripcion}</div>
            <div>{producto.precio}</div>
            <div><img id="imagenCrud" src={producto.imagen} alt="" /></div>
            <div> <button  onClick={() => EditarProductos(producto)} id="editar">Editar</button></div>
            <div><button  onClick={() => eliminarProducto(producto.id)}>Eliminar</button></div>
          </div>
        </>
      ))}
    </div>
  );
};
export default Cruid;

