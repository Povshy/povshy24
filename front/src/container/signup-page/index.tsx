import { useReducer } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

import Button from "../../component/button";
import Title from "../../component/title";
import Field from "../../component/field";
import FieldPassword from "../../component/field-password";
import BackButton from "../../component/back-button";

const initialState = {
  email: "",
  password: "",
};

interface State {
  email: string;
  password: string;
}

type Action =
  | { type: "SET_EMAIL"; payload: string }
  | { type: "SET_PASSWORD"; payload: string };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

const SignupPage: React.FC = () => {
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleContinue = async () => {
    try {
      const res = await fetch("http://localhost:4000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: state.email,
          password: state.password,
        }),
      });

      if (!res.ok) {
        alert("Не всі поля введені коректно");
        throw new Error("Помилка");
      }

      const data = await res.json();
      console.log(data);

      // window.location.href = `/signup-confirm?id=${data.user.id}`;

      navigate(`/signup-confirm?id=${data.user.id}`);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <BackButton />
      <div className="signup-page">
        <Title title="Sign Up" description="Choose a registration method" />
        <div className="field-block">
          <Field
            type="email"
            placeholder="Enter your email ..."
            value={state.email}
            onChange={(e) =>
              dispatch({ type: "SET_EMAIL", payload: e.target.value })
            }
            label="Email:"
          />

          <FieldPassword
            type="password"
            placeholder="Enter your password ..."
            value={state.password}
            onChange={(e) =>
              dispatch({ type: "SET_PASSWORD", payload: e.target.value })
            }
            label="Password:"
          />
          <span>
            Already have an account? <a href="/signin">Sign In</a>
          </span>
        </div>
        <div>
          <Button onClick={handleContinue} text="Continue" dark />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
