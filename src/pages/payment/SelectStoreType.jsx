import React, { useRef } from 'react';
import backBtn from '../../assets/icons/backBtn.svg';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function SelectStoreType() {
    const navigate = useNavigate();

    const { place } = useLocation().state;

    return (
        <div className="container-col items-center justify-center">
            <img className="absolute top-[20px] left-[20px]" src={backBtn} alt="logo" onClick={() => navigate(-1)} />
            <div className="flex items-center justify-center gap-[100px] mt-[25px]">
                <div className="text-black text-lg font-bold font-['Inter'] leading-7 mt-[2px]">선결제하기</div>
            </div>
            <div className="w-[90vw] h-[86vh] flex-col justify-center items-start gap-[26px] inline-flex">
                <div className="h-7 flex-col justify-start items-start gap-[18px] flex">
                    <div className="self-stretch justify-start items-center gap-[5px] inline-flex">
                        <div className="text-black text-lg font-bold font-['Inter'] leading-7">
                            공개 범위를 설정해주세요
                        </div>
                    </div>
                </div>
                <div className="self-stretch h-[203px] flex-col justify-start items-start gap-[15px] flex">
                    <div className="self-stretch h-[94px] p-2.5 flex-col justify-start items-start gap-2.5 flex">
                        <div className="self-stretch h-[74px] px-[17px] py-[9px] bg-[#8fc2fa]/5 rounded-[7px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex-col justify-start items-start gap-2.5 flex overflow-hidden">
                            <div className="self-stretch h-14 flex-col justify-center items-center flex">
                                <div>
                                    <span className="text-[#0763c2] text-[17px] font-bold font-['Inter'] leading-7">
                                        퍼블릭
                                    </span>
                                    <span className="text-black text-[17px] font-bold font-['Inter'] leading-7">
                                        스토어
                                    </span>
                                </div>
                                <div className="text-center text-black text-xs font-normal font-['Inter'] leading-7">
                                    모든 사람이 비밀번호 없이 이용 가능해요
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch h-[94px] p-2.5 flex-col justify-start items-start gap-2.5 flex">
                        <div className="self-stretch h-[74px] px-[17px] py-[9px] bg-[#8fc2fa]/5 rounded-[7px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex-col justify-start items-start gap-2.5 flex overflow-hidden">
                            <div className="self-stretch h-14 flex-col justify-center items-center flex">
                                <div onClick={() => navigate('/payment/password-input', { state: { place: place } })}>
                                    <span className="text-[#0763c2] text-[17px] font-bold font-['Inter'] leading-7">
                                        프라이빗
                                    </span>
                                    <span className="text-black text-[17px] font-bold font-['Inter'] leading-7">
                                        스토어
                                    </span>
                                </div>
                                <div className="text-center text-black text-xs font-normal font-['Inter'] leading-7">
                                    비밀번호를 아는 사람만 이용 가능해요
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SelectStoreType;
