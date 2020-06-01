import React ,{useContext} from "react";
import Breadcrumb from "../Home/Breadcrumb";
import Titles from "../Home/Titles";
import ContainerViwe from "./ContainerViwe";

import ShopingContext from "../../context/ShopingCart/ShonpingCartContext";

const ShopinView = () => {

const shopingContexts = useContext(ShopingContext);
  const { shopingCart,deleteToCart } = shopingContexts;
 const totalProducts=shopingCart.length;
  return (
    <>
      <Breadcrumb
        Nombre="Carts Products"
        NombreRuta="Products"
        ruta={`/`}
        postion="Products"
      />
      <Titles
        text={`your shopping cart have a total products: ${totalProducts}`} 
      />
      <ContainerViwe
      shopingCart={shopingCart}
      deleteToCart={deleteToCart}
      />
    </>
  );
};

export default ShopinView;
