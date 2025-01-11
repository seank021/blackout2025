import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <header className="header">
            <h1>Header</h1>
            <p>This is header</p>
            <Link to="/" className="underline">
                Home
            </Link>
        </header>
    );
};

export default Header;
