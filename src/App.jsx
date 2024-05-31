// src/App.jsx
import React, { useState } from 'react';
import CanvasGrid from './components/CanvasGrid';
import Botones, { handleNextStep } from './components/Botones';
import { automata } from './components/Botones';

// Función para actualizar un valor en la matriz
const updateGridValue = (gridData, setGridData, row, col, value) => {
  const newGrid = gridData.map((r, rowIndex) =>
    r.map((cell, colIndex) =>
      rowIndex == row && colIndex == col ? value : cell
    )
  );
  setGridData(newGrid);
};

// Función para actualizar todos los valores de la matriz según el automata
const updateAll = (gridData, setGridData) => {
  handleNextStep();
  if (automata) {
    const updatedGridData = JSON.parse(JSON.stringify(gridData)); // Crear una copia profunda
    for (let row = 0; row < automata.automata.length; row++) {
      for (let col = 0; col < automata.automata[row].length; col++) {
        updatedGridData[row][col] = automata.automata[row][col];
      }
    }
    setGridData(updatedGridData); // Actualizar el estado con la copia actualizada
  } else {
    console.log("No hay automata");
  }
};


// Componente principal
const App = () => {
  const rows = 70;
  const columns = 120;

  // Crear una matriz de prueba si no hay un automata
  const initialGrid = automata
    ? null
    : Array.from({ length: rows }, (_, row) =>
        Array.from({ length: columns }, (_, col) => (row + col) % 5)
      );

  const [gridData, setGridData] = useState(initialGrid);
  return (
    <div>
      <Botones />
      <button onClick={() => updateAll(gridData, setGridData)}>Siguiente</button>
      <button onClick={() => updateGridValue(gridData, setGridData,0,0,1)}>XD</button>
      <CanvasGrid gridData={gridData} />
    </div>
  );
};

export default App;
