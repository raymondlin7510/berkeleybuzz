import React, { useState } from 'react';
import '../styles/CalendarPage.css';
import Calendar from '../components/Calendar';
  
  const CalendarPage = () => {

    return (
      <div className="calendarPageWrapper">
        <h1>Calendar</h1>
        <Calendar />
      </div>
    );
  };

export default CalendarPage;