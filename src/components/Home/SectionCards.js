import React from "react";
import { Container } from "react-bootstrap";
import Titles from "./Titles";
import Cards from "./Cards";

const SectionCards = () => {
  return (
    <div className="section">
      <Titles text="Exclusive Products" />
      <Container>
        {/* cards de venta*/}
        <Cards lg={3} md={4} xs={6} />
      </Container>
    </div>
  );
};

export default SectionCards;
