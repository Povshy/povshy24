import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

import Button from "../../component/button";
import Title from "../../component/title";
import Field from "../../component/field";
import FieldPassword from "../../component/field-password";
import BackButton from "../../component/back-button";

const SigninPage: React.FC = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/balance");
  };

  return (
    <div>
      <BackButton />
      <div className="signup-page">
        <Title title="Sign In" description="Select login method" />
        <div className="field-block">
          <Field
            type="email"
            placeholder="Enter your email ..."
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            label="Email:"
          />

          <FieldPassword
            type="password"
            placeholder="Enter your password ..."
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            label="Password:"
          />
          <span>
            Forgot your password? <a href="/recovery">Restore</a>
          </span>
        </div>
        <div>
          <Button onClick={handleContinue} text="Continue" dark />
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
