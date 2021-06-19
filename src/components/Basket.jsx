import React from "react";
import "../styles/Basket.scss";

//redux
import { useDispatch, useSelector } from "react-redux";

//components
import Size from "./Size";
import Counter from "./Counter";

//material-ui
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import {
  updateProduct,
  updateSize,
  removeProductFromBasket,
} from "../store/actions/ProductAction";
import TotalPrice from "./TotalPrice";
import { Link } from "react-router-dom";

const Basket = () => {
  const basket = useSelector((state) => state.ProductReducer.basket);
  const dispatch = useDispatch();

  const increaseAmount = (amount, product) => {
    dispatch(updateProduct(amount, product));
  };

  const decreaseAmount = (amount, product) => {
    console.log(product);
    dispatch(updateProduct(amount, product));
  };

  const changeSize = (size, product) => {
    dispatch(updateSize(size, product));
  };

  const removeTheProduct = (product) => {
    dispatch(removeProductFromBasket(product));
  };

  return (
    <div className="basket">
      <div className="basket__top">
        <div className="basket__top__back">
          <Link to={"/"}>BACK</Link>
        </div>
        <TotalPrice />
      </div>
      {basket.map((product) => (
        <div className="basket__product" key={product.product.id}>
          {console.log(basket)}
          <img
            className="basket__product__image"
            alt={"basket-img"}
            src={product.product.avatar}
          />
          <span className="basket__product__title">
            {product.product.productname}
          </span>
          <Size product={product} changeSize={changeSize} size={product.size} />
          <Counter
            product={product}
            increaseAmount={increaseAmount}
            decreaseAmount={decreaseAmount}
            amount={product.amount}
          />
          <span className="basket__product__price">
            $ {product.product.price}
          </span>
          <span
            onClick={() => removeTheProduct(product)}
            className={"basket__product__remove"}
          >
            <DeleteForeverIcon
              color={"secondary"}
              style={{ fontSize: "2.5rem" }}
            />
          </span>
        </div>
      ))}
    </div>
  );
};

export default Basket;
