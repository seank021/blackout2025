import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/login.css';
import logo from '../../assets/icons/logo-home.svg';
import TextInput from '../../components/textinput';
import Button from '../../components/button';

const Login = ({ setIsLoggedIn }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Logging in with:', username, password);
        console.log(username, password);
        setIsLoggedIn(true);
    };

    return (
        <div className="login-container">
            {/* Logo */}
            <div className="logo-container">
                <img src={logo} alt="PrePay Logo" className="logo" />
            </div>
            <p className="sub-text">신뢰로 이어지는 따뜻한 연결</p>

            <TextInput
                placeholder="아이디를 입력하세요"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <TextInput
                type="password"
                placeholder="비밀번호를 입력하세요"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button
                label="로그인"
                onClick={handleLogin}
            />
            <Link to="/signup">
                <p className="underline signup-link">회원이 아니신가요?</p>
            </Link>
        </div>
    );
}

export default Login;
