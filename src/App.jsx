import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ListaAlumnos from './pages/ListaAlumnos';
import NuevoAlumno from './pages/NuevoAlumno';
import EditarAlumno from './pages/EditarAlumno';
import DetalleAlumno from './pages/DetalleAlumno';
import AcercaDe from './pages/AcercaDe';
import NavBar from './components/NavBar';
import { alumnosIniciales } from './data.js';

function App() {
  const [alumnos, setAlumnos] = useState(alumnosIniciales);

  return (
    <>
      <NavBar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alumnos" element={<ListaAlumnos alumnos={alumnos} setAlumnos={setAlumnos} />} />
          <Route path="/alumnos/nuevo" element={<NuevoAlumno setAlumnos={setAlumnos} />} />
          <Route path="/alumnos/:id/editar" element={<EditarAlumno alumnos={alumnos} setAlumnos={setAlumnos} />} />
          <Route path="/alumnos/:id" element={<DetalleAlumno alumnos={alumnos} />} />
          <Route path="/acercade" element={<AcercaDe />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
