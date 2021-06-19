import React from "react";
import "../styles/Size.scss";

const Size = ({ changeSize, size, product }) => {
  return (
    <div className="sizes">
      <span
        className={"sizes__item"}
        style={
          size === "S" ? { backgroundColor: "#3F51B5", color: "white" } : {}
        }
        onClick={() => changeSize("S", product)}
      >
        S
      </span>
      <span
        className={"sizes__item"}
        style={
          size === "M" ? { backgroundColor: "#3F51B5", color: "white" } : {}
        }
        onClick={() => changeSize("M", product)}
      >
        M
      </span>
      <span
        className={"sizes__item"}
        style={
          size === "L" ? { backgroundColor: "#3F51B5", color: "white" } : {}
        }
        onClick={() => changeSize("L", product)}
      >
        L
      </span>
      <span
        className={"sizes__item"}
        style={
          size === "XL" ? { backgroundColor: "#3F51B5", color: "white" } : {}
        }
        onClick={() => changeSize("XL", product)}
      >
        XL
      </span>
    </div>
  );
};

export default Size;
