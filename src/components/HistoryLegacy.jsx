import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Css.css";

function HistoryLegacy() {
  const milestones = [
    { year: "1952", text: "Rynott College was founded with a vision to inspire academic excellence and character development." },
    { year: "1968", text: "Expansion of departments — science, arts & sports wings were introduced." },
    { year: "1989", text: "Rynott became a national educational leader with award-winning faculty and research programs." },
    { year: "2005", text: "Global exchange program began with universities in Europe & Southeast Asia." },
    { year: "2022", text: "Celebrated 70+ years of excellence with highest student success record in college history." },
  ];

  return (
    <>
      {/* HERO */}
      <section className="history-hero d-flex align-items-center">
        <Container>
          <h1 className="display-4 fw-bold text-white">History & Legacy</h1>
          <p className="text-light fs-5">
            A timeless journey of knowledge, leadership and academic excellence.
          </p>
        </Container>
      </section>

      {/* LEGACY INTRO */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center g-4">
            <Col md={6}>
              <img src="/images/legecy.jpg" className="img-fluid rounded-4 shadow" style={{maxHeight:"400px"}} alt="Campus Legacy" />
            </Col>
            <Col md={6}>
              <h2 className="fw-bold mb-3">A Tradition of Academic Excellence</h2>
              <p className="text-muted fs-5">
                Since its founding, Rynott College has stood as a beacon of opportunity. 
                What began as a small educational initiative has transformed into one of the nation’s most respected centers 
                for learning, leadership, and innovation — shaping generations of thinkers and leaders.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* TIMELINE */}
      <section className="py-5">
        <Container>
          <h2 className="fw-bold text-center mb-5">Our Journey Through Time</h2>
          <div className="timeline">
            {milestones.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content shadow-sm">
                  <h4 className="fw-bold">{item.year}</h4>
                  <p className="text-muted">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FOUNDER MESSAGE */}
      <section className="py-5 bg-primary-blue text-white">
        <Container className="text-center" style={{ maxWidth: "850px" }}>
          <img src="/images/faculty3.jpeg" className="founder-img mb-3" alt="Founder" />
          <h3 className="fw-bold mb-3">Message from the Founder</h3>
          <p className="fs-5">
            “Education is not the filling of a vessel, but the lighting of a flame.
            Every student deserves the opportunity to discover their potential and contribute to society with wisdom,
            compassion and courage. Rynott College was built upon this belief — and it continues to guide us today.”
          </p>
        </Container>
      </section>

      {/* GALLERY STRIP */}
      <section className="history-gallery">
        <div className="gallery-scroll">
          <img src="/images/history1.jpg" alt="" />
          <img src="/images/history2.jpg" alt="" />
          <img src="/images/history3.jpg" alt="" />
          <img src="/images/history4.jpg" alt="" />
        </div>
      </section>
    </>
  );
}

export default HistoryLegacy;
