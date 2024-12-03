import React from 'react';
import '../styles/CalendarEvent.css';

interface CalendarEventProps {
    eventName: string;
    location: string;
    time: string;
    orgName: string;
}
  
  const CalendarEvent: React.FC<CalendarEventProps> = ({ eventName, location, time, orgName }) => {
    return (
      <div className="calendarEventWrapper">
        <div className="">

        </div>
      </div>
    );
  };

export default CalendarEvent;