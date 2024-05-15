import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css';

export default function NavBar(){
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    let timerId;

    const handleSearchInputChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
        
        clearTimeout(timerId);

        if (query === "") {
            timerId = setTimeout(() => {
                setSearchResults([]);
                }, 1000);
        } else {
            timerId = setTimeout(() => {
                fetchSearchResults(query);
                }, 900);
        }
    };

    const fetchSearchResults = async (query) => {
        try {
            const response = await fetch(`/api/search/${query}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setSearchResults(data.results);
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };

    return (
        <div className='nav-bar-container'>
            <h1 className='home-title'>Endangered Species</h1>
            <div className="nav-search">
                <nav className='nav-bar-navs'>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/oceanmap">OceanMap</NavLink>
                    <NavLink to="/donations">Donations</NavLink>                
                    <NavLink to="/articles">Articles</NavLink>
                </nav>
                <input 
                    type="text" 
                    placeholder="Search" 
                    className='nav-bar-search-bar'
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                />
                {searchResults.length > 0 && (
                    <div className="search-results-dropdown">
                        {searchResults.map((result, index) => (
                            <div key={index}>
                                <a href={`/species/${result.species}`} >{result.species}</a>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}