import Card from 'react-bootstrap/Card'; // Importa el componente Card de Bootstrap para mostrar información en tarjetas
import Col from 'react-bootstrap/Col'; // Importa el componente Col de Bootstrap para la organización en columnas
import Row from 'react-bootstrap/Row'; // Importa el componente Row de Bootstrap para organizar las columnas en filas
import yeison from '../img/yeison.jpg'; // Importa la imagen de Yeison
import Wilmer from '../img/Wilmer.jpg'; // Importa la imagen de Wilmer
import juan from '../img/juan.jpg'; // Importa la imagen de Juan
import jaime from '../img/jaime.jpg'; // Importa la imagen de Jaime

function Contacto() {
    return (
        // Fila con columnas adaptativas: una por pantalla pequeña (xs=1) y dos por pantalla mediana (md=2)
        <Row xs={1} md={2} className="g-4" style={{ backgroundColor: "#123624" }}>
            {/* Muestra la tarjeta de Yeison */}
            {Array.from({ length: 1 }).map((_, idx) => (
                <Col key={idx}>
                    <Card style={{ borderColor: "#000000", borderRadius: '3%', borderWidth: '1px', backgroundColor: "#4f5d57" }}>
                        <Card.Img
                            variant="top"
                            src={yeison} // Imagen de Yeison
                            style={{
                                height: "50%", // Ajusta la altura de la imagen
                                width: "50%", // Ajusta el ancho de la imagen
                                alignContent: "center", // Centra la imagen
                                margin: "5% 25%", // Agrega márgenes alrededor de la imagen
                                transition: "filter 0.1s ease", /* Transición suave para el efecto de filtro */
                                filter: "grayscale(0%)" /* Inicialmente la imagen está sin escala de grises */
                            }}
                            onMouseOver={(e) => e.currentTarget.style.filter = "grayscale(100%)"} /* Aplica escala de grises al pasar el cursor */
                            onMouseOut={(e) => e.currentTarget.style.filter = "grayscale(0%)"} /* Elimina escala de grises al quitar el cursor */
                        />
                        <Card.Body>
                            <Card.Title style={{ textAlign: "center", color: "white", fontSize: "25px" }}><b>YEISON STEVEN OVALLE MANJARRES 2225115</b></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            ))}

            {/* Muestra la tarjeta de Jaime */}
            {Array.from({ length: 1 }).map((_, idx) => (
                <Col key={idx}>
                    <Card style={{ borderColor: "#000000", borderRadius: '3%', borderWidth: '1px', backgroundColor: "white" }}>
                        <Card.Img
                            variant="top"
                            src={jaime} // Imagen de Jaime
                            style={{
                                height: "50%", // Ajusta la altura de la imagen
                                width: "50%", // Ajusta el ancho de la imagen
                                alignContent: "center", // Centra la imagen
                                margin: "5% 25%", // Agrega márgenes alrededor de la imagen
                                transition: "filter 0.1s ease", /* Transición suave para el efecto de filtro */
                                filter: "grayscale(0%)" /* Inicialmente la imagen está sin escala de grises */
                            }}
                            onMouseOver={(e) => e.currentTarget.style.filter = "grayscale(100%)"} /* Aplica escala de grises al pasar el cursor */
                            onMouseOut={(e) => e.currentTarget.style.filter = "grayscale(0%)"} /* Elimina escala de grises al quitar el cursor */
                        />
                        <Card.Body>
                            <Card.Title style={{ textAlign: "center", color: "black", fontSize: "25px" }}><b>JAIME STIVEN CABALLERO RODRIGUEZ 2221892</b></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            ))}

            {/* Muestra la tarjeta de Juan */}
            {Array.from({ length: 1 }).map((_, idx) => (
                <Col key={idx}>
                    <Card style={{ borderColor: "#000000", borderRadius: '3%', borderWidth: '1px', backgroundColor: "white" }}>
                        <Card.Img
                            variant="top"
                            src={juan} // Imagen de Juan
                            style={{
                                height: "50%", // Ajusta la altura de la imagen
                                width: "50%", // Ajusta el ancho de la imagen
                                alignContent: "center", // Centra la imagen
                                margin: "5% 25%", // Agrega márgenes alrededor de la imagen
                                transition: "filter 0.1s ease", /* Transición suave para el efecto de filtro */
                                filter: "grayscale(0%)" /* Inicialmente la imagen está sin escala de grises */
                            }}
                            onMouseOver={(e) => e.currentTarget.style.filter = "grayscale(100%)"} /* Aplica escala de grises al pasar el cursor */
                            onMouseOut={(e) => e.currentTarget.style.filter = "grayscale(0%)"} /* Elimina escala de grises al quitar el cursor */
                        />
                        <Card.Body>
                            <Card.Title style={{ textAlign: "center", color: "black", fontSize: "25px" }}><b>JUAN PABLO HERRERA BAQUERO 2224512</b></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            ))}

            {/* Muestra la tarjeta de Wilmer */}
            {Array.from({ length: 1 }).map((_, idx) => (
                <Col key={idx}>
                    <Card style={{ borderColor: "#000000", borderRadius: '3%', borderWidth: '1px', backgroundColor: "#4f5d57" }}>
                        <Card.Img
                            variant="top"
                            src={Wilmer} // Imagen de Wilmer
                            style={{
                                height: "50%", // Ajusta la altura de la imagen
                                width: "50%", // Ajusta el ancho de la imagen
                                alignContent: "center", // Centra la imagen
                                margin: "5% 25%", // Agrega márgenes alrededor de la imagen
                                transition: "filter 0.1s ease", /* Transición suave para el efecto de filtro */
                                filter: "grayscale(0%)" /* Inicialmente la imagen está sin escala de grises */
                            }}
                            onMouseOver={(e) => e.currentTarget.style.filter = "grayscale(100%)"} /* Aplica escala de grises al pasar el cursor */
                            onMouseOut={(e) => e.currentTarget.style.filter = "grayscale(0%)"} /* Elimina escala de grises al quitar el cursor */
                        />
                        <Card.Body>
                            <Card.Title style={{ textAlign: "center", color: "white", fontSize: "25px" }}><b>WILMER ANDRES ROMERO CALA 2214102</b></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default Contacto;
