import React, { useState } from 'react';
import AutoDetalle from './AutoDetalle';
import CompararAutos from './CompararAutos'; // Asegúrate de importar CompararAutos
import dataAutos from '../dataAutos';
import '../Estilos/CatalogoAutos.css';

const CatalogoAutos = () => {
    const [selectedAutos, setSelectedAutos] = useState([]);

    const handleSelectAuto = (auto) => {
        if (selectedAutos.length < 2) {
            setSelectedAutos([...selectedAutos, auto]);
        }
    };

    const handleDeselectAuto = (id) => {
        setSelectedAutos(selectedAutos.filter(auto => auto.id !== id));
    };

    return (
        <div>
            <h2>Catálogo de vehículos</h2>
            <div className="autos-lista">
                {dataAutos.map((auto) => (
                    <AutoDetalle
                        key={auto.id}
                        auto={auto}
                        onSelect={() => handleSelectAuto(auto)}
                        isSelected={selectedAutos.some(selectedAuto => selectedAuto.id === auto.id)}
                    />
                ))}
            </div>
            {selectedAutos.length === 2 && (
                <CompararAutos 
                    auto1={selectedAutos[0]} 
                    auto2={selectedAutos[1]} 
                    onDeselectAuto={handleDeselectAuto}
                />
            )}
        </div>
    );
};

export default CatalogoAutos;

