import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { Navbar, Nav, Modal, Button } from 'react-bootstrap';
import '../Estilos/App.css';
import Carousel from './Carrusel.jsx';
import Contacto from './contacto.jsx';
import Reserva from './Reserva.jsx'; // Componente para la reserva
import Vuelos from './Vuelos.jsx';
import CatalogoAutos from './CatalogoAutos.jsx';
import Comparar from './CompararAutos.jsx';
import facebook from '../img/facebook.png';
import twitter from '../img/twitter.png';
import instagram from '../img/instagram.png';
import linkedin from '../img/linkedin.png';
import Footer from './footer.jsx';
import Axios from 'axios'; // Para realizar peticiones HTTP

function App() {
  // Estados para manejar la página activa, el login y los datos del usuario
  const [currentPage, setCurrentPage] = useState('carousel');
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [selectedAuto1, setSelectedAuto1] = useState(null);
  const [selectedAuto2, setSelectedAuto2] = useState(null);

  // Efecto para verificar si la sesión ha expirado
  useEffect(() => {
    const checkSessionExpiration = () => {
      const expirationTime = localStorage.getItem('expirationTime');
      if (expirationTime && new Date().getTime() > expirationTime) {
        handleLogout();
      }
    };

    const interval = setInterval(checkSessionExpiration, 1000);
    return () => clearInterval(interval);
  }, []);

  // Funciones de manejo de interacciones: navegación, login, logout, selección de autos, etc.
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const handleNavLinkClick = (page) => setCurrentPage(page);
  const handleLogin = () => {
    Axios.post('http://localhost:3001/login', { username, password })
      .then((response) => {
        if (response.data.success) {
          setLoggedIn(true);
          setShowModal(false);
          const expirationTime = new Date().getTime() + 5 * 60 * 1000;
          localStorage.setItem('loggedIn', 'true');
          localStorage.setItem('expirationTime', expirationTime);
        } else {
          setError('Usuario o contraseña incorrectos');
        }
      })
      .catch((error) => setError('Error de conexión al servidor'));
  };

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('expirationTime');
    Swal.fire({ title: '<strong>Oops!!</strong>', html: '<i>Sesión Expirada</i>', icon: 'error' });
  };

  const handleSelectAuto = (auto) => {
    if (!selectedAuto1) {
      setSelectedAuto1(auto);
    } else if (!selectedAuto2) {
      setSelectedAuto2(auto);
    } else {
      Swal.fire({ title: "Límite alcanzado", text: "Ya has seleccionado dos autos.", icon: "warning" });
    }
  };

  const handleDeselectAuto = (autoId) => {
    if (selectedAuto1 && selectedAuto1.id === autoId) setSelectedAuto1(null);
    else if (selectedAuto2 && selectedAuto2.id === autoId) setSelectedAuto2(null);
  };

  return (
    <>
      <div className="App">
        {/* Barra de navegación */}
        <Navbar bg="light" expand="lg" id="mi-navbar">
          <Navbar.Brand id="navTitle" href="#" onClick={() => handleNavLinkClick('carousel')}>
            <div className="brand">Motorsnet</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {/* Enlaces de navegación */}
              <Nav.Link id="nav" onClick={() => handleNavLinkClick('carousel')}>Inicio</Nav.Link>
              <Nav.Link id="nav" onClick={() => handleNavLinkClick('catalogo')}>Catálogo</Nav.Link>
              <Nav.Link id="nav" onClick={() => handleNavLinkClick('contacto')}>Contacto</Nav.Link>
              {loggedIn && <Nav.Link id="nav" onClick={() => handleNavLinkClick('Reserva')}>Reserva</Nav.Link>}
              {!loggedIn && <Nav.Link onClick={() => setShowModal(true)}>Login</Nav.Link>}
            </Nav>
            {loggedIn && (
              <Button variant="outline-danger" onClick={handleLogout}>Cerrar sesión</Button>
            )}
            {/* Iconos de redes sociales */}
            <div className="social-icons">
              <a href="https://www.facebook.com/"><img src={facebook} alt="Facebook" /></a>
              <a href="https://twitter.com/"><img src={twitter} alt="Twitter" /></a>
              <a href="https://www.instagram.com/"><img src={instagram} alt="Instagram" /></a>
              <a href="https://www.linkedin.com/"><img src={linkedin} alt="LinkedIn" /></a>
            </div>
          </Navbar.Collapse>
        </Navbar>

        {/* Contenido dinámico según la página seleccionada */}
        <div className="iframe-content" style={{ maxHeight: '100vh', overflowY: 'scroll' }}>
          {currentPage === 'carousel' && <Carousel />}
          {currentPage === 'Reserva' && <Reserva />}
          {currentPage === 'contacto' && <Contacto />}
          {currentPage === 'catalogo' && <CatalogoAutos onSelectAuto={handleSelectAuto} />}
          {currentPage === 'Comparar' && <Comparar auto1={selectedAuto1} auto2={selectedAuto2} onDeselectAuto={handleDeselectAuto} />}
          {currentPage === 'Vuelos' && <Vuelos />}
          <Footer handleNavLinkClick={handleNavLinkClick} />
        </div>

        {/* Modal de inicio de sesión */}
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Iniciar Sesión</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {error && <div className="alert alert-danger">{error}</div>}
            <form>
              <div className="form-group">
                <label id="user" htmlFor="username">Usuario:</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label id="cont" htmlFor="password">Contraseña:</label>
                <div className="input-group">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" onClick={togglePasswordVisibility}>
                      {showPassword ? 'Ocultar' : 'Mostrar'}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>Cerrar</Button>
            <Button variant="primary" onClick={handleLogin}>Iniciar Sesión</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default App;
