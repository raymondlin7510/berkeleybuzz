import React from 'react';
import '../styles/Day.css';

interface DayProps {
    day: string;
    date: string;
    length: number;
    width: number;
}
  
  const Day: React.FC<DayProps> = ({ day, date }) => {
    return (
      <div className="dayWrapper">
        <div className="dayHeading">{day} {date}</div>
        <div className="dayTimes">
          
        </div>
      </div>
    );
  };

export default Day;