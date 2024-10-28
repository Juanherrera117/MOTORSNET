import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import yeison from '../img/yeison.jpg'
import Wilmer from '../img/Wilmer.jpg'
import juan from '../img/juan.jpg'
import jaime from '../img/jaime.jpg'

function Contacto() {
    return (
        <Row xs={1} md={2} className="g-4" style={{ backgroundColor: "#123624" }}>
            {Array.from({ length: 1 }).map((_, idx) => (
                <Col key={idx}>
                    <Card style={{ borderColor: "#000000", borderRadius: '3%', borderWidth: '1px', backgroundColor: "#4f5d57" }}>
                        <Card.Img
                            variant="top"
                            src={yeison}
                            style={{
                                height: "50%",
                                width: "50%",
                                alignContent: "center",
                                margin: "5% 25%",
                                transition: "filter 0.1s ease", /* Transición suave */
                                filter: "grayscale(0%)" /* Inicialmente sin escala de grises */
                            }}
                            onMouseOver={(e) => e.currentTarget.style.filter = "grayscale(100%)"} /* Aplicar escala de grises al pasar el cursor */
                            onMouseOut={(e) => e.currentTarget.style.filter = "grayscale(0%)"} /* Eliminar escala de grises al quitar el cursor */
                        />
                        <Card.Body>
                            <Card.Title style={{ textAlign: "center", color: "white", fontSize: "25px" }}><b>YEISON STEVEN OVALLE MANJARRES 2225115</b></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            ))}

            {Array.from({ length: 1 }).map((_, idx) => (
                <Col key={idx}>
                    <Card style={{ borderColor: "#000000", borderRadius: '3%', borderWidth: '1px', backgroundColor: "white" }}>
                        <Card.Img
                            variant="top"
                            src={jaime}
                            style={{
                                height: "50%",
                                width: "50%",
                                alignContent: "center",
                                margin: "5% 25%",
                                transition: "filter 0.1s ease", /* Transición suave */
                                filter: "grayscale(0%)" /* Inicialmente sin escala de grises */
                            }}
                            onMouseOver={(e) => e.currentTarget.style.filter = "grayscale(100%)"} /* Aplicar escala de grises al pasar el cursor */
                            onMouseOut={(e) => e.currentTarget.style.filter = "grayscale(0%)"} /* Eliminar escala de grises al quitar el cursor */
                        />

                        <Card.Body>
                            <Card.Title style={{ textAlign: "center", color: "black", fontSize: "25px" }}><b>JAIME STIVEN CABALLERO RODRIGUEZ 2221892</b></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            ))}

            {Array.from({ length: 1 }).map((_, idx) => (
                <Col key={idx}>
                    <Card style={{ borderColor: "#000000", borderRadius: '3%', borderWidth: '1px', backgroundColor: "white" }}>
                        <Card.Img
                            variant="top"
                            src={juan}
                            style={{
                                height: "50%",
                                width: "50%",
                                alignContent: "center",
                                margin: "5% 25%",
                                transition: "filter 0.1s ease", /* Transición suave */
                                filter: "grayscale(0%)" /* Inicialmente sin escala de grises */
                            }}
                            onMouseOver={(e) => e.currentTarget.style.filter = "grayscale(100%)"} /* Aplicar escala de grises al pasar el cursor */
                            onMouseOut={(e) => e.currentTarget.style.filter = "grayscale(0%)"} /* Eliminar escala de grises al quitar el cursor */
                        />

                        <Card.Body>
                            <Card.Title style={{ textAlign: "center", color: "black", fontSize: "25px" }}><b>JUAN PABLO HERRERA BAQUERO 2224512</b></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            ))}


            {Array.from({ length: 1 }).map((_, idx) => (
                <Col key={idx}>
                    <Card style={{ borderColor: "#000000", borderRadius: '3%', borderWidth: '1px', backgroundColor: "#4f5d57" }}>
                        <Card.Img
                            variant="top"
                            src={Wilmer}
                            style={{
                                height: "50%",
                                width: "50%",
                                alignContent: "center",
                                margin: "5% 25%",
                                transition: "filter 0.1s ease", /* Transición suave */
                                filter: "grayscale(0%)" /* Inicialmente sin escala de grises */
                            }}
                            onMouseOver={(e) => e.currentTarget.style.filter = "grayscale(100%)"} /* Aplicar escala de grises al pasar el cursor */
                            onMouseOut={(e) => e.currentTarget.style.filter = "grayscale(0%)"} /* Eliminar escala de grises al quitar el cursor */
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