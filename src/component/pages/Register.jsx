import React, { Children, useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
    const {createUser} = useContext(AuthContext)
      const [accept,setAccept] = useState()
     const handleSubmit = (event) =>{
        event.preventDefault()
         const form = event.target
         const name = form.name.value;
         const photo = form.photo.value;
         const email= form.email.value;
         const password = form.password.value;
         createUser(email,password)
         .then((result)=>{
            const  createUser= result.user;
            console.log(createUser);
         })
         .catch((error)=>{
            console.log(error);
         })   
     }
      const handleAccepted = (event) =>{
           setAccept(event.target.checked);
      }
    return (
        <Container className='mt-5'>
    <h3>Please Register</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            name="name"
            placeholder="Enter Name"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>PhotoUrl</Form.Label>
          <Form.Control
            required
            type="text"
            name="photo"
            placeholder="PhotoUrl"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            type="email"
            name="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check onClick={handleAccepted} type="checkbox" name='accept' label={ <>Accept <Link to="/terms">Terms and Condition</Link> </> } />
        </Form.Group>
        <Button disabled={!accept} variant="primary" type="submit">
          Register
        </Button>
        <br></br>
        <Form.Text>
          Already Have an Account
          <Link to="/register">Login</Link>
        </Form.Text>
        <Form.Text className="test-success"></Form.Text>
        <Form.Text className="text-danger"></Form.Text>
      </Form>
    </Container>
    );
};

export default Register;