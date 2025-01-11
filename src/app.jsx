import { BrowserRouter, Route, Routes, Link, useLocation, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../src/globals.css';

{
    /* pages */
}
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/home';
import Payment from './pages/payment';
import Mypage from './pages/mypage';

{
    /* icons */
}
import payment from './assets/icons/payment.png';
import home from './assets/icons/home.png';
import mypage from './assets/icons/mypage.png';

const App = () => {
    const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken'));
    useEffect(() => {
        const handleStorageChange = () => {
            setAccessToken(localStorage.getItem('accessToken'));
        };
        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    return (
        <div className="container-col">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={accessToken ? <Home /> : <Navigate to="/mypage" />} />
                    <Route path="/payment" element={accessToken ? <Payment /> : <Navigate to="/mypage" />} />
                    <Route
                        path="/mypage"
                        element={<Mypage onLogin={() => setAccessToken(localStorage.getItem('accessToken'))} />}
                    />
                </Routes>
                <Footer />
                <BottomTab />
            </BrowserRouter>
        </div>
    );
};

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

export default App;
