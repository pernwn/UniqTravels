//HUSK AT SKRIVE KOMMENTARER TIL NÆRMEST ALT – forklaring samt hvad koden gør
import { NavLink } from "react-router-dom";


export default function Nav() {
    return (
        <nav>
            <NavLink to='/' >Home</NavLink>
            <NavLink to='/booking' >Booking</NavLink>
            <NavLink to='/map' >Map</NavLink>
            <NavLink to='/planner' >Planner</NavLink>
            <NavLink to='/user' >User</NavLink>
        </nav>
    );
}