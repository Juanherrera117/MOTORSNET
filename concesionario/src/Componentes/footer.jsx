import React from 'react';
import '../Estilos/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2 className="logo">
           <div className='name'>Motors</div><div className='name'>Net</div>
          </h2>
          <p>
           Somos el grupo de programacion web G04
          </p>
          <div className="contact">
            <span>
              <i className="fas fa-phone"></i> +123456789
            </span>
            <span>
              <i className="fas fa-envelope"></i> info@example.com
            </span>
          </div>
          
        </div>
        <div className="footer-section links">
          <h2>Paginas</h2>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Catalogo</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </div>
        <div className="footer-section contact-form">
          <h2>Contacto</h2>
          <form action="#">
            <input type="email" name="email" className="text-input contact-input" placeholder="Tu correo electrónico" />
            <textarea name="message" className="text-input contact-input" placeholder="Tu mensaje"></textarea>
            <button type="submit" className="btn btn-big">
              <i className="fas fa-envelope"></i>
              Enviar
            </button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Motorsnet | Todos los derechos reservados para el grupo G04.
      </div>
    </footer>
  );
}

export default Footer;