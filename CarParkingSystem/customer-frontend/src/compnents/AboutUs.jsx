import { Col, Row } from "react-bootstrap";
import omkar from '../images/230940320073_Omkar_Regade.png'
import rushi from '../images/230940320093_Rushikesh_Nimje.png'
import atul from '../images/IMG_20231205_104341.jpg'
import Card from 'react-bootstrap/Card';
import "./AboutUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { NavigationBar } from "./NavigationBar";
export function AboutUs() {
	return (
		<>
		<NavigationBar/>
			

			<div className="heading">
                <h1>The Team</h1>
                <p>Connecting with Confidence, Parking with Peace of Mind.</p>
            </div>

			<Row className="cardContainer">
				<Col lg={3}>
					<Card style={{ width: '15rem', height: '40rem'}} >
						<Card.Img variant="top" src={omkar} height={289}/>
						<Card.Body>
							<Card.Title>Omkar Regade</Card.Title>
                            <div className="intro">
                            <Card.Text>
							    Omkar Regade, an urban planning expert, founded ParkEase to alleviate city parking challenges, aiming for a meaningful impact on urban dwellers' lives. 
							</Card.Text>
                            </div>
                            <div className="socialLink">
                                <a href="#" target="_blank"><FontAwesomeIcon icon={faFacebook} size="xl" /></a>
                                <a href="https://www.linkedin.com/in/omkar-regade-08052828a/" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="xl" /></a>
                                <a href="#" target="_blank"><FontAwesomeIcon icon={faTwitter} size="xl" /></a>
                                <a href="#" target="_blank"><FontAwesomeIcon icon={faInstagram} size="xl" /></a>
                            </div>
						</Card.Body>
					</Card>
				</Col>

				<Col lg={3}>
					<Card style={{ width: '15rem', height: '40rem' }}>
						<Card.Img variant="top" src={rushi} height={289} roundedCircle/>
						<Card.Body>
							<Card.Title>Rushikesh Nimje</Card.Title>
                            <div className="intro">
                                <Card.Text>
                                    Rushikesh Nimje, the tech genius, co-founded ParkEase, bringing a wealth of technical expertise and innovative thinking to shape the app's user-friendly features and interface.
                                </Card.Text>
                            </div>
                            <div className="socialLink">
                                <a href="https://www.facebook.com/rushikesh.nimje.94?mibextid=ZbWKwL " target="_blank"><FontAwesomeIcon icon={faFacebook} size="xl" /></a>
                                <a href="https://www.linkedin.com/in/rushikesh-nimje-6418731b3" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="xl" /></a>
                                <a href="#" target="_blank"><FontAwesomeIcon icon={faTwitter} size="xl" /></a>
                                <a href="https://www.instagram.com/rushikesh_nimje/" target="_blank"><FontAwesomeIcon icon={faInstagram} size="xl" /></a>
                            </div>
						</Card.Body>
					</Card>
				</Col>

				<Col lg={3}>
					<Card style={{ width: '15rem', height: '40rem' }}>
						<Card.Img variant="top" src={atul} height={289}/>
						<Card.Body>
							<Card.Title>Atul Dhakne</Card.Title>
                            <div className="intro">
                                <Card.Text>
                                    Atul Dhakne, a seasoned business manager, oversees ParkEase's daily operations, ensuring seamless functionality, user satisfaction, and effective partnerships with parking facilities.
                                </Card.Text>
                            </div>
                            <div className="socialLink">
                                <a href="https://www.facebook.com/atul.dhakne.18" target="_blank"><FontAwesomeIcon icon={faFacebook} size="xl" /></a>
                                <a href="https://www.linkedin.com/in/atul-dhakne-751a13144/" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="xl" /></a>
                                <a href="#" target="_blank"><FontAwesomeIcon icon={faTwitter} size="xl" /></a>
                                <a href="https://www.instagram.com/atul_d04/" target="_blank"><FontAwesomeIcon icon={faInstagram} size="xl" /></a>
                            </div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</>

	);
}