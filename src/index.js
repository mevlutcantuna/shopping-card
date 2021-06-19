import { render } from "react-dom";
import "./styles/Global.scss";

//components
import App from "./App";
import Basket from "./components/Basket";

//router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//redux
import { Provider } from "react-redux";
import Store from "./store/Store";
import Navbar from "./components/Navbar";

const RouterApp = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path={"/"} component={App} />
        <Route exact path={"/basket"} component={Basket} />
      </Switch>
    </Router>
  );
};

render(
  <Provider store={Store}>
    <RouterApp />
  </Provider>,
  document.getElementById("root")
);
