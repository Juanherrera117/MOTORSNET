// AutoDetalle.jsx
import React from 'react';
import '../Estilos/AutoDetalle.css';

const AutoDetalle = ({ auto, onSelect, isSelected }) => {
    return (
        // El contenedor del auto que cambia de estilo si está seleccionado
        <div 
            onClick={onSelect}  // Se ejecuta la función onSelect cuando se hace clic
            className={`auto-detalle ${isSelected ? 'seleccionado' : ''}`} // Aplica una clase de estilo si el auto está seleccionado
        >
            <h3>{auto.marca} {auto.modelo}</h3> {/* Muestra la marca y modelo del auto */}
            <img src={auto.imagen} alt={`${auto.marca} ${auto.modelo}`} /> {/* Muestra la imagen del auto */}
            <p>Precio: {auto.precio}</p> {/* Muestra el precio del auto */}
            <p>{auto.descripcion}</p> {/* Muestra una descripción del auto */}
        </div>
    );
};

export default AutoDetalle;
