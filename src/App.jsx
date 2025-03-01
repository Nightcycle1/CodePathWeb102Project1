// src/App.jsx
import React from "react";
import Board from "./Components/board.jsx";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="title-container">
        <h1>Things in or near Stone Mountain GA</h1>
      </div>
      <Board />
    </div>
  );
};

export default App;