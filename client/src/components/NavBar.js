import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css';
import axios from 'axios';

export default function NavBar(){
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    let timerId;

    const handleSearchInputChange = (event) => {
        const query = event.target.value;
        if (query === "") {
            
            setSearchQuery(query);
            clearTimeout(timerId);
            timerId = setTimeout(() => {
                setSearchResults([]);
                }, 1000);
        } else {
            setSearchQuery(query);
            clearTimeout(timerId);
            timerId = setTimeout(() => {
                fetchSearchResults(query);
                }, 1000);
        }
        

    };

    const fetchSearchResults = async (query) => {
        try {
            const response = await axios.get(`/api/search/${query}`);
            setSearchResults(response.data.results);
        } catch (error) {
            console.error('Error fetching search results:', error);
        };

    };

    return (
        <div class='nav-bar-container'>
            <h1 class='home-title'>Endangered Species</h1>
            <div class="navSearch">
                <nav class='nav-bar-navs'>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/oceanmap">OceanMap</NavLink>
                    <NavLink to="/donations">Donations</NavLink>                
                    <NavLink to="/articles">Articles</NavLink>
                    <NavLink to="/species">Species</NavLink>   
                </nav>
                <input 
                    type="text" 
                    placeholder="Search" 
                    class='nav-bar-search-bar'
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