import React, { useState, useEffect } from "react";

export default function Car() {
  const [started, setStarted] = useState(false);

  useEffect(() => {
    document.title = `Auto ${started}`;
  }, [started]);

  const [countKm, setCountKm] = useState(0);

  const checkStateCar = () => {
    if (started) {
      return <span style={{ color: "green" }}>"Encendido"</span>;
    }
    return <span style={{ color: "red" }}>"Apagado"</span>;
  };

  const increaseKm = num => {
    if (started) {
      setCountKm(countKm + num);
    } else {
      alert("El auto esta apagado.");
    }
  };

  return (
    <div>
      <h2>Ejercicio #5</h2>
      <h2>nuestro coche esta: {checkStateCar()} </h2>

      <button
        onClick={() => {
          setStarted(!started);
        }}
      >
        encender apagar
      </button>

      <h2>Kilómetros recorridos: {countKm} </h2>

      <button
        onClick={() => {
          increaseKm(5);
        }}
      >
        Aumentar kilómetros
      </button>
    </div>
  );
}
