import "../styles/Counter.scss";

//material-ui
import ExposurePlus1RoundedIcon from "@material-ui/icons/ExposurePlus1Rounded";
import ExposureNeg1RoundedIcon from "@material-ui/icons/ExposureNeg1Rounded";

const Counter = ({ amount, decreaseAmount, increaseAmount, product }) => {
  return (
    <div className="counter">
      <span
        onClick={() => decreaseAmount(-1, product)}
        className="counter__button"
        style={amount <= 1 ? { display: "none" } : { display: "flex" }}
      >
        <ExposureNeg1RoundedIcon />
      </span>
      <span className="counter__value">{amount}</span>
      <span
        onClick={() => increaseAmount(+1, product)}
        className="counter__button"
      >
        <ExposurePlus1RoundedIcon />
      </span>
    </div>
  );
};

export default Counter;
