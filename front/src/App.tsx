import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WellcomePage from "./container/wellcome-page";

import "./App.css";

function App() {
  return (
    <div className="page">
      <Router>
        <Routes>
          <Route path="/" element={<WellcomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
