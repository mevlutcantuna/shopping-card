import React from "react";
import "../styles/Navbar.scss";

//material-ui icons
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

//react router
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const basket = useSelector((state) => state.ProductReducer.basket);

  return (
    <div className="navbar">
      <span className="navbar__title">Shopping Cart</span>
      <span className="navbar__basket">
        <Link to="/basket">
          <ShoppingBasketIcon style={{ fontSize: "2rem" }} color={"primary"} />
          <span>{basket.length}</span>
        </Link>
      </span>
    </div>
  );
};

export default Navbar;
