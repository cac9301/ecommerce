import React from "react";
import { Card, Button } from "react-bootstrap";
import { Icon } from "@iconify/react";
import basketLoaded from "@iconify/icons-simple-line-icons/basket-loaded";

const Cards = ({producto}) => {
    
  return (
    <>
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
    </>
  );
};

export default Cards;
