import React from "react";

import "./index.css";

interface FieldProps {
  type: string;
  placeholder: string;
  // value: string | number;
  // onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

const Field: React.FC<FieldProps> = ({
  type,
  placeholder,
  // value,
  // onChange,
  label,
}) => {
  return (
    <div className="input-block">
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        // value={value}
        // onChange={onChange}
        className="input"
      />
    </div>
  );
};

export default Field;
