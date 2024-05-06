import { useState } from "react";

import "./index.css";

interface FieldProps {
  type: string;
  placeholder: string;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

const FieldPassword: React.FC<FieldProps> = ({
  placeholder,
  value,
  onChange,
  label,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="input-block">
      <label>{label}</label>
      <div className="field__wrapper">
        <input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="input-password"
        />
        <span
          className={`field__icon ${
            showPassword ? "icon-show" : "icon-unshow"
          }`}
          onClick={() => setShowPassword(!showPassword)}
        ></span>
      </div>
    </div>
  );
};

export default FieldPassword;
