import React from 'react';
import '../styles/CalendarPage.css';
  
  const CalendarPage = () => {
    return (
      <div className="wrapper">
        <h1>Calendar</h1>
        <div className="selection">
          <div className="day"></div>
          <div className="week"></div>
        </div>
        <div className="calendar">
        </div>
      </div>
    );
  };

export default CalendarPage;