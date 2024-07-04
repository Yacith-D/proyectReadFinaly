
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './catalogoStyle.css'
const CatalogoInfo = () => {
  return (
   <div >
   <div style={{display: 'grid', gridTemplateColumns:'300px 300px 300px',columnGap:'200px', height:'500px'}}>
    <Card className='cardStyle1'>
      <Card.Img className='imagenes' variant="top" src="https://bogoclock.com/cdn/shop/products/Rolex_TH_Dorado-Azul.jpg?v=1709674363" />
      <Card.Body >
        <Card.Title>BOGOCLOCK</Card.Title>
        <Card.Text style={{height:'150px'}}>
        rolex azul, bañado en oro puro, con rocas y perlitas. 
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>

    <Card className='cardStyle1'>
      <Card.Img className='imagenes' variant="top" src="data:image/jpeg;base64,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" />
      <Card.Body>
        <Card.Title>Datejust</Card.Title>
        <Card.Text style={{height:'150px'}}>
        reloj de pulsera cronómetro, automático y hermético en indicar la fecha en una ventana.el brazalete Jubilee realza la elegancia atemporal del modelo.
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>

    <Card className='cardStyle1'>
      <Card.Img className='imagenes'  variant="top" src="https://magazine.chrono24.com/cdn-cgi/image/f=auto,metadata=none,fit=cover,q=65,w=1190,h=595,dpr=2.0/2017/10/2-Rolex-Submariner-Date-Image-Bert-Buijsrogge-1.jpg" />
      <Card.Body>
        <Card.Title>Submariner</Card.Title>
        <Card.Text style={{height:'150px'}}>
        hermético hasta 100 metros de profundidad y ahora hasta 300 metros.imposible de rayar y su color no se ve afectado por la exposición a los rayos ultravioletas, ni al agua de mar o clorada 
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>

    <Card className='cardStyle1' >
      <Card.Img className='imagenes'  variant="top" src="https://allwatchmarket.com/uploads/images/202308/img_1920x_64e891b84e2423-64928606-82541612.jpg" />
      <Card.Body>
        <Card.Title>GMT-Master II</Card.Title>
        <Card.Text style={{height:'150px'}}>
        modelo de Rolex que introdujo un disco de bisel Cerachrom en cerámica de alta tecnología. Este disco monobloque bicolor con una escala graduada 24 horas es prácticamente imposible de rayar y extremadamente duro.
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>

    <Card className='cardStyle1'>
      <Card.Img className='imagenes' variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv8rnnAUNWReTsuZJTXRQ_hAvF5DKdXqVhJA&s" />
      <Card.Body>
        <Card.Title>Day-Date</Card.Title>
        <Card.Text style={{height:'200px'}}>
        hermético en indicar, además de la fecha, el día de la semana con todas las letras.Day‑Date fue el primer reloj de pulsera cronómetro, automático
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>

    <Card className='cardStyle1' >
      <Card.Img className='imagenes'  variant="top" src="https://www.rabat.net/es/magazine/wp-content/uploads/2022/09/rolex/rolex-daytona-oro-rosa.jpg" />
      <Card.Body>
        <Card.Title>Cosmograph Daytona</Card.Title>
        <Card.Text >
        El Cosmograph Daytona, mejorado constantemente y refinado con el tiempo, ha demostrado ser tan fiable como preciso. Por otro lado, su mecanismo del embrague vertical garantiza una operación prolongada del cronógrafo sin comprometer la precisión cronométrica.
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>

    <Card className='cardStyle1'>
      <Card.Img className='imagenes' variant="top" src="https://www.watches-news.com/wp-content/uploads/2022/09/rolex-oyster-perpetual-day-date-2022-watches-news-1087x610.jpg" />
      <Card.Body>
        <Card.Title>Oyster Perpetual</Card.Title>
        <Card.Text>
        está herméticamente enroscado con una herramienta especial, exclusiva de los relojeros Rolex. Otro componente principal de la estructura hermética es la corona de cuerda Twinlock, provista de un sistema de doble hermeticidad,
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>

    <Card className='cardStyle1'>
      <Card.Img className='imagenes'  variant="top" src="https://professionalwatches.com/wp-content/uploads/2016/09/Rolex-Oyster-Yacht-Master-40-Rolesium-dark-gray-rhodium-dial-cover-main-thumb-2048x1151-30366.jpg" />
      <Card.Body>
        <Card.Title>Yacht-Master</Card.Title>
        <Card.Text>
        Oyster Perpetual Yacht-Master está equipado con un bisel giratorio bidireccional que facilita el cálculo y la lectura del tiempo de navegación.Está fabricado en titanio RLX, un material de alto rendimiento y a su vez ligero, robusto y resistente a la corrosión.
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>

    <Card className='cardStyle1'>
      <Card.Img className='imagenes'  variant="top" src="https://www.revolution.watch/mxl/wp-content/uploads/2021/08/01-Rolex-Deep-Diving.jpeg" />
      <Card.Body>
        <Card.Title>Sea-Dweller</Card.Title>
        <Card.Text>
        El Sea‑Dweller está específicamente diseñado para el buceo de saturación. Gracias a su válvula de helio, puede soportar la descompresión durante el ascenso y controlar la vuelta a la superficie ―la fase final de la exploración de aguas profundas.
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>

    <Card className='cardStyle1'>
      <Card.Img className='imagenes' variant="top" src="https://hodinkee-production.s3.amazonaws.com/uploads/images/bf3f656d-1b8e-4040-b851-2ea1c8df9d91/20240409_RolexDeepsea_078.JPG" />
      <Card.Body>
        <Card.Title>Deepsea</Card.Title>
        <Card.Text>
        Herméticos hasta una profundidad de 3900 metros en el Rolex Deepsea, lanzado en 2008, y 11 000 metros en el Deepsea Challenge, presentado en 2022.
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>

    <Card className='cardStyle1'>
      <Card.Img className='imagenes'  variant="top" src="https://www.markworthingtonjewellers.co.uk/images/super/W21W9278_1_2.jpg" />
      <Card.Body>
        <Card.Title>Air-King</Card.Title>
        <Card.Text>
        Inmediatamente reconocible por su esfera negra equipada con unos índices de las horas —3, 6 y 9— de gran tamaño con una escala de los minutos especialmente visible, el Air‑King continúa con la larga colaboración de Rolex con la aviación que se remonta a los años treinta. 
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
   </div>
    </div>













  );
}



export default CatalogoInfo