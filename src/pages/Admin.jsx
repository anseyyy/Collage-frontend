import React, { useEffect, useState } from 'react';
import { Container, Table, Alert } from 'react-bootstrap';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


function Admin() {
  const [inquiries, setInquiries] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {

    axios
      .get('https://collage-server-39vz.onrender.com/allreport')
      .then((res) => {
        console.log(res);

        setInquiries(res.data)

      })
      .catch((err) => {
        console.log("somthing went wrong",err);


      });
  }, []);

  return (
    <Container className="py-5">
      <h2>Admission Inquiry Status</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      {!error && (
        <Table striped bordered hover className="mt-4">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Grade</th>
              <th>Message</th>
              {/* <th>Status</th> */}
            </tr>
          </thead>
          <tbody>
            {inquiries.map((inq, index) => (
              <tr key={index}>
                <td>{inq.name}</td>
                <td>{inq.email}</td>
                <td>{inq.phone}</td>
                <td>{inq.grade}</td>
                <td>{inq.message}</td>
                {/* <td>
                  {inq.status}
                  <div className='d-flex align-items-between'> 
                    <button className='btn btn-success'>Update</button>
                    <button className='btn btn-danger'>Delete</button>
                  </div>
                </td> */}
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  )
}

export default Admin