import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants.js";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const itemToAdd = action.payload;

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
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    default:
      return state;
  }
};
