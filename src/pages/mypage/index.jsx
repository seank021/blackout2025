import { useEffect, useState } from 'react';
import '../../../src/styles/globals.css';
import Login from './login';
import My from './my';

const Mypage = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        setIsLoggedIn(accessToken ? true : false);
    }, []);

    if (!isLoggedIn) {
        return (
            <Login setIsLoggedIn={setIsLoggedIn} />
        );
    }

    return (
        <My setIsLoggedIn={setIsLoggedIn} />
    );
};

export default Mypage;
