  import React from "react";
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

  const Header = () => {
    //hook History
    const history = useHistory();
    const style = {
      borderRadius: 20,
    };
    const usuario = false;
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
            <Navbar.Brand href="/">
              <Link to={"/"}>
                <img
                  src={img}
                  style={style}
                  width="45"
                  height="30"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </Link>{" "}
              Tu Tienda Online
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              className="justify-content-end"
              id="basic-navbar-nav"
            >
              <Nav className="mr-auto text-uppercase">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">pages</Nav.Link>
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
