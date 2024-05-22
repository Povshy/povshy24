import React from "react";
import { AuthProvider } from "./script/AuthContext";
import AuthRoute from "./script/AuthRoute";
import PrivateRoute from "./script/PrivateRoute";

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

function App() {
  return (
    <AuthProvider>
      <div className="page">
        <BrowserRouter>
          <Routes>
            <Route
              index
              element={
                <AuthRoute>
                  <WellcomePage />
                </AuthRoute>
              }
            />
            <Route
              path="/signup"
              element={
                <AuthRoute>
                  <SignupPage />
                </AuthRoute>
              }
            />
            <Route
              path="/signin"
              element={
                <AuthRoute>
                  <SigninPage />
                </AuthRoute>
              }
            />
            <Route
              path="/signup-confirm/:id"
              element={
                <AuthRoute>
                  <SignupConfirmPage />
                </AuthRoute>
              }
            />
            <Route
              path="/recovery"
              element={
                <AuthRoute>
                  <RecoveryPage />
                </AuthRoute>
              }
            />
            <Route
              path="/recovery-confirm"
              element={
                <AuthRoute>
                  <RecoveryConfirmPage />
                </AuthRoute>
              }
            />
            <Route
              path="/balance/:id"
              element={
                <PrivateRoute>
                  <BalancePage />
                </PrivateRoute>
              }
            />
            <Route
              path="/settings"
              element={
                <PrivateRoute>
                  <SettingsPage />
                </PrivateRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
