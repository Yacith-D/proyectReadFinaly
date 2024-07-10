import axios from "axios";

export const PostUser = async (usuario,contrasena) => {
  console.log("creando usuario");
    try {
      const response = await axios.post("http://localhost:3001/user", {
          usuario: usuario,
          contrasena: contrasena,
      });
      return response.data;
    } catch (error) {
      console.error("Error haciendo la solicitud:", error);
      throw error;
    }
  };

 export const GetUser = async () => {
    try {
      const response = await fetch('http://localhost:3001/user', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await response.json();
      return data
  
    } catch (error) {
      console.log(error)
    }
  }

  export const PostProducto = async (nombre, precio, descripcion,imagen) => {
    try {
      console.log("creando producto");
      const response = await axios.post("http://localhost:3001/productos", {
        nombre: nombre,
        precio: precio,
        descripcion: descripcion,
        imagen:imagen
      });
      return response.data;
    } catch (error) {
      console.error("Error haciendo la solicitud:", error);
      throw error;
    } 
  };

  export const GetProducto = async () => {
    try {
      const response = await fetch('http://localhost:3001/productos', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await response.json();
      return data
  
    } catch (error) {
      console.log(error)
    }
  }

  export const putProducto = async (nombre, precio, descripcion,imagen) => {
    try {
      console.log("creando producto");
      const response = await axios.put("http://localhost:3001/productos", {
        nombre: nombre,
        precio: precio,
        descripcion: descripcion,
        imagen:imagen
      });
      return response.data;
    } catch (error) {
      console.error("Error haciendo la solicitud:", error);
      throw error;
    } 
  }


  export const DeleteProducto = async (id) => {
    try {
      const response = await fetch('http://localhost:3001/productos/'+id ,{
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await response.json();
      return data
  
    } catch (error) {
      console.log(error)
    }
  }

  // export const ActalizarProducto = async (id,imagen, inputMarca, inputPrecio,categoria) => {
  //   try {
  //       const response = await fetch(`http://localhost:3001/productos/`+id ,{
  //           method: 'PUT',
  //           headers: {
  //               'Content-Type': 'application/json'
  //           },
  //           body: JSON.stringify({
  //               image: imagenEdit,
  //               marca:inputMarca,
  //               precio:inputPrecio,
  //               categorias: categoria
  //           })
  //       });
  //       const data = await response.json();
  //       console.log(data);
  //   } catch (error) {
  //       console.log(error);
  //   }
// }
