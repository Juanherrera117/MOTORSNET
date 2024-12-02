import React from 'react'; // Importa React, necesario para usar JSX y trabajar con componentes.
import ReactDOM from 'react-dom/client'; // Importa ReactDOM para manipular el DOM de la aplicación.
import './index.css'; // Importa el archivo de estilos globales de la aplicación.
import App from './Componentes/App'; // Importa el componente principal 'App' de la carpeta 'Componentes'.
import reportWebVitals from './reportWebVitals'; // Importa la función para medir el rendimiento de la aplicación.
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap para usar sus componentes y diseño.

const root = ReactDOM.createRoot(document.getElementById('root')); // Crea el nodo raíz de la aplicación dentro del DOM (donde se montará la aplicación).

root.render(
  <React.StrictMode> {/* Modo estricto para resaltar problemas potenciales en el código (útil en desarrollo) */}
    <App /> {/* Renderiza el componente 'App' como el componente raíz de la aplicación. */}
  </React.StrictMode>
);

// Si deseas medir el rendimiento de tu app, puedes pasar una función para registrar los resultados (por ejemplo: reportWebVitals(console.log))
// o enviarlos a un endpoint de análisis. Más información: https://bit.ly/CRA-vitals
reportWebVitals(); // Llama a reportWebVitals para comenzar a medir el rendimiento de la aplicación.
