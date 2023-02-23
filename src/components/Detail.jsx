import React from "react";

const Detail = ({ detail, color, fontSize = 45, user }) => {
  //   const detail = props.detail;
  //   const color = props.color;
  //   const fontSize = props.fontSize;
  // const { detail, color, fontSize } = props;

  return (
    <div>
      <h2>Detalle de mi pagina</h2>
      <p style={{ color: color, fontSize: fontSize }}>{detail}</p>
      <mark>Nombre del Usuario: {user.name}</mark>
      <br />
      <mark>Edad del Usuario: {user.age}</mark>
      <br />
      <mark>Comida Favorita del Usuario: {user.favoriteFood}</mark>
      <br />
    </div>
  );
};

export default Detail;
