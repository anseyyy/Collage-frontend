import React, { useState } from 'react';
import { Container, Form, Button, Alert, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: '', password: '' });
    console.log(formData);

    const [error, setError] = useState('');

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('https://collage-server-39vz.onrender.com/login', formData);
            console.log("data tranffered successfully",res);

            if (res.status==200) {
                setError('');
                navigate('/admin')
            }
        } catch (err) {
            setError('Invalid credentials');
        }
    };

    return (
        <Container className="py-5">
            <Row className="mb-4">
                <Col>
                    <nav className="breadcrumb">
                        <span className="text-muted">
                            <Link to="/" className="text-decoration-none">HOME</Link> &gt; Login
                        </span>
                    </nav>
                    <h2 className="fw-bold">Login</h2>
                </Col>
            </Row>

            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder='admin@gmail.com' name="email" onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder='admin123' name="password" onChange={handleChange} />
                </Form.Group>

                <Button type="submit">Login</Button>
            </Form>
        </Container>
    )
}

export default Login;