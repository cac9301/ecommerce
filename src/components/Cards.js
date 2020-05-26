import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { Icon } from "@iconify/react";
import basketLoaded from "@iconify/icons-simple-line-icons/basket-loaded";
import AOS from "aos";
import { datos } from "./datos";

const Cards = ({ lg, md, xs }) => {
  AOS.init();
  console.log(datos);

  return (
    <div className="">
      <Row
        data-aos="fade-left"
        data-aos-delay="50"
        data-aos-duration="1500"
        className="shop_container"
      >
        {datos.map(producto => (
          <Col key={producto.id} lg={3} md={3} xs={12} sm={12} className="mb-3">
            <Card border="secondary">
              <Card.Img variant="top" src={producto.img} />
              <Card.Body>
                <Card.Title>
                  <h6 className="product_title">
                    <a
                      style={{ textDecoration: "none", color: "#000" }}
                      href="shop-product-detail.html"
                    >
                      {producto.nombre}
                    </a>
                  </h6>
                </Card.Title>
                <Card.Text>
                  <div className="product_price">
                    <span className="price">{producto.price}</span>
                    <del>{producto.del}</del>
                  </div>
                </Card.Text>
                <div className="d-flex justify-content-center">
                  <Button variant="outline-danger">
                    <Icon className="icon" icon={basketLoaded} />
                    Add To Cart
                  </Button>
                </div>
              </Card.Body>
            </Card>
            {/*cars fin*/}
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Cards;
