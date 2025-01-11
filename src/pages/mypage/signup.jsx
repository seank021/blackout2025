import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/login.css';
import logo from '../../assets/icons/logo-home.svg';
import TextInput from '../../components/textinput';
import Button from '../../components/button';

const Signup = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [walletAddress, setWalletAddress] = useState('');
    const [privateKey, setPrivateKey] = useState('');

    const handleSignup = () => {
        console.log('Signing up with:', username, password, passwordConfirm, walletAddress, privateKey);
        // api 연결
        localStorage.setItem('accessToken', '1234567890'); // dummy
        navigate('/mypage');
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
            <TextInput
                type="password"
                placeholder="비밀번호를 한 번 더 입력하세요"
                value={passwordConfirm}
                onChange={e => setPasswordConfirm(e.target.value)}
            />
            <TextInput
                placeholder="이더리움 지갑주소(EOA)를 입력하세요"
                value={walletAddress}
                onChange={e => setWalletAddress(e.target.value)}
            />
            <TextInput
                placeholder="이더리움 지갑 개인키를 입력하세요"
                value={privateKey}
                onChange={e => setPrivateKey(e.target.value)}
            />
            <Button label="회원가입" onClick={handleSignup} />
            <Link to="/mypage">
                <p className="underline signup-link">로그인하기</p>
            </Link>
        </div>
    );
};

export default Signup;
