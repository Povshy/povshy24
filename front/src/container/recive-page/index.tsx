import { useState, useReducer, useContext } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { AuthContext, actionTypes } from "../../script/AuthContext";

import Title from "../../component/title";
import Field from "../../component/field";
import BackButton from "../../component/back-button";
import Box from "../../component/box";

import stripe_logo from "./stripe.svg";
import coinbase_logo from "./coinbase.svg";
import master_logo from "./master.svg";
import trongreen_logo from "./trongreen.svg";
import bitcoin_logo from "./bitcoin.svg";
import tronred_logo from "./tronred.svg";
import ether_logo from "./ether.svg";
import busd_logo from "./busd.svg";

const initialState = {
  email: "",
  password: "",
  oldPassword: "",
  newPassword: "",
};

interface State {
  email: string;
  password: string;
  oldPassword: string;
  newPassword: string;
}

type Action =
  | { type: "SET_EMAIL"; payload: string }
  | { type: "SET_PASSWORD"; payload: string }
  | { type: "SET_OLD_PASSWORD"; payload: string }
  | { type: "SET_NEW_PASSWORD"; payload: string };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "SET_OLD_PASSWORD":
      return { ...state, oldPassword: action.payload };
    case "SET_NEW_PASSWORD":
      return { ...state, newPassword: action.payload };
    default:
      return state;
  }
};

const RecivePage: React.FC = () => {
  const navigate = useNavigate();
  const { dispatch: authDispatch } = useContext(AuthContext);

  const [errorData, setErrorData] = useState<string | null>(null);

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <BackButton />
      <div className="setting-page">
        <Title title="Recive" />
        <div className="setting-block">
          <h2>Recive amount</h2>
          <Field
            type="number"
            placeholder=""
            value={state.email}
            onChange={(e) =>
              dispatch({ type: "SET_EMAIL", payload: e.target.value })
            }
            label=""
            dollar
          />
        </div>
        {/* ------------------ */}
        <hr />

        <h2>Payment system</h2>

        <Box onClick={() => alert("Pay")}>
          <div className="payment-system">
            <div className="transaction__logo">
              <img src={stripe_logo} alt="icon" />
            </div>

            <div className="transaction__name">Stripe</div>

            <div className="payment-logos">
              <img src={master_logo} alt="icon" />
              <img src={trongreen_logo} alt="icon" />
              <img src={bitcoin_logo} alt="icon" />
              <img src={tronred_logo} alt="icon" />
              <img src={ether_logo} alt="icon" />
              <img src={busd_logo} alt="icon" />
            </div>
          </div>
        </Box>

        <Box onClick={() => alert("Pay")}>
          <div className="payment-system">
            <div className="transaction__logo">
              <img src={coinbase_logo} alt="icon" />
            </div>

            <div className="transaction__name">Coinbase</div>

            <div className="payment-logos">
              <img src={trongreen_logo} alt="icon" />
              <img src={master_logo} alt="icon" />
              <img src={tronred_logo} alt="icon" />
              <img src={bitcoin_logo} alt="icon" />
              <img src={busd_logo} alt="icon" />
              <img src={ether_logo} alt="icon" />
            </div>
          </div>
        </Box>

        {errorData && <p className="error-message">{errorData}</p>}
      </div>
    </div>
  );
};

export default RecivePage;
