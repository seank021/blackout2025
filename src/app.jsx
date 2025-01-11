import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../src/styles/globals.css';

/* components */
import BottomTab from './components/bottom-tab';

/* pages */
import Home from './pages/home';
import Payment from './pages/payment';
import Mypage from './pages/mypage';
import Splash from './pages/splash';
import MyStore from './pages/home/my-store';
import PublicStore from './pages/home/public-store';
import PrivateStore from './pages/home/private-store';

const App = () => {
    const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken'));
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        // Hide splash screen after 0.7 second
        const splashTimeout = setTimeout(() => {
            setShowSplash(false);
        }, 700);

        // Listen for localStorage changes
        const handleStorageChange = () => {
            setAccessToken(localStorage.getItem('accessToken'));
        };
        window.addEventListener('storage', handleStorageChange);

        return () => {
            clearTimeout(splashTimeout);
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    if (showSplash) {
        return <Splash />;
    }

    return (
        <div className="container-col">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={accessToken ? <Home /> : <Navigate to="/mypage" />} />
                    <Route path="/my-store" element={<MyStore />} />
                    <Route path="/public-store" element={<PublicStore />} />
                    <Route path="/private-store" element={<PrivateStore />} />
                    <Route path="/payment" element={accessToken ? <Payment /> : <Navigate to="/mypage" />} />
                    <Route
                        path="/mypage"
                        element={<Mypage onLogin={() => setAccessToken(localStorage.getItem('accessToken'))} />}
                    />
                </Routes>
                <BottomTab />
            </BrowserRouter>
        </div>
    );
};

export default App;
