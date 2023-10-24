//HUSK AT SKRIVE KOMMENTARER TIL NÆRMEST ALT – forklaring samt hvad koden gør

// Med NavLink gør vi, at produktet bliver en 1 pager
import { NavLink } from "react-router-dom";

// Her er der linket til CSS filen
import '../styles/matty.css'

//Import af ikoner til nav baren
import Home from '../assets/pictures/Home.png'
import Booking from '../assets/pictures/Booking.png'
import Planner from '../assets/pictures/Planner.png'
import Map from '../assets/pictures/Map.png'
import User from '../assets/pictures/User.png'

//Mangler: Cirkel der flytter sig alt efter siden og gradient farve
//Mangler: funktion af billeder
//Mangler: få Root til at virke
//noter til koden under (kan ikke //, /**/ eller <!---->, hvordan gør man?)
export default function Nav() {
    return (
        <nav>
            <aside className="nav_border nav_left"></aside>
            <section className="nav">
                <div>
                    
                    <NavLink to='/' className={'navlink'}>
                    <img src="../assets/pictures/Home.png" alt="Home" className="nav_img"/>
                        <p>Home</p>
                    </NavLink>                
                </div>
                <div>
                    <NavLink to='/booking' className={'navlink'}>
                        <img src="../assets/pictures/Booking.png" alt="Booking" className="nav_img"/>
                        <p>Booking</p>
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/map' className={'navlink'}>
                        <img src="../assets/pictures/Map.png" alt="Map" className="nav_img"/>
                        <p>Map</p>
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/planner' className={'navlink'}>
                        <img src="../assets/pictures/Planner.png" alt="Planner" className="nav_img"/>
                        <p>Planner</p>
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/user' className={'navlink'}>
                        <img src="../assets/pictures/User.png" alt="User" className="nav_img"/>
                        <p>User</p>
                    </NavLink>
                </div>
            </section>
            <aside className="nav_border nav_right"></aside>
        </nav>
    );
}