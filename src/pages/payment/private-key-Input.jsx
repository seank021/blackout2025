import React from 'react';
import backBtn from '../../assets/icons/backBtn.svg';
import { Link, useNavigate, useLocation } from 'react-router-dom';
function PrivateKeyInput() {
    const { place } = useLocation().state;
    const navigate = useNavigate();
    return (
        <div className="container-col ">
            <img className="absolute top-[20px] left-[20px]" src={backBtn} alt="logo" onClick={() => navigate(-1)} />
            <div className="flex items-center justify-center gap-[100px] mt-[25px]">
                <div className="text-black text-lg font-bold font-['Inter'] leading-7 mt-[2px]">선결제하기</div>
            </div>
            <div className="w-[100vw] h-[86vh] items-center justify-center flex-col gap-[41px] inline-flex">
                <div className="self-stretch h-[138px] flex-col justify-start items-center gap-[17px] inline-flex">
                    <div className="h-[101px] flex-col justify-start items-start gap-[18px] flex">
                        <div className="self-stretch justify-start items-center gap-[5px] inline-flex">
                            <div>
                                <span className="text-black text-sm font-medium font-['Inter'] leading-7">
                                    선결제를 위해
                                    <br />
                                </span>
                                <span className="text-black text-lg font-bold font-['Inter'] leading-7">
                                    이더리움 지갑 개인키
                                </span>
                                <span className="text-black text-lg font-normal font-['Inter'] leading-7">
                                    를 입력해주세요
                                </span>
                            </div>
                        </div>
                        <input className="w-[80vw] rounded-[12px] border-2 border-gray-400 self-stretch text-gray-400 text-[15px] font-bold font-['Inter'] leading-7 px-[10px] py-[5px]" />
                    </div>
                    <div className="flex flex-col items-center justify-center gap-[3px]  ">
                        <Link
                            to="https://metamask.io/"
                            className="mt-[20px] self-stretch text-center text-[#6d7582] text-[11px] font-normal font-['Noto Sans KR'] underline"
                        >
                            이더리움 지갑 개인키를 어디에서 알 수 있나요?
                        </Link>
                        <div className="text-[11px] p-0 font-normal font-['Noto Sans KR']">
                            (MetaMask &gt; 계정 세부 정보 &gt; 개인 키 표시)
                        </div>
                    </div>
                </div>
                <div className="w-[80vw] h-10 relative mt-[10px]">
                    <div
                        onClick={() => navigate('/payment/payments-count-input', { state: { place: place } })}
                        className="w-[100%] h-10 left-0 top-0 absolute bg-[#c4dcf7] rounded-[10px] flex items-center justify-center text-black text-center font-['Inter'] text-[12px] font-bold"
                    >
                        다음
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PrivateKeyInput;
