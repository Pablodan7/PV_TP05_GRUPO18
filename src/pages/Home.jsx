import { Container, Card } from 'react-bootstrap';

const Home = () => {
    return (
        <Container className="mt-4">
        <h1 className="mb-4">Gestión de Alumnos</h1>
        <Card className="shadow-sm">
            <Card.Body>
            <Card.Title className="mb-3">Bienvenido a la Gestión de Alumnos</Card.Title>
            <Card.Text>
                Esta aplicación permite administrar de manera simple y eficiente la información de los alumnos de un curso.
                Podés realizar las siguientes acciones:
            </Card.Text>
            <ul>
                <li>📄 <strong>Ver</strong> la lista completa de alumnos registrados.</li>
                <li>➕ <strong>Agregar</strong> nuevos alumnos con sus datos personales y académicos.</li>
                <li>✏️ <strong>Editar</strong> la información de un alumno existente.</li>
                <li>🗑️ <strong>Eliminar</strong> alumnos cuando sea necesario.</li>
                <li>🔍 <strong>Consultar</strong> en detalle los datos de un alumno específico.</li>
            </ul>
            <Card.Text>
                Navegá usando el menú superior para acceder a cada sección.
            </Card.Text>
            </Card.Body>
        </Card>
        </Container>
    );
};

export default Home;