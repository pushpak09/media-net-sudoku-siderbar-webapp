import React from 'react';
import './App.css';
import Timer from "../src/components/timer/app.js";
import SudokuTables from "../src/components/sudokuTables/app.js";
import SudokuOptions from "../src/components/options/app.js";
import SudokuDigits from "../src/components/digits/app.js";

function App() {
  return (
    <div className="App">
      <div className="sudoku-title">
        <img src="images/sudoku-logo.png" alt="Sudoku Logo" />
      </div>
      <div className="sudoku-main-content-wrapper">
        <Timer />
        <div className="sudoku-table-wrapper">
          <SudokuTables />
          <SudokuTables />
          <SudokuTables />
        </div>
        <SudokuOptions />
        <SudokuDigits />
      </div>
    </div>
  );
}

export default App;
