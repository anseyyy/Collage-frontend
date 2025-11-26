import React, { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserGraduate } from "react-icons/fa";
import "./Css.css";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      className={`rynott-navbar bg-light ${scrolled ? "sticky shadow-sm" : ""}`}
    >
      <Container className="">
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <FaUserGraduate className="college-logo-icon me-2" />
          <span className="fw-bold college-title">Rynott College</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto align-items-lg-center">

            <NavDropdown title="About" className="mx-2">
              <NavDropdown.Item as={Link} to="/about">About College</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/history">History & Legacy</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Admissions" className="mx-2">
              <NavDropdown.Item as={Link} to="/applyform">Apply</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/visitus">Visit Campus</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Academics" className="mx-2">
              <NavDropdown.Item as={Link} to="/programs">Programs</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/faculty">Faculty</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Portal" className="mx-2">
              <NavDropdown.Item as={Link} to="/login">Login</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/register">Register</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/admin">Admin Portal</NavDropdown.Item>
            </NavDropdown>

            <div className="ms-lg-3 mt-3 mt-lg-0">
              <Button as={Link} to="/applyform" variant="success" size="sm" className="fw-bold px-3">
                Apply Now
              </Button>
            </div>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
