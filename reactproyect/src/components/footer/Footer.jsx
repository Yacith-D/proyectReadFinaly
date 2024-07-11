// Footer.js
import './footer.css'
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {

const footerStyle = {
  
 backgroundColor: "#135c3b",

} 


  return (
    <footer id='contenedorelite' className="text-white py-4">
      <Container className='contenedorFooter' style={footerStyle}>
        <Row>
          <Col md={4}>
            <h5>Acerca de nosotros</h5> <br />
            <p>
            Nosotros nos comprometemos a darles un buen servicio, somos una empresa de mas de 20 años de experiencia, en el mercado!
            </p>
          </Col>
          <Col md={4}>
            <h5>Redes Sociales</h5>
            <ul className="list-unstyled">
              <li><a href="https://www.facebook.com/fwdcostarica" className="text-white">Facebook</a></li>
              <li><a href="https://www.facebook.com/fwdcostarica" className="text-white">Instagram</a></li>
              <li><a href="https://cr.linkedin.com/company/fwd-costa-rica?trk=public_post_feed-actor-name" className="text-white">LinkedIn</a></li>
              <li><a href="https://www.fwdcostarica.com" className="text-white">Contact</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>contactenos !</h5>
            <address>
              Entrada del boli<br />
              puntarenas , antigua casa las monjas, 30 Metros N<br />
              <a href="tel:+1234567890" className="text-white">+1 (506) 8673-8903</a><br />
              <a href="mailto:info@example.com" className="text-white">cristianoElrey@Pirsiempre.com</a>
            </address>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p>&copy; 2020 Your Company. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;