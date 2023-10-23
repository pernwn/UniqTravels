//HUSK AT SKRIVE KOMMENTARER TIL NÆRMEST ALT – forklaring samt hvad koden gør
import { NavLink } from "react-router-dom";
import '../styles/matty.css'

export default function Nav() {
    return (
        <nav>
            <aside className="border nav_left"></aside>
            <section className="nav">
                <div>
                    <NavLink to='/' className={'nav_link'}><p className="nav_link">Home</p></NavLink>                
                </div>
                <div>
                    <NavLink to='/booking' className={'nav_link'}><p className="nav_link">Booking</p></NavLink>
                </div>
                <div>
                    <NavLink to='/map' className={'nav_link'}><p className="nav_link">Map</p></NavLink>
                </div>
                <div>
                    <NavLink to='/planner' className={'nav_link'}><p className="nav_link">Planner</p></NavLink>
                </div>
                <div>
                    <NavLink to='/user' className={'nav_link'}><p className="nav_link">User</p></NavLink>
                </div>
            </section>
            <aside className="border nav_right"></aside>
        </nav>
    );
}