import '../../src/styles/globals.css';
import logo from '../assets/icons/logo.svg';

const Splash = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: '#0D233A',
            }}
        >
            <img src={logo} alt="Logo" style={{ height: '100px' }} />
        </div>
    );
};

export default Splash;
