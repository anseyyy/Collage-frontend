import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Card, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaUsers,
  FaGraduationCap,
  FaChalkboardTeacher,
  FaFutbol,
  FaBuilding,
  FaStar
} from "react-icons/fa";
import "./Css.css"; // import the CSS (or paste into App.css)
import Facilities from "../components/Facilities";

/**
 * About page - Rynott College Theme
 * - Includes hero, mission, stats, programs, faculty preview, gallery, testimonials, CTA & footer
 */
function About() {
  // small stat counters
  const [students, setStudents] = useState(0);
  const [alumni, setAlumni] = useState(0);
  const [programs, setPrograms] = useState(0);

  useEffect(() => {
    // animated counters
    const dur = 1400;
    const start = Date.now();
    const animate = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(1, elapsed / dur);
      setStudents(Math.floor(progress * 4500));
      setAlumni(Math.floor(progress * 22000));
      setPrograms(Math.floor(progress * 56));
      if (progress < 1) requestAnimationFrame(animate);
    };
    animate();
  }, []);

  // reveal-on-scroll simple observer
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("reveal-active");
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="rynott-about-page">

      {/* HERO */}
      <header
        className="rynott-hero d-flex align-items-center text-white"
        style={{ backgroundImage: "url('/images/collage.jpg')" }}
      >
        <Container>
          <Row className="align-items-center">
            <Col md={7}>
              <h1 className="display-4 fw-bold">Rynott College</h1>
              <p className="lead mb-4">
                Innovation • Character • Leadership — Preparing leaders for the future.
              </p>
              <div>
                <Button as={Link} to="/applyform" variant="success" size="lg" className="me-3">
                  Apply Now
                </Button>
                <Button as={Link} to="/programs" variant="light" size="lg">
                  Explore Programs
                </Button>
              </div>
            </Col>
            <Col md={5} className="d-none d-md-block">
              <div className="hero-card p-4 rounded shadow-lg text-dark bg-white">
                <h5 className="fw-bold">Quick facts</h5>
                <p className="mb-1 small text-muted">Ranked among top institutions for innovation</p>
                <div className="mt-3 d-flex align-items-center">
                  <FaGraduationCap className="me-3 fs-3 text-primary" />
                  <div>
                    <div className="small text-muted">Established</div>
                    <div className="fw-bold">1998</div>
                  </div>
                </div>
                <div className="mt-3 d-flex align-items-center">
                  <FaUsers className="me-3 fs-3 text-success" />
                  <div>
                    <div className="small text-muted">Students</div>
                    <div className="fw-bold">~ 4.5k</div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </header>

      {/* MISSION & VALUES */}
      <section className="py-5 bg-white reveal">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2 className="fw-bold">Our Mission</h2>
              <p className="text-muted fs-5">
                At Rynott College we cultivate curiosity, build resilience, and encourage ethical leadership.
                Our mission is to deliver high-quality, industry-relevant education that transforms students into
                responsible global citizens.
              </p>
              <p className="text-muted fs-5">
                We combine rigorous academics with experiential learning — research projects, industry internships,
                and community engagement to ensure graduates are career-ready.
              </p>
              <Button as={Link} to="/mission" variant="outline-primary" className="mt-3">Read Full Vision</Button>
            </Col>
            <Col md={6}>
              <Row>
                <Col sm={6} className="mb-3">
                  <Card className="icon-card h-100 p-3">
                    <FaChalkboardTeacher className="icon-large text-primary" />
                    <h5 className="mt-2">World-class Faculty</h5>
                    <p className="small text-muted">Scholar-practitioners & researchers.</p>
                  </Card>
                </Col>
                <Col sm={6} className="mb-3">
                  <Card className="icon-card h-100 p-3">
                    <FaFutbol className="icon-large text-success" />
                    <h5 className="mt-2">Vibrant Campus Life</h5>
                    <p className="small text-muted">Sports, clubs & cultural events.</p>
                  </Card>
                </Col>
                <Col sm={6} className="mb-3">
                  <Card className="icon-card h-100 p-3">
                    <FaBuilding className="icon-large text-warning" />
                    <h5 className="mt-2">Modern Labs</h5>
                    <p className="small text-muted">Industry-grade equipment & makerspaces.</p>
                  </Card>
                </Col>
                <Col sm={6} className="mb-3">
                  <Card className="icon-card h-100 p-3">
                    <FaStar className="icon-large text-danger" />
                    <h5 className="mt-2">Global Placements</h5>
                    <p className="small text-muted">Top recruiters visit campus every year.</p>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="text-center py-5 reveal">
        <Facilities/>
      </section>

      {/* STATS */}
      <section className="py-5 reveal stats-section">
        <Container>
          <Row className="text-center">
            <Col md={4}>
              <div className="stat-box p-4 rounded shadow-sm">
                <h3 className="fw-bold">{students.toLocaleString()}</h3>
                <p className="text-muted mb-0">Current Students</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="stat-box p-4 rounded shadow-sm">
                <h3 className="fw-bold">{alumni.toLocaleString()}</h3>
                <p className="text-muted mb-0">Alumni Network</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="stat-box p-4 rounded shadow-sm">
                <h3 className="fw-bold">{programs}</h3>
                <p className="text-muted mb-0">Academic Programs</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* PROGRAMS */}
      <section className="py-5 bg-light reveal programs-section">
        <Container>
          <h2 className="fw-bold text-center mb-4">Featured Programs</h2>
          <Row>
            <Col md={4}>
              <Card className="program-card shadow-sm h-100">
                <img src="/images/rynott_program_engineering.webp" alt="Engineering" className="card-img-top" />
                <Card.Body>
                  <Card.Title>Engineering & Technology</Card.Title>
                  <Card.Text className="text-muted small">
                    B.Tech, M.Tech, and short courses in AI, Robotics, and Software Engineering.
                  </Card.Text>
                  <Button as={Link} to="/programs/engineering" variant="primary">View Course</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="program-card shadow-sm h-100">
                <img src="/images/rynott_program_business.jpg" alt="Business" className="card-img-top" />
                <Card.Body>
                  <Card.Title>Business & Management</Card.Title>
                  <Card.Text className="text-muted small">
                    BBA, MBA tracks focused on entrepreneurship, finance & analytics.
                  </Card.Text>
                  <Button as={Link} to="/programs/business" variant="primary">View Course</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="program-card shadow-sm h-100">
                <img src="/images/rynott_program_arts.jpg" alt="Arts" className="card-img-top" />
                <Card.Body>
                  <Card.Title>Arts & Humanities</Card.Title>
                  <Card.Text className="text-muted small">
                    BA programs in Media, Psychology, and Liberal Arts with internships.
                  </Card.Text>
                  <Button as={Link} to="/programs/arts" variant="primary">View Course</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FACULTY PREVIEW */}
      <section className="py-5 reveal">
        <Container>
          <h2 className="fw-bold text-center mb-4">Meet Some Faculty</h2>
          <Row>
            <Col md={3}>
              <Card className="text-center faculty-card p-3">
                <img src="/images/faculty1.jpg" alt="faculty" className="rounded-circle faculty-pic mb-2" />
                <h6 className="fw-bold mb-0">Dr. S. Nair</h6>
                <small className="text-muted">Head - Computer Science</small>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="text-center faculty-card p-3">
                <img src="/images/faculty2.jpg" alt="faculty" className="rounded-circle faculty-pic mb-2" />
                <h6 className="fw-bold mb-0">Prof. A. Reddy</h6>
                <small className="text-muted">Dean - Business School</small>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="text-center faculty-card p-3">
                <img src="/images/faculty3.jpeg" alt="faculty" className="rounded-circle faculty-pic mb-2" />
                <h6 className="fw-bold mb-0">Dr. L. Mehta</h6>
                <small className="text-muted">Psychology</small>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="text-center faculty-card p-3">
                <img src="/images/faculty4.jpg" alt="faculty" className="rounded-circle faculty-pic mb-2" />
                <h6 className="fw-bold mb-0">Ms. R. Kapoor</h6>
                <small className="text-muted">Head - Student Affairs</small>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* GALLERY CAROUSEL */}
      <section className="py-5 bg-light reveal">
        <Container>
          <h2 className="fw-bold text-center mb-4">Campus Gallery</h2>
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100 rounded" src="/images/rynott_campus1.jpg" alt="campus 1" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 rounded" src="/images/rynott_campus2.jpg" alt="campus 2" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 rounded" src="/images/rynott_campus3.jpg" alt="campus 3" />
            </Carousel.Item>
          </Carousel>
        </Container>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-5 reveal">
        <Container>
          <h2 className="fw-bold text-center mb-4">What Our Students Say</h2>
          <Row>
            <Col md={4}>
              <Card className="p-4 testimonial-card h-100">
                <p className="text-muted">
                  "Rynott gave me opportunities to research and intern with top companies — faculty support was incredible."
                </p>
                <h6 className="fw-bold mb-0">- Meera</h6>
                <small className="text-muted">Class of 2023</small>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="p-4 testimonial-card h-100">
                <p className="text-muted">
                  "Balance of academics and campus life helped me grow my leadership skills."
                </p>
                <h6 className="fw-bold mb-0">- Kunal</h6>
                <small className="text-muted">Class of 2022</small>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="p-4 testimonial-card h-100">
                <p className="text-muted">
                  "Strong industry links and placement cell — I landed my dream role within months of graduating."
                </p>
                <h6 className="fw-bold mb-0">- Aisha</h6>
                <small className="text-muted">Class of 2021</small>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-5 cta-section text-white bg-primary" >
        <Container className="text-center">
          <h3 className="fw-bold">Ready to Join Rynott College?</h3>
          <p className="lead text-light">Apply now or book a campus visit — we’ll guide you through the process.</p>
          <Button as={Link} to="/applyform" variant="light" size="lg">Start Application</Button>
        </Container>
      </section>

      
    </div>
  );
}

export default About;
