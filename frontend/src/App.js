import "./App.css";
import { Footer } from "./Componets/Footer";
/* import { Formulario } from "./Componets/Formulario"; */
import { Header } from "./Componets/Header";
/* import { Login } from "./Componets/Login"; */
import "bootstrap/dist/css/bootstrap.min.css";
import ListaProyectos from "./Containers/ListaProyectos";
import { AddProyecto } from "./Componets/AddProyecto";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Login} from "./Componets/Login"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/listaProyectos" element={<ListaProyectos/>} />
          <Route path="/addProyecto" element={<AddProyecto/>} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
      
{/*       <ListaProyectos/>
      <AddProyecto/> */}
      
    </div>
  );
}

export default App;
