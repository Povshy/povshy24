import React from "react";
import "./index.css";

import Button from "../../component/button";
import Title from "../../component/title";
import Field from "../../component/field";
import BackButton from "../../component/back-button";

const RecoveryConfirmPage: React.FC = () => {
  const handleContinue = () => {
    alert("Continue");
  };

  return (
    <div>
      <BackButton />
      <div className="signup-page">
        <Title
          title="Recover password"
          description="Choose a recovery method"
        />
        <div className="field-block">
          <Field
            type="number"
            placeholder="Enter your code ..."
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            label="Code:"
          />

          <Field
            type="password"
            placeholder="Enter your new password ..."
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            label="New password:"
          />
        </div>
        <div>
          <Button onClick={handleContinue} text="Restore password" dark />
        </div>
      </div>
    </div>
  );
};

export default RecoveryConfirmPage;
