import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import Cards from "./Cards";

const SectionCards = () => {
  AOS.init();
  return (
    <div className="section">
      <Container>
        <Row
          className="justify-content-center"
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1500"
        >
          <Col md={6}>
            <div className="heading_s3 text-center justify-content-center mb-5 py-2">
              <h2>Exclusive Products</h2>
            </div>
          </Col>
        </Row>
        {/* cards de venta*/}
        <Cards lg={3} md={4} xs={6} />
      </Container>
    </div>
  );
};

export default SectionCards;
