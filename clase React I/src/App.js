import "./App.css";
import { Button } from "./components/Button/Button";
import Contador from "./components/Contador/Contador";
import Logout from "./components/LogOut/LogOut";
import Tareas from "./components/Tarea/Tareas";
import { getRandomInt } from "./utils/getRandom";

const App = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let numero = getRandomInt(10);
  const multiplicador = 2;

  return (
    <>
      <Logout />
      {/* {array.map((numero) => (
        <Button numero={numero} multiplicador={multiplicador} />
      ))} */}
    </>
  );
};

export default App;
