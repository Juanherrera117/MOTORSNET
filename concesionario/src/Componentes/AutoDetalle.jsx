// AutoDetalle.jsx
import React from 'react';
import '../Estilos/AutoDetalle.css';

const AutoDetalle = ({ auto, onSelect, isSelected }) => {
    return (
        <div 
            onClick={onSelect} 
            className={`auto-detalle ${isSelected ? 'seleccionado' : ''}`}
        >
            <h3>{auto.marca} {auto.modelo}</h3>
            <img src={auto.imagen} alt={`${auto.marca} ${auto.modelo}`} />
            <p>Precio: {auto.precio}</p>
            <p>{auto.descripcion}</p>
        </div>
    );
};

export default AutoDetalle;
