import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { Icon } from "@iconify/react";
import basketLoaded from "@iconify/icons-simple-line-icons/basket-loaded";
import AOS from "aos";
import { datos } from "./datos";
import { useHistory } from 'react-router-dom';

const Cards = ({  lg, md, xs }) => {
  AOS.init();
  const usuario = false;
  const history = useHistory();
  console.log(datos);
  // cuando el usuario haga submit
  const comprar = () => {
    if (usuario) {
      console.log("comprando");
    }else{
      history.push('/login')
      console.log("se enviara a login");
      
    }
    // redireccionar
    
  };
  return (
    <div className="">
      <Row
        data-aos="fade-left"
        data-aos-delay="50"
        data-aos-duration="1500"
        className="shop_container"
      >
        {datos.map((producto) => (
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
                  <Button onClick={() => comprar()} variant="outline-danger">
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
