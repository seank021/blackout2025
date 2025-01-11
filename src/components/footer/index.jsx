import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <h1>Footer</h1>
            <p>This is footer</p>
            <Link to="/about" className="underline">
                About
            </Link>
        </footer>
    );
};

export default Footer;
