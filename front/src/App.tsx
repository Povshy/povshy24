import { useState, useReducer, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WellcomePage from "./container/wellcome-page";
import SignupPage from "./container/signup-page";
import SigninPage from "./container/signin-page";
import SignupConfirmPage from "./container/signup-confirm-page";
import RecoveryPage from "./container/recovery-page";
import RecoveryConfirmPage from "./container/recovery-confirm-page";
import BalancePage from "./container/balance";
import SettingsPage from "./container/settings-page";

import "./App.css";

const AuthContext = createContext(null);

function App() {
  return (
    <div className="page">
      <BrowserRouter>
        <Routes>
          <Route index element={<WellcomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/signup-confirm" element={<SignupConfirmPage />} />
          <Route path="/recovery" element={<RecoveryPage />} />
          <Route path="/recovery-confirm" element={<RecoveryConfirmPage />} />
          <Route path="/balance" element={<BalancePage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
