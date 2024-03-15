import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button, Container, Row, Col} from 'react-bootstrap';
import axios from 'axios';
import './ContactPage.css';
import './HomePage.css';
import AlertMessage from './AlertMessage';
const ContactForm = () => {
  const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: '',
      mobile: ''
  });
  const [alertMessage, setAlertMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const handleChange = e => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
      e.preventDefault();
      try {
          const response = await axios.post('http://localhost:5000/send-email', formData);
          console.log(response.data);
          setAlertMessage(response.data.message);
          setShowMessage(true);
          // Handle success or show a success message to the user
      } catch (error) {
          console.error('Error sending email:', error);
          setAlertMessage('An error occurred');
          setShowMessage(true);
          // Handle error or show an error message to the user
      }
  };


    return (
        <div className="container">
      <Container>
        <Row style={{alignItems:'center',marginLeft: '280px'}}>
          <Col md={25}>
          {showMessage && <div className="alert" style={{backgroundColor : 'blue'}}>{alertMessage}</div>}
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                    type="text"
                    name="subject"
                    placeholder="Enter your subject"
                    value={formData.subject}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                    as="textarea"
                    name="message"
                    placeholder="Your Message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMobile">
                <Form.Label>Mobile</Form.Label>
                <Form.Control
                    type="text"
                    name="mobile"
                    placeholder="Your Contact"
                    value={formData.mobile}
                    onChange={handleChange}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        
        
        </Col>
        </Row>
        </Container>
        </div>
    );
};

export default ContactForm;
