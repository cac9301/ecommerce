import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Container, Row, Col } from "react-bootstrap";
import { datos } from "../datos";
import Cards from "./Card";

const SectionCarouseOwn = () => {
  const responsive=
 {
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:3
      }
  }
  return (
    <Container>
      <Row
        className="justify-content-center"
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="1500"
      >
        <Col md={6}>
          <div className="heading_s3 text-center justify-content-center mb-5 py-2">
            <h2>Trending Items</h2>
          </div>
        </Col>
      </Row>
      {/* cards de venta*/}
      <Col lg={12} xs={12}>
        <OwlCarousel
          className="owl-theme"
          loop
          margin={10}
          nav
          items={3}
          responsive={responsive}
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-duration="1500"
        >
          {datos.map((producto) => (
              <div className="item">
                <Cards producto={producto} />
              </div>
          ))}
        </OwlCarousel>
      </Col>
    </Container>
  );
};

export default SectionCarouseOwn;
