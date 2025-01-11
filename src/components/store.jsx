import React, { useState, useEffect } from 'react';
import SearchForm from './SearchForm';
import StoreItem from './storeItem';
import { useNavigate } from 'react-router-dom';
import backBtn from '../assets/icons/backBtn.svg';
import { getMyStore } from '../apis/api';

const titleMap = {
    "마이": "me",
    "퍼블릭": "public",
    "프라이빗": "private"
}

function Store({ title }) {
    const navigate = useNavigate();
    const [store, setStore] = useState(null);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        const fetchStore = async () => {
            const response = await getMyStore({ title: titleMap[title] });
            setStore(response.data);
        };
        fetchStore();
    }, [title]);    

    useEffect(() => {
        if (store) {
            let total = 0;
            store.forEach((item) => {
                item.my_prepay.forEach((prepay) => {
                    total += prepay.credit;
                });
            });
            setTotalAmount(total);
        }
    }, [store]);

    return (
        <div className="w-full h-full">
            <img className="absolute top-[20px] left-[20px]" src={backBtn} alt="logo" onClick={() => navigate('/')} />
            <div className="flex items-center justify-center gap-[100px] mt-[25px]">
                <div className="text-black text-lg font-bold font-['Inter'] leading-7 mt-[2px]">{title} 스토어</div>
            </div>

            <SearchForm onSearch={() => {}} />

            {store && (
                <div className="flex flex-col gap-[20px] mt-[20px] justify-center items-center">
                    {store.map((item) => (
                        <StoreItem key={item.id} store={item} totalAmount={totalAmount} />
                    ))}
                </div>
            )}

            
        </div>
    );
}

export default Store;
