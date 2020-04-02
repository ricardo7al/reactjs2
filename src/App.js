import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Loading from "./components/Loading";
import ListUsers from "./components/ListUsers";
import ListUsersV2 from "./components/ListUsersV2";
import Buttons from "./components/Buttons";
import Car from "./components/Car";

function App() {
  const textObj = {
    title: "cargando...",
    time: 6
  };

  const showNameConsole = () => {
    console.log("Guillermo");
  };

  const users = [
    "Federico Vazquez",
    "Marcos Llorente",
    "Alejandro Gomez",
    "Guillermo Valverde",
    "Fernando Ortiz",
    "Maria Gonzales",
    "Isabel Pardo",
    "Victoria Valenzuela",
    "Alejandra Paredes",
    "Fernanda Sepulveda"
  ];

  const employees = [
    { name: "Federico Vazquez", years: 35 },
    { name: "Marco Llorente", years: 27 },
    { name: "Alejandro Gomez", years: 42 },
    { name: "Guillermo Valverde", years: 55 },
    { name: "Fernando Ortiz", years: 64 },
    { name: "Maria Gonzales", years: 32 },
    { name: "Isabel Pardo", years: 56 },
    { name: "Victoria Valenzuela", years: 24 },
    { name: "Alejandra Paredes", years: 37 },
    { name: "Fernanda Sepulveda", years: 72 }
  ];

  return (
    <div className="App">
      <h1> Manejo de REACT JS</h1>

      {/* Ejercicio 1 */}
      <Loading data={textObj} />

      {/* Ejercicio 2 y 3 */}
      <ListUsers listUsers={users} />
      <ListUsersV2 users={employees} />

      {/* Ejercicio 4 */}
      <Buttons fnShowName={showNameConsole} />

      <div>
        <h1>React Hook useState</h1>
        <Car />
      </div>

      {/*
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. React app right now !
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      */}
    </div>
  );
}

export default App;
