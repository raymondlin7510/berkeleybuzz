import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CalendarPage from "./pages/CalendarPage";
import SearchPage from "./pages/SearchPage";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/events" element={<SearchPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
      </Routes>
    </Router>
  );
};
export default App;
