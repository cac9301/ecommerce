import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Container, Col } from "react-bootstrap";
import { datos } from "../datos";
import Cards from "./Card";
import Titles from "../Titles";

const SectionCarouseOwn = () => {
  const responsive = {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  };
  return (
    <>
      <Titles text="Trending Items" />
      <Container>
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
    </>
  );
};

export default SectionCarouseOwn;
