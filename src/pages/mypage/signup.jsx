import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/login.css';
import logo from '../../assets/icons/logo-home.svg';
import TextInput from '../../components/textinput';
import Button from '../../components/button';
import { signUp } from '../../apis/api';

const Signup = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [walletAddress, setWalletAddress] = useState('');

    const handleSignup = async () => {
        if (!username || !password || !passwordConfirm || !walletAddress) {
            alert('모든 항목을 입력해주세요.');
            return;
        }
        if (password !== passwordConfirm) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }

        const response = await signUp({ username, password });
        console.log(response);
        if (response.status === 201) {
            localStorage.setItem('walletAddress', walletAddress);
            localStorage.setItem('accessToken', response.data.user.token);
            navigate('/mypage');
        } else {
            alert('회원가입에 실패했습니다.');
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
            <Button label="회원가입" onClick={handleSignup} />
            <Link to="/mypage">
                <p className="underline signup-link">로그인하기</p>
            </Link>
            <Link to="https://support.metamask.io/ko/start/getting-started-with-metamask">
                <p className="underline link">이더리움 지갑을 생성하려면?</p>
            </Link>
        </div>
    );
};

export default Signup;
