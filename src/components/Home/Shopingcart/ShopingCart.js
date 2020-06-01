import React, { useState } from "react";
import { Icon } from "@iconify/react";
import basketLoaded from "@iconify/icons-simple-line-icons/basket-loaded";
import { Modal, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { TiDeleteOutline } from "react-icons/ti";



const ShopingCart = ({ shopingCart, deleteToCart }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(shopingCart.length);
  const valueCount = shopingCart.length;
  var total = 0;
  var totalProduct = 0;
  shopingCart.map(
    (producto) =>
      (totalProduct =
        producto.quantity * Number.parseFloat(producto.price).toFixed(2))
  );

  shopingCart.map((producto) => (total += producto.price));

  return (
    <>
      <button className="btn" onClick={handleShow}>
        <Icon className="icon" icon={basketLoaded} />
        {valueCount > 0 ? (
          <span className="cart_count">{valueCount}</span>
        ) : null}
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Your Shoping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            {shopingCart.map((producto) => (
              <Row key={producto.id}>
                <Col xs={4} md={4}>
                  <img src={producto.img} className="w-100" alt="cart_thumb1" />
                </Col>
                <Col xs={8} md={8}>
                  <button
                    onClick={() => deleteToCart(producto.id)}
                    className="btn danger item_remove"
                  >
                    <TiDeleteOutline color={"red"} size={"2rem"} />
                  </button>
                  <Link
                    to={`/productView/${producto.id}`}
                    style={{ color: "#FF324D" }}
                  >
                    {producto.nombre}
                  </Link>
                  <span className="cart_quantity">
                    {" "}
                    {producto.quantity}x{" "}
                    <span className="cart_amount">
                      <span className="price_symbole">
                        $ {Number.parseFloat(totalProduct).toFixed(2)}
                      </span>
                    </span>
                  </span>
                  <div className="pr_desc">
                    <p>{producto.desCorta}</p>
                  </div>
                </Col>
              </Row>
            ))}
          </Container>
        </Modal.Body>
        <Modal.Footer className="justify-content-center align-content-center">
          <div className="cart_footer">
            <p className="cart_total">
              <strong>Subtotal:</strong>{" "}
              <span className="cart_price">
                <span className="price_symbole">$</span>
              </span>
              {total}
            </p>
            <div className="d-flex flex-row justify-content-between">
              <Link to={"/view-cart"}>
              <button onClick={()=>handleClose()} className="btn btn-fill-line view-cart mx-3">
                View Cart
              </button>
              </Link>
              <button className="btn btn-fill-out checkout">Checkout</button>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ShopingCart;
