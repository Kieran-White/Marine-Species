import { NavLink } from "react-router-dom";
import './NavBar.css';

export default function NavBar(){
    return (
        <div class='nav-bar-container'>
            <h1 class='home-title'>Endangered Species</h1>
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
            />
        </div>
    );
}