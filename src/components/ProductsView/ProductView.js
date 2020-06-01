import React from "react";
import Breadcrumb from "../Home/Breadcrumb";
import Titles from "../Home/Titles";
import {datos} from "../Home/datos";
import ContainerProducts from "./ContainerProducts";

const ProductView = ( props ) => {

    const productFoun = props.match.params.id
    // eslint-disable-next-line
    const producto = datos.find(prodouct=>prodouct.id == productFoun);

    
  return (
    <>
      <Breadcrumb
        Nombre="Product Details"
        NombreRuta={producto.nombre}
        ruta={`/`}
        postion="Products"
      />
      <Titles text={producto.nombre} />
      <ContainerProducts
        producto={producto}
      />
    </>
  );
};

export default ProductView;
