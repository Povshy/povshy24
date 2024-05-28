import React from "react";
import { useNavigate } from "react-router-dom";
import back_logo from "./back.svg";

import "./index.css";

const BackButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <button onClick={goBack} className="back">
      <img src={back_logo} alt="back" />
    </button>
  );
};

export default BackButton;
