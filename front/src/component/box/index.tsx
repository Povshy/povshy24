import React from "react";

import "./index.css";

interface BoxProps {
  onClick: () => void;
  children: any;
}

const Box: React.FC<BoxProps> = ({ children, onClick }) => {
  return (
    <div onClick={onClick} className="box">
      {children}
    </div>
  );
};

export default Box;

