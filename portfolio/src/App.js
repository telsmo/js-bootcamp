import './App.css';
import '@fortawesome/fontawesome-free/css/all.css';

import { BrowserRouter, Routes , Route } from "react-router-dom";
import Home from './pages/Home/Home';
import { Layout } from './pages/Layout/Layout';
import { NotFound } from './pages/NotFound/NotFound';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';

import { useContext } from 'react';
import { AutenticacionContext } from './contexts/AutenticacionProvider';
function App() {
  
  const { usuario } = useContext(AutenticacionContext);

  return (
      <BrowserRouter basename='/'>
        <Routes>
          <Route path='/' element={<Layout/>}>

            <Route index element={<Home/>}></Route>
            {usuario&&(
              <>
                <Route path='contacto' element={<Contact/>}>
                </Route>
                <Route path='sobre-mi' element={<About/>}></Route>
              </>
            )
            }

            <Route path='*'
              element={<NotFound/>}
            >
          </Route>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
