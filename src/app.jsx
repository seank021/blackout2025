import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../src/globals.css';

/* components */
import Header from './components/header';
import Footer from './components/footer';
import BottomTab from './components/bottom-tab';

/* pages */
import Home from './pages/home';
import Payment from './pages/payment';
import Mypage from './pages/mypage';

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

export default App;
