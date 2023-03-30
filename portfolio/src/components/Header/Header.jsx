import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AutenticacionContext } from "../../contexts/AutenticacionProvider";
import "./Header.css"; // Importamos el archivo CSS correspondiente

const Header = () => {
  const { usuario, iniciarSesion, cerrarSesion } =
    useContext(AutenticacionContext);

  const HandleLogin = () => {
    if (!usuario) {
      iniciarSesion("Max Power");
      return;
    }
    cerrarSesion();
  };
  return (
    <header>
      <Link to="/" className="logo">
        <span>Max Power</span>
      </Link>
      <nav>
        <ul>
          {usuario && (
            <>
              <li>
                <Link to="/sobre-mi">Sobre mí</Link>
              </li>
              <li>
                <Link to="/contacto">Contacto</Link>
              </li>
            </>
          )}
          <li>
            <button onClick={HandleLogin}>
              {usuario ? "Logout" : "Login"}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
