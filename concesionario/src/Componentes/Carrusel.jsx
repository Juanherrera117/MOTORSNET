import Carousel from 'react-bootstrap/Carousel'; // Importamos el componente Carousel de React-Bootstrap
import car1 from '../img/car1.jpg'; // Imagen del primer auto
import car2 from '../img/car2.jpg'; // Imagen del segundo auto
import car3 from '../img/car3.jpg'; // Imagen del tercer auto
import '../Estilos/carrusel.css'; // Importamos los estilos para el carrusel

function CarouselHome() {
  return (
    <Carousel> {/* Componente principal del carrusel */}
      {/* Primer ítem del carrusel */}
      <Carousel.Item>
        <img
          className="d-block w-100" // Clase de Bootstrap para que la imagen ocupe todo el ancho
          src={car1} // Ruta de la primera imagen
          alt="First slide" // Descripción alternativa de la imagen
        />
        <Carousel.Caption>
          <h3>Explora Nuestros Autos</h3> {/* Título del primer slide */}
          <p>Encuentra el auto perfecto para tus necesidades y estilo de vida.</p> {/* Descripción del primer slide */}
        </Carousel.Caption>
      </Carousel.Item>
      
      {/* Segundo ítem del carrusel */}
      <Carousel.Item>
        <img
          className="d-block w-100" // Clase de Bootstrap para que la imagen ocupe todo el ancho
          src={car2} // Ruta de la segunda imagen
          alt="Second slide" // Descripción alternativa de la imagen
        />
        <Carousel.Caption>
          <h3>Ofertas Especiales</h3> {/* Título del segundo slide */}
          <p>Aprovecha nuestras ofertas exclusivas y financiamiento flexible.</p> {/* Descripción del segundo slide */}
        </Carousel.Caption>
      </Carousel.Item>
      
      {/* Tercer ítem del carrusel */}
      <Carousel.Item>
        <img
          className="d-block w-100" // Clase de Bootstrap para que la imagen ocupe todo el ancho
          src={car3} // Ruta de la tercera imagen
          alt="Third slide" // Descripción alternativa de la imagen
        />
        <Carousel.Caption>
          <h3>Consejos para Compradores</h3> {/* Título del tercer slide */}
          <p>Obtén asesoría experta y consejos útiles para hacer la mejor elección.</p> {/* Descripción del tercer slide */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHome;
