import { ADD_CART, DELETE_CART } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_CART:
      return {
        ...state,
        shopingCart: [...state.shopingCart, action.payload],
      };
    case DELETE_CART:
      return {
        ...state,
        shopingCart:state.shopingCart.filter(producto=>producto.id !== action.payload)
      };
    default:
      return state;
  }
};
