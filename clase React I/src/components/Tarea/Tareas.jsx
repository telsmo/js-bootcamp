import React, { useState } from "react";
import Card from "../Card/Card";

const Tareas = () => {
  let tarea = "";
  const [listaTarea, setListaTarea] = useState([]);

  const handleChange = (e) => {
    tarea = e.target.value;
  };

  const handleSubmit = () => {
    setListaTarea((valorViejo) => [...valorViejo, tarea]);
  };
  console.log(tarea);

  return (
    <>
      <section>
        <input type="text" name="nombre" onChange={(e) => handleChange(e)} />
        <button onClick={() => handleSubmit()}>Enviar</button>
        {listaTarea.length > 0
          ? listaTarea.map((elem) => {
              return <Card nombre={elem} />;
            })
          : "No hay tareas"}
      </section>
    </>
  );
};

export default Tareas;
