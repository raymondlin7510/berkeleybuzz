import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import CalendarPage from "./pages/CalendarPage";
import SearchPage from "./pages/SearchPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from './pages/SignupPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={<Navigate to="/events" />} />
        <Route path="/events" element={<SearchPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
      </Routes>
    </Router>
  );
};
export default App;
