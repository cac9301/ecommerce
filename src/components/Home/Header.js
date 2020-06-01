import React, { useContext } from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
  Container,
} from "react-bootstrap";
import img from "../../img/logo3.png";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import ShopingCart from "./Shopingcart/ShopingCart";

import ShopingContext from "../../context/ShopingCart/ShonpingCartContext";

const Header = () => {
  //hook History
  const history = useHistory();
  const style = {
    borderRadius: 20,
  };

  const usuario = false;

  //USEAR EL CONTEXTO
  const shopingContexts = useContext(ShopingContext);
  const { shopingCart,deleteToCart } = shopingContexts;
  console.log(shopingCart.length);

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="md"
        fixed="top"
        sticky="top"
        bg="bg"
        className="nav"
      >
        <Container className="contenedor">
          <Link to={"/"}>
            <Navbar.Brand>
              <img
                src={img}
                style={style}
                width="45"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
              Tu Tienda
            </Navbar.Brand>
          </Link>{" "}
          <ShopingCart 
          shopingCart={shopingCart}
          deleteToCart={deleteToCart} />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end"
            id="basic-navbar-nav"
          >
            <Nav className="mr-auto text-uppercase">
              <Nav.Link href="/">About Us</Nav.Link>
              <Nav.Link href="/">Contact</Nav.Link>
              <NavDropdown title="products" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            {usuario ? (
              <Navbar.Text>
                Signed in as: <a href="#login">Carlos</a>
              </Navbar.Text>
            ) : (
              <Button
                className="d-block w-40 mr-2"
                variant="outline-success"
                onClick={() => history.push("/login")}
              >
                Login
              </Button>
            )}
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-danger">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
