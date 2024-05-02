import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

import Button from "../../component/button";
import Title from "../../component/title";
import Field from "../../component/field";
import BackButton from "../../component/back-button";

const SettingsPage: React.FC = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/balance");
  };

  return (
    <div>
      <BackButton />
      <div className="setting-page">
        <Title title="Settings" />
        <div className="setting-block">
          <h2>Change email</h2>
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
            label="Old Password:"
          />
          <div>
            <Button onClick={handleContinue} text="Save Email" />
          </div>
        </div>
        {/* ------------------ */}
        <hr />

        <div className="setting-block">
          <h2>Change Password</h2>
          <Field
            type="password"
            placeholder="Enter your old email ..."
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            label="Old Password:"
          />

          <Field
            type="password"
            placeholder="Enter your password ..."
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            label="New Password:"
          />
          <div>
            <Button onClick={handleContinue} text="Save Password" />
          </div>
          <hr />

          <div>
            <Button
              onClick={handleContinue}
              text="Log out"
              style={{ border: "1px solid red", color: "red" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
