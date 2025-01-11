import React, { useRef } from 'react';
import backBtn from '../../assets/icons/backBtn.svg';
import { Link, useNavigate, useLocation } from 'react-router-dom';
function PrivateKeyInput() {
    const { place } = useLocation().state;
    const navigate = useNavigate();

    const inputRef = useRef(null);

    React.useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
            inputRef.current.style.outline = 'none';
        }
    }, []);
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
                                    마지막으로
                                    <br />
                                </span>
                                <span className="text-black text-lg font-bold font-['Inter'] leading-7">
                                    선결제 매장 이용 시 사용해야 하는
                                </span>
                            </div>
                        </div>
                        <input
                            ref={inputRef}
                            className="w-[80vw] rounded-[12px] border-gray-400 self-stretch text-[24px] font-bold font-['Inter'] leading-7 py-[5px]"
                            placeholder="비밀번호를 입력해주세요"
                        />
                    </div>
                    <div className="flex flex-col items-center justify-center gap-[3px]  "></div>
                </div>
                <div className="w-[80vw] h-10 relative mt-[10px]">
                    <div className="w-[100%] h-10 left-0 top-0 absolute bg-[#c4dcf7] rounded-[10px] flex items-center justify-center text-black text-center font-['Inter'] text-[12px] font-bold">
                        결제하기
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PrivateKeyInput;
