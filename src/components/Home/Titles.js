import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";

const Titles = ({text}) => {
  AOS.init();
  return (
      <Container>
        <Row
          className="justify-content-center"
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1500"
        >
          <Col md={6}>
            <div className="heading_s3 text-center justify-content-center mt-5 mb-5 py-2">
              <h2>{text}</h2>
            </div>
          </Col>
        </Row>
      </Container>
  );
};

export default Titles;
