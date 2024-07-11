import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './nav.css'
import Rolex from '../../assets/img/rolex.svg'
import { GetProducto } from '../../services/axios';
import { useEffect, useState } from 'react';


function NavScrollExample() {

  const [productos, setProductos] = useState([]);
   const navarStyle = {
  
  backgroundColor: "#135c3b",
  height:"120px"

  } 
  const color =  {
    color: "white",
  }

  const Almacenar = async () => {
    const data = await GetProducto()
    setProductos(data)
  }

  useEffect(() => {
    Almacenar()
  }, [])


  return (  // mi navar 
<> 
    <Navbar expand="lg" style={navarStyle}> 
      <Container fluid >
                                                
        <Navbar.Toggle aria-controls="navbarScroll" />
      
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >

          <div className='contenedorNav'>
            <Nav.Link href="/catalogo" style={color}>Catalogo</Nav.Link>
              <NavDropdown.Item href="/contacto" style={color} id='navContacto'>contacto</NavDropdown.Item>
              <NavDropdown.Item href="/administracion" style={color} id='navadmi'>
                Administracion
              </NavDropdown.Item>
              <NavDropdown.Divider />
          </div>    
            <img className='imgRolex' src={Rolex} alt="" />       
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button id='btnss' variant="outline-success">Search</Button>
            <Button  href="/login" variant="outline-success"  style={color}>Login</Button>
          </Form>
          
      </Container>
    </Navbar>
    <video className='videoTag' autoPlay loop muted>
    <source src="/src/assets/videos/rolex.mp4" type='video/mp4'/>
    </video>
    {/* <video src=""></video> */}
     <div id='conteiner1'>
       <h1 className='titulo2'>Rolex</h1>
     </div>

     <>
     <h1 className='titulo3'>Lo mas vendido en verano</h1>
             
    <div className='contenedorAbuelo'>  
      {productos.map((producto, index) => ( // se le hago un mapeo para que encuentre los datos y los mueestre
        <div className='contenedorPadre' key={index}>
          <div id='sep'><img id='imgProducto' src={producto.imagen}/></div>
          <hr />
          <div id='nombreProducto'>{producto.nombre}</div>
          <div id='descripcionProducto'>{producto.descripcion}</div>
          <div id='precioProducto'>$ {producto.precio}</div>


        </div>
      ))}
    
    </div>

     </>
</>
     
  );
}

export default NavScrollExample;