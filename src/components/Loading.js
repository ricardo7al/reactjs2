import React from "react";

export default function Loading(props) {
  const { data } = props;

  return (
    <div>
      <h2>Ejercicio #1 (Manejo de objetos)</h2>
      <h2>{data.title}</h2>
      <small>tiempo estimado {data.time} segundos.</small>
    </div>
  );
}
