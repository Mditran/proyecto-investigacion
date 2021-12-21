import "./App.css";
import { Footer } from "./Componets/Footer";
/* import { Formulario } from "./Componets/Formulario"; */
import { Header } from "./Componets/Header";
/* import { Login } from "./Componets/Login"; */
import "bootstrap/dist/css/bootstrap.min.css";
import ListaProyectos from "./Containers/ListaProyectos";
import ListaProyectosRegistrados from "./Containers/ListaProyectosRegistrados";
import  AddProyecto  from "./Componets/AddProyecto";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Login} from "./Componets/Login"
import ListaUsuarios from "./Containers/ListaUsuarios";
import AddUsuario from "./Componets/AddUsuario";
import ListaUsuariosLider from "./Containers/ListaUsuariosLider";
import ListaProyectosLider from "./Containers/ListaProyectosLider";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact="true" path="/" element={<Login/>} />
          <Route exact="true" path="/listaProyectos" element={<ListaProyectos/>} />
          <Route exact="true" path="/listaProyectosLider" element={<ListaProyectosLider/>} />
          <Route exact="true" path="/listaProyectosReg" element={<ListaProyectosRegistrados/>} />
          <Route exact="true" path="/addProyecto" element={<AddProyecto/>} />
          <Route exact="true" path="/listaUsuarios" element={<ListaUsuarios/>} />
          <Route exact="true" path="/listaUsuariosLider" element={<ListaUsuariosLider/>} />
          <Route exact="true" path="/addUsuario" element={<AddUsuario/>} />       
        </Routes>
        <Footer />
        {/* <Footer /> */}
      </BrowserRouter>
      
{/*       <ListaProyectos/>
      <AddProyecto/> */}
      
    </div>
  );
}

export default App;
