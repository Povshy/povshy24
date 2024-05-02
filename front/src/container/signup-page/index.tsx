import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

import Button from "../../component/button";
import Title from "../../component/title";
import Field from "../../component/field";
import BackButton from "../../component/back-button";

const SignupPage: React.FC = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/signup-confirm");
  };

  return (
    <div>
      <BackButton />
      <div className="signup-page">
        <Title title="Sign Up" description="Choose a registration method" />
        <div className="field-block">
          <Field
            type="email"
            placeholder="Enter your email ..."
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            label="Email:"
          />

          <Field
            type="password"
            placeholder="Enter your password ..."
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            label="Password:"
          />
          <span>
            Already have an account? <a href="/signin">Sign In</a>
          </span>
        </div>
        <div>
          <Button onClick={handleContinue} text="Continue" dark />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
