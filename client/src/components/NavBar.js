import { NavLink } from "react-router-dom";

export default function NavBar(){
    return (

        <nav className="nav-items">
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
            </ul>
        </nav>
    );
}