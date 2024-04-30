import React from "react";

import "./index.css";

interface ButtonProps {
  onClick: () => void;
  text: string;
  dark?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, text, dark }) => {
  return (
    <button
      className={`button ${dark ? "button__dark" : "button__light"}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
