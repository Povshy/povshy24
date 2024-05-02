import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

import Button from "../../component/button";
import Title from "../../component/title";
import Field from "../../component/field";
import BackButton from "../../component/back-button";

const RecoveryPage: React.FC = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/recovery-confirm");
  };

  return (
    <div className="signup-page">
      <BackButton />

      <Title title="Recover password" description="Choose a recovery method" />
      <div className="field-block">
        <Field
          type="email"
          placeholder="Enter your email ..."
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
          label="Email:"
        />
      </div>
      <div>
        <Button onClick={handleContinue} text="Send code" dark />
      </div>
    </div>
  );
};

export default RecoveryPage;
