import React from 'react';
import '../styles/EventCard.css';
import mapIcon from '../images/mapIcon.webp';
import clockIcon from '../images/clockIcon.png';

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
      <div className="eventCardWrapper">
        <img src={background} alt="Event Background" className="eventBackground" />
        <div className="textHolder">
            <div className="eventName">
              Event: {eventName}
            </div>
            <div className="location">
              <img src={mapIcon} alt="map icon" className="mapIcon" />
              {location}
            </div>
            <div className="time">
              <img src={clockIcon} alt="clock icon" className="clockIcon" />
              {time}
            </div>
            <img src={logo} alt="organization logo" className="orgLogo" />
            <div className="orgName">
              Organization: {orgName}
            </div>
        </div>
      </div>
    );
  };

export default EventCard;