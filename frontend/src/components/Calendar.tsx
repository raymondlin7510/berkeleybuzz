import React from 'react';
import '../styles/Calendar.css';

interface CalendarProps {
    weekDate: string;
    isWeek: boolean;
}
  
  const Calendar: React.FC<CalendarProps> = ({ weekDate, isWeek }) => {
    return (
      <div className="calendarWrapper">
        
      </div>
    );
  };

export default Calendar;