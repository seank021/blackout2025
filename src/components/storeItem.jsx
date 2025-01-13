import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import dropdown from '../assets/icons/dropdown.png';
import '../styles/store.css';
import PasswordModal from './modal';
import { checkPassword } from '../apis/api';

function StoreItem({ store, totalAmount, title }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPrepayId, setSelectedPrepayId] = useState(null);

    const navigate = useNavigate();

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const onClickPrepay = (e, id) => {
        e.preventDefault();
        setSelectedPrepayId(id); // 선택한 id 저장
        if (title === '퍼블릭') {
            navigate(`/qr`, { state: 'public' });
            return;
        }
        setIsModalOpen(true); // 모달 열기
    };

    const handleModalConfirm = async (id, password) => {
        console.log('Selected prepay id:', id);
        console.log('Entered password:', password);
        const response = await checkPassword({ id, password });
        if (response.status === 200) {
            if (response.data.is_valid) {
                navigate(`/qr`, { state: 'private' });
            }
        }
    };

    return (
        <div className="w-[90%] flex-col justify-center items-center flex cursor-pointer">
            {/* 카드 영역 */}
            <div
                onClick={toggleDropdown}
                className="large-card w-full h-[100px] p-2.5 flex-col justify-center items-center rounded-[7px] flex cursor-pointer transition-all duration-300"
            >
                <div className="w-full flex-col justify-center items-start">
                    <div className="w-full flex justify-between items-center">
                        <div>
                            <div className="text-black text-[15px] font-bold">{store.name}</div>
                            <div className="text-[#666666] text-[10px]">{store.address}</div>
                        </div>
                        <img
                            src={dropdown}
                            alt="dropdown"
                            className={`w-[15px] h-[15px] transition-transform duration-300 ${
                                isDropdownOpen ? 'rotate-180' : 'rotate-0'
                            }`}
                        />
                    </div>
                    <div className="flex justify-end items-center mt-2">
                        <div className="text-black text-[10px]">남은 선결제 금액</div>
                        <div className="text-[#0763c2] text-[17px] font-semibold ml-2">
                            {totalAmount.toLocaleString()}원
                        </div>
                    </div>
                </div>
            </div>

            {/* 드롭다운 영역 */}
            <div
                className={`w-full bg-[#8FC2FA0D]/5 overflow-hidden transition-all duration-500 rounded-lg shadow-lg ${
                    isDropdownOpen ? 'max-h-[200px] p-4' : 'max-h-0 p-0'
                }`}
            >
                {isDropdownOpen && title === '마이' && store.my_prepay.length > 0 ? (
                    <ul>
                        {store.my_prepay.map(prepay => (
                            <li
                                key={prepay.id}
                                className="flex justify-between items-center border-b border-gray-200 py-2"
                                onClick={(e, id) => onClickPrepay(e, prepay.id)}
                            >
                                <div className="flex flex-row items-center gap-1">
                                    <span className="text-sm text-gray-700">paid by</span>
                                    <span className="text-sm text-gray-800 font-bold">{prepay.username}</span>
                                </div>
                                <span className="text-sm text-blue-500">{prepay.credit.toLocaleString()}원</span>
                            </li>
                        ))}
                    </ul>
                ) : title === '퍼블릭' && store.public_prepay.length > 0 ? (
                    <ul>
                        {store.public_prepay.map(prepay => (
                            <li
                                key={prepay.id}
                                className="flex justify-between items-center border-b border-gray-200 py-2"
                                onClick={(e, id) => onClickPrepay(e, prepay.id)}
                            >
                                <div className="flex flex-row items-center gap-1">
                                    <span className="text-sm text-gray-700">paid by</span>
                                    <span className="text-sm text-gray-800 font-bold">{prepay.username}</span>
                                </div>
                                <span className="text-sm text-blue-500">{prepay.credit.toLocaleString()}원</span>
                            </li>
                        ))}
                    </ul>
                ) : title === '프라이빗' && store.private_prepay.length > 0 ? (
                    <ul>
                        {store.private_prepay.map(prepay => (
                            <li
                                key={prepay.id}
                                className="flex justify-between items-center border-b border-gray-200 py-2"
                                onClick={(e, id) => onClickPrepay(e, prepay.id)}
                            >
                                <div className="flex flex-row items-center gap-1">
                                    <span className="text-sm text-gray-700">paid by</span>
                                    <span className="text-sm text-gray-800 font-bold">{prepay.username}</span>
                                </div>
                                <span className="text-sm text-blue-500">{prepay.credit.toLocaleString()}원</span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div className="text-gray-500 text-center">선결제 정보가 없습니다.</div>
                )}
            </div>

            {/* Password Modal */}
            <PasswordModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={handleModalConfirm} // 모달 확인 버튼 클릭 시
                prepayId={selectedPrepayId} // 선택한 prepayId 전달
            />
        </div>
    );
}

export default StoreItem;
