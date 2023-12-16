
import { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { login } from "../services/AdminService";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css"


export function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ phone: "", password: "" });
  const [loginError, setLoginError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await login(formData);
      localStorage.setItem("token", result.token);        
      navigate("/home");
    } catch (error) {
      console.log(error);
      setLoginError(true);
    }
  }
  return (
    <Container className="mainLogin mt-5" >
      <div className="main">
        <Row>
          <Col lg={12}>
          <h1 id="loginHeading"><b>Log In</b></h1>
            <Form className="formContainer" onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" placeholder="Enter Phone" name="phone" onChange={handleChange} required/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} required/>
              </Form.Group>
              <div className="buttonPrimary">
                <Button variant="primary" type="submit" >
                  Login
                </Button>
              </div>
              
            </Form>
            {loginError ? <Alert variant="danger" className="mt-3">Invalid phone or password</Alert> : null}
          </Col>
          <br></br>
          <div className="Linker">
            Not a member? 
            <Link to="/register">
                <p>Sign Up</p>
            </Link>
          </div>
        </Row>
      </div>
      
    </Container>
  );
}