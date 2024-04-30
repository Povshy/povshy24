import React from "react";
import "./index.css";

import Button from "../../component/button";

const WellcomePage: React.FC = () => {
  const handleSignUp = () => {
    alert("SignUp");
  };

  const handleSignIn = () => {
    alert("SignIn");
  };

  return (
    <div className="wellcome-page">
      <div className="wellcome-text">
        <h1>Hello!</h1>
        <p>Wellcome to bank app</p>
        <img
          src="/img/money.png"
          alt="money"
          className="money"
          width="850px"
          height="850px"
        />
      </div>

      <div className="buttons">
        <Button onClick={handleSignUp} text="SignUp" dark />
        <Button onClick={handleSignIn} text="SignIn" />
      </div>
    </div>
  );
};

export default WellcomePage;
