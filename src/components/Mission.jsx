import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaBullseye, FaHandshake, FaUsers, FaLightbulb } from "react-icons/fa";
import "./Css.css";
import { Link } from "react-router-dom";


function Mission() {
  return (
     <div className="mission-section py-5">
      <Container>
        <Row className="align-items-center">
          {/* Image Section */}
          <Col lg={6} md={12} className="mb-4">
            <img
              src="/images/collage.jpg"
              alt="Mission"
              className="mission-img shadow-lg"
            />
          </Col>

          {/* Content Section */}
          <Col lg={6} md={12}>
            <h2 className="mission-title">
              Our <span className="highlight-text">Mission</span>
            </h2>
            <p className="mission-subtitle">
              We aim to create an environment where students can explore their potential,
              grow with confidence, and achieve excellence in both academics and character.
            </p>

            <div className="mission-points mt-4">
              <p><FaBullseye className="mission-icon" /> Deliver quality education & skill-based learning.</p>
              <p><FaHandshake className="mission-icon" /> Build strong relationships with parents & community.</p>
              <p><FaUsers className="mission-icon" /> Encourage teamwork, leadership & discipline.</p>
              <p><FaLightbulb className="mission-icon" /> Inspire creativity, innovation & lifelong learning.</p>
            </div>

            <Link to={'/about'} variant="primary" className=" btn btn-success mt-3 px-4 py-2">
              Learn More
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Mission