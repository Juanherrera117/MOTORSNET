import React from 'react'; // Importa React para usar JSX
import '../Estilos/CompararAutos.css'; // Importa los estilos específicos para la comparación de autos

const CompararAutos = ({ auto1, auto2, onDeselectAuto }) => {
    // Si no se han seleccionado dos autos, muestra un mensaje de advertencia
    if (!auto1 || !auto2) {
        return <p>Seleccione dos vehículos para comparar.</p>;
    }

    return (
        <div className="comparar-autos">
            <h2>Comparación</h2> {/* Título de la sección de comparación */}
            <div className="comparison-table">
                {/* Sección para mostrar el primer auto seleccionado */}
                <div className="auto-comparacion">
                    <h3>{auto1.tipo}: {auto1.marca} {auto1.modelo}</h3> {/* Muestra tipo, marca y modelo del primer auto */}
                    <p>Precio: ${auto1.precio}</p> {/* Muestra el precio del primer auto */}
                    {/* Botón para desmarcar este auto de la comparación */}
                    <button className="compare-button" onClick={() => onDeselectAuto(auto1.id)}>Desmarcar</button>
                </div>

                {/* Sección para mostrar el segundo auto seleccionado */}
                <div className="auto-comparacion">
                    <h3>{auto2.tipo}: {auto2.marca} {auto2.modelo}</h3> {/* Muestra tipo, marca y modelo del segundo auto */}
                    <p>Precio: ${auto2.precio}</p> {/* Muestra el precio del segundo auto */}
                    {/* Botón para desmarcar este auto de la comparación */}
                    <button className="compare-button" onClick={() => onDeselectAuto(auto2.id)}>Desmarcar</button>
                </div>
            </div>
        </div>
    );
};

export default CompararAutos;
