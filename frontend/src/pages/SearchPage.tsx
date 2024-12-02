import React from 'react';
import '../styles/SearchPage.css';
import SearchBar from '../components/SearchBar';
import EventCard from '../components/EventCard';
import OrgCard from '../components/OrgCard';
  
const SearchPage = () => {
  return (
    <div className="wrapper">
      <img src="" />
      <div className="backgroundImage">
          <div className="backgroundSearch">
              <SearchBar />
          </div>
      </div>
      <div className="events">
        <h2>Events</h2>
        
      </div>
      <div className="orgs">
        <h2>Organizations</h2>

      </div>
    </div>
  );
};

export default SearchPage;