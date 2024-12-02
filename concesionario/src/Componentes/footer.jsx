import React from 'react'; // Importa React para trabajar con JSX
import '../Estilos/Footer.css'; // Importa los estilos específicos para el footer

function Footer({ handleNavLinkClick }) { // Recibe la función 'handleNavLinkClick' como propiedad para manejar clics en los enlaces de navegación
  return (
    <footer className="footer"> {/* Elemento principal del pie de página */}
      <div className="footer-content"> {/* Contenedor principal de contenido */}
        
        {/* Sección sobre la empresa */}
        <div className="footer-section about">
          <h2 className="logo">
            <div className='name'>Motors</div> {/* Nombre de la empresa */}
            <div className='name'>Net</div> {/* Nombre de la empresa */}
          </h2>
          <p>
            Somos el grupo de programación web G04 {/* Descripción de la empresa */}
          </p>
          
          {/* Información de contacto */}
          <div className="contact">
            <span>
              <i className="fas fa-phone"></i> +123456789 {/* Icono de teléfono */}
            </span>
            <span>
              <i className="fas fa-envelope"></i> info@example.com {/* Icono de correo electrónico */}
            </span>
          </div>
        </div>
        
        {/* Sección de enlaces */}
        <div className="footer-section links">
          <h2>Paginas</h2> {/* Título de la sección */}
          <ul>
            {/* Enlaces de navegación */}
            <li>
              <a href="#" onClick={() => handleNavLinkClick('carousel')}>
                Inicio {/* Enlace a la página de inicio */}
              </a>
            </li>
            <li>
              <a href="#" onClick={() => handleNavLinkClick('catalogo')}>
                Catálogo {/* Enlace al catálogo de autos */}
              </a>
            </li>
            <li>
              <a href="#" onClick={() => handleNavLinkClick('contacto')}>
                Contacto {/* Enlace a la página de contacto */}
              </a>
            </li>
          </ul>
        </div>
        
        {/* Sección de formulario de contacto */}
        <div className="footer-section contact-form">
          <h2>Contacto</h2> {/* Título de la sección */}
          <form action="#"> {/* Formulario para enviar mensaje */}
            <input 
              type="email" 
              name="email" 
              className="text-input contact-input" 
              placeholder="Tu correo electrónico" 
            /> {/* Campo para el correo electrónico */}
            <textarea 
              name="message" 
              className="text-input contact-input" 
              placeholder="Tu mensaje"
            ></textarea> {/* Campo para el mensaje */}
            <button type="submit" className="btn btn-big">
              <i className="fas fa-envelope"></i> {/* Icono de sobre */}
              Enviar {/* Botón para enviar el mensaje */}
            </button>
          </form>
        </div>
      </div>
      
      {/* Pie de página inferior con los derechos de autor */}
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Motorsnet | Todos los derechos reservados para el grupo G04.
      </div>
    </footer>
  );
}

export default Footer;
