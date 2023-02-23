import React from "react";

const Header = () => {
  const section = "Home";
  const user = {
    name: "Juanito",
    facebook: "https://facebook.com/juantio123",
  };

  const handleClickSaludar = (name) => {
    console.log(`Hola ${name}, como estas`);
  };

  return (
    <header>
      <h1>Mi primera pagina con componentes</h1>
      <nav>
        <ul>
          <li>
            <span href="" onClick={() => handleClickSaludar("Valentina")}>
              {section.toUpperCase()}
            </span>
          </li>
          <li>
            <a href={user.facebook}>Detail</a>
          </li>
          <li>
            <a href="" style={{ color: "red" }}>
              About
            </a>
          </li>
          <li>
            <a href="">Products</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
