import './Navbar.css';
import PropTypes from 'prop-types';

// Navbar component for header

export default function Navbar({ links }) {
    return (
        <nav className="navbar">
            <div className='container'>
                {/* navbar toggler button */}
                <button className='toggle-button' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                {/* navbar links */}
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav'>
                        {links.map((link, index) => {
                            return (
                                <li key={index} className='nav-item'>
                                    <a className='nav-link' href={link.href}>{link.text}</a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

Navbar.propTypes = {
    links: PropTypes.array.isRequired
};