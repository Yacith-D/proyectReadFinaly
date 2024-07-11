import { useState } from 'react'
import './contacto.css'
import Swal from 'sweetalert2'

// creo mis varibles
const Contacto = () => {
const [name,setName] = useState ("")
const [correo,setCorreo] = useState ("")
const [telefono,setTelefono] = useState ("")
const [mensaje,setTMensaje] = useState ("")


const vaciar = async () => { // aqui creo una funcion para vaciar los inputs y que haga una alerta 
  if (vaciar) {
     Swal.fire("Gracias!", "Su opiníon Cuenta!", "success");
    setName("")
    setCorreo("")
    setTelefono("")
    setTMensaje("")
  }
 }
  return (
    // Aqui mi contenedor donde tengo toda mi informacion direccion etc
<div className='conteiner'> 
    <div className='contenedor1'>
      <div className='titulo1'>CONTACTA CON NOSOTROS</div>
      <p className='informacion'>Si quieres información de nuestros productos <br /> o estas interesado en otra aspecto o consulta, <br /> llena nuestros formularios y nos pondremos en contacto contigo</p>
      <p className='gracias'>muchas gracias</p>
      <h5 id='colorx'>Sede central: </h5> 
      <p className='direccion'>camino a puntarenas 1723-entrada del boli</p>
      <p className='direccion2'>chacarita puntarenas</p>
      <h5 id='colorx'>TELEFONO:</h5>
      <p className='tell'>(+506) 7683-9816</p>
      <h5 className='text'>Administración</h5>
      <p className='text'>fwdcostarica@gmail.com</p>
      <h5 className='text'>Compras</h5>
      <p className='text'>fwdcomprasref@gamil.com</p>
      <h5 className='text'>Ventas</h5>
      <p className='text'>fwdshop@gamil.com</p>
    </div>
    {/* aqui creo mis inputs donde le asigno valor y un onChange para ejecutar una funcion y le seteo los valores */}
    <div className='contedenor2'> 
    <input type="text" id="nombre2" placeholder='Nombre'  value={name} onChange={(e) => setName(e.target.value)} /> <br />
    <input type="text" id="correo" placeholder='Correo'  value={correo} onChange={(e) => setCorreo(e.target.value)}/>   
    <input type="text" id="telefono" placeholder='Telefono'  value={telefono} onChange={(e) => setTelefono(e.target.value)} />
    <input type="text" id="mensaje" placeholder='Mensaje' value={mensaje} onChange={(e) => setTMensaje(e.target.value)} /> <br /> 
    <button onClick={vaciar} id='btnContac'>Enviar</button> 
    {/* y el btn que contiene la funcion para ejecutar el vacio */}
    </div>


  </div>

  )
}

export default Contacto