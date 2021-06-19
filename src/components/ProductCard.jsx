import React, { useState } from "react";
import "../styles/ProductCard.scss";

//components
import Counter from "./Counter";

//redux
import { useDispatch } from "react-redux";
import { addProductToBasket } from "../store/actions/ProductAction";
import Size from "./Size";

const ProductCard = ({ product }) => {
  const [amount, setAmount] = useState(1);
  const [size, setSize] = useState("S");
  const dispatch = useDispatch();

  const increaseAmount = () => {
    setAmount(amount + 1);
  };

  const decreaseAmount = () => {
    setAmount(amount - 1);
  };

  const changeSize = (item) => {
    setSize(item);
  };

  const addProduct = () => {
    const newProduct = {
      product,
      amount,
      size,
    };
    if (amount > 0) {
      dispatch(addProductToBasket(newProduct));
      alert("Products are added to your basket");
      setAmount(1);
      setSize("S");
    }
  };

  return (
    <div className={"productCard"}>
      <img
        className="productCard__image"
        alt="product-img"
        src={product.avatar}
      />
      <span className={"productCard__title"}>{product.productname}</span>
      <span className={"productCard__desc"}>{product.productdesc}</span>
      <span className="productCard__counter">
        <Counter
          amount={amount}
          increaseAmount={increaseAmount}
          decreaseAmount={decreaseAmount}
        />
      </span>
      <Size size={size} changeSize={changeSize} />
      <div className={"productCard__bottom"}>
        <span className={"productCard__bottom__price"}>$ {product.price}</span>
        <button className={"productCard__bottom__button"} onClick={addProduct}>
          Buy
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
