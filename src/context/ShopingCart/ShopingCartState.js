import React, {  useReducer } from "react";
import ShonpingContex from "./ShonpingCartContext";
import ShopingReducer from "./ShopinCartReducer";
import {ADD_CART,
  DELETE_CART} from "../../types";

const ShonpingState = (props) => {
  const initialState = {
    shopingCart: [
    
    ],
    bandera:false
  };

  //dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(ShopingReducer, initialState);

  // serie de funciones

  const addToCart = (producto)=>{
      dispatch({
          type:ADD_CART,
          payload:producto
      })
  }
  const deleteToCart = (_id)=>{
    dispatch({
        type:DELETE_CART,
        payload:_id
    })
}

  return (
    <ShonpingContex.Provider 
    value={{
        shopingCart:state.shopingCart,
        bandera: state.bandera,
        addToCart,
        deleteToCart
    }}>
      {props.children}
    </ShonpingContex.Provider>
  );
};

export default ShonpingState;
