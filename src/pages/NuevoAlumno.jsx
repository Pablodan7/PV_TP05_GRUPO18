import AlumnoForm from '../components/AlumnoForm';
import { useNavigate } from 'react-router-dom';

const NuevoAlumno = ({ setAlumnos }) => {
    const navigate = useNavigate();

    const guardarAlumno = (nuevoAlumno) => {
        setAlumnos(prev => [...prev, nuevoAlumno]);
        alert('Alumno guardado exitosamente');
        navigate('/alumnos');
    };

    return (
        <>
        <h2>Agregar Nuevo Alumno</h2>
        <AlumnoForm onGuardar={guardarAlumno} />
        </>
    );
};

export default NuevoAlumno;