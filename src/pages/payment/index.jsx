import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../src/styles/globals.css';
import Kakaomap from './kakaomap';
import '../../styles/home.css';
import logo from '../../assets/icons/logo-small.svg';

const Payment = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) {
            navigate('/mypage'); // accessToken이 없으면 MyPage로 리디렉션
        }
    }, [navigate]);

    return (
        <div className="container-col">
            <img className="absolute top-[20px] left-[20px]" src={logo} alt="logo" onClick={() => navigate('/')} />
            <div className="flex items-center justify-center gap-[100px] mt-[25px]">
                <div className="text-black text-lg font-bold font-['Inter'] leading-7 mt-[2px]">선결제하기</div>
            </div>
            <Kakaomap />
        </div>
    );
};

export default Payment;
