import React from 'react';
import '../styles/OrgCard.css';

interface OrgCardProps {
    logo: string;
    name: string;
  }
  
  const OrgCard: React.FC<OrgCardProps> = ({ logo, name }) => {
    return (
      <div className="orgCardWrapper">
        <img src={logo} alt="organization logo" className="orgLogo"/>
        <h2 className="orgTitle">{name}</h2>
      </div>
    );
  };

export default OrgCard;