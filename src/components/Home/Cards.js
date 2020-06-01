import React, { useContext } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { Icon } from "@iconify/react";
import basketLoaded from "@iconify/icons-simple-line-icons/basket-loaded";
import magnifierAdd from "@iconify/icons-simple-line-icons/magnifier-add";
import AOS from "aos";
import { Link } from "react-router-dom";
import { datos } from "./datos";
import { useHistory } from "react-router-dom";
import ShopingContext from "../../context/ShopingCart/ShonpingCartContext";

import {ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cards = ({ lg, md, xs }) => {
  const notify = () =>
    toast(`product add to cart !😌`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  // transciciones

  AOS.init();
  // states
  const usuario = true;
  const history = useHistory();

  //USEAR EL CONTEXTO
  const shopingContexts = useContext(ShopingContext);
  const { addToCart } = shopingContexts;

  // funciones
  const comprar = (producto) => {
    if (usuario) {
      addToCart(producto);
    } else {
      history.push("/login");
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
                    <span className="price">
                      ${Number.parseFloat(producto.price).toFixed(2)}
                    </span>
                    <del>{producto.del}</del>
                  </div>
                </Card.Text>
                <div className="d-flex justify-content-center">
                  <Button
                    onClick={() => {comprar(producto)
                      notify()}}
                    variant="outline-danger"
                  >
                    <Icon className="icon" icon={basketLoaded} />
                    Add
                    <ToastContainer />
                  </Button>
                  <Button className="btn-circle" variant="warning">
                    {" "}
                    <Link to={`/productView/${producto.id}`}>
                      <Icon className="icon" icon={magnifierAdd} />
                    </Link>
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
