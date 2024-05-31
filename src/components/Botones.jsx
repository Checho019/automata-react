// src/components/MyComponent.jsx
import React from 'react';
import axios from 'axios';

export var automata = null
const baseUrl = 'http://127.0.0.1:8000/simulacion';

export const handleNextStep = () => {
  axios.get(`${baseUrl}/siguiente/`)
    .then(response => {
      // Manejar la respuesta aquí
      automata = response.data
      console.log(automata)
    })
    .catch(error => {
      // Manejar errores aquí
      console.error('Error al hacer la petición al endpoint siguiente:', error);
    });
};

const Botones = () => {
   // Cambia esto por la URL base de tu API
  const handleRestartSimulation = () => {
    axios.get(`${baseUrl}/reiniciar/`)
      .then(response => {
        // Manejar la respuesta aquí
        automata = response.data
        console.log(automata)
      })
      .catch(error => {
        // Manejar errores aquí
        console.error('Error al hacer la petición al endpoint reiniciar:', error);
      });
  };

  const handleFire = () => {
    axios.get(`${baseUrl}/fuego/`)
      .then(response => {
        // Manejar la respuesta aquí
        automata = response.data
        console.log(automata)
      })
      .catch(error => {
        // Manejar errores aquí
        console.error('Error al hacer la petición al endpoint fuego:', error);
      });
  };

  const handleWater = () => {
    axios.get(`${baseUrl}/agua/`)
      .then(response => {
        // Manejar la respuesta aquí
        automata = response.data
        console.log(automata)
      })
      .catch(error => {
        // Manejar errores aquí
        console.error('Error al hacer la petición al endpoint agua:', error);
      });
  };

  const handleWind = () => {
    axios.get(`${baseUrl}/viento/`)
      .then(response => {
        // Manejar la respuesta aquí
        automata = response.data
        console.log(automata)
      })
      .catch(error => {
        // Manejar errores aquí
        console.error('Error al hacer la petición al endpoint viento:', error);
      });
  };

  return (
    <div>
      <button onClick={handleRestartSimulation}>Reiniciar</button>
      <button onClick={handleFire}>Poner Fuego</button>
      <button onClick={handleWater}>Poner Agua</button>
      <button onClick={handleWind}>Cambiar Viento</button>
    </div>
  );
};

export default Botones;
