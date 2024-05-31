// src/components/FireForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const FireForm = () => {
  const [coordX, setCoordX] = useState('');
  const [coordY, setCoordY] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Enviar los datos al endpoint de fuego con los parámetros de consulta
    axios.get(`http://127.0.0.1:8000/simulacion/fuego/?x=${coordY}&y=${coordX}`)
      .then(response => {
        // Manejar la respuesta si es necesario
        console.log('Respuesta del endpoint de fuego:', response.data);
      })
      .catch(error => {
        // Manejar errores aquí
        console.error('Error al hacer la petición al endpoint de fuego:', error);
      });
    // Limpiar los campos después del envío
    setCoordX('');
    setCoordY('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Coordenada X:
        <input 
          type="number" 
          value={coordX} 
          onChange={(e) => setCoordX(e.target.value)} 
          required 
        />
      </label>
      <label>
        Coordenada Y:
        <input 
          type="number" 
          value={coordY} 
          onChange={(e) => setCoordY(e.target.value)} 
          required 
        />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FireForm;
