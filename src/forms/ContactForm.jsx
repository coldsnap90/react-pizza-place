import React,{useState } from 'react';
import {Form,Button,Row,Col} from "react-bootstrap";



function ContactForm() {

  const [validated,setValidated] = useState(false)
  const [form,setForm] = useState({
    email:"",
    name:"",
    phone_number:""
  })
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const ContactForm = event.currentTarget;

    if (ContactForm.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);

    const data = {
      email: form.email,
      phone_number: form.phone_number,
      name: form.name,
    };
 }
 
  return (

        <Form
            id="contact-form"
            className="border p-4 rounded text-align-center"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
        
       
          <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <br/>
          <Form.Control
           value={form.email}
           onChange={(e) => setForm({ ...form, email: e.target.value })}
           required
           type="text"
           placeholder="Enter email"
          />
          </Form.Group>


          <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <br/>
          <Form.Control
           value={form.name}
           onChange={(e) => setForm({ ...form, name: e.target.value })}
           required
           type="text"
           placeholder="Enter name"
          />
          </Form.Group>

          <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <br/>
          <Form.Control
           value={form.phone_number}
           onChange={(e) => setForm({ ...form, phone_number: e.target.value })}
           required
           type="text"
           placeholder="Enter phone number"
          />
          </Form.Group>

          <div className="text-content text-danger">{error && <p>{error}</p>}</div>
          <Row>
            <Button
            disabled={!form.phone_number || !form.email}
            variant="primary"
            type="submit"
            >
             Submit
            </Button>
          </Row>


   
        </Form>
      );
}

export default ContactForm;