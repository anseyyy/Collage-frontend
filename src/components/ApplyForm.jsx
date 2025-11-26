import React, { useEffect, useState } from 'react';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import "./Css.css";

function ApplyForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://collage-server-39vz.onrender.com/report', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', course: '', message: '' });
    } catch (error) {
      console.error('Submission failed:', error);
    }
  };

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => navigate('/about'), 3000);
      return () => clearTimeout(timer);
    }
  }, [submitted, navigate]);

  return (
    <>
      {/* ---------- HERO BANNER ---------- */}
      <section className="apply-hero d-flex align-items-center">
        <Container>
          <h1 className="display-4 fw-bold text-white">Admission Inquiry</h1>
          <p className="text-light fs-5">Shape your future with Rynott College.</p>
        </Container>
      </section>

      {/* ---------- FORM SECTION ---------- */}
      <section className="apply-form-page py-5">
        <Container style={{ maxWidth: '850px' }}>
          <nav className="breadcrumb mb-3">
            <span className="text-muted">
              <Link to="/" className="text-decoration-none">HOME</Link> &gt; Admission
            </span>
          </nav>

          {submitted && (
            <Alert variant="success" className="text-center fw-semibold">
              🎉 Application Submitted Successfully! Redirecting...
            </Alert>
          )}

          <div className="form-box bg-light shadow-lg p-4 p-md-5">
            <h3 className="fw-bold text-center mb-4">Student Application Form</h3>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter Full Name" required onChange={handleChange} />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter Email" required onChange={handleChange} />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="tel" name="phone" placeholder="Enter Phone Number" required onChange={handleChange} />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Program / Course</Form.Label>
                    <Form.Select name="course" required onChange={handleChange}>
                      <option value="">Select a Program</option>
                      <option>STEM Excellence</option>
                      <option>Arts & Expression</option>
                      <option>Humanities & Leadership</option>
                      <option>Character & Community</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Message (Optional)</Form.Label>
                    <Form.Control as="textarea" rows={5} name="message" placeholder="Write any message if needed" onChange={handleChange} />
                  </Form.Group>
                </Col>
              </Row>

              <div className="text-center">
                <Button type="submit" className="submit-btn px-4 py-2 fw-semibold">
                  Submit Application
                </Button>
              </div>
            </Form>
          </div>
        </Container>
      </section>
    </>
  );
}

export default ApplyForm;
