import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const location = useLocation()
  console.log(location);
  const {singInUser} = useContext(AuthContext)
  const navigate = useNavigate()
     const handleSubmit =(event) =>{
      const from = location.state?.from?.pathname || "/"
      event.preventDefault()
      const form = event.target
      const email= form.email.value;
      const password = form.password.value;
     
     singInUser(email,password)
     .then(result=>{
        const singIn = result.user;
        navigate(from,{replace:true})
        console.log(singIn);
     })
     .catch(error=>{
        console.log(error);
     })
    }
  return (
    <Container className="mt-5">
    <h3>Please Login</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            type="email"
            name="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
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
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <br></br>
        <Form.Text>
          Don't Have an Account
          <Link to="/register">Register</Link>
        </Form.Text>
        <Form.Text className="test-success"></Form.Text>
        <Form.Text className="text-danger"></Form.Text>
      </Form>
    </Container>
  );
};


export default Login;
