import React from 'react';
import logo from '../assets/icons/logo-small.svg';
import SearchForm from './SearchForm';
import StoreItem from './storeItem';
import { useNavigate } from 'react-router-dom';
import backBtn from '../assets/icons/backBtn.svg';

const dummyMyStore = [
    {
        name: '오삼숙이',
        address: '서울 관악구 대학길 57',
        remainingAmount: '2,357,000',
    },
    {
        name: '지오구 조타',
        address: '서울 관악구 대학길 57',
        remainingAmount: '27,000',
    },
    {
        name: '아리가또',
        address: '서울 관악구 대학길 57',
        remainingAmount: '2,000',
    },
];

const dummyPublicStore = [
    {
        name: '퍼블릭',
        address: '서울 관악구 대학길 57',
        remainingAmount: '2,357,000',
    },
];

const dummyPrivateStore = [
    {
        name: '프라이빗',
        address: '서울 관악구 대학길 57',
        remainingAmount: '2,357,000',
    },
];

function Store({ title }) {
    const navigate = useNavigate();
    return (
        <div className="w-full h-full">
            <img className="absolute top-[20px] left-[20px]" src={backBtn} alt="logo" onClick={() => navigate('/')} />
            <div className="flex items-center justify-center gap-[100px] mt-[25px]">
                <div className="text-black text-lg font-bold font-['Inter'] leading-7 mt-[2px]">{title} 스토어</div>
            </div>
            <SearchForm onSearch={() => {}} />
            <div className="mt-[10px] flex flex-col items-center justify-center gap-[0px]">
                {title === '프라이빗'
                    ? dummyPrivateStore.map((store, index) => <StoreItem key={index} store={store} />)
                    : title === '퍼블릭'
                      ? dummyPublicStore.map((store, index) => <StoreItem key={index} store={store} />)
                      : dummyMyStore.map((store, index) => <StoreItem key={index} store={store} />)}
            </div>
        </div>
    );
}

export default Store;
