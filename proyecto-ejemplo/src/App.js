import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Personas from "./pages/personas/Personas";
import Comentarios from "./pages/comentarios/Comentarios";
import Grupos from "./pages/grupos/Grupos";
import Layout from "./pages/layout/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Grupos />} />
          <Route path="personas" element={<Personas />} />
          <Route path="comentarios" element={<Comentarios />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
