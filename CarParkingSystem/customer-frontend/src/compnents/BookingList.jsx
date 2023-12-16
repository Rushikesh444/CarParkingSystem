import { Button, Container, Modal } from "react-bootstrap";
import { Header } from "./Header";
import { useEffect, useState } from "react";
import { deleteCustomer, fetchCustomer } from "../services/CustomerService";
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import { NavigationBar } from "./NavigationBar";

export function BookingList() {

    const [customers, setCustomers] = useState([]);
    const [showDialog, setShowDialog] = useState(false);
    const [selectedSlot, setSelectedSlot] = useState("");
    const navigate = useNavigate();

    const openModalDailog = () => {
        setShowDialog(true);
    }

    const closeModalDailog = () => {
        setShowDialog(false);
    }

    async function populateCustomerState() {
        try {
            const data = await fetchCustomer();
            console.log(data);
            setCustomers(data.customer);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        populateCustomerState();
    }, []);

    const handleDeleteClick = async () => {
        try {
            await deleteCustomer(selectedSlot);
            closeModalDailog();
            populateCustomerState();
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            <NavigationBar />
            <Container>
                <Header text="List of Booking Customers"></Header>
                {customers.length !== 0 ? <Table className="mt-4">
                    <thead>
                        <tr>
                            <th>Slot</th>
                            <th>Full Name</th>
                            <th>Phone Number</th>
                            <th>Car Number</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            customers.map((c) => {
                                return (
                                    <tr>
                                        <td>{c.slot}</td>
                                        <td>{c.name}</td>
                                        <td>{c.phone}</td>
                                        <td>{c.carnumber}</td>
                                        <td>
                                            <Button variant="danger" onClick={() => {
                                                openModalDailog();
                                                setSelectedSlot(c.slot);
                                            }}>Delete</Button>  &nbsp; &nbsp;
                                            <Button variant="primary" onClick={() => {
                                                navigate(`/edit/${c.slot}`);
                                            }}>Edit</Button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table> : <p>No Customer Find !!!!</p>}


                <Modal show={showDialog} onHide={closeModalDailog}>
                    <Modal.Header closeButton>
                        <Modal.Title>Confirmation</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>You Want To Delete {selectedSlot}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" onClick={() => {
                            handleDeleteClick();
                        }}>
                            Yes
                        </Button>
                        <Button variant="danger" onClick={closeModalDailog}>
                            No
                        </Button>
                    </Modal.Footer>``
                </Modal>

            </Container>

        </>

    )
}