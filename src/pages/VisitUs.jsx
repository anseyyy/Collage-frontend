import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Css.css";

function VisitUs() {
    return (
        <div className="visit-us-page">

            {/* Hero Section */}
            <section className="visit-hero text-white d-flex align-items-center">
                <Container>
                    <h1 className="fw-bold display-4">Visit Rynott College</h1>
                    <p className="fs-5 mt-2 mb-4 opacity-75">
                        Discover our campus, interact with faculty, and feel the spirit of Rynott.
                        We invite you to experience the academic and cultural excellence in person.
                    </p>
                    <Link to="/applyform" className="btn btn-light px-4 py-2 fw-semibold">
                        Schedule a Campus Tour
                    </Link>
                </Container>
            </section>

            {/* Breadcrumb */}
            <Container className="py-4">
                <nav className="breadcrumb">
                    <span>
                        <Link to="/" className="text-decoration-none text-dark">HOME</Link> &gt; Visit Us
                    </span>
                </nav>
            </Container>

            {/* Location & Details */}
            <section className="py-5">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6} className="text-dark">
                            <h2 className="fw-bold mb-3">Campus Location</h2>
                            <p className="fs-5">
                                <i className="fa-solid fa-location-dot me-2 text-success"></i>
                                Rynott College, Kozhikode, Kerala, India
                                <br /><br />
                                <i className="fa-solid fa-clock me-2 text-success"></i>
                                Visiting Hours: Monday – Saturday, 9:00 AM – 4:00 PM
                            </p>

                            <h3 className="fw-bold mt-4 mb-3">Contact Information</h3>
                            <p className="fs-5">
                                <i className="fa-solid fa-phone me-2 text-success"></i>
                                +91 85889 87888 <br />
                                <i className="fa-solid fa-envelope me-2 text-success"></i>
                                <a href="mailto:admin@rynottcollege.com">admin@rynottcollege.com</a> <br />
                                <i className="fa-solid fa-globe me-2 text-success"></i>
                                <a href="#">www.rynottcollege.com</a>
                            </p>
                        </Col>

                        <Col md={6}>
                            <div className="shadow map-wrapper rounded overflow-hidden">
                                <iframe
                                    title="Rynott College Kerala Location"
                                    src="https://www.google.com/maps?q=Kozhikode,+Kerala,+India&output=embed"
                                    width="100%"
                                    height="350"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Why Visit Section */}
            <section className="py-5 bg-light">
                <Container>
                    <h2 className="fw-bold text-center mb-5">Why Visit Rynott?</h2>
                    <Row className="gy-4">
                        {[
                            { icon: "fa-building", title: "Campus Architecture", desc: "Explore our modern infrastructure, library, labs, digital classrooms & sports facilities." },
                            { icon: "fa-users", title: "Faculty Interaction", desc: "Meet our experienced teaching faculty and academic advisors to learn more about courses." },
                            { icon: "fa-user-graduate", title: "Student Life", desc: "Get insight into clubs, cultural events, workshops, innovation programs & hostel life." },
                        ].map((item, index) => (
                            <Col md={4} key={index}>
                                <div className="p-4 text-center bg-white shadow rounded h-100">
                                    <i className={`fa-solid ${item.icon} display-5 mb-3 text-success`}></i>
                                    <h5 className="fw-bold">{item.title}</h5>
                                    <p className="mt-2">{item.desc}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Photo Gallery */}
            <section className="py-5">
                <Container>
                    <h2 className="fw-bold text-center mb-4">Campus Glimpses</h2>
                    <Row className="gy-3">
                        {[1, 2, 3, 4, 5, 6].map((_, index) => (
                            <Col key={index} md={4}>
                                <div className="photo-box rounded shadow-sm"></div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Bottom CTA */}
            <section className="py-5 text-center bg-dark text-white">
                <h2 className="fw-bold">Ready to Experience Rynott?</h2>
                <p className="fs-5 opacity-75">Take the next step toward your future.</p>
                <div className="mt-3 d-flex justify-content-center gap-4">
                    <Link className="btn btn-light px-4 py-2 fw-semibold" to="/applyform">Apply Now</Link>
                    <Link className="btn btn-outline-light px-4 py-2 fw-semibold" to="/">Back to Home</Link>
                </div>
            </section>
        </div>
    );
}

export default VisitUs;
