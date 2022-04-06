import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants.js";
import axios from "axios";

// can make use of getState here to access the state tree
export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });

  // using localStorage api
  // want to save the entire cart to localStorage which we can access by using the getState() parameter passed in above
  // and refer to the cart state and the cartItems property
  // need to use JSON.stringify because you can only save strings in localStorage
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
