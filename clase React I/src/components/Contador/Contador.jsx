import { useState, useEffect } from "react";

const Contador = () => {
  const [numero, setNumero] = useState(0);
  const [numero2, setNumero2] = useState(0);
  useEffect(() => {
    console.log("numero cambio");
  }, []);

  return (
    <div style={{ margin: "20px" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <button
          onClick={() => {
            setNumero(numero + 1);
            console.log(numero);
          }}
        >
          Contador+1
        </button>
        <span>{numero}</span>
      </div>
    </div>
  );
};

// const Contador = () => {
//   const [contador1, setContador1] = useState(0);
//   const [contador2, setContador2] = useState(0);
//   useEffect(() => {
//     console.log("Contador 1 pulsado");
//   }, [contador1]);

//   return (
//     <div style={{ margin: "20px" }}>
//       <div style={{ display: "flex", flexDirection: "column" }}>
//         <button onClick={() => setContador1(contador1 + 1)}>Contador 1</button>
//         <span>{contador1}</span>
//       </div>
//       <div style={{ display: "flex", flexDirection: "column" }}>
//         <button onClick={() => setContador2(contador2 + 1)}>Contador 2 </button>
//         <span>{contador2}</span>
//       </div>
//     </div>
//   );
// };
export default Contador;
