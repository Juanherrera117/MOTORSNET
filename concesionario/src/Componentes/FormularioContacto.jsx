// FormularioContacto.jsx
import React, { useState } from 'react';
import '../Estilos/FormularioContacto.css';

const FormularioContacto = ({ onSubmit }) => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ nombre, email, mensaje });
        setNombre('');
        setEmail('');
        setMensaje('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Contacto</h2>
            <label>Nombre:</label>
            <input 
                type="text" 
                value={nombre} 
                onChange={(e) => setNombre(e.target.value)} 
            />
            <label>Email:</label>
            <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
            />
            <label>Mensaje:</label>
            <textarea 
                value={mensaje} 
                onChange={(e) => setMensaje(e.target.value)} 
            />
            <button type="submit">Enviar</button>
        </form>
    );
};

export default FormularioContacto;