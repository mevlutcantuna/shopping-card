import axios from "axios";
import {
  ADD_PRODUCT_TO_BASKET,
  GET_PRODUCTS,
  REMOVE_PRODUCT_FROM_BASKET,
  UPDATE_AMOUNT,
  UPDATE_SIZE,
} from "../constants/ProductConstant";

export const getProducts = () => (dispatch) => {
  axios
    .get("https://60c6847719aa1e001769f698.mockapi.io/products")
    .then((res) =>
      dispatch({
        type: GET_PRODUCTS,
        payload: res,
      })
    )
    .catch((err) => console.log(err));
};

export const addProductToBasket = (product) => {
  return {
    type: ADD_PRODUCT_TO_BASKET,
    payload: product,
  };
};

export const removeProductFromBasket = (product) => {
  return {
    type: REMOVE_PRODUCT_FROM_BASKET,
    payload: product,
  };
};

export const updateProduct = (amount, product) => {
  return {
    type: UPDATE_AMOUNT,
    payload: { amount, product },
  };
};

export const updateSize = (size, product) => {
  return {
    type: UPDATE_SIZE,
    payload: { size, product },
  };
};
