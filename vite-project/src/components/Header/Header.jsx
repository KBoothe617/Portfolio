import Nav from '../Header/Nav';

// Header component with Nav component and name

export default function Header() {
    return (
        <header className="header">
            <Nav />
            <p>Kaleb Boothe</p>
        </header>
    );
}