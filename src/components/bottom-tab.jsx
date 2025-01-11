import { Link, useLocation } from 'react-router-dom';

/* icons */
import payment from '../assets/icons/payment.png';
import home from '../assets/icons/home.png';
import mypage from '../assets/icons/mypage.png';

const BottomTab = () => {
    const location = useLocation();

    return (
        <div className="bottom-tab">
            <Link
                to="/payment"
                style={{
                    textDecoration: 'none',
                    color: location.pathname === '/payment' ? '#007BFF' : '#000',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <img src={payment} alt="Payment" style={{ height: '24px' }} />
                <div>Payment</div>
            </Link>
            <Link
                to="/"
                style={{
                    textDecoration: 'none',
                    color: location.pathname === '/' ? '#007BFF' : '#000',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <img src={home} alt="Home" style={{ height: '24px' }} />
                <div>Home</div>
            </Link>
            <Link
                to="/mypage"
                style={{
                    textDecoration: 'none',
                    color: location.pathname === '/mypage' ? '#007BFF' : '#000',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <img src={mypage} alt="Mypage" style={{ height: '24px' }} />
                <div>My Page</div>
            </Link>
        </div>
    );
};

export default BottomTab;
