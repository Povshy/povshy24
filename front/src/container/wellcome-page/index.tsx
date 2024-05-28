import React from "react";
import "./index.css";

import Button from "../../component/button";
import { useNavigate } from "react-router-dom";

import money from "./money.png";

const WellcomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/signup");
  };

  const handleSignIn = () => {
    navigate("/signin");
  };

  return (
    <div className="wellcome-page">
      <div className="wellcome-text">
        <h1>Hello!</h1>
        <p>Wellcome to bank app</p>
        <img
          src={money}
          alt="money"
          className="money"
          width="850px"
          height="850px"
        />
      </div>

      <div className="buttons">
        <Button onClick={handleSignUp} text="Sign Up" dark />
        <Button onClick={handleSignIn} text="Sign In" />
      </div>
    </div>
  );
};

export default WellcomePage;
