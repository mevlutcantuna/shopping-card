import React, { useEffect } from "react";
import "./styles/App.scss";

import { getProducts } from "./store/actions/ProductAction";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./components/ProductCard";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const products = useSelector((state) => state?.ProductReducer?.products);
  //console.log(products);

  return (
    <div className={"app"}>
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default App;
