import axios from "axios";

export const PostUser = async (usuario,contrasena) => {
  console.log("creando usuario");
    try {
      const response = await axios.post("http://localhost:3001/user", { // crea mis usuarios
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
      const response = await fetch('http://localhost:3001/user', { // obtiene mis usuarios para mostrar o etc
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

  export const PostProducto = async (Nombre, Precio, Descripcion,Imagen) => {
    try {
      console.log("creando producto");
      const response = await axios.post("http://localhost:3001/productos", { // crea mis productos
        nombre: Nombre,
        precio: Precio,
        descripcion: Descripcion,
        imagen:Imagen
      });
      return response.data;
    } catch (error) {
      console.error("Error haciendo la solicitud:", error);
      throw error;
    } 
  };

  export const GetProducto = async () => {
    try {
      const response = await fetch('http://localhost:3001/productos', { // obtiene mis productos 
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

  export const DeleteProducto = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/productos/${id}` ,{ // elimina mis productos
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

  export const ProductoPut = async (id, Nombre, Precio, Descripcion, Imagen) => {
    console.log(id);
    try {
        const response = await fetch(`http://localhost:3001/productos/${id}`, { // Edita mis productos con nuevos cambios
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nombre: Nombre,
                precio: Precio,
                descripcion: Descripcion,
                imagen: Imagen
            })
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
