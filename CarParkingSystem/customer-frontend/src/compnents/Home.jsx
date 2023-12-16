import { Carousel, Col, Container, Row } from "react-bootstrap";
import React from "react";
import { NavigationBar } from "./NavigationBar";
import "./Home.css";
import img1 from  "../images/picture4.jpg";
import img2 from  "../images/picture2.jpg";
import img3 from  "../images/picture3.jpg";
import img4 from "../images/image3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

export function Home(){
  return(
       
    <>
      <NavigationBar />
      <Container>
        <div className="heading" >
          <h1>Welcome to our Parking System</h1>
        </div>
        <div className="slider" >
          <Carousel>
            <Carousel.Item interval={1000}>
              <img className="image1"
                  src={img1}
                  alt="image1"
                  height="400"
              />
              <Carousel.Caption>
                <h3>First Parking Slot</h3>
                <p>Advance Parking Booking.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img className="image1"
                      src={img2}
                      alt="image2"
                      height="400"
                  />
              <Carousel.Caption>
                <h3>Second Parking Slot</h3>
                <p>Event Parking Booking.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="image1"
                      src={img3}
                      alt="image3"
                      height="400"
                  />
              <Carousel.Caption>
                <h3>Third Parking Slot</h3>
                <p>
                  Walk-In Parking Booking.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="contentContainer">
            <Row id="contentContainerRow">
              <Col className="content">
                <p>
                "Welcome to Parking App, where convenience meets security. We take pride in providing seamless parking solutions tailored to your needs. Our commitment is to ensure a stress-free parking experience, offering reliable services that prioritize efficiency, safety, and your peace of mind. Join us in transforming the way you park – because your convenience is our priority."
                </p>
              </Col>
              <Col className="contentImage">
                <img
                  src={img4}
                  alt="contentImage"
                  width="500"
                />
              </Col>
            </Row>
        </div>

        <footer>
              <Row className="footer_container">
                  <Col className="reference block">
                      <h5>Address</h5>
                      <ul type="none">
                          <li> Phoenix Marketcity Pune</li>
                          <li>S No. 207, Phoenix Marketcity, Viman Nagar Rd, Clover Park, Viman Nagar,</li>
                          <li>Pune - 411014,</li>
                          <li>Maharashtra India</li>
                      </ul>
                  </Col>
                  <Col className="company block">
                      <h5>Quick Links</h5>
                      <ul type="none">
                          <li>Home</li>
                          <li>About</li>
                          <li>Service</li>
                          <li>Case Study</li>
                          <li>Review</li>
                      </ul>
                  </Col>
                  <Col className="product block">
                      <h5>Social Media</h5>
                      <ul type="none">
                          <li>Follow Us:</li>
                          <li>Instagram <a href="https://www.instagram.com/rushikesh_nimje/" target="_blank" ><FontAwesomeIcon icon={faInstagram} /></a></li>
                          <li>Facebook <a href="https://www.facebook.com/atul.dhakne.18" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a></li>
                          <li>Linkdin <a href="https://www.linkedin.com/in/omkar-regade-08052828a/" target="_blank"><FontAwesomeIcon icon={faLinkedin}/></a></li>
                      </ul>
                  </Col>
                  <Col className="Support block">
                      <h5>Support</h5>
                      <ul type="none">
                          <li>Product help</li>
                          <li>Service & warranty</li>
                          <li>Righting beach</li>
                          <li>Authorized service</li>
                      </ul>
                  </Col>
              </Row>
              <hr></hr>
              <div className="copyright_container">
                <FontAwesomeIcon icon={faCopyright} /> Copyrights 2023 Parking System All right Reserved
              </div>
        </footer>
      </Container>
    </>
       
  );
}