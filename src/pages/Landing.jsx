import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import {
  FaUniversity,
  FaChalkboardTeacher,
  FaUserGraduate,
  FaFutbol,
  FaBook,
  FaUsers,
  FaHandshake,
  FaStar,
  FaCalendarAlt,
} from "react-icons/fa";


function Landing() {
  React.useEffect(() => {
    const reveal = () => {
      document.querySelectorAll(".reveal").forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 90) {
          element.classList.add("active");
        }
      });
    };
    window.addEventListener("scroll", reveal);
    reveal();
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return (
    <div className="landing-page">

      {/* HERO SECTION */}
      <section
        className="hero-section text-center text-white d-flex align-items-center"
        style={{
          backgroundImage: "url('/images/collagebg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "95vh",
        }}
      >
        <Container className="reveal">
          <h1 className="display-3 fw-bold mb-3">Welcome to Rynott College</h1>
          <p className="lead fs-4">
            Excellence in Education • Leadership • Innovation • Global Exposure
          </p>
          <div className="mt-4">
            <Link to="/about">
              <Button variant="light" size="lg" className="me-3 shadow-sm">
                Discover Rynott
              </Button>
            </Link>
            <Link to="/applyform">
              <Button variant="success" size="lg" className="shadow-sm">
                Apply Now
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* LEGACY SECTION */}
      <Container className="py-5 reveal">
        <Row className="align-items-center">
          <Col md={6} className="text-center">
            <img src="/images/legecy.jpg" alt="" className="img-fluid rounded shadow" />
          </Col>
          <Col md={6}>
            <h2 className="fw-bold text-primary">A Legacy of Excellence</h2>
            <p className="mt-3 fs-5 text-muted">
              For over 25 years, Rynott College has shaped leaders, innovators and
              professionals across the globe. Our vision ensures each student becomes
              confident, skilled and ready for a bright future.
            </p>
            <Link to="/about">
              <Button variant="primary" size="lg">Learn More</Button>
            </Link>
          </Col>
        </Row>
      </Container>

      {/* PROGRAMS SECTION */}
      <section className="bg-light py-5 reveal">
        <Container>
          <h2 className="text-center fw-bold mb-5">Academic Programs</h2>
          <Row>
            <Col md={4}>
              <Card className="shadow-sm h-100 text-center p-4">
                <FaChalkboardTeacher className="display-4 text-primary mb-3" />
                <h4>Engineering & Technology</h4>
                <p className="text-muted mt-2">Robotics, AI, CS & Civil with industry exposure.</p>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="shadow-sm h-100 text-center p-4">
                <FaBook className="display-4 text-primary mb-3" />
                <h4>Business & Management</h4>
                <p className="text-muted mt-2">Marketing, Finance & HR with global case studies.</p>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="shadow-sm h-100 text-center p-4">
                <FaUserGraduate className="display-4 text-primary mb-3" />
                <h4>Arts & Humanities</h4>
                <p className="text-muted mt-2">Media, Psychology & Creative Arts for a global career.</p>
              </Card>
            </Col>
          </Row>
          <div className="text-center mt-4">
            <Link to="/programs">
              <Button variant="primary" size="lg">View All Programs</Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* HIGHLIGHTS SECTION */}
      <section className="py-5 reveal">
        <Container>
          <h2 className="text-center fw-bold mb-5">Campus Highlights</h2>
          <Row className="gy-4 text-center">
            <Col md={3}><FaFutbol className="display-5 text-primary mb-3" /><h5>Sports & Fitness</h5></Col>
            <Col md={3}><FaUsers className="display-5 text-primary mb-3" /><h5>Clubs & Events</h5></Col>
            <Col md={3}><FaUniversity className="display-5 text-primary mb-3" /><h5>Modern Hostel</h5></Col>
            <Col md={3}><FaHandshake className="display-5 text-primary mb-3" /><h5>Industry Tie-ups</h5></Col>
          </Row>
        </Container>
      </section>

      {/* STATS COUNTER */}
      <section className="stats-section text-white text-center reveal bg-primary">
        <Container className="py-5">
          <Row>
            <Col md={3}><h1 className="fw-bold">25+</h1><p>Years of Excellence</p></Col>
            <Col md={3}><h1 className="fw-bold">12,000+</h1><p>Active Students</p></Col>
            <Col md={3}><h1 className="fw-bold">200+</h1><p>Faculty Members</p></Col>
            <Col md={3}><h1 className="fw-bold">80+</h1><p>Recruiting Companies</p></Col>
          </Row>
        </Container>
      </section>


      

      {/* GALLERY SECTION */}
      <section className="py-5 bg-light reveal">
        <Container>
          <h2 className="text-center fw-bold mb-4">Campus Gallery</h2>
          <Row className="gy-4">
            {/* Column 1 */}
            <Col lg={4} className="d-flex flex-column gap-3">
              <img src="/images/rynott_campus1.jpg" className="gallery-box  rounded shadow-sm" alt="Campus 1" />
              <img src="/images/rynott_campus4.jpg" className="gallery-box  rounded shadow-sm" alt="Campus 4" />
              <img src="/images/rynott_campus7.jpg" className="gallery-box  rounded shadow-sm" alt="Campus 7" />
            </Col>

            {/* Column 2 */}
            <Col lg={4} className="d-flex flex-column gap-3">
              <img src="/images/rynott_campus2.jpg" className="gallery-box  rounded shadow-sm" alt="Campus 2" />
              <img src="/images/rynott_campus5.jpg" className="gallery-box  rounded shadow-sm" alt="Campus 5" />
              <img src="/images/rynott_campus8.jpg" className="gallery-box  rounded shadow-sm" alt="Campus 8" />
            </Col>

            {/* Column 3 */}
            <Col lg={4} className="d-flex flex-column gap-3">
              <img src="/images/rynott_campus3.jpg" className="gallery-box  rounded shadow-sm" alt="Campus 3" />
              <img src="/images/rynott_campus6.jpg" className="gallery-box  rounded shadow-sm" alt="Campus 6" />
              <img src="/images/rynott_campus9.jpg" className="gallery-box  rounded shadow-sm" alt="Campus 9" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-5 reveal">
        <Container>
          <h2 className="text-center fw-bold mb-5">What Students Say</h2>
          <Row>
            <Col md={4}>
              <Card className="p-4 shadow-sm text-center">
                <FaStar className="text-warning mb-2" />
                <p>“Rynott helped me build confidence and leadership. The industrial exposure was amazing.”</p>
                <h6 className="fw-bold mt-2">— Ananya, MBA</h6>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="p-4 shadow-sm text-center">
                <FaStar className="text-warning mb-2" />
                <p>“The engineering labs are world-class. I secured placement in my 3rd year itself.”</p>
                <h6 className="fw-bold mt-2">— Nikhil, B.Tech</h6>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="p-4 shadow-sm text-center">
                <FaStar className="text-warning mb-2" />
                <p>“Hostel life & campus activities are unforgettable — I got friends for life here.”</p>
                <h6 className="fw-bold mt-2">— Aisha, BA Psychology</h6>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* NEWS & EVENTS */}
      <section className="py-5 bg-light reveal">
        <Container>
          <h2 className="fw-bold text-center mb-5">Latest News & Events</h2>
          <Row className="gy-4">
            <Col md={4}>
              <Card className="shadow-sm p-3">
                <FaCalendarAlt className="text-primary display-6 mb-2" />
                <h5>Tech Fest 2025 Coming Soon</h5>
                <p className="text-muted">Workshops, coding challenges & robotics exhibition.</p>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="shadow-sm p-3">
                <FaCalendarAlt className="text-primary display-6 mb-2" />
                <h5>Campus Recruitment Drive</h5>
                <p className="text-muted">Top companies to visit Rs. 8L avg package.</p>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="shadow-sm p-3">
                <FaCalendarAlt className="text-primary display-6 mb-2" />
                <h5>Annual Cultural Fest</h5>
                <p className="text-muted">Music, arts, dance, and inter-college competitions.</p>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>


      

      {/* CTA */}
      <section className="text-center bg-secondary text-white py-5 reveal">
        <h2 className="fw-bold">Join the Rynott Family Today</h2>
        <p className="fs-5">Admissions for 2025 are open — limited seats!</p>
        <Link to="/applyform">
          <Button variant="light" size="lg" className="mt-2">Apply Now</Button>
        </Link>
      </section>
    </div>
  );
}

export default Landing;
