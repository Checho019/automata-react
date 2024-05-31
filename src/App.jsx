// src/App.jsx
import React, { useState } from 'react';
import CanvasGrid from './components/CanvasGrid';
import Botones from './components/Botones'
import { automata } from './components/Botones';

// Función para actualizar un valor en la matriz
const updateGridValue = (row, col, value) => {
  const newGrid = gridData.map((r, rowIndex) =>
    r.map((cell, colIndex) =>
      rowIndex === row && colIndex === col ? value : cell
    )
  );
  setGridData(newGrid);
};

// Componente principal
const App = () => {
  const rows = 70;
  const columns = 120;

  // Crear una matriz de prueba
  let initialGrid = null
  if (automata) {
    initialGrid = automata.autamata
  } else {
    initialGrid = Array.from({ length: rows }, (_, row) =>
      Array.from({ length: columns }, (_, col) => (row + col) % 5)
    );
  }

  const [gridData, setGridData] = useState(initialGrid);

  return (
    <div>
      <Botones></Botones>
      <CanvasGrid gridData={gridData} />
    </div>
  );
};

export default App;

