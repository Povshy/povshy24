import React from "react";

import "./index.css";

interface FieldProps {
  type: string;
  placeholder: string;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  dollar?: boolean;
}

const Field: React.FC<FieldProps> = ({
  type,
  placeholder,
  value,
  onChange,
  label,
  dollar,
}) => {
  return (
    <div className="input-block">
      <label>{label}</label>
      <div className="input-wrapper">
        {dollar && <span className="dollar-prefix">$:</span>}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`input ${dollar ? "dollar" : ""}`}
        />
      </div>
    </div>
    
  );
};

export default Field;
