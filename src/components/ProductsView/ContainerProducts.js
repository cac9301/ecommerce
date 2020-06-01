import React, { useState, useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Slider from "react-slick";
import ReactImageMagnify from "react-image-magnify";
import { AiOutlineSafety } from "react-icons/ai";
import { MdLoop } from "react-icons/md";
import { GiCash } from "react-icons/gi";
import { Icon } from "@iconify/react";
import basketLoaded from "@iconify/icons-simple-line-icons/basket-loaded";
import ShopingContext from "../../context/ShopingCart/ShonpingCartContext";
import { useHistory } from "react-router-dom";

const ContainerProducts = ({ producto }) => {
  //USEAR EL CONTEXTO
  const shopingContexts = useContext(ShopingContext);
  const { addToCart } = shopingContexts;

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [count, setcount] = useState(1);
  const usuario = true;
  const history = useHistory();

  const plus = () => {
    var num2 = 1;
    var suma = count + num2;
    setcount(suma);
    console.log(count);
  };
  console.log(count);

  const min = () => {
    if (count === 0) {
      return null;
    } else if (count !== 0) {
      var num2 = 1;
      var suma = count - num2;
      setcount(suma);
    }
  };

  const comprar = (producto) => {
    if (usuario) {
      producto.quantity = count;
      addToCart(producto);
    } else {
      history.push("/login");
      console.log("se enviara a login");
    }
    // redireccionar
  };
  return (
    <>
      <Container>
        <Row>
          <Col className="mb-4 mb-md-0" lg={6} md={6} xs={12}>
            <div className="product_img_box">
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: "Wristwatch by Ted Baker London",
                    isFluidWidth: true,
                    src: `${producto.img}`,
                  },
                  largeImage: {
                    src: `${producto.img}`,
                    width: 1200,
                    height: 1800,
                  },
                }}
              />
            </div>
            <div className="my-2 justify-content-around">
              <Slider {...settings}>
                <div className="product_gallery_item">
                  <img
                    className="w-100"
                    src={producto.img}
                    alt="product detail"
                  />
                </div>
                <div className="product_gallery_item">
                  <img
                    className="w-100"
                    src={producto.img}
                    alt="product detail"
                  />
                </div>
                <div className="product_gallery_item">
                  <img
                    className="w-100"
                    src={producto.img}
                    alt="product detail"
                  />
                </div>
              </Slider>
            </div>
          </Col>
          <Col className="mb-4 mb-md-0" lg={6} md={6} xs={12}>
            <div className="product_description">
              <h4>{producto.nombre}</h4>
              <div className="text-left d-flex align-items-center">
                <span className="price">
                  ${Number.parseFloat(producto.price).toFixed(2)}
                </span>
                <del>${producto.del}</del>
                <div className="on_sale">
                  <span>{producto.discount}% Off</span>
                </div>
              </div>
              <div className="pr_desc text-justify">
                <p>{producto.desc}</p>
              </div>
              <div className="product_sort_info">
                <ul>
                  <li>
                    <AiOutlineSafety
                      size="1.4rem"
                      color="#FF324D"
                      style={{ marginRight: "1rem" }}
                    />{" "}
                    1 Year AL Jazeera Brand Warranty
                  </li>
                  <li>
                    <MdLoop
                      size="1.4rem"
                      color="#FF324D"
                      style={{ marginRight: "1rem" }}
                    />
                    30 Day Return Policy
                  </li>
                  <li>
                    <GiCash
                      size="1.4rem"
                      color="#FF324D"
                      style={{ marginRight: "1rem" }}
                    />
                    Cash on Delivery available
                  </li>
                </ul>
              </div>
              <hr />
              <div className="cart_extra d-flex justify-content-between align-content-center">
                <div className="cart-product-quantity">
                  <div className="quantity">
                    <input
                      onClick={() => min()}
                      type="button"
                      value="-"
                      className="minus"
                    />
                    <input
                      type="text"
                      name="quantity"
                      value={count}
                      title="Qty"
                      className="qty"
                      size={4}
                    />
                    <input
                      onClick={() => plus()}
                      type="button"
                      value="+"
                      className="plus"
                    />
                  </div>
                </div>
                <div className="cart_btn">
                  <Button
                    onClick={() => comprar(producto)}
                    variant="outline-danger"
                  >
                    <Icon className="icon" icon={basketLoaded} />
                    Add To Cart
                  </Button>
                </div>
              </div>
              <hr />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContainerProducts;
