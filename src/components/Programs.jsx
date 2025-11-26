import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css';

function Programs() {

  const programs = [
    {
      title: 'STEM Excellence',
      description: 'Hands-on learning in science, technology, engineering, and mathematics to prepare future innovators.',
      image: '/images/rynott-stem.jpg'
    },
    {
      title: 'Arts & Expression',
      description: 'Visual arts, music, and drama programs that nurture creativity and self-expression.',
      image: '/images/rynott_program_arts.jpg'
    },
    {
      title: 'Humanities & Leadership',
      description: 'Courses in history, literature, and ethics that build critical thinking and global awareness.',
      image: '/images/rynott-humanities.jpg'
    },
    {
      title: 'Character & Community',
      description: 'Programs focused on personal growth, service, and leadership within and beyond the classroom.',
      image: '/images/rynott_program_business.jpg'
    },
  ];

  return (
    <>
      {/* ------- HERO SECTION -------- */}
      <section className="programs-hero d-flex align-items-center">
        <Container>
          <h1 className="display-4 fw-bold text-white">Rynott College Programs</h1>
          <p className="text-light fs-5">
            Discover programs built to empower minds, shape futures, and inspire leadership.
          </p>
        </Container>
      </section>


      {/* ------- MAIN SECTION -------- */}
      <section className="programs-page py-5">
        <Container>

          <Row className="mb-4 text-center">
            <Col>
              <h2 className="fw-bold display-6">Explore Our Academic Divisions</h2>
              <p className="text-muted">A curriculum that unites innovation, creativity, ethics, and leadership.</p>
            </Col>
          </Row>

          {/* PROGRAM CARDS */}
          <Row className="g-4">
            {programs.map((program, index) => (
              <Col md={6} lg={4} key={index}>
                <Card className="program-card premium-card h-100 border-0 shadow-lg">
                  <div className="premium-img-wrapper">
                    <Card.Img variant="top" src={program.image} alt={program.title} />
                  </div>
                  <Card.Body className="p-4">
                    <Card.Title className="fw-bold fs-4">{program.title}</Card.Title>
                    <Card.Text className="text-secondary">{program.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {/* CTA */}
          <Row className="mt-5 text-center">
            <Col>
              <h3 className="fw-bold">Interested in Joining Rynott College?</h3>
              <p className="text-muted fs-5">
                Start your academic journey with world-class faculty and opportunities.
              </p>
              <Button variant="primary" className="px-4 py-2 fw-semibold " as={Link} to="/applyform">
                Submit an Inquiry
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Programs;
