import { useContext, useEffect, useState } from 'react';
import React  from 'react';
import '../styles/SearchBar.css';
import magnify from '../images/magnify.png';

const [searchTerm, setSearchTerm] = useState('');

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let result = await fetch("https://localhost:5001/api/flyers", {
        method: "GET",
        headers: { 'Content-Type': 'application/json' },
        body: data,
    });
    let resultJson = await result.json();
};

const SearchBar = () => {
    return (
        <form className="searchbar" onSubmit={ handleSubmit }>
            <img src={magnify} className="search-icon" alt="Magnifying Glass Icon"/>
            <input type="text" className="search-input" placeholder="Search"/>
        </form>
    );
  };

export default SearchBar;