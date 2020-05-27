import React, { useState } from "react";
import { Carousel, Container, Row, Col,Button } from "react-bootstrap";
import img_1 from "../../img/Carousel1.jpg";
import img_2 from "../../img/Carousel2.jpg";
import img_3 from "../../img/Carousel3.jpg";
import AOS from 'aos';

const Section = () => {

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  AOS.init();
  return (
    <>
      <Carousel fade ={true} activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="imgCarousel d-block w-100 img-fluid"
            src={img_1}
            alt="First slide"
          />
          <Carousel.Caption className="caorusel-caption" as="div">
            <Container className="contenedor-corousel">
              <Row >
                <Col xs={12} md={6} 
                 className="banner_content2"
                 data-aos="fade-right"
                 data-aos-delay="50"
                 data-aos-duration="1500">
                  {" "}
                  <h6>Get up to 50% off Today Only!</h6>
                  <h2>Wooden  Chair Collection</h2>
                  <Button 
                  variant="outline-danger"
                  size="lg">SHOP NOW</Button>{' '}
                </Col>
              </Row>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="imgCarousel d-block w-100"
            src={img_2}
            alt="Third slide"
          />
          <Carousel.Caption className="caorusel-caption" as="div">
            <Container className="contenedor-corousel">
              <Row>
              <Col xs={12} md={6} data-aos="fade-up"
                 className="banner_content2"
                 data-aos-delay="50"
                 data-aos-duration="1500">
                  {" "}                
                  <h6>NEW TRANDING</h6>
                  <h2>Sofa Collection</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                  <Button 
                  variant="outline-secondary"
                  size="lg">SHOP NOW</Button>{' '}
                </Col>
              </Row>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="imgCarousel d-block w-100"
            src={img_3}
            alt="Third slide"
          />
          <Carousel.Caption className="caorusel-caption" as="div">
            <Container className="contenedor-corousel">
              <Row>
              <Col xs={12} md={6} data-aos="fade-right"
                 className="banner_content2"
                 data-aos-delay="50"
                 data-aos-duration="1500">
                  {" "}
                  <h6>Taking your Viewing Experience to Next Level</h6>
                  <h2>Living Room Collection</h2>
                  <Button 
                  variant="outline-danger"
                  size="lg">SHOP NOW</Button>{' '}
                </Col>
              </Row>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Section;
