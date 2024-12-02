import React from "react";
import { Router, Route, Routes } from 'react-router-dom';

import CalendarPage from "./pages/CalendarPage";
import EventSearch from "./pages/SearchPage";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/events" element={<EventSearch />} />
        <Route path="/calendar" element={<CalendarPage />} />
      </Routes>
    </Router>
  );
};
export default App;
