import React from 'react';
import '../Estilos/CompararAutos.css';

const CompararAutos = ({ auto1, auto2, onDeselectAuto }) => {
    if (!auto1 || !auto2) {
        return <p>Seleccione dos vehículos para comparar.</p>;
    }

    return (
        <div className="comparar-autos">
            <h2>Comparación</h2>
            <div className="comparison-table">
                <div className="auto-comparacion">
                    <h3>{auto1.tipo}: {auto1.marca} {auto1.modelo}</h3> {/* Agregar el tipo aquí */}
                    <p>Precio: ${auto1.precio}</p>
                    <button className="compare-button" onClick={() => onDeselectAuto(auto1.id)}>Desmarcar</button>
                </div>
                <div className="auto-comparacion">
                    <h3>{auto2.tipo}: {auto2.marca} {auto2.modelo}</h3> {/* Agregar el tipo aquí */}
                    <p>Precio: ${auto2.precio}</p>
                    <button className="compare-button" onClick={() => onDeselectAuto(auto2.id)}>Desmarcar</button>
                </div>
            </div>
        </div>
    );
};

export default CompararAutos;

