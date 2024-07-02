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

  export const PostProducto = async (nombre, precio, descripcion) => {
    try {
      console.log("creando producto");
      const response = await axios.post("http://localhost:3001/productos", {
        nombre: nombre,
        precio: precio,
        descripcion: descripcion,
      });
      return response.data;
    } catch (error) {
      console.error("Error haciendo la solicitud:", error);
      throw error;
    }
  };



  
 