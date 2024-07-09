import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './nav.css'
import Rolex from '../../assets/img/rolex.svg'

function NavScrollExample() {
  
  const navarStyle = {
  
  backgroundColor: "#135c3b",
  height:"120px"

  } 


  const color =  {
    color: "white",


  }

  return (  
<>
    <Navbar expand="lg" style={navarStyle}>
      <Container fluid >
    
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >

          <div className='contenedorNav'>

            <Nav.Link href="/login" style={color}>Login</Nav.Link>
            <Nav.Link href="/catalogo" style={color}>Catalogo</Nav.Link>
            <NavDropdown  title="Más"  id="navbarScrollingDropdown">
              <NavDropdown.Item href="/contacto" style={color}>contacto</NavDropdown.Item>
              <NavDropdown.Item href="/administracion">
                Administracion
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">  
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
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
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <video className='videoTag' autoPlay loop muted>
    <source src="/src/assets/videos/rolex.mp4" type='video/mp4'/>
    </video>
    {/* <video src=""></video> */}
     <div id='conteiner1'>
       <p className='titulo1'>La colección</p>
       <h1 className='titulo2'>Rolex</h1>
     </div>

     <>
     <h1 className='titulo3'>Lo mas vendido en verano</h1>

     </>
     </>
  );
}

export default NavScrollExample;