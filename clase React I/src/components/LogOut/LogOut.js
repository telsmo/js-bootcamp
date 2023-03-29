import React, { useContext } from "react";
import { AutenticacionContext } from "../../contexts/Session";

const Logout = () => {
  const { cerrarSesion, iniciarSesion } = useContext(AutenticacionContext);
  return (
    <>
      <button onClick={cerrarSesion}>Cerrar sesión</button>
      <button onClick={() => iniciarSesion("Juan")}>iniciarSesion</button>
    </>
  );
};

export default Logout;
