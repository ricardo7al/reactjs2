import React from "react";

export default function ListUserV2(props) {
  console.log(props);
  const { users } = props;
  return (
    <div>
      <h2>Ejercicio #3 (manejo de arrays con objetos)</h2>
      <h4>Lista de empleados</h4>
      <ul>
        {" "}
        {users.map((user, index) => (
          <li key={index}>
            {user.name} - {user.years} años
          </li>
        ))}
      </ul>
    </div>
  );
}
