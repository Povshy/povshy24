import React, { useReducer } from "react";
import { useLocation } from "react-router-dom";
import "./index.css";

import Button from "../../component/button";
import Title from "../../component/title";
import Field from "../../component/field";
import BackButton from "../../component/back-button";

import { useParams } from "react-router-dom";

const initialState = {
  code: "",
};

interface State {
  code: string;
}

type Action = { type: "SET_CODE"; payload: string };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_CODE":
      return { ...state, code: action.payload };
    default:
      return state;
  }
};

const SignupConfirmPage: React.FC = () => {
  // const location = useLocation();
  // const queryParams = new URLSearchParams(location.search);
  // const email = queryParams.get("email") || "";

  const { id } = useParams<{ id: string }>();
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleConfirm = async () => {
    try {
      const res = await fetch("http://localhost:4000/signup-confirm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // email: email,
          code: state.code,
          id: id,
        }),
      });

      if (!res.ok) {
        throw new Error("Помилка");
      }

      const data = await res.json();
      console.log(data);
      console.log(`ggggggggggggg`, data.id);

      // navigate("/signup-success");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // const handleConfirm = () => {
  //   alert("Confirm");
  // };

  return (
    <div>
      <BackButton />
      <div className="signup-page">
        <Title
          title="Confirm account"
          description="Write the code you received"
        />
        <div className="field-block">
          <Field
            type="text"
            placeholder="Enter your code ..."
            value={state.code}
            onChange={(e) =>
              dispatch({ type: "SET_CODE", payload: e.target.value })
            }
            label="Code:"
          />
        </div>

        <div>
          <Button onClick={handleConfirm} text="Confirm" dark />
        </div>
      </div>
    </div>
  );
};

export default SignupConfirmPage;
