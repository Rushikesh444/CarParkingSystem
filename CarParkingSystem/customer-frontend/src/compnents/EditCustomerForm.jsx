import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { Header } from "./Header";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCustomerBySlot, updateCustomer } from "../services/CustomerService";
import { NavigationBar } from "./NavigationBar";

export function EditCustomerForm() {

    const [formData, setFormData] = useState({ slot: "", name: "", phone: "", carnumber: "" });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const params = useParams();


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await updateCustomer(formData, params.slot);
            setIsSubmitted(true);
            setTimeout(() => {
                setIsSubmitted(false);
            }, 1500);
            console.log(result);
        } catch (error) {
            console.log(error);
        }

    }

    const populateCustomerState = async () => {
        try {
            const result = await fetchCustomerBySlot(params.slot);
            //  setCustomer(result.customer);
            setFormData(result.customer);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        populateCustomerState();
    }, []);

    return (
        <>
            <NavigationBar/>

            <Container>
                <Header text="Update here"></Header>
                {formData ? <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col lg={6}>
                            <Form.Group className="mb-3" >
                                <Form.Label>Slot Number</Form.Label>
                                <Form.Control type="Number" placeholder="Enter slot number" value={formData.slot} name="slot" onClick={handleChange} required/>
                            </Form.Group>
                        </Col>

                        <Col lg={6}>
                            <Form.Group className="mb-3" >
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter name" value={formData.name} name="name" onChange={handleChange} required/>
                            </Form.Group>
                        </Col>

                        <Col lg={6}>
                            <Form.Group className="mb-3" >
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="text" placeholder="Enter number" value={formData.phone} name="phone" onClick={handleChange} required/>
                            </Form.Group>
                        </Col>

                        <Col lg={6}>
                            <Form.Group className="mb-3" >
                                <Form.Label>Car Number</Form.Label>
                                <Form.Control type="text" placeholder="Enter car number" value={formData.carnumber} name="carnumber" onChange={handleChange} required/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={3}>
                            <Button variant="primary" type="submit">Update</Button>
                        </Col>
                    </Row>
                </Form> : <p>No data found for given slot number</p>}
                <Col lg={4} className="mt-4">
                    {isSubmitted ? <Alert variant="success">Customer Updated</Alert> : null}
                </Col>
            </Container>
        </>



    );
}