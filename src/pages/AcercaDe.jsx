import { Card, Container, Row, Col } from 'react-bootstrap';

const desarrolladores = [
{
    nombre: 'Pablo Garzon',
    legajo: 'APU006009',
    github: 'Pablodan7' ,
},
{
    nombre: 'Luciano Giron',
    legajo: 'APU006010',
    github: 'Lucianogiron10' ,
},
{
    nombre: 'Carlos Guanuco',
    legajo: 'APU005119',
    github: 'guanuco96' ,
},
{
    nombre: 'Lisandro Perez Ruarte',
    legajo: 'APU005678',
    github: 'LisandroPR' ,
},
];

const AcercaDe = () => {
    return (
        <Container className="mt-4">
        
        <h4 className="mt-5 mb-3">Desarrolladores</h4>
        <Row>
            {desarrolladores.map((dev, index) => (
            <Col key={index} md={6} lg={4} className="mb-4">
                <Card className="h-100 shadow-sm">
                <Card.Body>
                    <Card.Title>{dev.nombre}</Card.Title>
                    <Card.Text>
                    <strong>Legajo:</strong> {dev.legajo} <br />
                    <strong>GitHub:</strong> {dev.github} <br />
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
        ))}
        </Row>
        </Container>
    );
};

export default AcercaDe;