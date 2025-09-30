import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./LandingPage";
import Game1 from "./Game1";
import Game2 from "./Game2";
import InviteRSVP from "./InviteRSVP";

function App() {
  // In a real app, use state/context to track game progress
  // For now, allow navigation for development
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/game1" element={<Game1 />} />
        <Route path="/game2" element={<Game2 />} />
        <Route path="/invite" element={<InviteRSVP />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;