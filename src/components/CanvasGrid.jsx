// src/components/CanvasGrid.jsx
import React, { useEffect, useRef } from 'react';

const CanvasGrid = ({ gridData }) => {
  const canvasRef = useRef(null);
  const cellWidth = 8;
  const cellHeight = 8;

  // Función para obtener el color según el valor de la celda
  const getColor = (value) => {
    switch (value) {
      case 0:
        return 'rgb(0, 0, 0)';
      case 1:
        return 'rgb(112, 168, 19)';
      case 2:
        return 'rgb(255, 0, 0)';
      case 3:
        return 'rgb(255, 255, 255)';
      default:
        return 'rgb(0, 0, 255)';; // Color blanco para valores no especificados
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Set canvas dimensions
    canvas.width = gridData[0].length * cellWidth;
    canvas.height = gridData.length * cellHeight;

    // Draw grid with colors
    for (let row = 0; row < gridData.length; row++) {
      for (let col = 0; col < gridData[row].length; col++) {
        const x = col * cellWidth;
        const y = row * cellHeight;

        // Draw cell background color
        context.fillStyle = getColor(gridData[row][col]);
        context.fillRect(x, y, cellWidth, cellHeight);
      }
    }
  }, [gridData]);

  return <canvas ref={canvasRef} style={{ border: '1px solid black' }} />;
};

export default CanvasGrid;