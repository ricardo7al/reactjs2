import React from "react";

export default function Buttons(props) {
  const { fnShowName } = props;

  return (
    <div>
      <h2>Ejercicio #4 (buttons)</h2>
      <button onClick={() => fnShowName("Guillermo")}>Clic </button>
    </div>
  );
}
