import React from "react";

import "./index.css";

interface ButtonProps {
  onClick: () => void;
  text: string;
  dark?: boolean;
  style?: any;
}

const Button: React.FC<ButtonProps> = ({ onClick, text, dark, style }) => {
  return (
    <button
      className={`button ${dark ? "button__dark" : "button__light"}`}
      onClick={onClick}
      style={style}
    >
      {text}
    </button>
  );
};

export default Button;
