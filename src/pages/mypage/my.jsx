import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../constants/path';
import dropdown from '../../assets/icons/dropdown.png';

const My = ({ setIsLoggedIn }) => {
    const [store, setStore] = useState(null);
    const [totalAmount, setTotalAmount] = useState(0);
    const [username, setUsername] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const getUsername = async () => {
        const accessToken = localStorage.getItem('accessToken');

        try {
            const response = await axios.get(`${API_URL}/users/me/`, {
                headers: {
                    Authorization: `Token ${accessToken}`,
                },
            });
            setStore(response.data);
            console.log(response.data);
            setUsername(response.data.username);
            setTotalAmount(response.data.total_credits);
            return response;
        } catch (error) {
            console.error(error);
            return error.response;
        }
    };

    useEffect(() => {
        getUsername();
    }, []);

    return (
        <div className="w-[100vw] h-[100vh] container-col items-center">
            <div className="mt-[30px] mb-[30px] w-[100vw] text-center text-black text-[22px] font-bold font-['Inter'] leading-7">
                마이페이지
            </div>
            <div className="w-[90%] container-col items-start">
                <div className="flex items-center gap-[5px]">
                    <span className="text-black text-xl font-bold font-['Inter'] leading-7">{username}</span>
                    <span className="text-black text-[15px] font-normal font-['Inter'] leading-7">님, 안녕하세요!</span>
                </div>
                <div className="text-[#666666] text-[15px] font-bold font-['Inter'] leading-none mt-[30px] mb-[10px]">
                    선결제 내역
                </div>

                {/* 카드 영역 */}
                <div className="w-[100%] flex-col justify-center items-center flex cursor-pointer">
                    <div
                        onClick={toggleDropdown}
                        className="large-card w-full h-[100px] p-2.5 flex-col justify-center items-center rounded-[7px] flex cursor-pointer transition-all duration-300"
                    >
                        <div className="w-full flex-col justify-center items-start">
                            <div className="w-full flex justify-between items-center">
                                <div>
                                    <div className="text-black text-[15px] font-bold">{store?.name}</div>
                                    <div className="text-[#666666] text-[10px]">{store?.address}</div>
                                </div>
                                <img
                                    src={dropdown}
                                    alt="dropdown"
                                    className={`w-[15px] h-[15px] transition-transform duration-300 ${
                                        isDropdownOpen ? 'rotate-180' : 'rotate-0'
                                    }`}
                                />
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <div className="flex flex-row items-center gap-1">
                                    <div className="text-black text-[20px]">총</div>
                                    <div className="text-[#0763c2] text-[25px] font-semibold ml-2">
                                        {totalAmount?.toLocaleString()}원
                                    </div>
                                    <div className="text-black text-[20px]">을</div>
                                </div>
                                <div className="text-black text-[20px] pb-2">결제하셨습니다!</div>
                            </div>
                        </div>
                    </div>

                    {/* 드롭다운 영역 */}
                    <div
                        className={`w-full bg-[#8FC2FA0D]/5 overflow-hidden transition-all duration-500 rounded-lg shadow-lg ${
                            isDropdownOpen ? 'max-h-[200px] p-4' : 'max-h-0 p-0'
                        }`}
                    >
                        {isDropdownOpen && store?.my_prepay?.length > 0 ? (
                            <ul>
                                {store.my_prepay.map(prepay => (
                                    <li
                                        key={prepay.id}
                                        className="flex justify-between items-center border-b border-gray-200 py-2"
                                    >
                                        <div className="flex flex-row items-center gap-1">
                                            <span className="text-sm text-gray-700">{prepay.store_name}</span>
                                            <span className="text-sm text-gray-800 font-bold">{prepay.username}</span>
                                        </div>
                                        <span className="text-sm text-blue-500">
                                            {prepay.credit.toLocaleString()}원
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <div className="text-gray-500 text-center">선결제 정보가 없습니다.</div>
                        )}
                    </div>
                </div>

                <button
                    onClick={() => {
                        localStorage.removeItem('accessToken');
                        setIsLoggedIn(false);
                    }}
                    className="w-full mt-[30px] py-[10px] px-[20px] bg-[#4b5563] text-white rounded-[5px] cursor-pointer "
                >
                    로그아웃
                </button>
                <div className="mt-[20px] w-[100%] h-5 text-center text-[#6d7582] text-[11px] font-normal font-['Noto Sans KR'] underline">
                    개인정보처리방침
                </div>
            </div>
        </div>
    );
};

export default My;
