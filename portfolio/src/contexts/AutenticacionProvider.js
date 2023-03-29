import React, { useState } from "react";
export const AutenticacionContext = React.createContext(); 

export const AutenticacionProvider = (props) => { 
    const [usuario, setUsuario] = useState(null); 

    const iniciarSesion = (usuario) => { 
        setUsuario(usuario); 
    }; 
    const cerrarSesion = () => { 
        setUsuario(null); 
    }; 
    return ( 
    <AutenticacionContext.Provider value={{ usuario, iniciarSesion, cerrarSesion }} > 
        {props.children} 
    </AutenticacionContext.Provider> ); 
};