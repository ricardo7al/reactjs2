import React from "react";

export default function ListUsers(props) {
  const { listUsers } = props;
  console.log(props);

  return (
    <div>
      <h2>Ejercicio #2 (manejo de arrays)</h2>
      <h4>Lista de usuarios</h4>
      <ul>
        {" "}
        {listUsers.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
