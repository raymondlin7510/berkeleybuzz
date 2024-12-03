import React from 'react';
import '../styles/SearchPage.css';
import SearchBar from '../components/SearchBar';
import EventCard from '../components/EventCard';
import OrgCard from '../components/OrgCard';
import logo from '../images/BerkeleyBuzzLogo.png';
import sampleLogo from '../images/csmLogo.png';
import sampleBackground from '../images/sample.png';
  
const SearchPage = () => {
  const findEvents = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('hi');
    //do whatever to handle the submit WARNING
  }


  return (
    <div className="searchPageContainer">
      <img src={logo} className="logo" alt="logo" />
      <div className="searchBarContainer">
        <SearchBar />
      </div>
      <div className="eventsWrapper">
        <h1>Events</h1>
        <div className="events">
        <EventCard eventName="CSM" logo={sampleLogo} background={sampleBackground} location='VSLB' time="11:00PM" orgName="CSM"/>
        <EventCard eventName="CSM" logo={sampleLogo} background={sampleBackground} location='VSLB' time="11:00PM" orgName="CSM"/>
        </div>
      </div>
      <div className="orgsWrapper">
        <h1>Organizations</h1>
        <div className="orgs">
          <OrgCard logo={sampleLogo} name="CSM"/>
          <OrgCard logo={sampleLogo} name="CSM"/>
          <OrgCard logo={sampleLogo} name="CSM"/>
          <OrgCard logo={sampleLogo} name="CSM"/>
          <OrgCard logo={sampleLogo} name="CSM"/>
          <OrgCard logo={sampleLogo} name="CSM"/>
          <OrgCard logo={sampleLogo} name="CSM"/>
          <OrgCard logo={sampleLogo} name="CSM"/>
          <OrgCard logo={sampleLogo} name="CSM"/>
        </div>
        
      </div>
    </div>
  );
};

export default SearchPage;