import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const AlumnoForm = ({ alumno = {}, onGuardar }) => {
    const [form, setForm] = useState({
        id: alumno.id || '',
        nombre: alumno.nombre || '',
        apellido: alumno.apellido || '',
        curso: alumno.curso || '',
        email: alumno.email || '',
        domicilio: alumno.domicilio || '',
        telefono: alumno.telefono || ''
});

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
};

    const handleSubmit = e => {
        e.preventDefault();
        onGuardar(form);
};

    return (
        <Form onSubmit={handleSubmit}>
        {Object.entries(form).map(([key, value]) => (
            <Form.Group className="mb-3" key={key}>
            <Form.Label>{key.toUpperCase()}</Form.Label>
            <Form.Control
                type="text"
                name={key}
                value={value}
                onChange={handleChange}
                required
        />
            </Form.Group>
        ))}
        <Button variant="primary" type="submit">Guardar</Button>
        </Form>
    );
};

export default AlumnoForm;