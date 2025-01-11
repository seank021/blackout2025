import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/login.css';
import logo from '../../assets/icons/logo-home.svg';
import TextInput from '../../components/textinput';
import Button from '../../components/button';
import { logIn } from '../../apis/api';

const Login = ({ setIsLoggedIn }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        const response = await logIn({ username, password });
        console.log(response);
        if (response.status === 200) {
            localStorage.setItem('accessToken', response.data.token);
            setIsLoggedIn(true);
        } else {
            alert('아이디 또는 비밀번호를 다시 확인해주세요.');
        }
    };

    return (
        <div className="login-container">
            {/* Logo */}
            <div className="logo-container">
                <img src={logo} alt="PrePay Logo" className="logo" />
            </div>
            <p className="sub-text">신뢰로 이어지는 따뜻한 연결</p>

            <TextInput placeholder="아이디를 입력하세요" value={username} onChange={e => setUsername(e.target.value)} />
            <TextInput
                type="password"
                placeholder="비밀번호를 입력하세요"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <Button label="로그인" onClick={handleLogin} />
            <Link to="/signup">
                <p className="underline signup-link">회원이 아니신가요?</p>
            </Link>
        </div>
    );
};

export default Login;
