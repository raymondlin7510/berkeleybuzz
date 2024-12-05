import React from 'react';
import { useEffect, useState } from 'react';
import '../styles/SearchPage.css';
import SearchBar from '../components/SearchBar';
import EventCard from '../components/EventCard';
import OrgCard from '../components/OrgCard';
import logo from '../images/BerkeleyBuzzLogo.png';
import sampleLogo from '../images/csmLogo.png';
import sampleBackground from '../images/sample.png';


interface Flyer {
  _id: string; // Assuming MongoDB uses _id
  name: string;
  // eventDate: string; ?
  time: string;
  location: string;
  description: string;
  orgName: string;
  background: string; // Optional flyer image
}

const SearchPage = () => {
    const [flyers, setFlyers] = useState<Flyer[]>([]);
    const [filteredFlyers, setFilteredFlyers] = useState<Flyer[]>([]);

    // Fetch all flyers on initial render
    useEffect(() => {
        const fetchFlyers = async () => {
            try {
                const response = await fetch('/api/flyers');
                const data: Flyer[] = await response.json();

                setFlyers(data);
                setFilteredFlyers(data);
            } catch (err) {
                console.error('Error fetching flyers:', err);
            }
        };

        fetchFlyers();
    }, []);

    // Search logic
    const handleSearch = (searchTerm: string) => {
        const term = searchTerm.toLowerCase();
        const filtered = flyers.filter((flyer) => 
        flyer.name.toLowerCase().includes(term) ||
        flyer.orgName.toLowerCase().includes(term) ||
        flyer.location.toLowerCase().includes(term)
        );
    };

    return (
        <div className="searchPageContainer">
        <img src={logo} className="logo" alt="logo" />

        <div className="searchBarContainer">
            <SearchBar />
        </div>

        <div className="eventsWrapper">
            <h1>Events</h1>

            <div className="events">
            {filteredFlyers.map((flyer) => (
                <EventCard 
                eventName={flyer.name}
                logo={}
                background={flyer.background}
                location={flyer.location}
                time={flyer.time}
                orgName={flyer.orgName}
                />
            ))};
                
            // Tests
            // <EventCard eventName="CSM" logo={sampleLogo} background={sampleBackground} location='VSLB' time="11:00PM" orgName="CSM"/>
            //<EventCard eventName="CSM" logo={sampleLogo} background={sampleBackground} location='VSLB' time="11:00PM" orgName="CSM"/>
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

        </div> //End of searchPageContainer
    );
};

export default SearchPage;