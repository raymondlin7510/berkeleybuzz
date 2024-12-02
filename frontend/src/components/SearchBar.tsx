import React from 'react';
import '../styles/SearchBar.css';
import magnify from '../images/magnify.png';

const SearchBar = () => {
    return (
      <div className="wrapper">
        <img src={magnify} className='search-icon' alt='Magnifying Glass Icon'/>
        <input
            type="text"
            className="search-input"
            placeholder="Search"
        />
      </div>
    );
  };

export default SearchBar;