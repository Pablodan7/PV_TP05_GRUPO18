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
<<<<<<< HEAD
=======
      <h1>Holaa</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
>>>>>>> 9452df40b5f3edaa24e7e8d739d91c0ee16bd6d5
    </>
  );
}

export default App;
