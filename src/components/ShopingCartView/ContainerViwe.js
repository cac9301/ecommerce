import React from "react";
import { Container, Row, Col, ListGroup,} from "react-bootstrap";

const ContainerViwe = ({ shopingCart, deleteToCart }) => {
  return (
    <>
      <Container>
        <Row className="mb-4">
          <Col xs={12} md={9}>
            <ListGroup >
              <ListGroup.Item variant="light">
                {shopingCart.map((product) => (
                  <Row  className="mb-3" key={product.id}>
                    <Col md={7}>
                      <div className="d-flex flex-row">
                          <div className="container d-flex">
                          <img  className="img-view-cart img-fluid w-100 mr-2" src={product.img} alt="products"/>
                          <div className="d-flex flex-column">
                              <h5>
                                  {product.nombre}
                              </h5>
                              <p>
                                 {product.desCorta}
                              </p>
                          </div>
                          </div>
                      </div>
                    </Col>
                    <Col md={3}>
                        <h4>
                            metodos eliminar
                            ver producto 
                        </h4>
                    </Col>
                    <Col md={2}>
                        valor producto 
                        valor con descuento 
                    </Col>
                  </Row>
                ))}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col xs={12} md={3}>
            <h1>tabla aqui</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContainerViwe;
