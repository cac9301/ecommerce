import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img from "../img/furniture_banner1.jpg";
import img2 from "../img/furniture_banner2.jpg";
import AOS from "aos";

const SectionBaner = () => {
  AOS.init();
  return (
    <Container>
      <Row>
        <Col 
          data-aos="flip-up"
          data-aos-delay="50"
          data-aos-duration="1500"md={5}>
          <div className="single_banner">
            <img src={img} alt="furniture_banner1" />
          </div>
          <div className="fb_info">
            <h5 className="single_bn_title1">Super Sale</h5>
            <h3 className="single_bn_title">New Collection</h3>
            <a href="shop-left-sidebar.html" className="single_bn_link1">
              Shop Now
            </a>
          </div>
        </Col>
        <Col 
          data-aos="flip-down"
          data-aos-delay="50"
          data-aos-duration="1500"md={7}>
          <div className="single_banner">
            <img src={img2} alt="furniture_banner2" />
          </div>
          <div className="fb_info2">
            <h3 className="single_bn_title">New Season</h3>
            <h4 className="single_bn_title1">Sale 40% Off</h4>
            <a href="shop-left-sidebar.html" className="single_bn_link1">
              Shop Now
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SectionBaner;
