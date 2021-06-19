import {
  ADD_PRODUCT_TO_BASKET,
  GET_PRODUCTS,
  REMOVE_PRODUCT_FROM_BASKET,
  UPDATE_AMOUNT,
  UPDATE_SIZE,
} from "../constants/ProductConstant";

const initialState = {
  products: [],
  basket: [],
  totalPrice: "",
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, products: action.payload.data };
    case ADD_PRODUCT_TO_BASKET:
      const newBasket = [...state.basket, action.payload];
      return { ...state, basket: newBasket };
    case REMOVE_PRODUCT_FROM_BASKET:
      const filteredBasket = state.basket.filter(
        (item) => item.product.id !== action.payload.product.id
      );
      return { ...state, basket: filteredBasket };
    case UPDATE_AMOUNT:
      return {
        ...state.basket,
        basket: state.basket.map((item) => {
          if (item.product.id === action.payload.product.product.id) {
            return {
              ...item,
              amount: item.amount + action.payload.amount,
            };
          }
          return item;
        }),
      };
    case UPDATE_SIZE:
      return {
        ...state.basket,
        basket: state.basket.map((item) => {
          if (item.product.id === action.payload.product.product.id) {
            console.log(item);
            return {
              ...item,
              size: action.payload.size,
            };
          }
          return item;
        }),
      };
    default:
      return { ...state };
  }
};

export default ProductReducer;
