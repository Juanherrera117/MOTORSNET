import Carousel from 'react-bootstrap/Carousel';
import car1 from '../img/car1.jpg'; // Cambia estas rutas a las imágenes de autos
import car2 from '../img/car2.jpg';
import car3 from '../img/car3.jpg';
import '../Estilos/carrusel.css';

function CarouselHome() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={car1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Explora Nuestros Autos</h3>
          <p>Encuentra el auto perfecto para tus necesidades y estilo de vida.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={car2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Ofertas Especiales</h3>
          <p>Aprovecha nuestras ofertas exclusivas y financiamiento flexible.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={car3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Consejos para Compradores</h3>
          <p>Obtén asesoría experta y consejos útiles para hacer la mejor elección.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHome;