import React, { useState } from 'react';
import { Container, Form, Button, Alert, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";


function Register() {

    const navigate = useNavigate();
    const [RegisterData, setRegisterData] = useState({name:"", email: '', password: '' });
        console.log(RegisterData);

    const handleChange = (e) =>
        setRegisterData({ ...RegisterData, [e.target.name]: e.target.value });


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('https://collage-server-39vz.onrender.com/register', RegisterData)
            console.log("registration successfull", res);

            if (res.status == 201) {
                toast.error("User already exists. Please log in.");
                navigate('/login')
            }
        } catch (err) {
            toast.error("Something went wrong. Try again.");
        }

    }
    return (
        <Container className="py-5">
            <Row className="mb-4">
                <Col>
                    <nav className="breadcrumb">
                        <span className="text-muted">
                            <Link to="/" className="text-decoration-none">HOME</Link> &gt; Register
                        </span>
                    </nav>
                    <h2 className="fw-bold">Register</h2>
                </Col>
            </Row>

            
            <ToastContainer position="top-right" autoClose={3000} />
            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" name="name" onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" onChange={handleChange} />
                </Form.Group>

                <Button type="submit">Register</Button>
            </Form>
        </Container>
    )
}

export default Register