import React, { useState } from 'react'; // Importa React y useState para manejar el estado
import AutoDetalle from './AutoDetalle'; // Importamos el componente AutoDetalle para mostrar los detalles de cada auto
import CompararAutos from './CompararAutos'; // Importamos el componente CompararAutos para comparar autos seleccionados
import dataAutos from '../dataAutos'; // Importa los datos de los autos desde un archivo externo
import '../Estilos/CatalogoAutos.css'; // Importa los estilos para el catálogo de autos

const CatalogoAutos = () => {
    // Estado para mantener los autos seleccionados para comparación
    const [selectedAutos, setSelectedAutos] = useState([]);

    // Función para manejar la selección de un auto
    const handleSelectAuto = (auto) => {
        if (selectedAutos.length < 2) { // Solo permite seleccionar hasta dos autos
            setSelectedAutos([...selectedAutos, auto]);
        }
    };

    // Función para manejar la deselección de un auto
    const handleDeselectAuto = (id) => {
        // Filtra los autos seleccionados para eliminar el auto deseleccionado
        setSelectedAutos(selectedAutos.filter(auto => auto.id !== id));
    };

    return (
        <div>
            <h2>Catálogo de vehículos</h2> {/* Título del catálogo de autos */}
            
            {/* Muestra la lista de autos disponibles */}
            <div className="autos-lista">
                {dataAutos.map((auto) => ( // Itera sobre los autos disponibles en dataAutos
                    <AutoDetalle
                        key={auto.id} // Asigna una key única para cada auto
                        auto={auto} // Pasa los detalles del auto al componente AutoDetalle
                        onSelect={() => handleSelectAuto(auto)} // Asigna la función para seleccionar el auto
                        isSelected={selectedAutos.some(selectedAuto => selectedAuto.id === auto.id)} // Verifica si el auto está seleccionado
                    />
                ))}
            </div>

            {/* Muestra el componente de comparación solo si se han seleccionado 2 autos */}
            {selectedAutos.length === 2 && (
                <CompararAutos 
                    auto1={selectedAutos[0]} // Pasa el primer auto seleccionado
                    auto2={selectedAutos[1]} // Pasa el segundo auto seleccionado
                    onDeselectAuto={handleDeselectAuto} // Pasa la función para deseleccionar un auto
                />
            )}
        </div>
    );
};

export default CatalogoAutos;
