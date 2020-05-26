import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img from "../img/truck.svg";
import img2 from "../img/headphone.svg";
import img3 from "../img/money-back.svg";
import img4 from "../img/security.svg";
import AOS from 'aos';

const SectionSmall = () => {
    AOS.init();
  return (
    <div className="section">
      <Container 
      data-aos="fade-up-left"
      data-aos-delay="50"
      data-aos-duration="1500">
        <Row className="no-gutters">
          <Col xs={12} md={3}>
            <div className="caja">
              <div className="icon">
                <img
                  src={img}
                  width="40"
                  height="40"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </div>
              <div className="icon_box_content">
                <h6>Free Delivery</h6>
                <p>Worldwide</p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={3}>
            <div className="caja">
              <div className="icon">
                <img
                  src={img2}
                  width="40"
                  height="40"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </div>
              <div className="icon_box_content">
                <h6>Money Returns</h6>
                <p>30 Days money return</p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={3}>
            <div className="caja">
              <div className="icon">
                <img
                  src={img3}
                  width="40"
                  height="40"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </div>
              <div className="icon_box_content">
                <h6>27/4 Online Support</h6>
                <p>Customer Support</p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={3}>
            <div className="caja">
              <div className="icon">
                <img
                  src={img4}
                  width="40"
                  height="40"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </div>
              <div className="icon_box_content">
                <h6>Payment Security</h6>
                <p>Safe Payment</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SectionSmall;
