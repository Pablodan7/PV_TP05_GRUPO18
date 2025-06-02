import { useParams, useNavigate } from 'react-router-dom';
import AlumnoForm from '../components/AlumnoForm';

const EditarAlumno = ({ alumnos, setAlumnos }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const alumno = alumnos.find(a => a.id === id);

    if (!alumno) {
        return <p>Alumno no encontrado</p>;
    }

    const actualizarAlumno = (alumnoActualizado) => {
        setAlumnos(prev => prev.map(a => a.id === id ? alumnoActualizado : a));
        alert('Alumno actualizado exitosamente');
        navigate('/alumnos');
    };

    return (
        <>
        <h2>Editar Alumno</h2>
        <AlumnoForm alumno={alumno} onGuardar={actualizarAlumno} />
        </>
    );
};

export default EditarAlumno;