import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../src/styles/globals.css';

/* components */
import BottomTab from './components/bottom-tab';

/* pages */
import Home from './pages/home';
import Payment from './pages/payment';
import Mypage from './pages/mypage';
import Signup from './pages/mypage/signup';
import Splash from './pages/splash';
import MyStore from './pages/home/my-store';
import PublicStore from './pages/home/public-store';
import PrivateStore from './pages/home/private-store';
import QR from './pages/home/qr';
import PrivateKeyInput from './pages/payment/private-key-Input';
import PaymentsCountInput from './pages/payment/payments-count-input';
import SelectStoreType from './pages/payment/SelectStoreType';
import PasswordInput from './pages/payment/passwordInput';

const App = () => {
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        const splashTimeout = setTimeout(() => {
            setShowSplash(false);
        }, 1500);

        return () => {
            clearTimeout(splashTimeout);
        };
    }, []);

    if (showSplash) {
        return <Splash />;
    }

    return (
        <div className="container-col">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/my-store" element={<MyStore />} />
                    <Route path="/public-store" element={<PublicStore />} />
                    <Route path="/private-store" element={<PrivateStore />} />
                    <Route path="/qr" element={<QR />} />
                    <Route path="/payment" element={<Payment />} />
                    <Route path="/payment/private-key-input" element={<PrivateKeyInput />} />
                    <Route path="/payment/payments-count-input" element={<PaymentsCountInput />} />
                    <Route path="/payment/select-store-type" element={<SelectStoreType />} />
                    <Route path="/payment/password-input" element={<PasswordInput />} />
                    <Route path="/mypage" element={<Mypage />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
                <BottomTab />
            </BrowserRouter>
        </div>
    );
};

export default App;
