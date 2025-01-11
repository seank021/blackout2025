import React from 'react';

function StoreItem({ store }) {
    return (
        <div className="w-[350px] h-[110px] p-2.5 flex-col justify-center items-center gap-2.5 inline-flex">
            <div className="self-stretch h-[90px] px-[15px] bg-[#8FC2FA0D] rounded-[7px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex-col justify-center items-center flex overflow-hidden">
                <div className="self-stretch flex-col justify-center items-start flex">
                    <div className="pl-[3px] justify-start items-center inline-flex overflow-hidden">
                        <div className="self-stretch flex-col justify-start items-start inline-flex">
                            <div className="self-stretch justify-start items-center gap-[5px] inline-flex">
                                <div className="text-black text-[15px] font-bold font-['Inter']">
                                    {store.name}
                                </div>
                            </div>
                            <div className="self-stretch flex-col justify-start items-start flex">
                                <div className="self-stretch text-[#666666] text-[10px] font-normal font-['Inter']">
                                    {store.address}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full pr-0.5 justify-end items-center inline-flex">
                        <div className="self-stretch justify-center items-end gap-[7px] inline-flex">
                            <div className="text-black text-[10px] font-normal font-['Inter'] leading-7">
                                남은 선결제 금액
                            </div>
                            <div className="text-[#0763c2] text-[17px] font-semibold font-['Inter'] leading-7">
                                {store.remainingAmount}원
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StoreItem;
