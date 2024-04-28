import { NavLink } from "react-router-dom";

export default function NavBar(){
    return (

        <nav className="nav-items">
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/oceanmap">OceanMap</NavLink>
                </li>
                <li>
                    <NavLink to="/donations">Donations</NavLink>                
                </li>
                <li>
                    <NavLink to="/articles">Articles</NavLink>
                </li>
            </ul>
        </nav>
    );
}