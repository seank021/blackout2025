import { useLocation, useNavigate } from 'react-router-dom';

/* icons */
import payment from '../assets/icons/payment.svg';
import paymentColor from '../assets/icons/payment-color.svg';
import home from '../assets/icons/home.svg';
import homeColor from '../assets/icons/home-color.svg';
import mypage from '../assets/icons/mypage.svg';
import mypageColor from '../assets/icons/mypage-color.svg';

const BottomTab = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleNavigation = path => {
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken && (path === '/' || path === '/payment')) {
            alert('로그인이 필요합니다.');
            navigate('/mypage');
        } else {
            navigate(path);
        }
    };

    return (
        <div className="bottom-tab">
            <div
                onClick={() => handleNavigation('/payment')}
                style={{
                    textDecoration: 'none',
                    color:
                        location.pathname === '/payment' ||
                        location.pathname === '/payment/private-key-input' ||
                        location.pathname === '/payment/payments-count-input' ||
                        location.pathname === '/payment/password-input' ||
                        location.pathname === '/payment/select-store-type'
                            ? '#007BFF'
                            : '#000',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    cursor: 'pointer',
                }}
            >
                <img
                    src={
                        location.pathname === '/payment' ||
                        location.pathname === '/payment/private-key-input' ||
                        location.pathname === '/payment/payments-count-input' ||
                        location.pathname === '/payment/password-input' ||
                        location.pathname === '/payment/select-store-type'
                            ? paymentColor
                            : payment
                    }
                    alt="Payment"
                    style={{ width: '24px', height: '24px' }}
                />
                <div className="text-sm">선결제</div>
            </div>
            <div
                onClick={() => handleNavigation('/')}
                style={{
                    textDecoration: 'none',
                    color:
                        location.pathname === '/' ||
                        location.pathname === '/my-store' ||
                        location.pathname === '/public-store' ||
                        location.pathname === '/private-store' ||
                        location.pathname === '/qr'
                            ? '#007BFF'
                            : '#000',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    cursor: 'pointer',
                }}
            >
                <img
                    src={
                        location.pathname === '/' ||
                        location.pathname === '/my-store' ||
                        location.pathname === '/public-store' ||
                        location.pathname === '/private-store' ||
                        location.pathname === '/qr'
                            ? homeColor
                            : home
                    }
                    alt="Home"
                    style={{ width: '24px', height: '24px' }}
                />
                <div className="text-sm">홈</div>
            </div>
            <div
                onClick={() => handleNavigation('/mypage')}
                style={{
                    textDecoration: 'none',
                    color: location.pathname === '/mypage' || location.pathname === '/signup' ? '#007BFF' : '#000',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    cursor: 'pointer',
                }}
            >
                <img
                    src={location.pathname === '/mypage' || location.pathname === '/signup' ? mypageColor : mypage}
                    alt="Mypage"
                    style={{ width: '24px', height: '24px' }}
                />
                <div className="text-sm">My</div>
            </div>
        </div>
    );
};

export default BottomTab;
