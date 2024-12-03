import React, { useState } from 'react';
import '../styles/CalendarPage.css';
import Calendar from '../components/Calendar';
  
  const CalendarPage = () => {
    const [view, setView] = useState('week');
    
    const goBack = () => {
      console.log('going backwards');
    }

    const goForward = () => {
      console.log('going forwards');
    }

    return (
      <div className="calendarPageWrapper">
        <h1>Calendar</h1>
        <div className="calendarNavigation">
            <div className="toggleButtons">
            <button className={`toggleButton ${view === 'day' ? 'active' : ''}`} onClick={() => setView('day')}>Day</button>
            <button className={`toggleButton ${view === 'week' ? 'active' : ''}`} onClick={() => setView('week')}>Week</button>
          </div>
          <div className="navigationButtons">
            <button className="navigationButton" onClick={goBack}>{"<"}</button>
            <button className="navigationButton" onClick={goForward}>{">"}</button>
          </div>
        </div>
      </div>
    );
  };

export default CalendarPage;