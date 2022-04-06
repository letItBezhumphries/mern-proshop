import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants.js";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      // store the item that has been added to cart
      const itemToAdd = action.payload;

      // need to check the cartItems to see if itemToAdd already exists
      const existItem = state.cartItems.find(
        (i) => i.product === itemToAdd.product
      );

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? itemToAdd : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, itemToAdd],
        };
      }

    case CART_REMOVE_ITEM:
      return {
        loading: false,
        product: action.payload,
      };
    default:
      return state;
  }
};
