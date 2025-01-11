import { useNavigate } from 'react-router-dom';

const PlaceItem = ({ place, index, onClick }) => {
    const navigate = useNavigate();
    return (
        <li
            className="w-full h-[111px] relative border-b border-[#cccccc] overflow-hidden cursor-pointer hover:bg-gray-50"
            onClick={onClick}
        >
            <div className="absolute left-[24px] top-[13px] flex flex-col gap-1">
                <div className="flex items-center gap-[5px]">
                    <div className="text-black text-[15px] font-bold leading-7">{place.place_name}</div>
                    <div className="text-black/40 text-[10px] font-normal leading-7">
                        {place.category_name?.split('>').pop().trim()}
                    </div>
                </div>
                <div className="h-[62px] flex-col justify-start items-start inline-flex">
                    {place.road_address_name && (
                        <div className="self-stretch text-[#666666] text-[10px] font-normal font-['Inter'] leading-5">
                            {place.road_address_name}
                        </div>
                    )}
                    <div className="self-stretch text-[#666666] text-[10px] font-normal font-['Inter'] leading-5">
                        {place.address_name}
                    </div>
                    <div className="self-stretch text-[#0763c2] text-[10px] font-normal font-['Inter'] leading-5">
                        {place.phone}
                    </div>
                </div>
            </div>
            <div className="absolute right-[24px] bottom-[23px]">
                <button className="w-[89px] h-[31px] px-5 py-[3px] bg-[#C4DCF7] rounded-[40px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">
                    <span
                        className="text-white text-[11px] font-medium leading-7 relative bottom-[2px]"
                        onClick={() => navigate('/payment/private-key-input', { state: { place: place } })}
                    >
                        선결제하기
                    </span>
                </button>
            </div>
        </li>
    );
};

export default PlaceItem;
