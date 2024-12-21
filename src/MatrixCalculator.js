import React, { useState } from 'react';

const Butterfly = ({ className }) => (
  <div className={`absolute ${className} pointer-events-none`}>
    <div className="relative">
      {/* Left Wing */}
      <div className="absolute w-8 h-8 bg-pink-200 rounded-full -left-8 top-0 animate-pulse opacity-70 transform rotate-45"></div>
      <div className="absolute w-6 h-6 bg-pink-300 rounded-full -left-6 top-0 animate-pulse opacity-70 transform rotate-45"></div>
      {/* Right Wing */}
      <div className="absolute w-8 h-8 bg-pink-200 rounded-full left-0 top-0 animate-pulse opacity-70 transform -rotate-45"></div>
      <div className="absolute w-6 h-6 bg-pink-300 rounded-full left-0 top-0 animate-pulse opacity-70 transform -rotate-45"></div>
      {/* Body */}
      <div className="absolute w-4 h-8 bg-pink-400 rounded-full left--2 top-0"></div>
      {/* Antennae */}
      <div className="absolute w-1 h-3 bg-pink-400 -top-2 -left-1 transform -rotate-45"></div>
      <div className="absolute w-1 h-3 bg-pink-400 -top-2 left-1 transform rotate-45"></div>
    </div>
  </div>
);

const CalculatorButton = ({ children, onClick, className = '' }) => (
  <button 
    onClick={onClick} 
    className={`
      bg-pink-600 text-white font-bold 
      rounded-lg shadow-md hover:bg-pink-700 
      transition duration-300 ease-in-out transform 
      hover:scale-105 active:scale-95 
      p-3 text-lg ${className}
    `}
  >
    {children}
  </button>
);

// [Previous Flower component remains exactly the same]
const Flower = ({ className }) => (
  <div className={`absolute ${className} animate-bounce pointer-events-none`}>
    <div className="relative">
      {/* Petals */}
      <div className="absolute w-4 h-4 bg-pink-300 rounded-full -top-2 -left-2 animate-pulse opacity-60"></div>
      <div className="absolute w-4 h-4 bg-pink-300 rounded-full -top-2 left-2 animate-pulse opacity-60"></div>
      <div className="absolute w-4 h-4 bg-pink-300 rounded-full top-2 -left-2 animate-pulse opacity-60"></div>
      <div className="absolute w-4 h-4 bg-pink-300 rounded-full top-2 left-2 animate-pulse opacity-60"></div>
      {/* Center */}
      <div className="absolute w-3 h-3 bg-yellow-300 rounded-full top-0 left-0 animate-pulse"></div>
    </div>
  </div>
);

const MatrixCalculator = () => {
  // [Previous state and function definitions remain exactly the same]
  const [matrix1, setMatrix1] = useState([
    ['', ''],
    ['', '']
  ]);
  const [matrix2, setMatrix2] = useState([
    ['', ''],
    ['', '']
  ]);
  const [result, setResult] = useState([
    ['', ''],
    ['', '']
  ]);
  const [operation, setOperation] = useState('add');

  const updateMatrix = (matrixSetter, row, col, value) => {
    const newMatrix = [...matrixSetter];
    newMatrix[row][col] = value === '' ? '' : parseFloat(value) || 0;
    return newMatrix;
  };

  const calculateResult = () => {
    const m1 = matrix1.map(row => row.map(val => val === '' ? 0 : val));
    const m2 = matrix2.map(row => row.map(val => val === '' ? 0 : val));

    switch(operation) {
      case 'add':
        return m1.map((row, i) => row.map((val, j) => val + m2[i][j]));
      case 'subtract':
        return m1.map((row, i) => row.map((val, j) => val - m2[i][j]));
      case 'multiply':
        return [
          [
            m1[0][0]*m2[0][0] + m1[0][1]*m2[1][0],
            m1[0][0]*m2[0][1] + m1[0][1]*m2[1][1]
          ],
          [
            m1[1][0]*m2[0][0] + m1[1][1]*m2[1][0],
            m1[1][0]*m2[0][1] + m1[1][1]*m2[1][1]
          ]
        ];
      default:
        return [['',''],['','']];
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 p-8 relative overflow-hidden">
      {/* Add butterflies at the top */}
      <Butterfly className="top-20 left-1/4 animate-bounce delay-100" />
      <Butterfly className="top-24 left-1/2 animate-bounce delay-300" />
      <Butterfly className="top-16 right-1/4 animate-bounce delay-500" />

      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
        <div className="w-96 h-96 bg-pink-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="w-72 h-72 bg-purple-300 rounded-full blur-2xl opacity-30 animate-pulse delay-1000"></div>
      </div>

      {/* Rest of the existing JSX remains exactly the same until the result section */}
      <div className="max-w-xl mx-auto bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-2xl relative z-10">
        {/* Header Flowers */}
        <Flower className="top-2 left-4 delay-100" />
        <Flower className="top-2 right-4 delay-300" />
        <Flower className="top-12 left-8 delay-500" />
        <Flower className="top-12 right-8 delay-700" />
        
        <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white text-center py-4 rounded-xl mb-6">
          <h1 className="text-3xl font-extrabold">Kalkulator Matriks</h1>
          <h2 className="text-lg font-semibold">By Adinda</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-6 relative">
          {/* Matrix A Flowers */}
          <Flower className="top-0 left-8 delay-200" />
          <Flower className="bottom-4 left-4 delay-400" />
          
          <div className="bg-pink-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-lg font-semibold mb-2 text-pink-600">Matrix A</h3>
            <div className="grid grid-cols-2 gap-2">
              {matrix1.map((row, rowIndex) => (
                row.map((value, colIndex) => (
                  <input
                    key={`m1-${rowIndex}-${colIndex}`}
                    type="number"
                    value={value}
                    onChange={(e) => {
                      const newMatrix = updateMatrix(matrix1, rowIndex, colIndex, e.target.value);
                      setMatrix1(newMatrix);
                    }}
                    className="p-2 border border-pink-200 rounded text-center focus:ring-2 focus:ring-pink-400 transition duration-300"
                  />
                ))
              ))}
            </div>
          </div>

          {/* Operator Flowers */}
          <div className="flex flex-col justify-center items-center relative">
            <Flower className="top-0 left-1/4 delay-600" />
            <Flower className="bottom-0 right-1/4 delay-800" />
            <select 
              value={operation} 
              onChange={(e) => setOperation(e.target.value)}
              className="p-3 w-full rounded-lg bg-pink-50 border border-pink-200 text-pink-600 font-semibold transition duration-300"
            >
              <option value="add">(+)</option>
              <option value="subtract">(-)</option>
              <option value="multiply">(×)</option>
            </select>
          </div>

          {/* Matrix B Flowers */}
          <Flower className="top-0 right-8 delay-1000" />
          <Flower className="bottom-4 right-4 delay-1200" />
          
          <div className="bg-pink-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-lg font-semibold mb-2 text-pink-600">Matrix B</h3>
            <div className="grid grid-cols-2 gap-2">
              {matrix2.map((row, rowIndex) => (
                row.map((value, colIndex) => (
                  <input
                    key={`m2-${rowIndex}-${colIndex}`}
                    type="number"
                    value={value}
                    onChange={(e) => {
                      const newMatrix = updateMatrix(matrix2, rowIndex, colIndex, e.target.value);
                      setMatrix2(newMatrix);
                    }}
                    className="p-2 border border-pink-200 rounded text-center focus:ring-2 focus:ring-pink-400 transition duration-300"
                  />
                ))
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mb-6 relative">
          {/* Button Flowers */}
          <Flower className="top-0 left-1/4 delay-1400" />
          <Flower className="top-0 right-1/4 delay-1600" />
          <CalculatorButton onClick={() => setResult(calculateResult())}>
            Hitung Matriks
          </CalculatorButton>
        </div>

        {/* Enhanced result section with borders */}
        <div className="bg-pink-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 relative border-4 border-pink-200">
          {/* Result Flowers */}
          <Flower className="top-2 left-4 delay-1800" />
          <Flower className="top-2 right-4 delay-2000" />
          <Flower className="bottom-2 left-1/3 delay-2200" />
          <Flower className="bottom-2 right-1/3 delay-2400" />
          
          <h3 className="text-lg font-semibold mb-4 text-pink-600 text-center">Hasil Operasi</h3>
          <div className="grid grid-cols-2 gap-4 mx-auto max-w-xs">
            {result.map((row, rowIndex) => 
              row.map((val, colIndex) => (
                <div 
                  key={`${rowIndex}-${colIndex}`} 
                  className="p-4 text-center font-bold text-pink-800 border-2 border-pink-300 rounded-lg bg-white/50"
                >
                  {val === '' ? '' : val === 0 ? '0' : val}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatrixCalculator;