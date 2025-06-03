import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ListaAlumnos = ({ alumnos, setAlumnos }) => {
    const eliminarAlumno = (id) => {
        if (confirm('¿Estás seguro de que querés eliminar este alumno?')) {
        setAlumnos(alumnos.filter(al => al.id !== id));
    }
    };

    return (
        <>
        <h2>Lista de Alumnos</h2>
        <Link to="/alumnos/nuevo" className="btn btn-primary mb-3">Agregar Alumno</Link>
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>LU</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Curso</th>
                <th>Acciones</th>
            </tr>
            </thead>
            <tbody>
            {alumnos.map(alumno => (
                <tr key={alumno.id}>
                <td>{alumno.id}</td>
                <td>{alumno.nombre}</td>
                <td>{alumno.apellido}</td>
                <td>{alumno.curso}</td>
                <td>
                    <Link to={`/alumnos/${alumno.id}`} className="btn btn-info btn-sm me-2">Ver</Link>
                    <Link to={`/alumnos/${alumno.id}/editar`} className="btn btn-warning btn-sm me-2">Editar</Link>
                    <Button variant="danger" size="sm" onClick={() => eliminarAlumno(alumno.id)}>Eliminar</Button>
                </td>
                </tr>
            ))}
            </tbody>
        </Table>
        </>
    );
};

export default ListaAlumnos;