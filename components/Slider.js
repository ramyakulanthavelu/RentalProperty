import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <Carousel fade>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src="/c1.jpg"
                  alt="First slide"
                  
                />
                <Carousel.Caption>
                  <h3>Welcome to Swipe Right</h3>
                  <p>World's Largest Real Estate Website</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <img
                  className="d-block w-100"
                  src="/c2.jpg"
                  alt="Second slide"
              
                />

                <Carousel.Caption>
                  <h3>Are You Looking for a Perfect home?</h3>
                  <p>You are in the Right Place</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src="/c3.jpg"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>We have 10+ Years Experienced Agent</h3>
                  <p>
                    To Find your Dream home
                  </p>
                </Carousel.Caption>
              </Carousel.Item >
              <Carousel.Item interval={3000}>
                <img
                  className="d-block w-100"
                  src="/c4.jpg"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>It's a Sign</h3>
                  <p>
                    What Are You Waiting For?
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img
                  className="d-block w-100"
                  src="/c5.jpg"
                  alt="Third slide"
                  />
                <Carousel.Caption>
                  <h3>Click To Book Your Appointment</h3>
                  <p>
                    To Make Your life Jingalalala
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Slider