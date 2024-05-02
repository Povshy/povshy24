import React from "react";
import { useNavigate } from "react-router-dom";

import "./index.css";

const BackButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <button onClick={goBack} className="back">
      <img src="/svg/back.svg" alt="back" />
    </button>
  );
};

export default BackButton;
