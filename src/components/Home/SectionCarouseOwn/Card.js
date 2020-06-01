import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { Icon } from "@iconify/react";
import basketLoaded from "@iconify/icons-simple-line-icons/basket-loaded";
import { Link } from "react-router-dom";
import magnifierAdd from "@iconify/icons-simple-line-icons/magnifier-add";
import ShopingContext from "../../../context/ShopingCart/ShonpingCartContext";
import { useHistory } from "react-router-dom";

const Cards = ({ producto }) => {
  const usuario = true;
  const history = useHistory();

  //USEAR EL CONTEXTO
  const shopingContexts = useContext(ShopingContext);
  const { addToCart } = shopingContexts;

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
              <span className="price">
                ${Number.parseFloat(producto.price).toFixed(2)}
              </span>
              <del>{producto.del}</del>
            </div>
          </Card.Text>
          <div className="d-flex justify-content-center">
            <Button onClick={() => comprar(producto)} variant="outline-danger">
              <Icon className="icon" icon={basketLoaded} />
              Add To Cart
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
    </>
  );
};

export default Cards;
