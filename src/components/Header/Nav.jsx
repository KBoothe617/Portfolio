import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';

// Nav component for header
export default function Nav() {
    return (
        <Navbar
           links={[
            <NavLink
            key={1}
            className='nav-link'
            to='/'
            style={({ isActive }) => ({color: isActive ? 'white' : 'black'})}
            >
                About Me
            </NavLink>,
            <NavLink
            key={2}
            className='nav-link'
            to='/portfolio'
            style={({ isActive }) => ({color: isActive ? 'white' : 'black'})}
            >
                Portfolio
            </NavLink>,
            <NavLink
            key={3}
            className='nav-link'
            to='/contact'
            style={({ isActive }) => ({color: isActive ? 'white' : 'black'})}
            >
                Contact
            </NavLink>,
            <NavLink
            key={4}
            className='nav-link'
            to='/resume'
            style={({ isActive }) => ({color: isActive ? 'white' : 'black'})}
            >
                Resume
            </NavLink>
           ]}
        />
    );
}