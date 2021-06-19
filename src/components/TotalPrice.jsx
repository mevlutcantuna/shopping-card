import React, { useEffect, useState } from "react";
import "../styles/TotalPrice.scss";
import { useSelector } from "react-redux";

const TotalPrice = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const basket = useSelector((state) => state.ProductReducer.basket);

  //console.log(basket);

  useEffect(() => {
    if (basket.length !== 0) {
      const priceArr = basket.map((item) => {
        return item.amount * item.product.price;
      });
      const total = priceArr.reduce((acc, current) => acc + current);
      setTotalPrice(total);
    } else {
      setTotalPrice(0);
    }
  }, [basket]);

  //console.log(totalPrice);

  return (
    <div className="total-price">
      <div>Total Price</div>
      <div>$ {totalPrice}</div>
    </div>
  );
};

export default TotalPrice;
