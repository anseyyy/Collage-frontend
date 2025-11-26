import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Css.css";

function Facilities() {
  const facilities = [
    {
      title: "Modern Smart Classrooms",
      description: "Digital learning spaces equipped with smart boards, projectors, and high-speed internet.",
      icon: "fa-chalkboard-teacher",
      image: "/images/facility-class.jpeg",
    },
    {
      title: "World-Class Library",
      description: "Over 50,000 books, research journals, digital archives & peaceful study zones.",
      icon: "fa-book",
      image: "/images/facility-library.jpg",
    },
    {
      title: "Sports & Fitness Arena",
      description: "Indoor & outdoor sports — basketball, football, track, gymnasium, and yoga spaces.",
      icon: "fa-futbol",
      image: "/images/facility-sports.jpg",
    },
    {
      title: "Science & Innovation Labs",
      description: "Fully equipped physics, biology, chemistry & robotics laboratories for hands-on learning.",
      icon: "fa-flask",
      image: "/images/facility-lab.jpg",
    },
    {
      title: "Cafeteria & Dining",
      description: "Nutritious food, hygienic environment & a quiet space for student gathering.",
      icon: "fa-utensils",
      image: "/images/facility-cafe.jpg",
    },
    {
      title: "Student Wellness Center",
      description: "Guidance, mental wellness programs, mentorship & personal development.",
      icon: "fa-heart",
      image: "/images/facility-wellness.jpg",
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="facility-hero d-flex align-items-center text-center">
        <Container>
          <h1 className="display-4 fw-bold text-white">Campus Facilities</h1>
          <p className="text-white fs-5">
            Designed to inspire learning, creativity, health & student growth.
          </p>
        </Container>
      </section>

      {/* MAIN */}
      <section className="py-5">
        <Container>
          <Row className="mb-4 text-center">
            <Col>
              <h2 className="fw-bold display-6">Our Premium Learning Environment</h2>
              <p className="text-muted">
                Explore the student-centered infrastructure that powers the Rynott experience.
              </p>
            </Col>
          </Row>

          <Row className="g-4">
            {facilities.map((item, index) => (
              <Col md={6} lg={4} key={index}>
                <Card className="facility-card shadow-sm border-0 h-100">
                  <div className="facility-img-wrapper">
                    <img src={item.image} alt={item.title} className="facility-img" />
                  </div>
                  <Card.Body>
                    <div className="facility-icon">
                      <i className={`fas ${item.icon}`}></i>
                    </div>
                    <Card.Title className="fw-bold fs-4">{item.title}</Card.Title>
                    <Card.Text className="text-muted">{item.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Facilities;
