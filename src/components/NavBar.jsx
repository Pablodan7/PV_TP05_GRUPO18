import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
            <Navbar.Brand as={Link} to="/">Gestión de Alumnos</Navbar.Brand>
            <Navbar.Toggle aria-controls="nav" />
            <Navbar.Collapse id="nav">
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                <Nav.Link as={Link} to="/alumnos">Lista de Alumnos</Nav.Link>
                <Nav.Link as={Link} to="/alumnos/nuevo">Nuevo Alumno</Nav.Link>
                <Nav.Link as={Link} to="/acercade">Acerca de</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default NavBar;