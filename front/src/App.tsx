import { useState, createContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WellcomePage from "./container/wellcome-page";
import SignupPage from "./container/signup-page";
import SigninPage from "./container/signin-page";
import SignupConfirmPage from "./container/signup-confirm-page";
import RecoveryPage from "./container/recovery-page";
import RecoveryConfirmPage from "./container/recovery-confirm-page";
import BalancePage from "./container/balance";
import SettingsPage from "./container/settings-page";

import "./App.css";

function App() {
  return (
    <div className="page">
      <Router>
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
      </Router>
    </div>
  );
}

export default App;
