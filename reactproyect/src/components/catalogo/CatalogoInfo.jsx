
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './catalogoStyle.css'
const CatalogoInfo = () => {
  return (
   <div >
    <h1 className='catalogo'>CATALOGO 2024</h1>
   <div style={{display: 'grid', gridTemplateColumns:'250px 250px 250px',columnGap:'200px'}}>
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
      <Card.Img className='imagenes' variant="top" src="https://pics.zeitauktion.com/2022/2207382_sw6_theme2_2k.jpg" />
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
        <Card.Text style={{height:'250px'}}>
        modelo de Rolex que introdujo un disco de bisel Cerachrom en cerámica de alta tecnología. Este disco monobloque bicolor con una escala graduada 24 horas es prácticamente imposible de rayar y extremadamente duro.
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>

    <Card className='cardStyle1'>
      <Card.Img className='imagenes' variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv8rnnAUNWReTsuZJTXRQ_hAvF5DKdXqVhJA&s" />
      <Card.Body>
        <Card.Title>Day-Date</Card.Title>
        <Card.Text style={{height:'250px'}}>
        hermético en indicar, además de la fecha, el día de la semana con todas las letras.Day‑Date fue el primer reloj de pulsera cronómetro, automático
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>

    <Card className='cardStyle1' >
      <Card.Img className='imagenes'  variant="top" src="https://www.rabat.net/es/magazine/wp-content/uploads/2022/09/rolex/rolex-daytona-oro-rosa.jpg" />
      <Card.Body>
        <Card.Title>Cosmograph Daytona</Card.Title>
        <Card.Text style={{height:'250px'}}>
        El Cosmograph Daytona, mejorado constantemente y refinado con el tiempo, ha demostrado ser tan fiable como preciso. Por otro lado, su mecanismo del embrague vertical garantiza una operación prolongada del cronógrafo sin comprometer la precisión cronométrica.
        </Card.Text >
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>

    <Card className='cardStyle1'>
      <Card.Img className='imagenes' variant="top" src="https://www.watches-news.com/wp-content/uploads/2022/09/rolex-oyster-perpetual-day-date-2022-watches-news-1087x610.jpg" />
      <Card.Body>
        <Card.Title>Oyster Perpetual</Card.Title>
        <Card.Text style={{height:'250px'}} >
        está herméticamente enroscado con una herramienta especial, exclusiva de los relojeros Rolex. Otro componente principal de la estructura hermética es la corona de cuerda Twinlock, provista de un sistema de doble hermeticidad,
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>

    <Card className='cardStyle1'>
      <Card.Img className='imagenes'  variant="top" src="https://professionalwatches.com/wp-content/uploads/2016/09/Rolex-Oyster-Yacht-Master-40-Rolesium-dark-gray-rhodium-dial-cover-main-thumb-2048x1151-30366.jpg" />
      <Card.Body>
        <Card.Title>Yacht-Master</Card.Title>
        <Card.Text style={{height:'250px'}} >
        Oyster Perpetual Yacht-Master está equipado con un bisel giratorio bidireccional que facilita el cálculo y la lectura del tiempo de navegación.Está fabricado en titanio RLX, un material de alto rendimiento y a su vez ligero, robusto y resistente a la corrosión.
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>

    <Card className='cardStyle1'>
      <Card.Img className='imagenes'  variant="top" src="https://www.revolution.watch/mxl/wp-content/uploads/2021/08/01-Rolex-Deep-Diving.jpeg" />
      <Card.Body>
        <Card.Title>Sea-Dweller</Card.Title>
        <Card.Text style={{height:'250px'}} >
        El Sea-Dweller está específicamente diseñado para el buceo de saturación. Gracias a su válvula de helio, puede soportar la descompresión durante el ascenso y controlar la vuelta a la superficie ―la fase final de la exploración de aguas profundas.
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>

    <Card className='cardStyle1'>
      <Card.Img className='imagenes' variant="top" src="https://hodinkee-production.s3.amazonaws.com/uploads/images/bf3f656d-1b8e-4040-b851-2ea1c8df9d91/20240409_RolexDeepsea_078.JPG" />
      <Card.Body>
        <Card.Title>Deepsea</Card.Title>
        <Card.Text style={{height:'250px'}} >
        Herméticos hasta una profundidad de 3900 metros en el Rolex Deepsea, lanzado en 2008, y 11 000 metros en el Deepsea Challenge, presentado en 2022.
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>

    <Card className='cardStyle1'>
      <Card.Img className='imagenes'  variant="top" src="https://www.markworthingtonjewellers.co.uk/images/super/W21W9278_1_2.jpg" />
      <Card.Body>
        <Card.Title>Air-King</Card.Title>
        <Card.Text style={{height:'250px'}} >
        Inmediatamente reconocible por su esfera negra equipada con unos índices de las horas —3, 6 y 9— de gran tamaño con una escala de los minutos especialmente visible, el Air‑King continúa con la larga colaboración de Rolex con la aviación que se remonta a los años treinta. 
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>

    <Card className='cardStyle1'>
      <Card.Img className='imagenes'  variant="top" src="https://www.watch-test.com/wp-content/uploads/2023/05/m224270-0001_2301jva_002_cmjn.jpg" />
      <Card.Body>
        <Card.Title>Explorer</Card.Title>
        <Card.Text style={{height:'250px'}} >
        Oyster Perpetual Explorer II provienen de la implicación de la marca en la exploración. Robustos, fiables y precisos, estos relojes son capaces de llegar donde pocos se atreven.
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
    
    <Card className='cardStyle1'>
      <Card.Img className='imagenes'  variant="top" src="https://i.ebayimg.com/images/g/5oAAAOSw9ZhjiUSP/s-l1200.webp" />
      <Card.Body>
        <Card.Title>Lady-Datejust</Card.Title>
        <Card.Text style={{height:'250px'}} >
        con un diámetro pequeño deberían beneficiarse de la tecnología más avanzada y así ser tan fiables y precisos como cualquier reloj de bolsillo, que entonces era el reloj personal estándar.
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>

    <Card className='cardStyle1'>
      <Card.Img className='imagenes'  variant="top" src="https://cagau.com/wp-content/uploads/2022/07/RX000108-Rolex-Sky-Dweller-42-Oystersteel-White-Gold-Blue-Dial-326933-1-min-1.jpg" />
      <Card.Body>
        <Card.Title>Sky-Dweller</Card.Title>
        <Card.Text style={{height:'250px'}} >
        Sky‑Dweller ha diferencias horarias y permitir planificar con antelación. Con este reloj técnico y elegante, viaje donde viaje, estará en sincronía con el mundo.innovador diseño, se inspira en el término griego que designa el ciclo de los eclipses lunar y solar.
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>

    <Card className='cardStyle1'>
      <Card.Img className='imagenes'  variant="top" src="https://hodinkee-production.s3.amazonaws.com/uploads/images/288274b6-f9b3-4185-ae85-576cd3c9f9d4/1C2A0614-2.jpg" />
      <Card.Body>
        <Card.Title>1908</Card.Title>
        <Card.Text style={{height:'250px'}} >
        Heredero del patrimonio estilístico de Rolex y dotado de innovaciones relojeras exclusivas, el elegante Perpetual 1908 marca un nuevo hito en la búsqueda de la excelencia de la Manufactura. 
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
     
    <Card className='cardStyle1'>
      <Card.Img className='imagenes'  variant="top" src="https://cdn.prod.website-files.com/636a2d3c26aa845d12b17679/645dfee15e9a44df0260adbd_2018-04-08-rolex-milgauss-black-dial-gallery-01.webp" />
      <Card.Body>
        <Card.Title>milgauss</Card.Title>
        <Card.Text style={{height:'250px'}} >
        Oyster del Milgauss garantiza una hermeticidad de hasta 100 metros, y su característica carrura está tallada en un bloque macizo de acero Oystersteel particularmente resistente a la corrosión. Su fondo bordeado por un fino sistema de acanalado está herméticamente enroscado
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>

    <Card className='cardStyle1'>
      <Card.Img className='imagenes'  variant="top" src="https://news.dupontregistry.com/wp-content/uploads/2022/02/Bugatti-Chiron-Main.jpg" />
      <Card.Body>
        <Card.Title>BUGATTI CHIRON TOURBILLON BAGUETTE</Card.Title>
        <Card.Text style={{height:'250px'}} >
        La caja está cubierta por 341 gemas, con 60 más en las coronas y 18 en el cierre. Cada una de ellas está tallada en baguette y preparada para el engaste invisible. El proceso de selección y engaste de gemas ideado por Jacob & Co. es extremadamente exigente.
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>

    <Card className='cardStyle1'>
      <Card.Img className='imagenes'  variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2_94B2-BcAk77wp0O0bLdRoOHICr-JDZMrQ&s" />
      <Card.Body>
        <Card.Title>PALATIAL CLASSIC</Card.Title>
        <Card.Text style={{height:'250px'}} >
        mecanismo automático para ahorrar unos preciosos milímetros. Esta delgadez se refleja en el diseño general del Palatial Classic Big Date. Bajo el cristal de zafiro, las esferas de piedra dura del Palatial Classic Big Date son un delicado adorno. 
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
   </div>
    </div>













  );
}



export default CatalogoInfo