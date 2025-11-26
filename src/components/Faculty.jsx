import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaUserTie, FaLaptopCode, FaFlask, FaChalkboardTeacher, FaMicroscope, FaBookReader } from "react-icons/fa";
import "../App.css";
import "./Css.css";

const facultyMembers = [
  {
    name: "Dr. John Mathew",
    role: "Head of Computer Science",
    icon: <FaLaptopCode />,
    desc: "15+ years experience in AI, Machine Learning & Software Engineering."
  },
  {
    name: "Prof. Diana Rose",
    role: "Senior Physics Professor",
    icon: <FaFlask />,
    desc: "Researcher in quantum physics & modern astrophysics with global publications."
  },
  {
    name: "Dr. Michael Johnson",
    role: "Head of English Dept",
    icon: <FaBookReader />,
    desc: "Expert in linguistics & contemporary literature with international awards."
  },
  {
    name: "Prof. Olivia George",
    role: "Mathematics Lecturer",
    icon: <FaChalkboardTeacher />,
    desc: "Specialist in applied mathematics, statistics & technical problem solving."
  },
  {
    name: "Dr. Robert William",
    role: "Biology Research Faculty",
    icon: <FaMicroscope />,
    desc: "Leading researcher in molecular biology & environmental science."
  },
  {
    name: "Prof. Emma Wilson",
    role: "Academic Coordinator",
    icon: <FaUserTie />,
    desc: "Organizes academic programs & industry collaboration for student success."
  }
];

function Faculty() {
  return (
     <div className="faculty-section py-5">
      <Container>
        <h2 className="text-center mb-4 faculty-title">
          Our <span className="highlight-text">Faculty</span>
        </h2>
        <p className="text-center mb-5 faculty-subtitle">
          Meet our experienced & dedicated educators who guide students towards excellence.
        </p>

        <Row>
          {facultyMembers.map((fac, index) => (
            <Col md={4} sm={6} xs={12} className="mb-4" key={index}>
              <Card className="faculty-card shadow-lg border-0 text-center p-4">
                <div className="faculty-icon">{fac.icon}</div>
                <h5 className="mt-3">{fac.name}</h5>
                <h6 className="text-primary">{fac.role}</h6>
                <p className="mt-2 text-muted">{fac.desc}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Faculty