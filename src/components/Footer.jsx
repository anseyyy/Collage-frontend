import React from 'react'
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div>

      {/* FOOTER */}
      <footer className="bg-primary text-white text-center py-4">
        <Container>
          <p className="mb-1">&copy; {new Date().getFullYear()} Rynott College | All Rights Reserved</p>
          <div>
            <Link to="/contact" className="text-light me-3">Contact</Link>
            <Link to="/programs" className="text-light me-3">Programs</Link>
            <Link to="/about" className="text-light">About</Link>
          </div>
        </Container>
      </footer>



    </div>
  )
}

export default Footer