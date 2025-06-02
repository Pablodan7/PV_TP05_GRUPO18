import { useParams, Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const DetalleAlumno = ({ alumnos }) => {
    const { id } = useParams();
    const alumno = alumnos.find(a => a.id === id);

    if (!alumno) {
    return <p>Alumno no encontrado</p>;
    }

    return (
        <>
        <h2 className="mb-4">Detalle del Alumno</h2>
        <Card className="shadow-sm">
            <Card.Body>
            <Card.Title className="mb-3">{alumno.nombre} {alumno.apellido}</Card.Title>
            <Card.Text>
                <strong>LU:</strong> {alumno.id} <br />
                <strong>Curso:</strong> {alumno.curso} <br />
                <strong>Email:</strong> {alumno.email} <br />
                <strong>Teléfono:</strong> {alumno.telefono} <br />
                <strong>Domicilio:</strong> {alumno.domicilio}
            </Card.Text>
            <Link to="/alumnos">
                <Button variant="secondary">Volver a la lista</Button>
            </Link>
            </Card.Body>
        </Card>
    </>
    );
};

export default DetalleAlumno;
