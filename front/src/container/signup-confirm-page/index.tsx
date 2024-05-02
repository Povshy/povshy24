import React from "react";
import "./index.css";

import Button from "../../component/button";
import Title from "../../component/title";
import Field from "../../component/field";
import BackButton from "../../component/back-button";

const SignupConfirmPage: React.FC = () => {
  const handleConfirm = () => {
    alert("Confirm");
  };

  return (
    <div>
      <BackButton />
      <div className="signup-page">
        <Title
          title="Confirm account"
          description="Write the code you received"
        />
        <div className="field-block">
          <Field
            type="number"
            placeholder="Enter your code ..."
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            label="Code:"
          />
        </div>

        <div>
          <Button onClick={handleConfirm} text="Confirm" dark />
        </div>
      </div>
    </div>
  );
};

export default SignupConfirmPage;
