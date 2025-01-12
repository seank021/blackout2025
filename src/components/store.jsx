import React, { useState, useEffect } from 'react';
import SearchForm from './SearchForm';
import StoreItem from './storeItem';
import { useNavigate } from 'react-router-dom';
import backBtn from '../assets/icons/backBtn.svg';
import { getStore } from '../apis/api';

const titleMap = {
    마이: 'me',
    퍼블릭: 'public',
    프라이빗: 'private',
};

function Store({ title }) {
    const navigate = useNavigate();
    const [store, setStore] = useState(null);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        const fetchStore = async () => {
            const response = await getStore({ title: titleMap[title] });
            setStore(response.data);
        };
        fetchStore();
    }, [title]);

    useEffect(() => {
        if (store) {
            console.log(store);
            let total = 0;
            store.forEach(item => {
                if (title === '마이') {
                    if (item.my_prepay) {
                        item.my_prepay.forEach(prepay => {
                            total += prepay.credit;
                        });
                    }
                } else if (title === '퍼블릭') {
                    if (item.public_prepay) {
                        console.log(item.public_prepay);
                        item.public_prepay.forEach(prepay => {
                            total += prepay.credit;
                        });
                    }
                } else if (title === '프라이빗') {
                    if (item.private_prepay) {
                        item.private_prepay.forEach(prepay => {
                            total += prepay.credit;
                        });
                    }
                } else {
                    return;
                }
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
                    {store.map(item => (
                        <StoreItem key={item.id} store={item} totalAmount={totalAmount} title={title} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Store;
