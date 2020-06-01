import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

const breadcrumb = ({ Nombre, ruta, postion ,NombreRuta }) => {
  return (
    <>
      <Breadcrumb className="breadcrumb_section bg_gray page-title-mini">
        <div className="container ">
          <div className="row align-items-center">
            <div className="col-md-6">
                {" "}
                <h1>{Nombre}</h1>
            </div>
            <div className="col-md-6 d-flex justify-content-md-end">
              <Breadcrumb.Item active>
                <Link style={{ color: "#292b2c" }} to={"/"}>
                  Home
                </Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item active>
                <Link style={{ color: "#292b2c" }} to={`/${ruta}`}>
                  {NombreRuta}
                </Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item active>{postion}</Breadcrumb.Item>
            </div>
          </div>
        </div>
      </Breadcrumb>
    </>
  );
};

export default breadcrumb;
