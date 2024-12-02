import React from 'react';
import '../styles/EventCard.css';

interface EventCardProps {
    eventName: string;
    logo: string;
    background: string;
    location: string;
    time: string;
    orgName: string;
  }
  
  const EventCard: React.FC<EventCardProps> = ({ eventName, logo, background, location, time, orgName }) => {
    return (
      <div className="wrapper">
        <img src={background} alt="Event Background" />
        <div className="textHolder">
            <div className="eventName">{eventName}</div>
            <div className="location">{location}</div>
            <div className="time">{time}</div>
            <img src={logo} alt="" />
            <div className="orgName">{orgName}</div>
        </div>
      </div>
    );
  };

export default EventCard;