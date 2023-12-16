import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap"

import { useState } from "react";

import { Link } from "react-router-dom";
import { register } from "../services/AdminService";





export function Register(){
  const [formData,setFormData]=useState({name:"",email:"",phone:"",password:""}); //initially formdata is empty string
  const [isSubmitted,setIsSubmitted]=useState(false); //by default issubmitted is false

  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const handleSumbit= async(e)=>{
    e.preventDefault(); //stop form to get reloaded everytime
    try{
        const result= await register(formData); //data passiing to server register()
        //console.log(result);
        setFormData(({name:"",email:"",phone:"",password:""}))      //after submitting value field should blank
        setIsSubmitted(true); //this value true when data is submited
        setTimeout(()=>{
            setIsSubmitted(false);          //after 1.3 sec alert will be  removed
        },1300)
        console.log(result.message); //this "message" defined is from student-api backend
    }catch(error){
        console.log(e);
    }
    
  }
    
 

    return(
        <Container className="mainLogin mt-5 mb-5">
        
            <div className="main">
                
                <Form onSubmit={handleSumbit} className="formContainer">
                    <h1 id="loginHeading"><b>Register Here</b></h1>
                    <Row>
                        <Col lg={12}>
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" value={isSubmitted?formData.name:null} placeholder="Enter Name" name="name" onChange={handleChange} required/>
                                
                            </Form.Group>
                        </Col>

                        <Col lg={12}>
                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" value={isSubmitted?formData.email:null} placeholder="Enter Email" name="email" onChange={handleChange} required/>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Form.Group className="mb-3">
                                <Form.Label>Phone no.</Form.Label>
                                <Form.Control type="text" value={isSubmitted?formData.phone:null} placeholder="Enter Phone no" name="phone"onChange={handleChange} required />
                            </Form.Group>
                        </Col>
                        <Col lg={12}>
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" value={isSubmitted?formData.password:null} placeholder="Enter Password" name="password" onChange={handleChange} required/>
                            </Form.Group>
                        </Col>
                        
                    </Row>
                    <div className="buttonPrimary">
                        <Button variant="primary" type="submit" >Register</Button>
                    </div>
                    
                    <div className="Linker">
                        Already have an account?
                        <Link to="/">
                            <p>Sign In</p>
                        </Link>
                    </div>

                    <Row className= 'mt-5'>
                        <Col lg={6}>
                            {isSubmitted?<Alert variant="success">Registration Success!!</Alert>:null}
                        </Col>
                    </Row>
                    
                </Form>
            </div>
       
        </Container>
    )
}